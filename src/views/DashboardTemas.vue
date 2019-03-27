<template>
  <div>
    <h1 class="title is-1 has-text-centered">Temas de cursos</h1>

    <router-link to="/dashboard/temas/new">
      <el-button class="button is-rounded is-outlined is-primary">Agregar Tema</el-button>
    </router-link>

    <tema-list/>
    <dashboard-chart-course/>
  </div>
</template>

<script>
import TemaList from "@/components/dashboard/TemaList.vue";
import DashboardChartCourse from "@/components/charts/DashboardChartCourse.vue";

export default {
  name: "DashboardComponents",
  components: {
    TemaList,
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
