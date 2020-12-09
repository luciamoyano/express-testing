const axios = require("axios");

class PrimosController {
  //cuantos numeros primos existen entre 1 y 150
  async getPrime(req, res) {
    let maxNum = 150;

    function isPrime(num) {
      let isPrime = true;
      for (let i = 2; i <= maxNum; i++) {
        if (i !== num && num % i == 0) {
          isPrime = false;
        }
      }
      return isPrime;
    }

    const pokemonApi = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${maxNum}`
    );
    const pokeArr = await pokemonApi.data.results;
    const resultsArr = [];

    for (let i = 1; i <= maxNum; i++) {
      if (isPrime(i)) {
        pokeArr.map((pokemon, key) => {
          if (key == i + 1) {
            resultArr.push({
              primeNumber: i,
              pokemonName: pokemon.name,
            });
          }
        });
      }
    }
    res.json(resultsArr);
  }
}

module.exports = PrimosController;
