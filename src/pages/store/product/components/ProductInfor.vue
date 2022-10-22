<template lang="">
    <div class="over">
        <ImageProduct class="sticky"></ImageProduct>
        <div class="infor">
          <Breadcrumb></Breadcrumb>
          <div class="product-header-wrapper">
            <HeaderProduct 
            :productName="this.productName"
            :brandName="this.brandName"
            ></HeaderProduct>
          </div>
          <RatingProduct 
          :ratingStar="this.ratingStar"
          :numReviews="this.numReviews"
          ></RatingProduct>
          <Price
          :listPrice="this.listPrice"
          :retailPrice="this.retailPrice"
          :discountPercent="this.discountPercent"></Price>
          <AddCart></AddCart>
        </div>
    </div>
</template>
<script>
import ImageProduct from "../components/productinfor/ImageProduct.vue";
import Breadcrumb from "../components/productinfor/Breadcrumb.vue";
import HeaderProduct from "../components/productinfor/HeaderProduct.vue";
import RatingProduct from "../components/productinfor/RatingProduct.vue";
import Price from '../components/productinfor/Price.vue';
import AddCart from "../components/productinfor/AddCart.vue";
export default {
  props: ['productName', 'listPrice', 'retailPrice', 'brandName', 'discountPercent', 'ratingStar','numReviews'],
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
.over {
  display: flex;
  flex-direction: row;
  position: relative;
}
.sticky {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  margin-top: 10px;
}
</style>