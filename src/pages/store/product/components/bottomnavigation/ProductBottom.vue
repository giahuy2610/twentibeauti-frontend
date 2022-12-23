<template lang="">
  <div class="product-bottom">
    <div class="image-bottom">
      <div class="product-thumbnail">
        <img :src="productImage?.Path" alt="product-thumbnail" />
      </div>
    </div>
    <div class="infor-bottom">
      <div class="name-product">
        <span>{{ productName }}</span>
      </div>
      <Price
        :listPrice="this.listPrice"
        :retailPrice="this.retailPrice"
      ></Price>
    </div>
  </div>
</template>
<script>
import Price from "@/pages/store/product/components/productinfor/Price.vue";
export default {
  components: {
    Price,
  },
  props: ["productName", "listPrice", "retailPrice", "productImage"],
};
</script>
<style lang="scss" scoped>
.product-bottom {
  gap: 12px;
  overflow: hidden;
  align-items: center;
  display: flex;
  .image-bottom {
    flex-shrink: 0;
    overflow: hidden;
    .product-thumbnail {
      height: 72px;
      width: 72px;
      min-width: 72px;
      img {
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
        max-width: 100%;
      }
    }
  }
  .infor-bottom {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    .name-product {
      font-size: 16px;
      font-weight: 700;

      span {
        display: inline-block;
        max-width: 100%;
        white-space: nowrap;
        color: var(--text-primary);
        overflow-wrap: break-word;
      }
    }
  }
}
</style>
