class NameController {
  greetUser(req, res) {
    //solo puede haber una llamada al metodo res
    res.json({
      test: "soy un test",
      name: req.params.name,
      age: req.query.age,
    });
  }
}

//siempre exportarlo
module.exports = NameController;
