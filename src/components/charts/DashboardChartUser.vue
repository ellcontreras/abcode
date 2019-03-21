<template>
  <div>
    <apexchart width="100%" height="500" type="area" :options="options" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  name: "DashboardChartUser",
  data: () => ({
    options: {
      chart: {
        id: "vuechart-example"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 30]
      }
    ]
  })
};
</script>

