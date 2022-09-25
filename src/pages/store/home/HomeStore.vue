<template lang="">
  <div class="home__wrapper">
    <div class="" style="height: 1000px"></div>
    <AdsSlider></AdsSlider>
    <div class="home__wrapper__content">
      <ProductCard uid="123"></ProductCard>
      <ButtonPrimary message="Xem tất cả"></ButtonPrimary>
      <AdsSlider2></AdsSlider2>
      <SignatureProductsTabView></SignatureProductsTabView>
      <FlashSale24H></FlashSale24H>
      <BrandsSlider></BrandsSlider>
    </div>
  </div>
</template>
<script>
import ProductCard from "@/components/atoms/productCard/ProductCard.vue";
import ButtonPrimary from "@/components/atoms/buttonPrimary/ButtonPrimary.vue";
import AdsSlider from "./components/AdsSlider.vue";
import AdsSlider2 from "./components/AdsSlider2.vue";
import SignatureProductsTabView from "./components/SignatureProductsTabView.vue";
import FlashSale24H from "./components/FlashSale24H.vue";
import BrandsSlider from "./components/BrandsSlider.vue";
export default {
  components: {
    ProductCard,
    ButtonPrimary,
    AdsSlider,
    AdsSlider2,
    SignatureProductsTabView,
    FlashSale24H,
    BrandsSlider,
  },
};
</script>
<style lang="scss" scoped>
.home__wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 70px;
  overflow: hidden;

  &__content {
    width: 100%;
    max-width: 1300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
  }
}
</style>
