<template lang="">
  <div class="wrap-container">
      <div class="over row-component">
        <ImageProduct></ImageProduct>
        <div class="infor">
          <Breadcrumb></Breadcrumb>
          <div class="product-header-wrapper">
            <HeaderProduct></HeaderProduct>
          </div>
          <RatingProduct></RatingProduct>
          <AddCart></AddCart>
        </div>
    </div>
    <div class="seperator"> <br><br> </div>
    <div class="Ads row-component">
      <AdsSlider2></AdsSlider2>
    </div>
    <div class="about row-component">
      <AboutProduct></AboutProduct>
    </div>
  </div>
    
</template>
<script>
import ImageProduct from "@/pages/store/product/components/ImageProduct.vue";
import Breadcrumb from "@/pages/store/product/components/Breadcrumb.vue";
import HeaderProduct from "@/pages/store/product/components/HeaderProduct.vue";
import RatingProduct from "@/pages/store/product/components/RatingProduct.vue";
import AddCart from "@/pages/store/product/components/AddCart.vue";
import AdsSlider2 from "@/pages/store/home/components/AdsSlider2.vue";
import AboutProduct from "@/pages/store/product/components/AboutProduct.vue";

export default {
    components: {
        ImageProduct,
        Breadcrumb,
        HeaderProduct,
        RatingProduct,
        AddCart,
        AdsSlider2,
        AboutProduct,
    },
    data() 
    {
      return 
      {
        listPrice: 369000
      };
    },
};

</script>


<style lang="scss" scoped>
.wrap-container
{
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
  position: relative;
  width: 90%;
}
.over {
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100vw;
}


.appear {
  max-width: 100%;
  display: block;
  animation: fadeIn 0.8s;

  -webkit-animation: fadeIn 0.8s;
  -moz-animation: fadeIn 0.8s;
  -o-animation: fadeIn 0.8s;
  -ms-animation: fadeIn 0.8s;
  cursor: pointer;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}

</style>