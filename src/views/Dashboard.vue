<template>
  <div class="columns">
    <div class="column is-one-quarter">
      <Menu/>
    </div>
    <div class="column">
      <div v-if="$route.name === 'dashboard'">
        <daily-updates/>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AnalyticsUser from "@/components/dashboard/AnalyticsUser.vue";
import DailyUpdates from "@/components/dashboard/DailyUpdates.vue";
import Menu from "@/components/dashboard/Menu.vue";

export default {
  name: "Dashboard",
  components: {
    AnalyticsUser,
    Menu,
    DailyUpdates
  }
};
</script>
