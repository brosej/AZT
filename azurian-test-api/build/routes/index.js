"use strict";
exports.__esModule = true;
var express = require("express");
var products_1 = require("./products");
var router = express.Router();
router.use('/products', products_1["default"]);
exports["default"] = router;
