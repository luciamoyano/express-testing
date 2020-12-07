const express = require("express");
//middleware Router() de express
const router = express.Router();
//traemos los controles
const NameController = require("../controllers/nameController");
//creamos una instancia de ese controller
const NameInstance = new NameController();

const DuplicateController = require("../controllers/duplicateController");
const DuplicateInstance = new DuplicateController();

const PalindromoController = require("../controllers/palindromoController");
const PalindromoInstance = new PalindromoController();

const PrimosController = require("../controllers/primosController");
const PrimosInstance = new PrimosController();

const GithubController = require("../controllers/githubController");
const GithubInstance = new GithubController();

//Ejercicios: https://gist.github.com/doomling/3338b2c6746e473af0de3cea9faca67c

//Ejercicio 3
router.get("/test/:name", (req, res, next) => {
  console.log("params:", req.params);
  console.log("query:", req.query);
  //pasar parametros req y res
  NameInstance.greetUser(req, res);
});

//Ejercicio 4
router.get("/duplicar/:number", (req, res, next) => {
  console.log("params:", req.params.number);
  //pasar parametros de res y req
  DuplicateInstance.duplicateNumber(req, res);
});

//Ejercicio 5
router.get("/palindromo/:phrase", (req, res, next) => {
  PalindromoInstance.checkPhrase(req, res);
});

//Ejercicios: https://gist.github.com/doomling/0ed78f89ec0a426b01ae56ec18051efc
//Ejercicio 0
router.get("/calcular", (req, res, next) => {
  PrimosInstance.getPrime(req, res);
});

//Ejercicio 1
router.get("/user/:name", (req, res, next) => {
  GithubInstance.getUser(req, res);
});

//Ejercicio 3 y 4
router.get("/user/:id/details", (req, res, next) => {
  GithubInstance.getDetails(req, res);
});

/* GET home page. */
//siempre dejar la '/' al final del routeo
//porque siempre matchea con 'contiene' y todas las
//rutas contienen barras
router.get("/", (req, res, next) => {
  //objeto res, metodo render -> res.render
  //no hace nada porque no tenemos las views instaladas y no usamos el templating
  //res.render()

  //Enviamos al front la ruta '/' un texto
  //.json envia un json y .send envia un string
  res.json("hola");

  //ver info sobre la request
  console.log(req, "soy la req");
});

module.exports = router;
