var express = require('express');
var router = express.Router();
const TestingOneController = require("../controllers/testingOnecontroller")

router.get("/", TestingOneController.getHomePage)
router.post("/register", TestingOneController.registerUser)

module.exports = router;
