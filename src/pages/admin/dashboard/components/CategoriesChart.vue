<template>
  <div>
    <Chart type="polarArea" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        datasets: [
          {
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
              "#42A5F5",
              "#66BB6A",
              "#FFA726",
              "#26C6DA",
              "#7E57C2",
            ],
            label: "My dataset",
          },
        ],
        labels: ["Trang điểm", "Dưỡng da", "Tóc", "Cơ thể", "Răng miệng"],
      },
      chartOptions: {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
        scales: {
          r: {
            grid: {
              color: "#ebedef",
            },
          },
        },
      },
    };
  },
};
</script>
