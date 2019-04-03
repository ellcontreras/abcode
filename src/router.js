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
import DashboardTemas from "./views/DashboardTemas.vue";
import DashboardNewTema from "./views/DashboardNewTema.vue";
import DashboardEditTema from "./views/DashboardEditTema.vue";
import DashboardLessons from "./views/DashboardLessons.vue";
import DashboardNewLesson from "./views/DashboardNewLesson.vue";
import PageNotFound from "./views/PageNotFound.vue";
import Lesson from "./views/Lesson.vue";
import Tema from "./views/Tema.vue";

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
      path: "/course/:courseId/tema/:temaId",
      name: "tema",
      component: Tema
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
        },
        {
          path: "temas",
          name: "dashboard temas",
          component: DashboardTemas
        },
        {
          path: "temas/new",
          name: "dashboard new tema",
          component: DashboardNewTema
        },
        {
          path: "temas/edit/:id",
          name: "dashboard edit tema",
          component: DashboardEditTema
        },
        {
          path: "lessons",
          name: "dashboard lessons",
          component: DashboardLessons
        },
        {
          path: "lessons/new",
          name: "dashboard new lesson",
          component: DashboardNewLesson
        }
      ]
    },
    {
      path: "/lesson/:id",
      name: "Lesson",
      component: Lesson
    },
    {
      path: "*",
      name: "404",
      component: PageNotFound
    }
  ],
  linkActiveClass: "is-active"
});
