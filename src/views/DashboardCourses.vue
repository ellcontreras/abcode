<template>
  <div>
    <h1 class="title is-1 has-text-centered">Courses</h1>

    <router-link to="/dashboard/courses/new">
      <button class="button is-rounded is-outlined is-primary">Agregar Curso</button>
    </router-link>
    <hr>
    <course-list/>
  </div>
</template>

<script>
import CourseList from "@/components/dashboard/CourseList.vue";

export default {
  name: "DashboardComponents",
  components: {
    CourseList
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
