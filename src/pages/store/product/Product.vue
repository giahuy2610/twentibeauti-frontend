<template lang="">
  <Loading v-if="loading" />
  <div class="home__wrapper" v-else>
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
        :illustProducts="this.illustProducts"
        :country="brandCountry"
      ></ProductInfor>
      <div class="seperator"></div>
      <div class="Ads">
        <AdsSlider2></AdsSlider2>
      </div>
      <div class="divider-horizontal"></div>
      <div class="about">
        <AboutProduct :descriptions="this.descriptions"></AboutProduct>
      </div>
      <div class="detail-rating" ref="detailRating">
        <RatingDetail :reviews="this.reviews"></RatingDetail>
      </div>
      <div class="divider-horizontal"></div>
      <div
        class="relevant-product"
        ref="relevantProduct"
        v-if="relevantProducts.length > 0"
      >
        <RelevantProduct :products="this.relevantProducts"></RelevantProduct>
      </div>
      <div class="bottom-navigation">
        <Transition name="slide">
          <BottomNavigation
            class="bottomNavigation"
            :productName="productName"
            :listPrice="listPrice"
            :retailPrice="retailPrice"
            :productImage="illustProducts[0]"
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
import Loading from "@/components/atoms/loadingScreen/Loading.vue";
import Wrapper from "../../Wrapper.vue";
import axios from "axios";
import { isProxy, toRaw } from "vue";

export default {
  components: {
    ProductInfor,
    AdsSlider2,
    AboutProduct,
    RatingDetail,
    RelevantProduct,
    BottomNavigation,
    Wrapper,
    Loading,
  },
  data() {
    return {
      load_detail: false,
      //product_item:undefined,
      windowTop: 0,
      productName: "",
      listPrice: 0,
      retailPrice: 0,
      discountPercent: 0,
      descriptions: "",
      brandName: "THE FACE SHOP",
      brandCountry: "",
      ratingStar: 0,
      illustProducts: [],
      reviews: [],
      relevantProducts: [],
      loading: true,
    };
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.windowTop =
        window.top.scrollY; /* or: e.target.documentElement.scrollTop */
      var ratingHeading = this.$refs["detailRating"];
      //var relevantHeading = this.$refs["relevantProduct"];

      if (ratingHeading) {
        var marginTopRating = ratingHeading.getBoundingClientRect().top;
        var innerHeight = window.innerHeight;

        if (marginTopRating - innerHeight < -50 && this.load_detail == false) {
          // console.log(marginTopRating,innerHeight)
          this.load_detail = true;
          //   axios
          //     .get("/review/showproduct/53050323")
          //     .then((response) => {
          //       //this.product_item = toRaw(response.data)
          //       this.reviews = response.data;
          //       console.log(response.data);
          //     })
          //     .catch((error) => {
          //       console.log(error);
          //     });
        }
      }
    },
  },
  async mounted() {
    await this.axios
      .get("/product/show/" + this.$route.params.productid)
      .then((response) => {
        this.productName = response.data.NameProduct;
        this.listPrice = response.data.ListPrice;
        this.retailPrice = response.data.RetailPrice;
        this.descriptions = response.data.Description;
        this.illustProducts = response.data.Images;
        this.brandName = response.data.Brand.NameBrand;
        this.relevantProducts = [];
        this.ratingStar = response.data.Rating;
        this.reviews = response.data.Reviews;
        this.brandCountry = response.data.Brand.Country;
      })
      .catch((error) => {
        console.log(error);
        this.$route.push({name: 'not found'})
      });

      this.loading = false;

    this.$nextTick(() => {
      window.addEventListener("scroll", this.onScroll);
      this.onScroll();
    });
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
  unmounted() {
    document.getElementById("fpt_ai_livechat_button").remove();
    document.getElementById("fpt_ai_livechat_display_container").remove();
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
  overflow-x: hidden;

  &__content {
    width: 100%;
  }
}

@include mobile {
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

.seperator {
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
