// const fs = require("fs");
const express = require("express");

const app = express();

const arr = [
    {id: 1, text: 'asdasdasdas'}
];

app.get('/api/bricks', (req, res) => {
    console.log('Get all bricks');
    res.json(arr);
})

app.listen(5000, () => {
    console.log("Сервер запущен.");
});


