class DuplicateController {
  //creamos un metodo
  duplicateNumber(req, res) {
    res.json(`El resultado es: ${req.params.number * 2}`);
  }
}

module.exports = DuplicateController;
