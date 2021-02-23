const { Router } = require("express");
const route = Router();


route.get('/', (req, res) => {

    let project_name = 'ToxicFX Website'

    let current_version = '1.0.0'

    let previous_version = '1.0.0'

    let newest_version = '1.0.0'

    let stable_version = '1.0.0'

    let data = {
        name: project_name,
        currentVersion: current_version,
        previousVersion: previous_version,
        newestVersion: newest_version,
        stableVersion: stable_version
    }

    res.status(200).send(JSON.stringify(data))
});

module.exports = route;
