module.exports = function (req, res, next) {
  let captcha = req.body.captcha;
  //console.log(captcha.toLowerCase());
  //console.log(req.session.registerCaptcha);
  if (!captcha) {
    let output = {
      code: 409,
      msg: "captcha required"
    };
    res.send(output);
    return;
  }
  if (captcha.toLowerCase() !== req.session.registerCaptcha.toLowerCase()) {
    //客户端提交的验证码有误
    let output = {
      code: 410,
      msg: "captcha error",
    };
    res.send(output);
    return;
  }
  //验证通过, 销毁会话中保存的验证码
  delete req.session.registerCaptcha;
  next();
};
