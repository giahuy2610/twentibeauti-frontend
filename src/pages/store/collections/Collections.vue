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
            <p>Lọc theo</p>
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

      &__top {
        display: flex;
        align-content: space-between;
      }

      &__bottom {
        display: flex;
        justify-content: center;
        margin: 2rem 0;
      }

      &__content {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;

        @include mobile {
          width: 100%;
        }
        @include mini-tablet {
          width: 100%;
        }

        .item {
          margin: 0.8rem 0;
          display: flex;
          width: 25%;
          justify-content: center;

          @include mobile {
            width: 50%;
          }
          @include mini-tablet {
            width: 50%;
          }
          @include tablet {
            width: 33.33%;
          }
        }
      }
    }
  }
}
</style>
