<template lang="">
  <Wrapper>
    <ProductInfor
      :productName="this.productName"
      :listPrice="this.listPrice"
      :retailPrice="this.retailPrice"
      :brandName="this.brandName"
      :discountPercent="this.discountPercent"
      :ratingStar="this.ratingStar"
      :numReviews="this.reviews.length"
    ></ProductInfor>
    <div class="seperator"><br /><br /><br /><br /></div>
    <div class="Ads">
      <AdsSlider2></AdsSlider2>
    </div>
    <div class="about">
      <AboutProduct></AboutProduct>
    </div>
    <div class="detail-rating">
      <RatingDetail :reviews="this.reviews"></RatingDetail>
    </div>
    <div class="relevant-product">
      <RelevantProduct></RelevantProduct>
    </div>
    <div class="bottom-navigation">
      <Transition name="slide">
        <BottomNavigation
          :productName="this.productName"
          :listPrice="this.listPrice"
          :retailPrice="this.retailPrice"
          v-show="windowTop >= 400"
        ></BottomNavigation>
      </Transition>
    </div>
  </Wrapper>
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
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(e) {
      this.windowTop =
        window.top.scrollY; /* or: e.target.documentElement.scrollTop */
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    //this.primaryColor = document.documentElement.style.getPropertyValue('--primary-color');
    //document.documentElement.style.setProperty('--primary-color', '#fff');
    let __protocol = document.location.protocol;
    let __baseUrl = __protocol + "//livechat.fpt.ai/v35/src";

    let prefixNameLiveChat = "twenti";
    let objPreDefineLiveChat = {
        appCode: "871880b5f6606337b170c0132e4a0d9f",
        themes: "",
        appName: prefixNameLiveChat ? prefixNameLiveChat : "Live support",
        thumb: "",
        icon_bot: "",
      },
      appCodeHash = window.location.hash.substr(1);
    if (appCodeHash.length == 32) {
      objPreDefineLiveChat.appCode = appCodeHash;
    }

    let fpt_ai_livechat_script = document.createElement("script");
    fpt_ai_livechat_script.id = "fpt_ai_livechat_script";
    fpt_ai_livechat_script.src = __baseUrl + "/static/fptai-livechat.js";
    document.body.appendChild(fpt_ai_livechat_script);

    let fpt_ai_livechat_stylesheet = document.createElement("link");
    fpt_ai_livechat_stylesheet.id = "fpt_ai_livechat_script";
    fpt_ai_livechat_stylesheet.rel = "stylesheet";
    fpt_ai_livechat_stylesheet.href = __baseUrl + "/static/fptai-livechat.css";
    document.body.appendChild(fpt_ai_livechat_stylesheet);

    fpt_ai_livechat_script.onload = function () {
      fpt_ai_render_chatbox(
        objPreDefineLiveChat,
        __baseUrl,
        "livechat.fpt.ai:443"
      );
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/mixin";
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


</style>
