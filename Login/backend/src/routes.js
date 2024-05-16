const express = require ('express');

const routes = express.Router();
// dados que o usuário vai digitar

routes.post("/api/login", (req, res) => {
    const {email, password } = req.body;
    res.send(email);
})

module.exports = routes;





// app.post("/api//users", async (req, res) => {
//     try {

//         const { username, email, password, } = req.body
//         const userToInsert = cleanUserData({
//             username, email, password
//         })

//         if(!userToInsert.ok) {
//             return res.sendStatus(400).json({message: "Dados incorretos"})
//         }

//     })