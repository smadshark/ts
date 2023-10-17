const {Users} = require("/models/users.model")

function getUserList(req, res) {
    res.send(Users);
}

function getUser(req, res) {
    const userId = Number(req.params.userId);
    let user = Users[userId];

    if (user) {
        res.send(user);
    } else {
        res.sendStatus(404);
    }
}

function createUser(req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            error: "Missing user name",
        })
    }
    const newUser = {
        name: req.body.name,
        id: Users.length,
    };
    Users.push(newUser);
    return res.json(newUser);
}

module.exports = {
    getUser,
    getUserList,
    createUser
}