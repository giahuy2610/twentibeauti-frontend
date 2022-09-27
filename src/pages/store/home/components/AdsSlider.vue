<template lang="">
  <div class="over">
    <div class="scroll-wrapper" ref="wrapper">
      <Button
        @click="scrollRight"
        icon="pi pi-angle-left"
        class="btn-right p-button-rounded p-button-success p-button-outlined"
      />
      <Button
        @click="scrollLeft"
        icon="pi pi-angle-right"
        class="btn-left p-button-rounded p-button-success p-button-outlined"
      />
      <div class="pag">
        <div
          v-for="index in allProducts"
          class="circle-pag"
          :style="[index === currentPage ? ' background-color:white ' : '']"
          @click="scrollTo(index)"
        ></div>
      </div>

      <img
        ref="image"
        class="appear"
        v-for="item in allProducts"
        src="https://image.hsv-tech.io/1920x0/tfs/common/5e1e5fb5-8cc3-4da9-94c1-4bd9f9e55a79.webp"
        :uid="item"
        :key="item"
        @click="$router.push({ path: '/collections/flash-sale', replace: true })"
      />
    </div>
  </div>
</template>
<script>
import ProductCard from "@/components/atoms/productCard/ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      allProducts: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      currentDisplayProducts: [],
      currentPage: 1,
      count: 0,
    };
  },
  methods: {
    scrollLeft: function () {
      if (this.currentPage != this.allProducts.length) {
        this.currentPage++;
        this.$refs.wrapper.scrollLeft += screen.width;
      } else {
        this.$refs.wrapper.scrollLeft -= screen.width * this.allProducts.length;
        this.currentPage = 1;
      }
    },
    scrollRight: function () {
      if (this.currentPage != 1) {
        this.currentPage--;
        this.$refs.wrapper.scrollLeft -= screen.width;
      } else {
        this.currentPage = this.allProducts.length;
        this.$refs.wrapper.scrollLeft += screen.width * this.allProducts.length;
      }
      //this.$refs.wrapper.scrollLeft -= (screen.width - this.$refs.image[0].offsetWidth) ;
    },
    scrollTo: function (pageNum) {
      this.$refs.wrapper.scrollLeft +=
        (pageNum - this.currentPage) * screen.width;
      this.currentPage = pageNum;
    },
  },
  mounted() {
    setInterval(this.scrollLeft, 3000);
  },
};
</script>
<style lang="scss" scoped>
.over {
  position: relative;
  width: 100vw;
}
.scroll-wrapper {
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  .pag {
    position: absolute;
    width: fit-content;
    display: flex;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    gap: 0.5rem;

    .circle-pag {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      border: 1px solid white;
      cursor: pointer;
    }
  }

  .btn-right {
    position: absolute;
    top: 50%;
    z-index: 45;
    transform: translateX(50%);
  }
  .btn-left {
    position: absolute;
    top: 50%;
    z-index: 45;
    right: 0;
    transform: translateX(-50%);
  }

  .appear {
    max-width: 100%;
    display: block;
    animation: fadeIn 0.8s;
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
