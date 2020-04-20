import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Index,
    meta: {
      title: "首页-iweb在线课堂",
    },
  },
  {
    path: "/address",
    component: () => import("../views/Address.vue"),
    meta: {
      title: "校区-iweb在线课堂",
    },
  },
  {
    path: "/cart",
    component: () => import("../views/Cart.vue"),
    meta: {
      title: "购物车-iweb在线课堂",
    },
  },
  {
    path: "/course",
    component: () => import("../views/Course.vue"),
    meta: {
      title: "课程列表-iweb在线课堂",
    },
  },
  {
    path: "/course_detail/:cid",
    component: () => import("../views/CourseDetail.vue"),
    meta: {
      title: "课程详情-iweb在线课堂",
    },
  },
  {
    path: "/login",
    component: () => import("../views/Login.vue"),
    meta: {
      title: "用户登录-iweb在线课堂",
    },
  },
  {
    path: "/register",
    component: () => import("../views/Register.vue"),
    meta: {
      title: "用户注册-iweb在线课堂",
    },
  },
  {
    path: "/order",
    component: () => import("../views/Order.vue"),
    meta: {
      title: "订单-iweb在线课堂",
    },
  },
  {
    path: "/teacher",
    component: () => import("../views/Teacher.vue"),
    meta: {
      title: "讲师列表-iweb在线课堂",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

//全局前置导航守卫--修改document.title为meta.title
router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
