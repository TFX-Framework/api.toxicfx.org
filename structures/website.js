const path = require("path");
const express = require("express");
const cookieParser = require('cookie-parser')


const getFilesSync = require("@utils/fileWalk");

class App {
  constructor(client, locals = {}) {
    this.express = express();
    this.express.set('views', 'views');
   // this.express.engine('.html', require('ejs').renderFile);
    this.express.set('view engine', 'ejs');
    this.express.set('client', client);
    this.express.use(cookieParser());
    //this.express.use(express.static(__dirname + "../public"));
    this.express.use('/static', express.static(path.join('public'))) // Css & Scripts directory
    this.express.use('/images', express.static(path.join('images'))) // Image Storage CDN
    this.express.use('/music', express.static(path.join('music'))) // Music Storage CDN
    this.express.locals = locals;

    this
      .loadRoutes()
      .loadErrorHandler();
  }

  listen(port) {
    return new Promise((resolve) => this.express.listen(port, resolve));
  }

  
  loadRoutes() {
    const routesPath = path.join(__dirname, "../routes");
    const routes = getFilesSync(routesPath);

    if (!routes.length) return this;

    routes.forEach((filename) => {
      const route = require(path.join(routesPath, filename));
      
      const routePath = filename === "index.js" ? "/" : `/${filename.slice(0, -3)}`;

      try {
        this.express.use(routePath, route);
      } catch (error) {
        console.error(`Error occured with the route "${filename}"\n\n${error}`);
      }
    });

    return this;
  }

  
  loadErrorHandler() {
    this.express.use((error, _req, res, _next) => {
      const { message, statusCode = 500 } = error;
      if (statusCode >= 500) console.error(error);

      res.status(statusCode).send({
        message,
        status: statusCode
      });
    });

    return this;
  }
}

module.exports = App;
