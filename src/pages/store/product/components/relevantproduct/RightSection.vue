<template lang="">
        <div class="right-section">
            <div class="section-region">
                <div class="wrapper__products">
                    <div class="item" v-for="(item, index) in products">
                      <ProductCard :info="item"></ProductCard>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import ProductCard from "@/components/atoms/productCard/ProductCard.vue";
export default {
  props: ['products'],
  components: {
    ProductCard,
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";

.section-region {
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: space-between;
}
.wrapper__products {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 1rem 0;

  .item {
    max-width: 25%;
    padding: 0.5rem;

    @include mobile {
      max-width: 50%;
      
    }
    @include mini-tablet {
      max-width: 50%;
      .right-section {
        flex-shrink: 2;
      }
    }
    @include tablet {
      max-width: 33.33%;
      .right-section {
      }
    }
    @include desktop {
      .right-section {
        flex-shrink: 1.5;
      }
    }
  }
}
</style>