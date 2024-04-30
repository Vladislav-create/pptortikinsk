// const fs = require("fs");
const express = require("express");

const app = express();

// const PORT = process.env.PORT;
// const HOSTNAME = process.env.HOSTNAME;

// app.use(express.json());

app.listen(5000, () => {
    console.log("Сервер запущен.");
});

// app.listen(PORT, HOSTNAME, () => {
//     console.log('Сервер запущен');
// })
