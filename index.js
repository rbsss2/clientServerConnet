const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const mongoose = require("mongoose");

//build 폴더 경로를 static으로 설정
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/", (req, res) => {
  // 서버에서 5000 포트로 접속 시 static폴더로 지정되어 있는 build폴더 안에 index.html을 화면으로 보냄
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.get("*", (req, res) => {
  // 어떤 url으로 접속해도 화면이 뜸
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(port, () => {
  mongoose
    .connect(
      "mongodb+srv://OH:!a123456@cluster0.kykwgkv.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() =>
      console.log(`Server app listening on port ${port} with MongoDB`)
    )
    .catch((err) => console.log(err));
});
