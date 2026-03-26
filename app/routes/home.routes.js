const express = require("express");
const homeController = require("../controller/home.controller");

const router = express.Router();

router.get("/", homeController.Home);
router.get("/products", homeController.Products);

module.exports = router;