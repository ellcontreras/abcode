import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Courses from "./views/Courses.vue";
import Course from "./views/Course.vue";
import Dashboard from "./views/Dashboard.vue";
import DashboardCourses from "./views/DashboardCourses.vue";
import DashboardEditCourse from "./views/DashboardEditCourse.vue";
import DashboardNewCourse from "./views/DashboardNewCourse.vue";
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
      path: "/course/:id",
      name: "course",
      component: Course
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      children: [
        {
          path: "courses",
          name: "dashboard course",
          component: DashboardCourses
        },
        {
          path: "courses/edit/:id",
          name: "dashboard edit course",
          component: DashboardEditCourse
        },
        {
          path: "courses/new",
          name: "dashboard new course",
          component: DashboardNewCourse
        }
      ]
    },
    {
      path: "*",
      name: "404",
      component: PageNotFound
    }
  ],
  linkActiveClass: "is-active"
});
