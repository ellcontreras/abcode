<template>
  <div>
    <h2 class="has-text-centered">Visita mensual de cursos</h2>
    <apexchart width="100%" height="500" type="heatmap" :options="options" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  name: "DashboardChartCourse",
  data: () => ({
    options: {
      chart: {
        id: "vuechart-example"
      },
      xaxis: {
        categories: Array.apply(0, Array(30)).map((element, index) => index + 1)
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 30]
      },
      {
        name: "series-2",
        data: [30, 40, 45, 50, 49, 60, 70, 30]
      },
      {
        name: "series-3",
        data: [30, 40, 45, 50, 49, 60, 70, 30]
      },
      {
        name: "series-4",
        data: [30, 40, 45, 50, 49, 60, 70, 30]
      },
      {
        name: "series-5",
        data: [30, 40, 45, 50, 49, 60, 70, 30]
      },
      {
        name: "series-6",
        data: [30, 40, 45, 50, 49, 60, 70, 30]
      },
      {
        name: "series-7",
        data: [30, 40, 45, 50, 49, 60, 70, 30]
      }
    ]
  })
};
</script>

