<template>
  <div class="dashboard">
    <h2>Analytics Overview</h2>
    <DashboardChart />
  </div>
</template>

<script>
import DashboardChart from "../components/DashboardChart.vue";

export default {
  name: "Dashboard",
  components: {
    DashboardChart,
  },
};
</script>

<style scoped>
.dashboard {
  padding: 20px;
  width: 100%;
}
</style>
