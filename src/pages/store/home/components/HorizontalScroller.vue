<template lang="">
  <div class="scroll-wrapper">
    <ProductCard v-for="item in 5"></ProductCard>
  </div>
</template>
<script>
import ProductCard from "@/components/atoms/productCard/ProductCard.vue";

export default {
    components: {
        ProductCard
    }
};
</script>
<style lang="scss" scoped>
.scroll-wrapper {
  max-width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
