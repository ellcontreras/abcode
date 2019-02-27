import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Courses from "./views/Courses.vue";
import Dashboard from "./views/Dashboard.vue";
import PageNotFound from "./views/PageNotFound.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/courses",
      name: "courses",
      component: Courses
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "*",
      name: "404",
      component: PageNotFound
    }
  ],
  linkActiveClass: "is-active"
});
