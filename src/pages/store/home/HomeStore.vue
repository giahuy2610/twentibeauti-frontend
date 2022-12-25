<template lang="">
  <div class="home__wrapper">
    <AdsSlider></AdsSlider>
    <Wrapper>
      <div class="home__wrapper__content">
        <BrandsSlider></BrandsSlider>
        <FlashSale24H collectionFlashSaleID="80"></FlashSale24H>
        <AdsSlider2 style="margin: 2rem 0"></AdsSlider2>
        <SignatureProductsTabView></SignatureProductsTabView>
      </div>
    </Wrapper>
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
import Wrapper from "../../Wrapper.vue";
export default {
  components: {
    ProductCard,
    ButtonPrimary,
    AdsSlider,
    AdsSlider2,
    SignatureProductsTabView,
    FlashSale24H,
    BrandsSlider,
    Wrapper,
  },
  data() {
    return {
      adsList: [],
    };
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
  overflow: hidden;

  &__content {
    width: 100%;
  }
}
</style>
