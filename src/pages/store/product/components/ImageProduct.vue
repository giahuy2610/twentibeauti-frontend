<template lang="">
    <div class="scroll-wrapper" ref="wrapper" >
        <Button
            @click="scrollUp"
            icon="pi pi-angle-up "
            class="btn-up p-button p-button-rounded p-button-outlined"
        />
        <div></div>
        <Button v-for="item in illustProducts" class="pag p-button-lg p-button-rounded p-button-outlined"/>
        <Button
          @click="scrollDown"
          icon="pi pi-angle-down"
          class="btn-down p-button p-button-rounded p-button-outlined"
        />
    </div>
    <div class="img">
        <img src="https://image.hsv-tech.io/0x400/tfs/common/fda5ef41-4b41-4bfb-9b07-6cdcdad2f0e9.webp" alt="Ảnh sản phẩm">
    </div>
</template>
<script>
export default {
  methods: {
    scrollDown: function () {
      if (this.currentIllust != this.illustProducts.length) {
        this.currentIllust++;
        this.$refs.wrapper.scrollTop += 10;
        console.log("scrollDown");
      } else {
        this.$refs.wrapper.scrollTop -= 10;
        this.currentIllust = 1;
      }
    },
    scrollUp: function () {
      if (this.currentIllust != 1) {
        this.currentIllust--;
        this.$refs.wrapper.scrollTop -= 10;
        console.log("scrollUp");
      } else {
        this.$refs.wrapper.scrollTop += 10;
        this.currentIllust = this.illustProducts.length;
      }
    },
  },
  data() {
    return {
      illustProducts: [1, 2, 3, 4, 5],
      currentIllust: 1,
      image: null,
      links: [
        "https://image.hsv-tech.io/400x0/tfs/common/ad6ea494-de27-4f5b-98fe-82f5d77f3281.webp",
        "https://image.hsv-tech.io/400x0/tfs/common/a1d0ef20-e5d7-4e6e-96c1-31f541bf916e.webp",
      ],
      imgs: [
        "https://image.hsv-tech.io/0x400/tfs/common/fda5ef41-4b41-4bfb-9b07-6cdcdad2f0e9.webp",
        "https://image.hsv-tech.io/0x400/tfs/common/fda5ef41-4b41-4bfb-9b07-6cdcdad2f0e9.webp",
        "https://image.hsv-tech.io/0x400/tfs/common/fda5ef41-4b41-4bfb-9b07-6cdcdad2f0e9.webp",
        "https://image.hsv-tech.io/0x400/tfs/common/fda5ef41-4b41-4bfb-9b07-6cdcdad2f0e9.webp",
        "https://image.hsv-tech.io/0x400/tfs/common/fda5ef41-4b41-4bfb-9b07-6cdcdad2f0e9.webp",
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.scroll-wrapper {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scroll-behavior: smooth;
  flex-basis: 170px;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
  }
  .pag {
    background-image: url("https://image.hsv-tech.io/400x0/tfs/common/db6c3fd2-2d35-41c3-83ae-af6289768918.webp");
    background-size: 165%;
    background-size: contain;
    top: 2.3rem;
    margin: 0.5rem;
  }
  .pag-down {
    top: 35% !important;
  }
  .btn-up {
    position: absolute;
    top: 0%;
    z-index: 100;
  }
  .btn-down {
    position: absolute;
    top: 90%;
    z-index: 100;
  }

  .img {
    object-fit: contain;
    height: 50vh;
  }
}
</style>