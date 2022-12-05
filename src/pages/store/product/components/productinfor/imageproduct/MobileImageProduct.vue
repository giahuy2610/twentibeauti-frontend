<template lang="">
  <div class="wrapper__mobile">
    <button v-show="btnLeft" @click="scrollLeft()" class="pag__btn btn__up">
      <span class="icon-chevron-thin-left"></span>
    </button>
    <div class="scroll-wrapper">
      <div class="container-slide" ref="slide">
        <Skeleton shape="square" size="300px" v-show="!isLoaded"> </Skeleton>
        <div class="slick-slider">
          <div class="slick-list">
            <div :style="maxWidth" class="slide-track">
              <div ref="img" v-for="(item, index) in illustProducts">
                <img
                  :src="item['Path']"
                  @load="isLoaded = true"
                  v-show="isLoaded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button v-show="btnRight" @click="scrollRight()" class="pag__btn btn__down">
      <span class="icon-chevron-thin-right"></span>
    </button>
  </div>
</template>

<script>
export default {
  props: ["illustProducts"],
  computed: {
    maxWidth() {
      return {
        "--max-width": this.illustProducts.length * 350 + "px",
      };
    },
  },
  watch: {
    btnLeft: function () {
      if (this.$refs.slide.scrollLeft != this.$refs.slide.scrollLeft) {
        this.btnLeft = true;
        console.log("Hiii");
      }
    },
  },
  methods: {
    scrollLeft() {
      //console.log(this.$refs.slide.scrollLeft, this.$refs.img[0].offsetWidth);
      this.$refs.slide.scrollLeft -= this.$refs.img[0].scrollWidth;
      console.log("Left");
      console.log(this.maxWidth);
    },
    scrollRight() {
      //console.log(this.$refs.slide.scrollLeft, this.$refs.img[0].offsetWidth);
      this.$refs.slide.scrollLeft += this.$refs.img[0].scrollWidth;
      console.log("Right");
    },
  },
  data() {
    return {
      btnLeft: true,
      btnRight: true,
      currentIllust: 0,
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
};
</script>

<style lang="scss" scoped>
@import url("@/assets/icomoon/style.css");

.wrapper__mobile {
  position: relative;
  align-items: center;
  margin-top: 30px;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;

  img {
    max-width: 100%;
    background-size: contain;
    object-fit: contain;
    border-radius: 10px;
    width: 300px;
    height: 300px;
    margin: 0px 20px;
  }

  .pag {
    &__btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 48px;
      height: 48px;
      background: rgb(255, 255, 255);
      box-shadow: rgb(184 193 202) 0px 0px 10px;
      border: none;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      border-radius: 100%;
      cursor: pointer;
      z-index: 10;
      user-select: auto !important;
    }
  }

  .btn {
    &__up {
      left: 15px;
    }

    &__down {
      right: 15px;
    }
  }

  .scroll-wrapper {
    position: relative;
    left: 0;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    margin: 0px auto;

    .container-slide {
      position: relative;
      touch-action: pan-x;
      overflow-x: scroll;
      scroll-behavior: smooth;

      &::-webkit-scrollbar {
        display: none;
      }

      .slick-slider {
        height: 100%;

        .slick-list {
          width: 100vw;
          margin: -20px -12px;

          .slide-track {
            padding: 20px 12px;
            -webkit-box-pack: justify;
            display: flex;
            overflow-y: hidden;
            position: relative;
            min-width: var(--max-width);

            .image_box {
              width: 300px;
              height: 300px;
            }
          }
        }
      }
    }
  }
}
</style>
1
