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
    path: "/edit-perfil",
    name: "EditPerfil",
    beforeEnter: middlewareAuth,
    component: () =>
      import(/* webpackChunkName: "edit" */ "../views/EditUser.vue"),
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
  {
    path: "/sensores",
    name: "Sensores",
    component: () =>
      import(/* webpackChunkName: "sensores" */ "../views/Sensores.vue"),
  },
  {
    path: "/administrador",
    name: "Administrador",
    beforeEnter: middlewareAuth,
    component: () =>
      import(/* webpackChunkName: "administrador" */ "../views/Admin.vue"),
  },
  {
    path: "/meus-sensores",
    name: "MeusSensores",
    beforeEnter: middlewareAuth,
    component: () =>
      import(/* webpackChunkName: "meus-sensores" */ "../views/MeusSensores.vue"),
  },
  {
    path: "/detalhes/:sensorId",
    name: "Detalhes",
    props: true,
    component: () =>
      import(/* webpackChunkName: "meus-sensores" */ "../views/Detalhes.vue"),
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
