const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    const { authorization } = req.headers;
    console.log('token', authorization)
    if (!authorization) return res.status(401).send("Access Denied");
    try {
        const token =
            authorization && authorization.startsWith('Bearer ')
                ? authorization.slice(7, authorization.length)
                : authorization;
        const verified = jwt.verify(token, "randomString");
        console.log('verified', verified)
        console.log('verified',)
        // req.user = verified;
        next();
    } catch (err) {
        console.log('err', err)
        res.status(400).send("Invalid authorization");
    }
}