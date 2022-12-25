<template lang="">
  <div class="wrapper" :style="[isHidden ? 'display: none' : '']">
    <div class="ads">
      <img
        src="https://theme.hstatic.net/200000135107/1000950591/14/popup_bg_medium.png?v=331"
        alt="sale"
        @click="
          isHidden = true;
          $router.push({ path: '/collection/1' });
        "
      />
      <i class="pi pi-times-circle btn-close" @click="isHidden = true"></i>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isHidden: false,
    };
  },
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
      height: 50vh;
      width: auto;
      cursor: pointer;
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
