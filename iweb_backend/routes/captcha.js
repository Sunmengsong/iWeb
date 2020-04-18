const express = require("express");
//引入连接池模块
const pool = require("../pool.js");
//引入验证码中间件
const svgCaptcha = require("svg-captcha");
//创建路由对象
let router = express.Router();

/**
 * 为用户注册提供验证码图片
 */
router.get("/register", (req, res, next) => {
  let options = {
    size: 5,
    ignoreChars: "0o1iIl",
    noise: 5, //干扰线数量
    color: true,
    bakcground: "#EFE",
    width: 120,
    height: 40,
    fontSize: 40,
  };
  let c = svgCaptcha.create(options);
  req.session.registerCaptcha = c.text;
  res.type("svg");
  res.send(c.data);
});

//导出路由
module.exports = router;
