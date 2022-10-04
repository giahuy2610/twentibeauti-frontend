<template lang="">
    <div class="over">
        <ImageProduct></ImageProduct>
        <div class="infor">
          <Breadcrumb></Breadcrumb>
          <div class="product-header-wrapper">
            <HeaderProduct></HeaderProduct>
          </div>
            <RatingProduct></RatingProduct>
            <div class="price">
              <p>{{ Intl.NumberFormat().format(listPrice) }}đ</p>
            </div>
            <AddCart></AddCart>
        </div>
    </div>
</template>
<script>
import ImageProduct from "@/pages/store/product/components/ImageProduct.vue";
import Breadcrumb from "@/pages/store/product/components/Breadcrumb.vue";
import HeaderProduct from "@/pages/store/product/components/HeaderProduct.vue";
import RatingProduct from "@/pages/store/product/components/RatingProduct.vue";
import AddCart from "@/pages/store/product/components/AddCart.vue"
export default {
    components: {
        ImageProduct,
        Breadcrumb,
        HeaderProduct,
        RatingProduct,
        AddCart,
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