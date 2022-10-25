<template lang="">
    <div class="over">
        <ImageProduct class="imageProduct"></ImageProduct>
        <div class="infor">
          <Breadcrumb></Breadcrumb>
          <div class="product-header-wrapper">
            <HeaderProduct class="headerProduct"
            :productName="this.productName"
            :brandName="this.brandName"
            ></HeaderProduct>
          </div>
          <RatingProduct class="ratingProduct"
          :ratingStar="this.ratingStar"
          :numReviews="this.numReviews"
          ></RatingProduct>
          <Price class="price"
          :listPrice="this.listPrice"
          :retailPrice="this.retailPrice"
          :discountPercent="this.discountPercent"></Price>
          <AddCart class="addCart"></AddCart>
        </div>
    </div>
</template>
<script>
import ImageProduct from "../components/productinfor/ImageProduct.vue";
import Breadcrumb from "../components/productinfor/Breadcrumb.vue";
import HeaderProduct from "../components/productinfor/HeaderProduct.vue";
import RatingProduct from "../components/productinfor/RatingProduct.vue";
import Price from "../components/productinfor/Price.vue";
import AddCart from "../components/productinfor/AddCart.vue";
export default {
  props: [
    "productName",
    "listPrice",
    "retailPrice",
    "brandName",
    "discountPercent",
    "ratingStar",
    "numReviews",
  ],
  components: {
    ImageProduct,
    Breadcrumb,
    HeaderProduct,
    RatingProduct,
    Price,
    AddCart,
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";

@include mobile {
  .imageProduct {
    position: relative;
  }
  .over {
    width: 100vw;
    display: flex;
    flex-direction: column;
  }
  .infor {
  }
  .addCart{
    display: none;
  }
}
@include mini-tablet {
}
@include tablet {
}
@include desktop {
  .imageProduct {
    position: sticky;
  }
  .over {
    display: flex;
    flex-direction: row;
    position: relative;
  }
}
</style>