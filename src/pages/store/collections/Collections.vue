<template lang="">
  <Wrapper>
    <div class="content">
      <div class="content__top">
        <a href="/">Trang chủ</a>
        <h2>{{ title }}</h2>
      </div>
      <div class="content__main">
        <div class="sider">
          <CollectionFilterSider></CollectionFilterSider>
        </div>

        <div class="products-wrapper">
          <div class="products-wrapper__top">
            <p>{{ countProductsInCollection }} Kết quả</p>
            <p class="filter-chooser">
              Lọc theo
              <span
                >{{ filterChooser[filtered]
                }}<span><i class="pi pi-angle-down"></i></span
              ></span>
            <div class="filter-chooser-card">
              <p v-for="(item, index) in filterChooser">{{ item }}</p>
            </div>              
            </p>

          </div>
          <div class="products-wrapper__content">
            <div class="item" v-for="(item, index) in 10">
              <ProductCard></ProductCard>
            </div>
          </div>
          <div class="products-wrapper__bottom">
            <ButtonPrimary message="Xem thêm"></ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
</template>
<script>
import Wrapper from "../../Wrapper.vue";
import CollectionFilterSider from "@/components/atoms/collectionFilterSider/CollectionFilterSider.vue";
import ProductCard from "@/components/atoms/productCard/ProductCard.vue";
import ButtonPrimary from "@/components/atoms/buttonPrimary/ButtonPrimary.vue";

export default {
  components: {
    Wrapper,
    CollectionFilterSider,
    ProductCard,
    ButtonPrimary,
  },
  data() {
    return {
      countProductsInCollection: 2,
      filterChooser: ["Giá tăng dần", "Giá giảm dần", "% giảm", "Mua nhiều"],
      filtered: 2, //default: % giảm
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";
.content {
  max-width: 1300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  &__top {
    width: 100%;
  }

  &__main {
    display: flex;
    justify-content: space-between;

    .sider {
      max-width: 20%;

      @include mobile {
        display: none;
      }
      @include mini-tablet {
        display: none;
      }
    }

    .products-wrapper {
      width: fit-content;
      max-width: 80%;
      margin-left: 1rem;

      @include mobile {
        max-width: 100%;
      }
      @include mini-tablet {
        max-width: 100%;
      }

      &__top {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .filter-chooser {
          position: relative;
          .filter-chooser-card {
            position: absolute;
          }
        }
      }

      &__bottom {
        display: flex;
        justify-content: center;
        margin: 2rem 0;
      }

      &__content {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;

        .item {
          padding: 0.5rem;
          max-width: 25%;

          @include mobile {
            max-width: 50%;
          }
          @include mini-tablet {
            max-width: 50%;
          }
          @include tablet {
            max-width: 33.33%;
          }
        }
      }
    }
  }
}
</style>
