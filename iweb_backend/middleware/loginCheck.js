/**
 * 检查用户是否已经登录(req.session.user是否存在)
 */
module.exports = function (req, res, next) {
  if (!req.session) {
    throw new Error("Login_check needs session middleware supports");
  }
  if (!req.session.user) {
    let output = {
      code: 499,
      msg: "login required",
    };
    res.json(output);
    return;
  }
  next();
};
