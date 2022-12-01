/* eslint-disable no-unused-vars */
import Vue from "vue";
import VueRouter from "vue-router";
import tokenService from "../services/tokenService";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "Main" */ "../components/Main/Main.vue"),
  },
  {
    path: "/News",
    name: "News",
    component: () =>
      import(/* webpackChunkName: "Main" */ "../components/News/News.vue"),
  },
  {
    path: "/Admin",
    name: "Admin",
    component: () =>
      import(/* webpackChunkName: "Admin" */ "../components/Admin/Admin.vue"),
    children: [
      {
        path: "GestionNews",
        name: "Admin-GestionNews",
        component: () =>
          import(
            /* webpackChunkName: "GestionNews" */ "../components/Admin/sub/GestionNews.vue"
          ),
      },
      {
        path: "Transfer",
        name: "Admin-Transfer",
        component: () =>
          import(
            /* webpackChunkName: "AdminTransfer" */ "../components/Admin/sub/Transfer.vue"
          ),
      },
      {
        path: "Messages",
        name: "Admin-Messages",
        component: () =>
          import(
            /* webpackChunkName: "AdminMessages" */ "../components/Admin/sub/Messages.vue"
          ),
      },
      {
        path: "MessagesClients",
        name: "Admin-MessagesClients",
        component: () =>
          import(
            /* webpackChunkName: "AdminMessagesClients" */ "../components/Admin/sub/MessagesClients.vue"
          ),
      },
    ],
  },
  {
    path: "/User",
    name: "User",
    component: () =>
      import(/* webpackChunkName: "User" */ "../components/User/User.vue"),
    children: [
      {
        path: "Transfer",
        name: "User-Transfer",
        component: () =>
          import(
            /* webpackChunkName: "User-Transfer" */ "../components/User/sub/Transfer.vue"
          ),
      },
      {
        path: "Messages",
        name: "User-Messages",
        component: () =>
          import(
            /* webpackChunkName: "User-Messages" */ "../components/User/sub/Messages.vue"
          ),
      },
    ],
  },

  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "Signup" */ "../views/signup.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history" /* abstract */,
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (
    tokenService.isAuth() == false &&
    to.name !== "login" &&
    to.name !== "Home" &&
    to.name !== "signup" &&
    to.name !== "News" &&
    to.name !== "contact" &&
    to.name !== "about"
  ) {
    return next({ name: "login" });
  } else if (to.path.startsWith("/Admin") && tokenService.isAdmin() == true) {
    return next();
  } else if (to.path.startsWith("/User") && tokenService.isAdmin() == false) {
    return next();
  } else if (
    to.name == "login" ||
    to.name == "Home" ||
    to.name == "signup" ||
    to.name == "News" ||
    to.name == "contact" ||
    to.name == "about"
  ) {
    next();
  } else return next({ name: "Home" });
});
export default router;
