<template lang="">
  <div class="cart">
    <div class="cart__header">
      <h2>Giỏ hàng</h2>
    </div>

    <div class="cart__body">
      <ScrollPanel style="width: 100%; height: 100%">
        <ProductItem class="mb-1" v-for="item in 7"></ProductItem>
      </ScrollPanel>
    </div>

    <div class="cart__footer">
      <div class="flex justify-content-between">
        <h4>Tổng giá trị đơn hàng</h4>
        <h4>{{ total }}</h4>
      </div>

      <p>Bạn có thể xem các chương trình khuyến mãi ở màn hình kế tiếp</p>
      <div class="order">
        <span class="p-fluid">
          <Button label="Đặt hàng" class="p-button-rounded" />
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import ProductItem from "./ProductItem.vue";
export default {
  data() {
    return {
      total: 0,
    };
  },
  components: {
    ProductItem,
  },
};
</script>
<style lang="scss" scoped>
.cart {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  padding: 0 2rem;

  &__header {
    width: 100%;
    border-bottom: 1px solid grey;

    h2 {
      margin: 0;
    }
  }

  &__body {
    margin: 0.2rem 0;
    height: 10000px;
    overflow: hidden;
  }

  &__footer {
    width: 100%;
    border-top: 1px solid grey;

    h4, p {
      margin: 0.5rem;
    }
  }
}
</style>
