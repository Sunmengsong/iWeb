import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

//过滤器
//货币
Vue.filter("currency", (val) => {
  if (val) {
    let n = Number(val);
    return "¥ " + n.toFixed(2);
  }
});
Vue.filter("srcImage", (val) => {
  return `require('../assets/${val}')`;
});

//引入axios
import axios from "axios";
//配置axios
axios.defaults.baseURL = "http://127.0.0.1:9090";
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/json";
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
