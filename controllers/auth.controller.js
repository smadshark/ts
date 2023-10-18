const jwt = require("jsonwebtoken");

function login(req, res) {
    const username = req.body.username;
    const user = {name: username};

    const secretText = 'superSecret';
    const accessToken = jwt.sign(user, secretText);

    res.json({accessToken})
}

module.exports = {
    login,
}