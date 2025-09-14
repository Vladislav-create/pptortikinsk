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

app.post("/", function (req, res) {
  const user = [
    req.body.id,
    req.body.elemName,
    req.body.elemPhone,
    req.body.elemDescription,
  ];
  const sql =
    "INSERT INTO pptortikinsk.orders (idorders, orders_name, orders_phone, orders_description) VALUES (?, ?, ?, ?)";
  connectionDb.query(sql, user, function (err, result) {});
  console.log(req.body);
});

app.post("/login", function (req, res){
  const userData = [req.body.login, req.body.password]
  const sql = "SELECT * FROM pptortikinsk.users WHERE login = ? AND password = ?"

  connectionDb.query(sql, userData, function (err, data) {
    
    if(!data[0]) {
      res.status(500)
      res.send(
        {
          userAuth: false
        }
      )
      console.log("Неверный логин или пароль :(");
    } else if(err) {
      console.log("ОШИБКА :(");
      console.log(err);
      res.status(500);
    } else {
      res.send(
        {
          userAuth: true
        }
      )
      console.log("Авторизация прошла успешно!!!");
    }
  });
});

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
})

const port = 5000;
app.listen(port, () => {
  console.log(`Сервер запущен на ${port}.`);
});
