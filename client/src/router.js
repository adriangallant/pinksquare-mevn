import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: Home
      }
    },
    {
      path: "/about",
      name: "about",
      components: {
        default: () => import("./views/About.vue")
      }
    },
    /*{
      path: "/gallery",
      name: "gallery",
      component: () => import("")
    },
    {
      path: "/catalog",
      name: "gallery",
      component: () => import("")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("")
    },*/
  ]
});
