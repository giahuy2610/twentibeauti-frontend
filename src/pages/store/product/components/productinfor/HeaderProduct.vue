<template lang="">
  <div class="product-header">
    <div
      class="brand-name"
      role="presentation"
      @click="$router.push({ path: '/collections' })"
    >
      {{ brandName }}
    </div>
    <h1 class="info-title">{{ productName }}</h1>
  </div>
</template>
<script>
export default {
  props: ["productName", "brandName"],
};
</script>
<style lang="scss" scoped>
.product-header {
  div {
    margin-bottom: 18px;
  }
  line-height: 20px;
  font-size: 14px;

  .brand-name {
    color: var(--primary-color);
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  .brand-name:hover {
    text-decoration: underline;
  }
  .info-title {
    font-size: 18px;
    width: 95%;
  }
}
</style>
