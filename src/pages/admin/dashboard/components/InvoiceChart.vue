<template>
  <div>
    <Chart type="pie" :data="chartData" :options="lightOptions" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        labels: [
          "Xác nhận",
          "Chuẩn bị",
          "Giao hàng",
          "Thành công",
          "Thất bại",
          "Hủy",
        ],
        datasets: [
          {
            data: [300, 50, 100, 300, 50, 100],
            backgroundColor: [
              "#42A5F5",
              "#66BB6A",
              "#FFA726",
              "#5372b7",
              "#d37654",
              "#FF6384",
            ],
            hoverBackgroundColor: [
              "#64B5F6",
              "#81C784",
              "#FFB74D",
              "#5372b7",
              "#d37654",
              "#FF6384",
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
