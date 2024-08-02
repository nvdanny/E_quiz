const jwt = require("jsonwebtoken");

module.exports = {
    auth: (req, res, next) => {
        let access_token = req.headers.authorization;
        if (access_token) {
            access_token = access_token.split(" ")[1];
            jwt.verify(access_token, process.env.secretOrKey, (error, user) => {
                if (error) {
                    return res.status(401).json({ msg: "Unauthorized" });
                }
                if (user) {
                    req.user = user;
                    next();
                }
                else {
                    return res.status(401).json({ msg: "Unauthorized" });
                }
            })
        }
        else {
            return res.status(404).json({ msg: "access token is required" });
        }
    },
    admin: (req, res, next) => {
        if (req.user.role != "admin") {
            return res.status(401).json({ msg: "Unauthorized" });
        }
        else {
            next();
        }
    },
}