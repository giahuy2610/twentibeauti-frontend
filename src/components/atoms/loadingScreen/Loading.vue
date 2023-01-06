<template lang="">
  <div class="wrapper">
    <div class="loading-circle">
      <img src="@/assets/loading.png" alt="loading..." />
    </div>
  </div>
</template>

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

  .loading-circle {
    position: relative;
    animation: rotateLoading 5s linear infinite;

    @keyframes rotateLoading {
      100% {
        transform: rotate(360deg);
      }
      0% {
        transform: rotate(0deg);
      }
    }

    img {
      height: 30vh;
      width: auto;
      cursor: pointer;
    }
  }
}
</style>
