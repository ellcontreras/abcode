<template>
  <div>
    <h1 class="title is-1 has-text-centered">Lecciones</h1>

    <router-link to="/dashboard/lessons/new">
      <el-button class="button is-rounded is-outlined is-primary">Agregar Lección</el-button>
    </router-link>

    <lesson-list/>
    <dashboard-chart-course/>
  </div>
</template>

<script>
import LessonList from "@/components/dashboard/LessonList.vue";
import DashboardChartCourse from "@/components/charts/DashboardChartCourse.vue";

export default {
  name: "DashboardComponents",
  components: {
    LessonList,
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
