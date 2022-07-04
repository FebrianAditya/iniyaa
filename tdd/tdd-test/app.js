// const express = require("express")
// const PORT = 3000
const express = require('express');
const app = express()
const routes = require("./routes")

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(routes)

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })


module.exports = app; // ==> INI JANGAN LUPA DI MODULE EXPORTS