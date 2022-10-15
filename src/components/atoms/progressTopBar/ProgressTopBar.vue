<template lang="">
  <div class="progress-wrapper" :key="keyvalue">
    <div class="progress-bar" :style="{ width: percentage + '%' }" v-if="show">
      {{ show }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      performance: 0,
      keyvalue:0
      
    };
  },
  computed: {},
  watch: {
    $route(to, from) {
      console.log("rote change");
      this.show = true;
      this.performance = 35;
    },
  },
  mounted() {
    setTimeout(() => {
      this.show = false;
      console.log("false");
    }, 500);
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
