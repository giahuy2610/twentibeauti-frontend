<template lang="">
  <div class="wrapper">
    <!-- <Skeleton shape="square" size="100px" class="mr-2" v-show="!isLoaded">
    </Skeleton> -->
    <img
      @click="$router.push({ path: '/collections/', replace: true })"
      v-for="item in arrThumbnailScr"
      :src="item"
      alt="sale thumbnail"
      @load="isLoaded = true"
      v-show="isLoaded"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoaded: false,
      arrThumbnailScr: [
        "https://image.hsv-tech.io/1920x640/tfs/common/40f3e5d3-f5ec-4f5f-8d12-245298586d04.webp",
        "https://image.hsv-tech.io/1920x640/tfs/common/7c5ef3a6-3067-4be0-98cc-6a71f5b36ccc.webp",
        "https://image.hsv-tech.io/1920x640/tfs/common/3ec8a87b-35b1-44cf-a5b6-d31748a7684b.webp",
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;

  img {
    max-width: 32%;
    background-size: contain;
    object-fit: contain;
    border-radius: 10px;
    flex: 1;

    &:hover {
      transform: translate3d(0px, -5px, 0px);
      box-shadow: rgb(0 0 0 / 15%) 0px 2px 15px;
      transition: all 0.3s ease 0s;
      cursor: pointer;
    }

    &:nth-child(2n) {
      margin: 0 20px;
    }
  }
}
</style>
