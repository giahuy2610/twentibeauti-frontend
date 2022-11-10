<template>
  <Card>
    <template #content>
      <ProductTableDetail />
    </template>
  </Card>
</template>

<script>
import ProductTableDetail from "./ProductTableDetail.vue";
export default {
  components: {
    ProductTableDetail,
  },
};
</script>

<style></style>
