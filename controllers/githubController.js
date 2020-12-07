const axios = require("axios");

class githubController {
  async getUser(req, res) {
    const github = await axios.get(
      `https://api.github.com/users/${req.params.name}`
    );
    res.json(github.data);
  }

  async getDetails(req, res) {
    const github = await axios.get(
      `https://api.github.com/users/${req.params.id}`
    );
    const modeledData = {
      nombre: github.data.name,
      empresa: github.data.company,
      bio: github.data.bio,
    };

    const allData = {
      ...modeledData,
      edad: 27,
      helado: "dulce de leche",
    };
    res.json(allData);
  }
}

module.exports = githubController;
