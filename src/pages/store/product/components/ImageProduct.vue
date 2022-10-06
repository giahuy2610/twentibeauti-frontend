<template lang="">
    <div class="scroll-wrapper" ref="wrapper" >
        <Button
            @click="scrollUp"
            icon="pi pi-angle-up "
            class="btn-gap btn-up p-button p-button-rounded p-button-outlined"
        />
        <div class="container-slide" ref="slide">
            <div class="slick-slider">
                <div class="slick-list" >
                    <div class="slick-track">
                        <div ref="btn" v-for="item in illustProducts">
                          <Button class="pag btn-gap p-button-lg p-button-rounded p-button-outlined" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Button
          @click="scrollDown"
          icon="pi pi-angle-down"
          class="btn-gap btn-down p-button p-button-rounded p-button-outlined"
        />
    </div>
    <div class="img">
        <img src="https://image.hsv-tech.io/0x400/tfs/common/fda5ef41-4b41-4bfb-9b07-6cdcdad2f0e9.webp" alt="Ảnh sản phẩm">
    </div>
</template>
<script>
export default {
  methods: {
    scrollDown() {
      if (this.currentIllust != 1) {
        this.currentIllust--;
        this.$refs.slide.scrollTop -= this.$refs.btn[0].offsetHeight;
      } else {
        this.$refs.slide.scrollTop += this.$refs.btn[0].offsetHeight * (this.illustProducts.length -1 );
        this.currentIllust = this.illustProducts.length;
      }
      console.log(this.currentIllust)
    },
    scrollUp() {
      console.log(this.$refs.btn[0].offsetHeight);
      if (this.currentIllust != this.illustProducts.length) {
        this.currentIllust++;
        this.$refs.slide.scrollTop += this.$refs.btn[0].offsetHeight;
      } else {
        this.$refs.slide.scrollTop -= this.$refs.btn[0].offsetHeight * (this.illustProducts.length -1);
        this.currentIllust = 1;
      }
      console.log(this.currentIllust)
    },
  },
  data() {
    return {
      illustProducts: [1, 2, 3, 4, 5, 6, 7, 8],
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
  flex-basis: 100px;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
  }
  .container-slide {
    overflow: hidden;
    position: relative;
    .slick-slider {
      margin: -20px;
      touch-action: pan-y;
      .slick-list {
        padding: 20px;
        height: 50vh !important;
        transform: translateZ(0);
        position: relative;
        display: block;
        .slick-track {
          opacity: 1;
          top: 0;
          left: 0;
          height: 700px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }
  .btn-gap
  {
    margin: 0.5rem;
  }
  .pag {
    background-image: url("https://image.hsv-tech.io/400x0/tfs/common/db6c3fd2-2d35-41c3-83ae-af6289768918.webp");
    background-size: 165%;
    background-size: contain;
  }
  .btn-up {
    position: relative;
    z-index: 100;
  }
  .btn-down {
    position: relative;
    z-index: 100;
  }

  .img {
    object-fit: contain;
    height: 50vh;
  }
}
</style>