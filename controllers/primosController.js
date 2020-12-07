const axios = require("axios");

class PrimosController {
  //cuantos numeros primos existen entre 1 y 150
  async getPrime(req, res) {
    const primesArr = [];
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

    for (let i = 1; i <= maxNum; i++) {
      let result = isPrime(i);
      if (result) {
        const pokemonApi = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${i}`
        );
        const { name } = pokemonApi.data.species;
        const { id } = pokemonApi.data;

        primesArr.push({
          primeNumber: id,
          pokemonName: name,
        });
      }
    }

    res.json(primesArr);
  }
}

module.exports = PrimosController;
