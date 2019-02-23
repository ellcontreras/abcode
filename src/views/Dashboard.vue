<template>
  <div class="card">
    <div class="card-content">
      <h1 class="title is-1 has-text-centered">Dashboard</h1>
      <hr>
      <analytics-user/>
      <br>
      <h2 class="subtitle is-2">Cursos</h2>
      <div class="scrolling-wrapper">
        <div v-for="(course, key) of $store.getters.courses" :key="key" class="scrolling-card">
          <div :class="$store.getters.categoryColor(course.category).color" class="notification">
            <h3 class="subtitle is-3">{{ course.name }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnalyticsUser from "@/components/dashboard/AnalyticsUser.vue";

export default {
  name: "Dashboard",
  components: {
    AnalyticsUser
  }
};
</script>

