import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index";

Vue.use(VueRouter);

let middlewareAuth = function (to, from, next) {
  if (store.state.user.id) {
    next();
  } else {
    let token = window.sessionStorage.getItem("token");
    if (token)
      store
        .dispatch("loginUserByToken", token)
        .then(() => {
          next();
        })
        .catch(() => {
          window.sessionStorage.removeItem("token");
          next({ path: "/" });
        });
    else next({ path: "/" });
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
   {
    path: "/dashboard",
    name: "Dashboard",
    props: true,
    beforeEnter: middlewareAuth,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard.vue"),
  },
  {
    path: "/registro",
    name: "Registro",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RegisterUser.vue"),
  },
  {
    path: "/create-sensor",
    name: "CadastroSensor",
    beforeEnter: middlewareAuth,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CreateSensor.vue"),
  },
  {
    path: "/help",
    name: "Help",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Help.vue"),
  },
  {
    path: "/sobre",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
