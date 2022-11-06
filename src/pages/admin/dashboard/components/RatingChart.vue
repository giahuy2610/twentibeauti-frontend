<template>
  <div>
    <Chart type="doughnut" :data="chartData" :options="lightOptions" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        labels: ["1 sao", "2 sao", "3 sao", "4 sao", "5 sao"],
        datasets: [
          {
            data: [300, 50, 100, 125, 10],
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#26C6DA",
              "#7E57C2",
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#26C6DA",
              "#7E57C2",
            ],
          },
        ],
      },
      lightOptions: {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
      },
    };
  },
};
</script>
