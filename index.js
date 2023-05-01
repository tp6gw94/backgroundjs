const express = require("express");

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello word");
});

app.post("/log", (req, res) => {
  console.log("get request", req.body);
  res.send({ status: 200 });
});

app.listen(3000, () => {
  console.log("server listen 3000");
});
