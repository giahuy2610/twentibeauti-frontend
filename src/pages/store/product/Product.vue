<template lang="">
  <div class="home__wrapper">
    <Wrapper>
      <div class="home__wrapper__content"></div>
      <ProductInfor
        :productName="this.productName"
        :listPrice="this.listPrice"
        :retailPrice="this.retailPrice"
        :brandName="this.brandName"
        :discountPercent="this.discountPercent"
        :ratingStar="this.ratingStar"
        :numReviews="this.reviews.length"
      ></ProductInfor>
      <div class="seperator"></div>
      <div class="Ads">
        <AdsSlider2></AdsSlider2>
      </div>
      <div class="divider-horizontal"></div>
      <div class="about">
        <AboutProduct></AboutProduct>
      </div>
      <div class="detail-rating">
        <RatingDetail :reviews="this.reviews"></RatingDetail>
      </div>
      <div class="divider-horizontal"></div>
      <div class="relevant-product">
        <RelevantProduct></RelevantProduct>
      </div>
      <div class="bottom-navigation">
        <Transition name="slide">
          <BottomNavigation
          class="bottomNavigation"
          :productName="this.productName"
          :listPrice="this.listPrice"
          :retailPrice="this.retailPrice"
          v-show="windowTop >= 400"
        ></BottomNavigation>
        </Transition>
      </div>
    </Wrapper>
  </div>
</template>

<script>
import AdsSlider2 from "@/pages/store/home/components/AdsSlider2.vue";
import AboutProduct from "@/pages/store/product/components/AboutProduct.vue";
import RatingDetail from "@/pages/store/product/components/RatingDetail.vue";
import RelevantProduct from "@/pages/store/product/components/RelevantProduct.vue";
import ProductInfor from "@/pages/store/product/components/ProductInfor.vue";
import BottomNavigation from "@/pages/store/product/components/BottomNavigation.vue";

import Wrapper from "../../Wrapper.vue";

export default {
  components: {
    ProductInfor,
    AdsSlider2,
    AboutProduct,
    RatingDetail,
    RelevantProduct,
    BottomNavigation,
    Wrapper,
  },
  data() {
    return {
      windowTop: 0,
      productName:
        "Mặt Nạ Kỳ Dịu Nhẹ THE FACE SHOP Smart Peeling Mild Papaya 150ml",
      listPrice: 369000,
      retailPrice: 379000,
      discountPercent: 0,
      brandName: "THE FACE SHOP",
      ratingStar: 4,
      reviews: [
        {
          numstar: 5,
          date: "22/10/2022",
          short: "Sản phẩm tuyệt",
          long: "Peel da rất tốt",
        },
        {
          numstar: 5,
          date: "5/5/2022",
          short: "Chưa sài chưa biết",
          long: "Ship hơi lâu",
        },
        {
          numstar: 4,
          date: "7/6/2022",
          short: "Sản phẩm gây châm chít",
          long: "Sản phẩm lột lớp sừng trên bề mặt da",
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(e) {
      this.windowTop =
        window.top.scrollY; /* or: e.target.documentElement.scrollTop */
    },
  },
};
</script>

<style lang="scss" scoped>

@import "@/scss/mixin";

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

@include mobile {
  .bottomNavigation
  {
    display : none;
  }

}
@include desktop {
  
}
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter-from {
  transform: translate(0, 100%);
}
.slide-enter-to {
  transform: translate(0, 0%);
}
.slide-leave-to {
  transform: translate(0, 100%);
}
.seperator{
  margin: 10px 0px;
}
.divider-horizontal {
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  margin: 1rem 0rem;
  display: flex;
  clear: both;
  font-size: 14px;
  line-height: 1.5715;
}
</style>
