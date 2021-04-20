const jwt = require('jsonwebtoken');

const validateToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    //authHeader = "Bearer token"
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json('Access denied.');
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
        if (err) {
            return res.status(401).json('Access denied.');
        }

        //insert user ID into request
        req.userid = payload.id;
        next();
    });
};

module.exports = validateToken;
