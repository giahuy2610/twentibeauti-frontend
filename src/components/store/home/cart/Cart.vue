<template lang="">
  <div class="cart">
    <div class="cart__header">
      <h2>Giỏ hàng</h2>
    </div>

    <div class="cart__body">
      <ScrollPanel style="width: 100%; height: 100%">
        <ProductItemList></ProductItemList>
      </ScrollPanel>
    </div>

    <div class="cart__footer">
      <div class="flex justify-content-between">
        <h4>Tổng giá trị đơn hàng</h4>
        <h4>{{ Intl.NumberFormat().format(total()) }}đ</h4>
      </div>

      <p>Bạn có thể xem các chương trình khuyến mãi ở màn hình kế tiếp</p>
      <div class="order">
        <span class="p-fluid">
          <Button
            label="Đặt hàng"
            class="p-button-rounded"
            :disabled="Intl.NumberFormat().format(total()) == 0"
            @click="$router.push('/checkout')"
          />
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import ProductItemList from "./ProductItemList.vue";
import { useCartStorePinia } from "@/stores/store/cart.js";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {};
  },
  components: {
    ProductItemList,
  },
  computed: {
    ...mapState(useCartStorePinia, {
      cartItems: "cartItems",
    }),
  },
  methods: {
    ...mapActions(useCartStorePinia, {
      increaseTotal: "increaseTotal",
      getCartItem: "getCartItem",
      total: "total",
    }),
  },
  async mounted() {
    //call api to get new data
    await this.getCartItem();
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

  @media all and (max-width: 1024px) {
    padding: 0;
  }

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

    h4,
    p {
      margin: 0.5rem;
    }
  }
}
</style>
