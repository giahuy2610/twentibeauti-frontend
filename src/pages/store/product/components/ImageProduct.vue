<template lang="">
    <div class="scroll-wrapper" ref="wrapper" >
        <Button
            @click="scrollUp"
            icon="pi pi-angle-up "
            class="pag__btn btn__up p-button p-button-rounded p-button-outlined"
        />
        <div class="container-slide" ref="slide">
            <div class="slick-slider">
                <div class="slick-list" >
                    <div class="slick-track">
                        <div ref="btn" v-for="(item,index) in illustProducts" :key="index">
                          <Button @click="scrollTo(index), click= !click" class="pag__size pag__btn p-button-lg p-button-rounded p-button-outlined" :style="{backgroundImage : `url(${this.illustProducts[index]})`}"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Button
          @click="scrollDown"
          icon="pi pi-angle-down"
          class="pag__btn btn__down p-button p-button-rounded p-button-outlined"
        />
    </div>
    <div class="img__size" :class="{img__appear : click}" >
      <img :src="currentImg" alt="Ảnh sản phẩm">
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
        this.$refs.slide.scrollTop +=
          this.$refs.btn[0].offsetHeight * (this.illustProducts.length - 1);
        this.currentIllust = this.illustProducts.length;
      }
      console.log(this.currentIllust);
    },
    scrollUp() {
      if (this.currentIllust != this.illustProducts.length) {
        this.currentIllust++;
        this.$refs.slide.scrollTop += this.$refs.btn[0].offsetHeight;
      } else {
        this.$refs.slide.scrollTop -=
          this.$refs.btn[0].offsetHeight * (this.illustProducts.length - 1);
        this.currentIllust = 1;
      }
      console.log(this.currentIllust);
    },
    scrollTo(index) {
      console.log(index);
      this.$refs.slide.scrollTop +=
        this.$refs.btn[0].offsetHeight * (index + 1 - this.currentIllust);
      this.currentIllust = index + 1;
      console.log(this.currentIllust);
    },
  },
  data() {
    return {
      click : false,
      currentIllust: 1,
      imageid: 1,
      illustProducts: [
        "https://image.hsv-tech.io/0x400/tfs/common/fda5ef41-4b41-4bfb-9b07-6cdcdad2f0e9.webp",
        "https://image.hsv-tech.io/0x400/tfs/common/1c7d5f29-0e3b-48d6-805f-deeafc29a01a.webp",
        "https://image.hsv-tech.io/0x400/tfs/common/4622d29c-9c01-4a30-9ba2-6a4756b69514.webp",
        "https://image.hsv-tech.io/0x400/tfs/common/27c2301d-ac0a-457a-b866-253dbf3a814e.webp",
        "https://image.hsv-tech.io/0x400/tfs/common/2d266998-c491-4354-ad70-e3dd2954a80b.webp",
      ],
    };
  },
  computed: {
    currentImg() {
      return this.illustProducts[
        Math.abs(this.currentIllust - 1) % this.illustProducts.length
      ];
    },
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
  .pag {
    &__btn {
      margin: 0.5rem;
    }
    &__size {
      background-size: 165%;
      background-size: contain;
    }
  }

  .btn {
    &__up {
      position: relative;
      z-index: 100;
    }

    &__down {
      position: relative;
      z-index: 100;
    }
  }
}
.img {
  &__size {
    object-fit: contain;
    height: 50vh;
    margin-right: 3rem;
  }
  &__appear {
    max-width: 100%;
    display: block;
    animation: fadeIn 3s;
    -webkit-animation: fadeIn 0.8s;
    -moz-animation: fadeIn 0.8s;
    -o-animation: fadeIn 0.8s;
    -ms-animation: fadeIn 0.8s;
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
}
</style>