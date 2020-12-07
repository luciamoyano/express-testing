const axios = require("axios");

class githubController {
  getUser(req, res) {
    const data = axios.get("https://api.github.com/users/doomling");
    console.log(data);
    res.send("algo para no colgar la request");
  }
}

module.exports = githubController;
