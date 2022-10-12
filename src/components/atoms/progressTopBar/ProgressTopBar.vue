<template lang="">
  <div class="progress-wrapper">
    <div
      class="progress-bar"
      :style="{ width: progressPercentage + '%' }"
      v-if="show"
    ></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  computed: {
    progressPercentage() {
      console.log(1);
      var width = 100; // width of a progress bar in percentage
      var perfData = window.performance.timing; // The PerformanceTiming interface
      EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart); // Calculated Estimated Time of Page Load which returns negative value.
      time = parseInt((EstimatedTime / 1000) % 60) * 100; //Converting EstimatedTime from miliseconds to seconds.
      if ((time = 100)) {
        setTimeout(() => (this.show = false), 500);
      }
      return time;
    },
  },
  watch: {
    $route(to, from) {
      console.log(2);
      this.show = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.progress-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;

  .progress-bar {
    height: 3px;
    background-color: var(--primary-color);
  }
}
</style>
