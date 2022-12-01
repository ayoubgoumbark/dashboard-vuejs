import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login.vue";

Vue.use(VueRouter);

const routes = [
  /*   { path: "/",

    component: import("../views/Home.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: import("../components/Main/Main.vue"),
      },
      {
        path: "Admin",
        name: "Admin",
        component: import("../components/Admin/Admin.vue"),
        children: [
          {
            path: "AddNews",
            name: "Admin-AddNews",
            component: import("../components/Admin/sub/AddNews.vue"),
          },
          {
            path: "Transfer",
            name: "Admin-Transfer",
            component: import("../components/Admin/sub/Transfer.vue"),
          },
          {
            path: "Messages",
            name: "Admin-Messages",
            component: import("../components/Admin/sub/Messages.vue"),
          },
        ],
      },
      {
        path: "User",
        name: "User",
        component: import("../components/User/User.vue"),
        children: [
          {
            path: "Transfer",
            name: "User-Transfer",
            component: import("../components/User/sub/Transfer.vue"),
          },
          {
            path: "Messages",
            name: "User-Messages",
            component: import("../components/User/sub/Messages.vue"),
          },
        ],
      },
    ],
  }, */
  {
    path: "/login",
    name: "login",
    component: login,
  },
];

const router = new VueRouter({
  mode: "history" /* abstract */,
  base: process.env.BASE_URL,
  routes,
});

/* router.beforeEach(async (next) => {
  next();
}); */
export default router;
