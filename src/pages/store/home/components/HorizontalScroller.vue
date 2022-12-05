<template lang="">
  <div class="over">
    <div class="scroll-wrapper" ref="wrapper">
      <Button
        v-show="currentPage > 1"
        @click="scrollRight"
        icon="pi pi-angle-left"
        class="btn-right p-button-rounded p-button-success p-button-outlined"
      />
      <Button
        v-show="currentPage < Math.ceil(products.length / 5)"
        @click="scrollLeft"
        icon="pi pi-angle-right"
        class="btn-left p-button-rounded p-button-success p-button-outlined"
      />
      <div class="item"></div>
      <ProductCard
        class="appear"
        v-for="item in products"
        :info="item"
      ></ProductCard>
    </div>
  </div>
</template>
<script>
import ProductCard from "@/components/atoms/productCard/ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
  props: ["products"],
  data() {
    return {
      currentDisplayProducts: [],
      currentPage: 1,
      count: 0,
    };
  },
  methods: {
    scrollLeft: function () {
      this.currentPage++;
      this.$refs.wrapper.scrollLeft += this.$refs.wrapper.offsetWidth;
    },
    scrollRight: function () {
      this.currentPage--;
      this.$refs.wrapper.scrollLeft -= this.$refs.wrapper.offsetWidth;
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.over {
  position: relative;
}
.scroll-wrapper {
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
  scroll-behavior: smooth;
  padding-top: 15px;

  &::-webkit-scrollbar {
    display: none;
  }

  .btn-right {
    position: absolute;
    top: 50%;
    z-index: 30;
    transform: translateX(-50%);
  }
  .btn-left {
    position: absolute;
    top: 50%;
    z-index: 30;
    right: 0;
    transform: translateX(50%);
  }

  .appear {
    width: 230px;
    margin: 0 10px;
    display: block;
    animation: fadeIn 0.8s;
    -webkit-animation: fadeIn 0.8s;
    -moz-animation: fadeIn 0.8s;
    -o-animation: fadeIn 0.8s;
    -ms-animation: fadeIn 0.8s;

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
