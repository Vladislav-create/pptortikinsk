const mysql = require("mysql")
const express = require("express");
const path = require("path");

const connectionDb = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "Dkfljktu1127",
  database: process.env.DB_NAME || "pptortikinsk",
});

connectionDb.connect((err) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    console.log("Database ------ OK");
  }
});

const app = express();
app.use(express.json());

app.get("/api/bricks", (req, res) => {
  console.log("Get all bricks");
  connectionDb.query("SELECT * FROM pptortikinsk.users", (err, data) => {
    if (err) {
      res.status(500);
    } else {
      console.log("Подключение к БД с пользователями прошло успешно, данные получены");
      res.send(data);
    }
  });
});

app.get("/products", (req, res) => {
  console.log("All products");
  connectionDb.query("SELECT * FROM pptortikinsk.products", (err, data) => {
    if (err) {
      res.status(500);
    } else {
      console.log("Подключение к БД с продуктами прошло успешно, данные получены");
      res.send(data);
    }
  });
});

app.post("/api/bricks", function (req, res) {
  const user = [
    req.body.id,
    "Ivan",
    "Popov",
    "89961235698",
    "werwqrqwr@mail.ru",
  ];
  const sql =
    "INSERT INTO pptortikinsk.users (idusers, userFirstName, userLastName, userPhone, userEmale) VALUES (?, ?, ?, ?, ?)";
  connectionDb.query(sql, user, function (err, result) {});
  console.log(req.body.id);
});

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
})

const port = 5000;
app.listen(port, () => {
  console.log(`Сервер запущен на ${port}.`);
});
