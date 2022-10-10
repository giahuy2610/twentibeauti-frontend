<template lang="">
  <Wrapper>
    <div class="over">
      <ImageProduct class="sticky"></ImageProduct>
      <div class="infor">
        <Breadcrumb></Breadcrumb>
        <div class="product-header-wrapper">
          <HeaderProduct></HeaderProduct>
        </div>
        <RatingProduct></RatingProduct>
        <AddCart></AddCart>
      </div>
    </div>
    <div class="seperator"><br /><br /></div>
    <div class="Ads">
      <AdsSlider2></AdsSlider2>
    </div>
    <div class="about">
      <AboutProduct></AboutProduct>
    </div>
    <div class="detail-rating">
      <RatingDetail></RatingDetail>
    </div>
  </Wrapper>
</template>
<script>
import ImageProduct from "@/pages/store/product/components/ImageProduct.vue";
import Breadcrumb from "@/pages/store/product/components/Breadcrumb.vue";
import HeaderProduct from "@/pages/store/product/components/HeaderProduct.vue";
import RatingProduct from "@/pages/store/product/components/RatingProduct.vue";
import AddCart from "@/pages/store/product/components/AddCart.vue";
import AdsSlider2 from "@/pages/store/home/components/AdsSlider2.vue";
import AboutProduct from "@/pages/store/product/components/AboutProduct.vue";
import Wrapper from "../../Wrapper.vue";

export default {
  components: {
    ImageProduct,
    Breadcrumb,
    HeaderProduct,
    RatingProduct,
    AddCart,
    AdsSlider2,
    AboutProduct,
    Wrapper,
  },
  data() {
    return;
    {
      listPrice: 369000;
    }
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
