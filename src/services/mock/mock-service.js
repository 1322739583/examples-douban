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

app.get("/home/goodprice", (req, res, next) => {
  res.json({
    title: "这里是好物推荐",
    list: [
      {
        name: "斯里兰卡Hiriwadunna",
        farway: 4786,
        timeRange: ["2024-05-01", "2024-06-01"],
        comment: "",
        price: 499,
        ranking: 5.0,
        intro:
          "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",
        verifyInfo: {
          messages: ["整套公寓型住宅", "1室1卫1床"],
          textColor: "#767676",
        },
        cover:
          "https://a0.muscache.com/im/pictures/miso/Hosting-751206971626894382/original/e0607051-4fe3-43d4-b808-ea9422113003.jpeg?im_w=720&im_format=avif",
      },
      {
        name: "斯里兰卡Hiriwadunna2",
        farway: 4786,
        timeRange: ["2024-05-01", "2024-06-01"],
        comment: "",
        price: 499,
        ranking: 4.5,
        intro:
          "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",

        verifyInfo: {
          messages: ["整套公寓型住宅", "1室1卫1床"],
          textColor: "#767676",
        },
        cover:
          "https://z1.muscache.cn/im/pictures/miso/Hosting-1137503976390092057/original/c287e3a2-06b5-4638-a1de-9cb6b7536c53.jpeg?im_w=720&im_format=avif",
      },
      {
        name: "斯里兰卡Hiriwadunna3",
        farway: 4786,
        timeRange: ["2024-05-01", "2024-06-01"],
        comment: "",
        price: 499,
        ranking: 4.0,
        intro:
          "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",

        verifyInfo: {
          messages: ["整套公寓型住宅", "1室1卫1床"],
          textColor: "#767676",
        },
        cover:
          "https://a0.muscache.com/im/pictures/c79965b5-9b22-4504-af7b-3131f5c25dfa.jpg?im_w=720&im_format=avif",
      },
      {
        name: "斯里兰卡Hiriwadunna4",
        farway: 4786,
        timeRange: ["2024-05-01", "2024-06-01"],
        comment: "",
        price: 499,
        ranking: 4.5,
        intro:
          "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",

        verifyInfo: {
          messages: ["整套公寓型住宅", "1室1卫1床"],
          textColor: "#767676",
        },
        cover:
          "https://a0.muscache.com/im/pictures/03b6cb80-e1a3-43c6-8a7a-a04e7205caa5.jpg?im_w=720&im_format=avif",
      },
      {
        name: "斯里兰卡Hiriwadunna5",
        farway: 4786,
        timeRange: ["2024-05-01", "2024-06-01"],
        comment: "",
        price: 499,
        ranking: 4.5,
        intro:
          "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",
        verifyInfo: {
          messages: ["整套公寓型住宅", "1室1卫1床"],
          textColor: "#767676",
        },
        cover:
          "https://a0.muscache.com/im/pictures/9cf1f4fc-3db4-4adc-8507-3950283cb7e9.jpg?im_w=720&im_format=avif",
      },
      {
        name: "斯里兰卡Hiriwadunna6",
        farway: 4786,
        timeRange: ["2024-05-01", "2024-06-01"],
        comment: "",
        price: 499,
        ranking: 4.5,
        intro:
          "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",
        verifyInfo: {
          messages: ["整套公寓型住宅", "1室1卫1床"],
          textColor: "#767676",
        },
        cover:
          "https://z1.muscache.cn/im/pictures/aab9bec6-8626-47a0-8718-7d8cc131da48.jpg?im_w=720&im_format=avif",
      },
      {
        name: "斯里兰卡Hiriwadunna7",
        farway: 4786,
        timeRange: ["2024-05-01", "2024-06-01"],
        comment: "",
        price: 499,
        ranking: 4.5,
        intro:
          "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",
        verifyInfo: {
          messages: ["整套公寓型住宅", "1室1卫1床"],
          textColor: "#767676",
        },
        cover:
          "https://a0.muscache.com/im/pictures/3681b9e1-1d86-4f94-87be-f20759ded2de.jpg?im_w=720&im_format=avif",
      },
      {
        name: "斯里兰卡Hiriwadunna8",
        farway: 4786,
        timeRange: ["2024-05-01", "2024-06-01"],
        comment: "",
        price: 499,
        ranking: 4.5,
        intro:
          "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",
        verifyInfo: {
          messages: ["整套公寓型住宅", "1室1卫1床"],
          textColor: "#767676",
        },
        cover:
          "https://a0.muscache.com/im/pictures/4655ad12-599c-4ed3-b383-94d6bf80f99a.jpg?im_w=720&im_format=avif",
      },
      {
        name: "斯里兰卡Hiriwadunna9",
        farway: 4786,
        timeRange: ["2024-05-01", "2024-06-01"],
        comment: "",
        price: 499,
        ranking: 4.5,
        intro:
          "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",
        verifyInfo: {
          messages: ["整套公寓型住宅", "1室1卫1床"],
          textColor: "#767676",
        },
        cover:
          "https://z1.muscache.cn/im/pictures/9367e35d-a845-472a-9f14-78b63ab75ae3.jpg?im_w=720&im_format=avif",
      },
    ],
  }); //方式2
});

app.get("/home/highScore", (req, res, next) => {
  res.json({
    title: "这里是高分推荐",
    subtitle: "来看看高分好评推荐吧",
    list: [
      {
        name: "斯里兰卡Hiriwadunna",
        farway: 4786,
        timeRange: ["2024-05-01", "2024-06-01"],
        comment: "",
        price: 499,
        ranking: 5.0,
        intro:
          "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",
        verifyInfo: {
          messages: ["整套公寓型住宅", "1室1卫1床"],
          textColor: "#767676",
        },
        cover:
          "https://a0.muscache.com/im/pictures/miso/Hosting-751206971626894382/original/e0607051-4fe3-43d4-b808-ea9422113003.jpeg?im_w=720&im_format=avif",
      },
      {
        name: "斯里兰卡Hiriwadunna2",
        farway: 4786,
        timeRange: ["2024-05-01", "2024-06-01"],
        comment: "",
        price: 499,
        ranking: 4.5,
        intro:
          "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",

        verifyInfo: {
          messages: ["整套公寓型住宅", "1室1卫1床"],
          textColor: "#767676",
        },
        cover:
          "https://z1.muscache.cn/im/pictures/miso/Hosting-1137503976390092057/original/c287e3a2-06b5-4638-a1de-9cb6b7536c53.jpeg?im_w=720&im_format=avif",
      },
      {
        name: "斯里兰卡Hiriwadunna3",
        farway: 4786,
        timeRange: ["2024-05-01", "2024-06-01"],
        comment: "",
        price: 499,
        ranking: 4.0,
        intro:
          "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",

        verifyInfo: {
          messages: ["整套公寓型住宅", "1室1卫1床"],
          textColor: "#767676",
        },
        cover:
          "https://a0.muscache.com/im/pictures/c79965b5-9b22-4504-af7b-3131f5c25dfa.jpg?im_w=720&im_format=avif",
      },
      {
        name: "斯里兰卡Hiriwadunna4",
        farway: 4786,
        timeRange: ["2024-05-01", "2024-06-01"],
        comment: "",
        price: 499,
        ranking: 4.5,
        intro:
          "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",

        verifyInfo: {
          messages: ["整套公寓型住宅", "1室1卫1床"],
          textColor: "#767676",
        },
        cover:
          "https://a0.muscache.com/im/pictures/03b6cb80-e1a3-43c6-8a7a-a04e7205caa5.jpg?im_w=720&im_format=avif",
      },
      {
        name: "斯里兰卡Hiriwadunna5",
        farway: 4786,
        timeRange: ["2024-05-01", "2024-06-01"],
        comment: "",
        price: 499,
        ranking: 4.5,
        intro:
          "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",
        verifyInfo: {
          messages: ["整套公寓型住宅", "1室1卫1床"],
          textColor: "#767676",
        },
        cover:
          "https://a0.muscache.com/im/pictures/9cf1f4fc-3db4-4adc-8507-3950283cb7e9.jpg?im_w=720&im_format=avif",
      },
      {
        name: "斯里兰卡Hiriwadunna6",
        farway: 4786,
        timeRange: ["2024-05-01", "2024-06-01"],
        comment: "",
        price: 499,
        ranking: 4.5,
        intro:
          "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",
        verifyInfo: {
          messages: ["整套公寓型住宅", "1室1卫1床"],
          textColor: "#767676",
        },
        cover:
          "https://z1.muscache.cn/im/pictures/aab9bec6-8626-47a0-8718-7d8cc131da48.jpg?im_w=720&im_format=avif",
      },
      {
        name: "斯里兰卡Hiriwadunna7",
        farway: 4786,
        timeRange: ["2024-05-01", "2024-06-01"],
        comment: "",
        price: 499,
        ranking: 4.5,
        intro:
          "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",
        verifyInfo: {
          messages: ["整套公寓型住宅", "1室1卫1床"],
          textColor: "#767676",
        },
        cover:
          "https://a0.muscache.com/im/pictures/3681b9e1-1d86-4f94-87be-f20759ded2de.jpg?im_w=720&im_format=avif",
      },
      {
        name: "斯里兰卡Hiriwadunna8",
        farway: 4786,
        timeRange: ["2024-05-01", "2024-06-01"],
        comment: "",
        price: 499,
        ranking: 4.5,
        intro:
          "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",
        verifyInfo: {
          messages: ["整套公寓型住宅", "1室1卫1床"],
          textColor: "#767676",
        },
        cover:
          "https://a0.muscache.com/im/pictures/4655ad12-599c-4ed3-b383-94d6bf80f99a.jpg?im_w=720&im_format=avif",
      },
      {
        name: "斯里兰卡Hiriwadunna9",
        farway: 4786,
        timeRange: ["2024-05-01", "2024-06-01"],
        comment: "",
        price: 499,
        ranking: 4.5,
        intro:
          "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",
        verifyInfo: {
          messages: ["整套公寓型住宅", "1室1卫1床"],
          textColor: "#767676",
        },
        cover:
          "https://z1.muscache.cn/im/pictures/9367e35d-a845-472a-9f14-78b63ab75ae3.jpg?im_w=720&im_format=avif",
      },
    ],
  }); //方式2
});

app.get("/home/discount", (req, res, next) => {
  res.json({
    title: "这里是高分推荐",
    subtitle: "来看看高分好评推荐吧",
    dest_address: [{ name: "佛山" }, { name: "温州" }],
    dest_list: {
      佛山: [
        {
          name: "斯里兰卡Hiriwadunna",
          farway: 4786,
          timeRange: ["2024-05-01", "2024-06-01"],
          comment: "",
          price: 499,
          ranking: 5.0,
          intro:
            "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",
          verifyInfo: {
            messages: ["整套公寓型住宅", "1室1卫1床"],
            textColor: "#767676",
          },
          cover:
            "https://a0.muscache.com/im/pictures/miso/Hosting-751206971626894382/original/e0607051-4fe3-43d4-b808-ea9422113003.jpeg?im_w=720&im_format=avif",
        },
        {
          name: "斯里兰卡Hiriwadunna2",
          farway: 4786,
          timeRange: ["2024-05-01", "2024-06-01"],
          comment: "",
          price: 499,
          ranking: 4.5,
          intro:
            "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",

          verifyInfo: {
            messages: ["整套公寓型住宅", "1室1卫1床"],
            textColor: "#767676",
          },
          cover:
            "https://z1.muscache.cn/im/pictures/miso/Hosting-1137503976390092057/original/c287e3a2-06b5-4638-a1de-9cb6b7536c53.jpeg?im_w=720&im_format=avif",
        },
        {
          name: "斯里兰卡Hiriwadunna3",
          farway: 4786,
          timeRange: ["2024-05-01", "2024-06-01"],
          comment: "",
          price: 499,
          ranking: 4.0,
          intro:
            "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",

          verifyInfo: {
            messages: ["整套公寓型住宅", "1室1卫1床"],
            textColor: "#767676",
          },
          cover:
            "https://a0.muscache.com/im/pictures/c79965b5-9b22-4504-af7b-3131f5c25dfa.jpg?im_w=720&im_format=avif",
        },
        {
          name: "斯里兰卡Hiriwadunna4",
          farway: 4786,
          timeRange: ["2024-05-01", "2024-06-01"],
          comment: "",
          price: 499,
          ranking: 4.5,
          intro:
            "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",

          verifyInfo: {
            messages: ["整套公寓型住宅", "1室1卫1床"],
            textColor: "#767676",
          },
          cover:
            "https://a0.muscache.com/im/pictures/03b6cb80-e1a3-43c6-8a7a-a04e7205caa5.jpg?im_w=720&im_format=avif",
        },
        {
          name: "斯里兰卡Hiriwadunna5",
          farway: 4786,
          timeRange: ["2024-05-01", "2024-06-01"],
          comment: "",
          price: 499,
          ranking: 4.5,
          intro:
            "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",
          verifyInfo: {
            messages: ["整套公寓型住宅", "1室1卫1床"],
            textColor: "#767676",
          },
          cover:
            "https://a0.muscache.com/im/pictures/9cf1f4fc-3db4-4adc-8507-3950283cb7e9.jpg?im_w=720&im_format=avif",
        },
        {
          name: "斯里兰卡Hiriwadunna6",
          farway: 4786,
          timeRange: ["2024-05-01", "2024-06-01"],
          comment: "",
          price: 499,
          ranking: 4.5,
          intro:
            "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",
          verifyInfo: {
            messages: ["整套公寓型住宅", "1室1卫1床"],
            textColor: "#767676",
          },
          cover:
            "https://z1.muscache.cn/im/pictures/aab9bec6-8626-47a0-8718-7d8cc131da48.jpg?im_w=720&im_format=avif",
        },
        {
          name: "斯里兰卡Hiriwadunna7",
          farway: 4786,
          timeRange: ["2024-05-01", "2024-06-01"],
          comment: "",
          price: 499,
          ranking: 4.5,
          intro:
            "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",
          verifyInfo: {
            messages: ["整套公寓型住宅", "1室1卫1床"],
            textColor: "#767676",
          },
          cover:
            "https://a0.muscache.com/im/pictures/3681b9e1-1d86-4f94-87be-f20759ded2de.jpg?im_w=720&im_format=avif",
        },
        {
          name: "斯里兰卡Hiriwadunna8",
          farway: 4786,
          timeRange: ["2024-05-01", "2024-06-01"],
          comment: "",
          price: 499,
          ranking: 4.5,
          intro:
            "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",
          verifyInfo: {
            messages: ["整套公寓型住宅", "1室1卫1床"],
            textColor: "#767676",
          },
          cover:
            "https://a0.muscache.com/im/pictures/4655ad12-599c-4ed3-b383-94d6bf80f99a.jpg?im_w=720&im_format=avif",
        },
        {
          name: "斯里兰卡Hiriwadunna9",
          farway: 4786,
          timeRange: ["2024-05-01", "2024-06-01"],
          comment: "",
          price: 499,
          ranking: 4.5,
          intro:
            "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",
          verifyInfo: {
            messages: ["整套公寓型住宅", "1室1卫1床"],
            textColor: "#767676",
          },
          cover:
            "https://z1.muscache.cn/im/pictures/9367e35d-a845-472a-9f14-78b63ab75ae3.jpg?im_w=720&im_format=avif",
        },
      ],
      温州: [
        {
          name: "苍南雁荡山",
          farway: 4786,
          timeRange: ["2024-05-01", "2024-06-01"],
          comment: "",
          price: 499,
          ranking: 5.0,
          intro:
            "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",
          verifyInfo: {
            messages: ["整套公寓型住宅", "1室1卫1床"],
            textColor: "#767676",
          },
          cover:
            "https://a0.muscache.com/im/pictures/miso/Hosting-751206971626894382/original/e0607051-4fe3-43d4-b808-ea9422113003.jpeg?im_w=720&im_format=avif",
        },
        {
          name: "斯里兰卡Hiriwadunna2",
          farway: 4786,
          timeRange: ["2024-05-01", "2024-06-01"],
          comment: "",
          price: 499,
          ranking: 4.5,
          intro:
            "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",

          verifyInfo: {
            messages: ["整套公寓型住宅", "1室1卫1床"],
            textColor: "#767676",
          },
          cover:
            "https://z1.muscache.cn/im/pictures/miso/Hosting-1137503976390092057/original/c287e3a2-06b5-4638-a1de-9cb6b7536c53.jpeg?im_w=720&im_format=avif",
        },
        {
          name: "斯里兰卡Hiriwadunna3",
          farway: 4786,
          timeRange: ["2024-05-01", "2024-06-01"],
          comment: "",
          price: 499,
          ranking: 4.0,
          intro:
            "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",

          verifyInfo: {
            messages: ["整套公寓型住宅", "1室1卫1床"],
            textColor: "#767676",
          },
          cover:
            "https://a0.muscache.com/im/pictures/c79965b5-9b22-4504-af7b-3131f5c25dfa.jpg?im_w=720&im_format=avif",
        },
        {
          name: "斯里兰卡Hiriwadunna4",
          farway: 4786,
          timeRange: ["2024-05-01", "2024-06-01"],
          comment: "",
          price: 499,
          ranking: 4.5,
          intro:
            "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",

          verifyInfo: {
            messages: ["整套公寓型住宅", "1室1卫1床"],
            textColor: "#767676",
          },
          cover:
            "https://a0.muscache.com/im/pictures/03b6cb80-e1a3-43c6-8a7a-a04e7205caa5.jpg?im_w=720&im_format=avif",
        },
        {
          name: "斯里兰卡Hiriwadunna5",
          farway: 4786,
          timeRange: ["2024-05-01", "2024-06-01"],
          comment: "",
          price: 499,
          ranking: 4.5,
          intro:
            "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",
          verifyInfo: {
            messages: ["整套公寓型住宅", "1室1卫1床"],
            textColor: "#767676",
          },
          cover:
            "https://a0.muscache.com/im/pictures/9cf1f4fc-3db4-4adc-8507-3950283cb7e9.jpg?im_w=720&im_format=avif",
        },
        {
          name: "斯里兰卡Hiriwadunna6",
          farway: 4786,
          timeRange: ["2024-05-01", "2024-06-01"],
          comment: "",
          price: 499,
          ranking: 4.5,
          intro:
            "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",
          verifyInfo: {
            messages: ["整套公寓型住宅", "1室1卫1床"],
            textColor: "#767676",
          },
          cover:
            "https://z1.muscache.cn/im/pictures/aab9bec6-8626-47a0-8718-7d8cc131da48.jpg?im_w=720&im_format=avif",
        },
        {
          name: "斯里兰卡Hiriwadunna7",
          farway: 4786,
          timeRange: ["2024-05-01", "2024-06-01"],
          comment: "",
          price: 499,
          ranking: 4.5,
          intro:
            "这座豪华小屋位于Bowland AONB森林，是您在乡村空气中放松身心的完美度假胜地。 周围环绕着瀑布和蜿蜒的山谷，在参观哈特利小屋（ Hartley 's Huts ）后，您会感到真正放松。 小屋配备齐全，一半设有套房卧室，另一半设有厨房/起居区。 起居区设有原木燃烧器，无论季节如何营造舒适的氛围。",
          verifyInfo: {
            messages: ["整套公寓型住宅", "1室1卫1床"],
            textColor: "#767676",
          },
          cover:
            "https://a0.muscache.com/im/pictures/3681b9e1-1d86-4f94-87be-f20759ded2de.jpg?im_w=720&im_format=avif",
        },
      ],
    },
  }); //方式2
});

const port = 8888;
app.listen(port, () => {
  //反引号才可以使用占位符
  console.log(`listinning on port:${port}`);
});
