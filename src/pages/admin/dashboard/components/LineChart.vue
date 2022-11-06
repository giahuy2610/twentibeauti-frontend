<template lang="">
  <div>
    <Chart type="line" :data="lineStylesData" :options="basicOptions" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      lineStylesData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "Lượt truy cập",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            tension: 0.4,
            borderColor: "#42A5F5",
          },
          {
            label: "Số đơn hàng",
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderDash: [5, 5],
            tension: 0.4,
            borderColor: "#66BB6A",
          },
          {
            label: "Độ hài lòng",
            data: [12, 51, 62, 33, 21, 62, 45],
            fill: true,
            borderColor: "#FFA726",
            tension: 0.4,
            backgroundColor: "rgba(255,167,38,0.2)",
          },
        ],
      },
      basicOptions: {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#495057",
            },
            grid: {
              color: "#ebedef",
            },
          },
          y: {
            ticks: {
              color: "#495057",
            },
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
<style lang=""></style>
