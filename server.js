const mysql = require("mysql2")
const express = require("express");

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
      console.log("Подключение к БД прошло, данные получены");
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

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Сервер запущен на ${port}.`);
});