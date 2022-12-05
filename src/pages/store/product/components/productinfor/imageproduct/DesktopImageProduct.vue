<template lang="">
  <div class="image-product">
    <div class="scroll-wrapper" ref="wrapper">
      <button
        @click="scrollUp(), (isClick = !isClick)"
        class="pag__btn btn__up"
      >
        <span class="icon-chevron-thin-up"></span>
      </button>
      <div class="container-slide" ref="slide">
        <div class="slick-slider">
          <div class="slick-list">
            <div class="slick-track">
              <div
                ref="btn"
                v-for="(item, index) in illustProducts"
                :key="index"
              >
                <button
                  @click="
                    scrollTo(index),
                      (isClick = !isClick),
                      (selectedItem = index)
                  "
                  class="pag__size pag__item"
                  :style="{
                    backgroundImage: `url(${this.illustProducts[index]['Path']})`,
                  }"
                  :class="{ shadow2: selectedItem == index }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        @click="scrollDown(), (isClick = !isClick)"
        class="pag__btn btn__down"
      >
        <span class="icon-chevron-thin-down"></span>
      </button>
    </div>
    <div class="scroll-wrapper-horizontal">
      <div class="container-slide-horizontal" ref="slideHorizal">
        <Skeleton shape="square" size="400px" v-show="!isLoaded"> </Skeleton>
        <div class="slick-slider-horizontal">
          <div class="slick-list-horizontal">
            <div :style="maxWidth" class="slide-track-horizontal">
              <div ref="img" v-for="(item, index) in illustProducts">
                <img
                  :src="item['Path']"
                  @load="isLoaded = true"
                  v-show="isLoaded"
                  class="img__margin flex justify-content-center align-items-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div ref="image" class="img__margin flex justify-content-center align-items-center" :class="[isClick ? 'img__appear' : 'img__show']">
        <Skeleton shape="square" size="250px" v-show="!isLoaded"> </Skeleton>
        <img class="img__size" :src="currentImg" alt="Ảnh sản phẩm" @load="isLoaded = true" v-show="isLoaded" />
    </div> -->
  </div>
</template>

<script>
export default {
  props: ["illustProducts"],
  methods: {
    scrollDown() {
      if (this.currentIllust != 1) {
        this.currentIllust--;
        this.$refs.slide.scrollTop -= this.$refs.btn[0].offsetHeight;
        this.$refs.slideHorizal.scrollLeft -= this.$refs.img[0].scrollWidth;
        console.log(this.$refs.slideHorizal.scrollLeft);
      } else {
        this.$refs.slide.scrollTop +=
          this.$refs.btn[0].offsetHeight * (this.illustProducts.length - 1);
        this.$refs.slideHorizal.scrollLeft +=
          this.$refs.img[0].scrollWidth * (this.illustProducts.length - 1);
        this.currentIllust = this.illustProducts.length;
      }
      if (this.selectedItem <= 0) {
        this.selectedItem = this.illustProducts.length - 1;
      } else this.selectedItem = this.selectedItem - 1;
      setTimeout(() => {
        this.isClick = !this.isClick;
      }, 100);
      // console.log(this.isClick);
      // console.log(this.selectedItem);
    },
    scrollUp() {
      if (this.currentIllust != this.illustProducts.length) {
        this.currentIllust++;
        this.$refs.slide.scrollTop += this.$refs.btn[0].offsetHeight;
        this.$refs.slideHorizal.scrollLeft += this.$refs.img[0].scrollWidth;
      } else {
        this.$refs.slide.scrollTop -=
          this.$refs.btn[0].offsetHeight * (this.illustProducts.length - 1);
        this.$refs.slideHorizal.scrollLeft -=
          this.$refs.img[0].scrollWidth * (this.illustProducts.length - 1);
        this.currentIllust = 1;
      }
      if (this.selectedItem >= this.illustProducts.length - 1) {
        this.selectedItem = 0;
      } else this.selectedItem = this.selectedItem + 1;

      setTimeout(() => {
        this.isClick = !this.isClick;
      }, 100);
      // console.log(this.isClick);
      console.log(this.selectedItem);
    },
    scrollTo(index) {
      this.$refs.slide.scrollTop +=
        this.$refs.btn[0].offsetHeight * (index + 1 - this.currentIllust);
      this.$refs.slideHorizal.scrollLeft +=
        this.$refs.img[0].scrollWidth * (index + 1 - this.currentIllust);
      this.currentIllust = index + 1;
      setTimeout(() => {
        this.isClick = !this.isClick;
      }, 100);
      // console.log(this.isClick);
      // console.log(this.selectedItem);
    },
    // reset() {
    //   this.isClick = !this.isClick;
    // }
  },
  data() {
    return {
      selectedItem: 0,
      isClick: false,
      isClick_1: true,
      currentIllust: 1,
      imageid: 1,
      // illustProducts: [
      //     "https://image.hsv-tech.io/0x400/tfs/common/fda5ef41-4b41-4bfb-9b07-6cdcdad2f0e9.webp",
      //     "https://image.hsv-tech.io/0x400/tfs/common/1c7d5f29-0e3b-48d6-805f-deeafc29a01a.webp",
      //     "https://image.hsv-tech.io/0x400/tfs/common/4622d29c-9c01-4a30-9ba2-6a4756b69514.webp",
      //     "https://image.hsv-tech.io/0x400/tfs/common/27c2301d-ac0a-457a-b866-253dbf3a814e.webp",
      //     "https://image.hsv-tech.io/0x400/tfs/common/2d266998-c491-4354-ad70-e3dd2954a80b.webp",
      // ],
      isLoaded: false,
    };
  },
  computed: {
    currentImg() {
      return this.illustProducts[
        Math.abs(this.currentIllust - 1) % this.illustProducts.length
      ];
    },
    maxWidth() {
      return {
        "--max-width": this.illustProducts.length * 450 + "px",
      };
    },
  },
  // mounted() {
  //   setInterval(this.scrollUp, 6000);
  // },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/icomoon/style.css");
@import "@/scss/mixin";

@media mini-tablet {
  .image_size {
    max-width: 500px;
    width: 100%;
    height: auto;
  }
}

@media tablet {
  .image_size {
    height: auto;
    max-width: 400px;
    width: auto\9;
  }
}

@media desktop {
  .image__size {
    max-width: 100%;
    height: auto;
    width: auto\9;
  }
}

.image-product {
  gap: 2rem;
  display: flex;
  flex-direction: row;
}

.shadow2 {
  filter: drop-shadow(rgb(184, 193, 202) 0px 0px 10px);
}

.scroll-wrapper {
  position: sticky;
  position: -webkit-sticky;
  padding-top: 5px;
  top: 0;
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  flex-basis: 100px;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
    scroll-behavior: smooth;
  }

  .container-slide {
    padding: 1rem 1rem;
    overflow: hidden;
    position: relative;

    .slick-slider {
      margin: -20px;
      touch-action: pan-y;

      .slick-list {
        padding: 20px;
        height: 30vh !important;
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

  .pag {
    &__btn {
      background-color: initial;
      margin-bottom: 1.7rem;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
      height: 3rem !important;
      width: 3rem !important;
    }

    &__size {
      background-size: 100%;
      background-size: contain;
    }

    &__item {
      border: none;
      margin-bottom: 1.7rem;
      border-radius: 50%;
      overflow: hidden;
      height: 3rem !important;
      width: 3rem !important;
    }
  }

  .btn {
    &__up {
      cursor: auto;
      position: relative;
      z-index: 100;
      border: none;
    }

    &__down {
      cursor: auto;
      position: relative;
      z-index: 100;
      border: none;
    }
  }
}

.scroll-wrapper-horizontal {
  position: relative;
  left: 0;
  margin-top: 10px;
  display: flex;
  flex-direction: row;

  align-items: center;
  overflow: hidden;
  margin: 0px auto;

  .container-slide-horizontal {
    width: var(--max-width) !important;
    position: relative;
    touch-action: pan-x;
    overflow-x: scroll;
    overflow: hidden;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }
    .slick-slider-horizontal {
      height: 100%;

      .slick-list-horizontal {
        .slide-track-horizontal {
          -webkit-box-pack: justify;
          display: flex;
          position: relative;
          width: var(--max-width) !important;
          justify-content: space-between;
        }
      }
    }
  }
}
.img {
  &__size {
    position: relative;
    border-radius: 10px;
  }

  &__margin {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    margin-top: 10px;
    margin-left: 64px;
    margin-right: 64px;
  }

  &__appear {
    display: block;
    animation: fadeIn 2s;

    -webkit-animation: fadeIn 2s;
    -moz-animation: fadeIn 2s;
    -o-animation: fadeIn 2s;
    -ms-animation: fadeIn 2s;
    cursor: pointer;

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    @-moz-keyframes fadeIn {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeIn {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    @-o-keyframes fadeIn {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    @-ms-keyframes fadeIn {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
  }

  &__show {
    max-width: 100%;
    display: block;
    animation: 2s slidein;

    @keyframes slidein {
      from {
        margin-top: 4%;
        height: 100%;
      }

      100% {
        margin-top: 0%;
        height: 80%;
      }
    }
  }
}
</style>
