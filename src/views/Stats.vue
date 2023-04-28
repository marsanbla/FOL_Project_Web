<template>
  <div>
    <canvas ref="myChart"></canvas>
  </div>
</template>

<script>
export default {
  name: "ChartComponent",
  mounted() {
    const ctx = this.$refs.myChart.getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>
