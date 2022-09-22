<template lang="">
  <div class="product-card">
    <div class="product-card__img">
      <img src="" alt="" />
    </div>
    <div class="product-card__detail">
      <h3>{{ brandName }}</h3>
      <p>{{ productName }}</p>
      <div class="product-card__detail__price-row">
        <h4>{{ retailPrice }}</h4>
        <p
          v-if="retailPrice !== listPrice"
          style="text-decoration: line-through"
        >
          {{ listPrice }}
        </p>
        <div v-if="retailPrice !== listPrice" class="discount-tag">
          {{ calcDiscount }}
        </div>
      </div>
      <Rating
        :modelValue="ratingStar"
        :readonly="true"
        :stars="5"
        :cancel="false"
      />
      <ProgressBar v-if="isCountingStock" :value="value">
        còn {{ countingStock }} sản phẩm</ProgressBar
      >
      <div class="add-cart-button">
        Mua ngay
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "@vue/runtime-core";
export default {
  data() {
    return {
      imgScr: "",
      brandPath: "",
      brandName: "",
      productName: "",
      listPrice: 0,
      retailPrice: 0,
      discountPercent: 0,
      ratingStar: 0,
      isCountingStock: false,
      countingStock: 99,
      isSoldOut: false,
    };
  },
  watch: {
    countingStock() {
      //if countingStock equal to 0 then isSoldOut is true
      this.countingStock != 0
        ? (this.isSoldOut = false)
        : this.isSoldOut == true;
    },
  },

  computed: {
    calcDiscount() {
      return parseInt((this.listPrice / this.retailPrice) * 100);
    },
  },
};
</script>
<style lang="scss">
.product-card {
  width: 230px;
  height: 400px;
  padding: 10px;

  :hover {
    transform: translate(0px, 50px);
    box-shadow: inset 0px 0px 0px;
  }
}
.discount-tag {
  width: fit-content;
  border-radius: 2px;
  background-color: #94c83d;

  ::before {
    position: absolute;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid blue;
  }
}
.add-cart-button {
  width: 100px;
  height: 50px;
  border-radius: 10px;
  background-color: rgba(0,0,0,0.5);
  color: #fff;

  :hover {
    background-color: #94c83d;
  }

}
</style>
