const express = require("express");
const {getUser, getUserList, createUser} = require("./controllers/users.controller")

const PORT = 4000;

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.send("hello my first node app");
});

app.get("/users", getUserList);
app.get("/users/:userId", getUser);
app.post("/users", createUser);

app.listen(PORT, () => {
    console.log(`server start POST: ${PORT}`);
})