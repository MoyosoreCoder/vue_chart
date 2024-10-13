<template>
  <div>
    <Bar :chart-data="chartData" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default defineComponent({
  components: {
    Bar,
  },
  data() {
    return {
      chartData: {
        labels: ["January", "February", "March"],
        datasets: [
          {
            label: "Sales",
            backgroundColor: "#42A5F5",
            data: [40, 20, 12],
          },
        ],
      },
    };
  },
});
</script>

<style scoped>
/* Add styles specific to your chart here */
</style>
