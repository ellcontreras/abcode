<template>
  <div>
    <h1 class="title is-1 has-text-centered">Cursos</h1>

    <router-link to="/dashboard/courses/new">
      <el-button class="button is-rounded is-outlined is-primary">Agregar Curso</el-button>
    </router-link>

    <course-list/>
    <dashboard-chart-course/>
  </div>
</template>

<script>
import CourseList from "@/components/dashboard/CourseList.vue";
import DashboardChartCourse from '@/components/charts/DashboardChartCourse.vue'

export default {
  name: "DashboardComponents",
  components: {
    CourseList,
    DashboardChartCourse
  }
};
</script>

<style scoped>
a {
  color: #444 !important;
}
a:hover {
  color: #445 !important;
}
</style>
