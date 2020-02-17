const express = require("express");
const router = express.Router();
const {addUser,login,getAuth,getAll, getOne} = require ('../controller/user')
const {decodedToken} = require('../middlewares/decodedToken');

router.post("/register",addUser);
router.post("/login",login);
router.get("/auth/_id",getAuth);
router.get("/data",getAll);
router.get("/personal", decodedToken, getOne);


module.exports = router;
