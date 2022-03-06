const jwt = require('jsonwebtoken')
require('dotenv')
module.exports = (req, res, next) => {
    console.log("About to Check Auth")
    // console.log(req.headers.authorization)
    try {
        const token = req.headers.authorization;
        console.log(req.headers.authorization)
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;
        console.log(req.userData)
        next();
    } catch (err) {
        console.log("Auth failed")
        return res.status(401).json({
            message: "Auth failed"
        })
    }
}