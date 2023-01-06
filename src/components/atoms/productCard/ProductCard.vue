<template lang="">
  <div
    @click="
      $router.push({
        name: 'product',
        params: { productid: info['IDProduct'] },
      })
    "
    class="product-card"
    data-aos="zoom-in"
  >
    <div class="product-card__img">
      <img
        :src="
          info['Images'].length > 0
            ? info['Images'][0]['Path']
            : 'https://catalogue.bticino.com/app/webroot/img/img_not_found_prod_it.jpg'
        "
        alt=""
      />
    </div>
    <div class="product-card__detail">
      <h4
        class="brand-name--hover"
        @click="$router.push({ path: `/categories/{{info['IDBrand']}}` })"
      >
        {{ info["Brand"]["NameBrand"] }}
      </h4>
      <p>{{ info["NameProduct"] }}</p>
      <div class="product-card__detail__price-row">
        <h4>{{ Intl.NumberFormat().format(info["RetailPrice"]) }}đ</h4>
        <p
          v-if="info['RetailPrice'] != info['ListPrice']"
          style="text-decoration: line-through; margin: 0 20px 0 10px"
        >
          {{ Intl.NumberFormat().format(info["ListPrice"]) }}đ
        </p>
        <div
          v-if="info['RetailPrice'] != info['ListPrice']"
          class="discount-tag"
        >
          {{ -calcDiscount }}%
        </div>
      </div>
      <Rating
        :modelValue="info['Rating']"
        :readonly="true"
        :stars="5"
        :cancel="false"
        style="width: fit-content"
      />
      <ProgressBar v-if="isCountingStock" :value="value">
        còn {{ countingStock }} sản phẩm</ProgressBar
      >
    </div>
  </div>
</template>
<script>
import { computed } from "@vue/runtime-core";
export default {
  props: ["info"],
  // data() {
  //   return {
  //     imgScr:
  //       "https://file.hstatic.net/1000036599/file/55_24eeae81610d42e1be5114ca815d7ba6.png",
  //     brandPath: "/categories/the-face-shop",
  //     brandName: "THE FACE SHOP",
  //     productName:
  //       "Combo Mix 14 Mặt Nạ THEFACESHOP THE SOLUTION DOUBLE-UP 20ml (3 BRIGHTENING, 4 FIRMING, 3 NOURISHING, 4 PORE CARE)",
  //     listPrice: 1000000,
  //     retailPrice: 560000,
  //     discountPercent: 0,
  //     ratingStar: 5,
  //     isCountingStock: false,
  //     countingStock: 99,
  //     isSoldOut: false,
  //   };
  // },
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
      return parseInt(
        (1 - this.info["RetailPrice"] / this.info["ListPrice"]) * 100
      );
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.brand-name--hover:hover {
  color: #94c83d;
  text-decoration: underline;
}
.product-card {
  padding: 10px;
  border-radius: 10px;
  background-color: #fafafa;
  box-sizing: border-box;
  text-align: center;
  font-size: smaller;
  cursor: pointer;

  &__img {
    width: inherit;
  }

  &__img img {
    
    max-width: 100%;
    height: 200px;
    object-fit: cover;
  }

  &__detail {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;

    &__price-row {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: center;
      align-items: center;
    }

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  &:hover {
    transform: translate3d(0px, -10px, 0px);
    box-shadow: rgb(0 0 0 / 15%) 0px 2px 15px;
    transition: all 0.3s ease 0s;
  }

  &:hover .add-cart-button {
    display: block;
  }
}
.discount-tag {
  position: relative;
  width: fit-content;
  padding: 2px;
  border-radius: 2px;
  background-color: #94c83d;
  box-sizing: border-box;
  font-weight: bold;
  color: #fff;

  &::before {
    content: "";
    float: left;
    position: absolute;
    top: 0px;
    left: -9px;
    width: 0;
    height: 0;
    border-color: transparent #94c83d transparent transparent;
    border-style: solid;
    border-width: 10px 10px 10px 0;
  }
  &::after {
    content: "";
    position: absolute;
    top: 45%;
    left: -3px;
    float: left;
    width: 4px;
    height: 4px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    background: #fff;
  }
}
.add-cart-button {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 50px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  display: none;
  justify-content: center;
  align-items: center;
  font-weight: bolder;

  &:hover {
    background-color: #94c83d;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
