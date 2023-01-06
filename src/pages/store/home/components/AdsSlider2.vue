<template lang="">
  <div class="wrapper" v-if="arrThumbnailScr.length > 0">
    <div class="wrapper__desktop">
      <!-- <Skeleton shape="square" size="100px" class="mr-2" v-show="!isLoaded">
      </Skeleton> -->
      <img
        @click="$router.push({ path: '/collection/1' })"
        v-for="(item, index) in arrThumbnailScr"
        :src="item"
        alt="sale thumbnail"
        @load="isLoaded = index"
        v-show="isLoaded"
        @mouseenter="hover = index"
        @mouseleave="hover = false"
        :class="{ 'shadow-6': hover === index }"
      />
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
                  class="img-div"
                  ref="ads"
                  v-for="(item, index) in arrThumbnailScr"
                >
                  <img
                    @click="
                      $router.push({ path: '/collection/' }),
                        (isClick = !isClick)
                    "
                    :src="item"
                    alt="sale thumbnail"
                    :clas="{ shadow2: selectedItem == index }"
                  />
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
      console.log(this.$refs.slide.scrollLeft, this.$refs.ads[0].offsetWidth);
      this.$refs.slide.scrollLeft -= this.$refs.ads[1].offsetWidth;
    },
    scrollRight() {
      console.log(this.$refs.slide.scrollLeft, this.$refs.ads[0].offsetWidth);
      this.$refs.slide.scrollLeft += this.$refs.ads[1].offsetWidth;
    },
  },
  data() {
    return {
      btnLeft: true,
      btnRight: true,
      hover: null,
      isLoaded: false,
      currentThumbnail: 0,
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
@import url("@/assets/icomoon/style.css");
@import "@/scss/mixin";

.wrapper {
  margin-top: 30px;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;

  img {
    width: 100%;
    max-width: 32.5%;
    background-size: contain;
    object-fit: contain;
    border-radius: 10px;
    flex: 1;
    cursor: pointer;
  }

  &__desktop {
    width: 100%;
    display: flex;
    gap: 1rem;
  }

  &__mobile {
    position: relative;
    align-items: center;

    .pag {
      &__btn {
        position: absolute;
        top: 50%;
        transform: translateY(-25%);
        width: 36px;
        height: 36px;
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
              width: 100%;
              width: 1200px;

              .img-div {
                max-width: 33%;
                img {
                  height: 100%;
                  max-width: 240px;
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
                    margin: 0 10px;
                  }
                }
              }
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

    &__desktop {
      display: none;
    }
  }
}
@include mini-tablet {
  .wrapper {
    img {
      width: 33%;
    }

    &__mobile {
      display: none;
    }
  }
}
@include tablet {
  .wrapper {
    img {
      width: 33%;
    }

    &__mobile {
      display: none;
    }
  }
}
@include desktop {
  .wrapper {
    max-width: 100%;

    &__mobile {
      display: none;
    }
  }
}
</style>
