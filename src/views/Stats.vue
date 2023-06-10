<template>
  <div>
    <canvas id="gameStatsChart"></canvas>
  </div>
</template>

<script>
import playerModel from './playerModel'; // Importa el modelo del jugador desde el archivo playerModel.js

export default {
  name: "ChartComponent",
  mounted() {
  const ctx = document.getElementById('gameStatsChart').getContext('2d');
  this.getPlayerStatsFromMongoDB().then(({ names, points }) => {
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: names,
        datasets: [{
          label: 'Puntos',
          data: points,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });
},
  methods: {
    async getPlayerStatsFromMongoDB() {
  const playerStats = await playerModel.find({}, 'name points').lean();

  // Obtén los arrays de nombres y puntos por separado
  const names = playerStats.map((stat) => stat.name);
  const points = playerStats.map((stat) => stat.points);

  return { names, points };
}
  }
};
</script>