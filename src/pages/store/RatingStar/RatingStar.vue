<template lang="">
  <div class="flex">
    <i
      style="font-size: 2rem; margin-right: 0.5rem"
      class="pi pi-star-fill cursor-pointer"
      v-for="(item, index) in 5"
      :key="index"
      @click="isActive = index"
      @mouseover="isHover = index"
      :class="{ isActive: index <= isActive, isHover: index <= isHover }"
    ></i>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: -1,
      isHover: -1,
    };
  },
};
</script>
<style lang="scss" scoped>
.isHover {
  color: #fadb14 !important;
}
.isActive {
  color: #fadb14 !important;
}
</style>
