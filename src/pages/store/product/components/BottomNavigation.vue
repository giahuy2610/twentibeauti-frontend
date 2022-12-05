<template lang="">
  <div class="bottom-navigation">
    <div class="region">
      <div class="item bottom_animation">
        <ProductBottom
          class="productBottom"
          :productName="this.productName"
          :listPrice="this.listPrice"
          :retailPrice="this.retailPrice"
          :productImage="this.productImage"
        ></ProductBottom>
        <div class="button">
          <CheckCard></CheckCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductBottom from "@/pages/store/product/components/bottomnavigation/ProductBottom.vue";
import CheckCard from "@/pages/store/product/components/productinfor/addcart/CheckCard.vue";
export default {
  components: {
    ProductBottom,
    CheckCard,
  },
  props: ["productName", "listPrice", "retailPrice", "productImage"],
};
</script>

<style lang="scss" scoped>
@import "@/scss/mixin";
.bottom-navigation {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;

  .region {
    -webkit-box-pack: justify;
    justify-content: space-between;
    border: 1px solid rgb(239, 239, 239);
    box-shadow: rgb(0 0 0 / 10%) 0px 2px 14px;
    border-radius: 10px;
    background: rgb(255, 255, 255);
    padding: 10px;
    margin-bottom: 24px;
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;

    position: relative;
    width: 90%;

    .item {
      gap: 22px;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      justify-content: space-between;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
    }

    .button {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      justify-content: space-between;

      float: right;
      right: 0px;
    }
  }
}
.bottom_animation {
  max-width: 100%;
  display: block;
  animation: 10s slidein;

  @keyframes slidein {
    from {
      height: 100%;
    }
    100% {
      height: 80%;
    }
  }
}

@include mobile {
  .bottom-navigation {
    .region {
      width: 100%;
      margin-bottom: 0px;
      border-radius: 0px;
      justify-content: space-around;
      .item {
        gap: 0px;
      }
      .button {
        margin: 0 auto;
      }
    }
    .productBottom {
      display: none;
    }
  }
}
@include mini-tablet {
  .productBottom {
    display: none;
  }
  .region {
    width: 100%;
    margin-bottom: 0px;
    border-radius: 0px;
    justify-content: space-around;
    .item {
      gap: 0px;
    }
    .button {
      margin: 0 auto;
    }
  }
}
@include tablet {
  .productBottom {
    width: 40%;
  }
  .region {
    max-width: 100%;
    margin-bottom: 0px;
    border-radius: 0px;
    justify-content: space-around;
    .item {
      gap: 0px;
    }
  }
}
@include desktop {
  .productBottom {
    width: 50%;
  }
}
</style>
