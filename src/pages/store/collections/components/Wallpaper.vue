<template lang="">
  <div class="wallpaper-wrapper">
    <Skeleton shape="rectangle" width="100%" height="260px" v-show="!isLoaded">
    </Skeleton>
    <img
      src="https://image.hsv-tech.io/1920x0/tfs/common/43ab5b36-fedc-4d8c-a24f-cd8ecfe05564.webp"
      alt=""
      style="object-fit: fill; border-radius: 10px"
      @load="isLoaded = true"
      v-show="isLoaded"
    />
  </div>
</template>
<script>
export default {
  //   props: {
  //     imagePath: "imagePath",
  //   },
  data() {
    return {
      isLoaded: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.wallpaper-wrapper {
  width: 100%;
  max-height: 260px;
}
</style>
