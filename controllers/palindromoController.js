class PalindromoController {
  checkPhrase(req, res) {
    const phrase = req.params.phrase;
    const reversedPhrase = phrase.split("").reverse().join("");
    if (phrase == reversedPhrase) {
      res.json(
        `La frase ${phrase} es un palíndromo ya que al revés se lee ${reversedPhrase}`
      );
    } else {
      res.json(
        `La frase ${phrase} NO es un palíndromo ya que al revés se lee ${reversedPhrase}`
      );
    }
  }
}

module.exports = PalindromoController;
