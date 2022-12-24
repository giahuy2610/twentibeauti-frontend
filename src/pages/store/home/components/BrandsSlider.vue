<template lang="">
  <div class="brands-slider">
    <div class="brands-slider__thumbnail" v-for="(item, index) in brands">
      <router-link :to="item.brandPath"
        ><img :src="item.brandImg" :alt="item.brandName"
      /></router-link>
    </div>
  </div>
  <div class="wrapper">
    <div class="wrapper__mobile">
      <button v-show="btnLeft" @click="scrollLeft()" class="pag__btn btn__up">
        <span class="icon-chevron-thin-left"></span>
      </button>
      <div class="scroll-wrapper" ref="wrapper">
        <div class="container-slide" ref="slide">
          <div class="slick-slider">
            <div class="slick-list">
              <div class="slide-track">
                <div
                  ref="imgs"
                  class="brands-slider__thumbnail"
                  v-for="(item, index) in brands"
                >
                  <a :href="item.brandPath">
                    <img :src="item.brandImg" :alt="item.brandName"
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        v-show="btnRight"
        @click="scrollRight()"
        class="pag__btn btn__down"
      >
        <span class="icon-chevron-thin-right"></span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    scrollLeft() {
      console.log(this.$refs.slide.scrollLeft, this.$refs.imgs[0].offsetWidth);
      this.$refs.slide.scrollLeft -= this.$refs.imgs[0].offsetWidth;
    },
    scrollRight() {
      console.log(this.$refs.slide.scrollLeft, this.$refs.imgs[0].offsetWidth);
      this.$refs.slide.scrollLeft += this.$refs.imgs[0].offsetWidth;
    },
  },
  data() {
    return {
      brands: [
        {
          brandName: "a",
          brandImg:
            "https://image.hsv-tech.io/600x0/tfs/common/6c1a7210-1608-436e-aa42-ba1507de8d62.webp",
          brandPath: "/collection/1",
        },
        {
          brandName: "a",
          brandImg:
            "https://image.hsv-tech.io/1000x0/tfs/common/8075cb51-f2bf-422e-9585-967bd0cd51f3.webp",
          brandPath: "/collection/1",
        },
        {
          brandName: "a",
          brandImg:
            "https://image.hsv-tech.io/1000x0/tfs/common/660f0f2e-4cd7-4380-9857-795d293cdd79.webp",
          brandPath: "/collection/1",
        },
        {
          brandName: "a",
          brandImg:
            "https://image.hsv-tech.io/1000x0/tfs/common/7e9ac401-f750-496c-beca-b7ca75694379.webp",
          brandPath: "/collection/1",
        },
        {
          brandName: "a",
          brandImg:
            "https://image.hsv-tech.io/400x0/tfs/common/ad51e07e-e764-4771-805f-4dc352e4d671.webp",
          brandPath: "/collection/1",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import url("@/assets/icomoon/style.css");
@import "@/scss/mixin";

.brands-slider {
  margin-bottom: 1rem;
  display: flex;
  gap: 10px;

  &__thumbnail {
    flex: 1;

    img {
      max-width: 100%;
      height: 120px;
      object-fit: fill;
      border-radius: 10px;

      &:hover {
        border: 1px solid black;
      }
    }
  }
}

.wrapper {
  margin-top: 30px;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;

  &:hover {
    transform: translate3d(0px, -5px, 0px);
    box-shadow: rgb(0 0 0 / 15%) 0px 2px 15px;
    transition: all 0.3s ease 0s;
    cursor: pointer;
  }
  &:nth-child(2n) {
    margin: 0 10px;
  }

  &__mobile {
    position: relative;
    align-items: center;

    .pag {
      &__btn {
        display: inline !important;
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

      .container-slide {
        overflow: hidden;
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
              gap: 10px;
              padding: 20px 12px;
              -webkit-box-pack: justify;
              display: flex;
              height: max-content;
              overflow-y: hidden;
              position: relative;
              width: 1600px;
            }
          }
        }
      }
    }
  }
}
@include mobile {
  .wrapper {
    width: 250%;

    .brands-slider {
      display: none;
    }
  }
}
@include desktop {
  .wrapper {
    display: none;
  }
}
@include mini-tablet {
  .wrapper {
    width: 250%;
    .slide-track {
      width: 3200px;
    }
    .brands-slider {
      display: none;
    }
  }
}
@include tablet {
  .wrapper {
    width: 250%;
    .slide-track {
      width: 3200px;
    }

    .brands-slider {
      display: none;
    }
  }
}
</style>
