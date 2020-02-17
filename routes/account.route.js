const express = require("express");
const router = express.Router();
const {decodedToken} = require('../middlewares/decodedToken');


// Require the controllers
const newAccount = require("../controller/account.controller");

// create a new accounts

router.post("/newAccount/",decodedToken,newAccount.new_account);

module.exports = router;