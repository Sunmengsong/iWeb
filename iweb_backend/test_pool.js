/**
 * 测试数据库连接池
 */
const pool = require("./pool");

pool.query("SELECT 1+1", (err, res) => {
  if (err) throw err;
  console.log(res);
});
