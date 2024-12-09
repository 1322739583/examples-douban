const express = require("express");
const cors = require("cors");
//接收过来的express是一个函数
const app = express();
app.use(cors());

app.get("/banners", (req, res, next) => {
  res.json({
    banners: [{ name: "图片1" }, { name: "图片2" }, { name: "图片3" }],
  }); //方式2
});

app.get("/recommends", (req, res, next) => {
  res.json({
    recommends: [{ name: "推荐1" }, { name: "推荐2" }, { name: "推荐3" }],
  }); //方式2
});

const port = 8888;
app.listen(port, () => {
  //反引号才可以使用占位符
  console.log(`listinning on port:${port}`);
});
