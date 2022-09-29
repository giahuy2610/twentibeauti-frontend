<template lang="">
  <div class="wrapper" :style='[isHidden ? "display: none":""]'>
    <div class="ads">
      <img src="@/assets/overlayAds1.png" alt="sale" />
      <i class="pi pi-times-circle btn-close" @click="isHidden=true"></i>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            isHidden: false,
        }
    }
};
</script>
<style lang="scss" scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000000000000000000;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .ads {
    position: relative;

    img {
      height: 70vh;
      width: auto;
    }

    .btn-close {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 1.5rem;
      color: white;
      cursor: pointer;
    }
  }
}
</style>
