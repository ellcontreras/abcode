<template>
  <div>
    <el-row type="flex">
      <el-col :span="4">
        <Menu/>
      </el-col>
      <el-col>
        <el-card shadow="always">
          <div v-if="$route.name === 'dashboard'">
            <daily-updates/>
            <dashboard-chart-user/>
          </div>
          <router-view></router-view>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import DailyUpdates from "@/components/dashboard/DailyUpdates.vue";
import Menu from "@/components/dashboard/Menu.vue";
import DashboardChartUser from "@/components/charts/DashboardChartUser.vue";

export default {
  name: "Dashboard",
  components: {
    Menu,
    DailyUpdates,
    DashboardChartUser
  }
};
</script>
