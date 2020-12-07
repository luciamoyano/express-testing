class PrimosController {
  //cuantos numeros primos existen entre 1 y 150
  getPrime(req, res) {
    const finalArr = [];
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
        finalArr.push(i);
      }
    }

    const results = {
      primeQuantity: finalArr.length,
      primeList: finalArr,
    };
    res.json(results);
  }
}

module.exports = PrimosController;
