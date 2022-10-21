<template lang="">
        <div class="right-section">
            <div class="section-region">
                <div class="wrapper__products">
                    <div class="item" v-for="(item, index) in products">
                      <ProductCard></ProductCard>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import ProductCard from "@/components/atoms/productCard/ProductCard.vue";
export default {
  data() {
    return {
      products: [1, 2, 3, 4, 5, 6, 7, 8],
    };
  },
  components: {
    ProductCard,
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";
.right-section
{
    flex-shrink : 1.2;
}
.section-region {
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
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
    }
    @include tablet {
      max-width: 33.33%;
    }
  }
}
</style>