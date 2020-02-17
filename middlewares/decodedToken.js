const jwt = require('jsonwebtoken');
const { verifyToken } = require('../helpers/jwt');

function decodedToken(req,res,next) {
    if (req.headers.jwttoken) {       
        const decoded = verifyToken(req.headers.jwttoken)
        req.decoded = decoded;
        next();
    }else {
        next({message: `You must login first as user`})
    }
};

module.exports = {
    decodedToken
}