<template lang="">
<div class="wrapper">
    <div class="wrapper__desktop">
        <!-- <Skeleton shape="square" size="100px" class="mr-2" v-show="!isLoaded">
      </Skeleton> -->
        <img @click="$router.push({ path: '/collections/'})" v-for="(item, index) in arrThumbnailScr" :src="item" alt="sale thumbnail" @load="isLoaded = index" v-show="isLoaded" @mouseenter="hover = index" @mouseleave="hover = false" :class="{ 'shadow-6': hover === index }" />
    </div>
</div>
<div class="wrapper">
    <div class="wrapper__mobile">
        <div class="scroll-wrapper" ref="wrapper">
            <div class="container-slide" ref="slide">
                <div class="region">
                    <div class="gap">
                        <div class="horizon-scroll">
                            <button @click="scrollRight(), (isClick = !isClick), (selectedItem = selectedItem + 1)" class="pag__btn btn__up"><span class="icon-chevron-thin-up"></span></button>
                            <div class="slide-list">
                                <img v-for="(item, index) in arrThumbnailScr" @click="$router.push({ path: '/collections/'}), (isClick = !isClick), (selectedItem = index)" :src="item" alt="sale thumbnail" :clas="{shadow2: selectedItem == index}" />
                            </div>
                            <button @click="scrollLeft(), (isClick = !isClick), (selectedItem = selectedItem - 1)" class="pag__btn btn__down"><span class="icon-chevron-thin-down"></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      hover: null,
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
@import url("@/assets/icomoon/style.css");
@import "@/scss/mixin";

@include mobile {
  .wrapper {
    width: 250%;

    &__desktop {
      display: none;
    }
  }
}

@include desktop {
  .wrapper {
    width: 100%;

    &__mobile {
      display: none;
    }
  }
}

.wrapper {
  display: flex;
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

  &__mobile {
    .scroll-wrapper {
      position: relative;
      padding-top: 5px;
      top: 0;
      margin-top: 10px;
      display: flex;
      flex-direction: row;
      scroll-behavior: smooth;
      flex-basis: 100px;
      align-items: center;

      &::-webkit-scrollbar {
        display: none;
      }

      .container-slide {
        padding-left: 0px !important;
        padding-right: 0px !important;
        display: block;
        flex: 0 0 100%;
        max-width: 100%;
        min-height: 1px;
        position: relative;

        .region {
          height: 100%;

          .gap {
            gap: 10px;

            .horizon-scroll {
              margin: -20px -12px;
              height: 100%;
              position: relative;
              display: flex;
              .slide-list {
                padding: 20px 12px;
                -webkit-box-pack: justify;
                justify-content: space-between;
                gap: 10px;
                display: flex;
                height: max-content;
                overflow-y: hidden;
                position: relative;
                width: 100%;
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
            }
          }
        }
      }
    }
  }
}
</style>
