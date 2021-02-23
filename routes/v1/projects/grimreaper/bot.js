const { Router } = require("express");
const route = Router();


route.get('/', (req, res) => {

    let project_name = 'Reaper Bot'

    let current_version = '1.0.3'

    let previous_version = '1.0.2'

    let newest_version = '1.0.3'

    let stable_version = '1.0.3'

    let github_repo = 'https://github.com/TheRealToxicDev/Reaper-Bot'

    let releases_link = 'https://github.com/TheRealToxicDev/Reaper-Bot/releases'

    let issues_link = 'https://github.com/TheRealToxicDev/Reaper-Bot/issues'

    let discord_server = 'https://grimreaperbot.site/discord'

    let changes = '• Create and Implement a Version Check\n • Prepare the Bot for Open Source Compatibility\n • Minor Backend Bug Fixes\n • Create and Implement a Native Command (Search)\n • Implement and Create a RCON Command'

    let data = {
        name: project_name,
        currentVersion: current_version,
        previousVersion: previous_version,
        newestVersion: newest_version,
        stableVersion: stable_version,
        githubLink: github_repo,
        releasesLink: releases_link,
        issuesLink: issues_link,
        discordServer: discord_server,
        changeLog: changes
    }

    res.status(200).send(JSON.stringify(data))
});

module.exports = route;
