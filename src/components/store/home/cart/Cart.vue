<template lang="">
  <div class="cart">
    <h2>Giỏ hàng</h2>
    
    <div class="cart__footer">
      <div class="flex-row">
        <h4>Tổng giá trị đơn hàng</h4>
        <h4>{{ total }}</h4>
      </div>

      <p>Bạn có thể xem các chương trình khuyến mãi ở màn hình kế tiếp</p>
      <Button class="border-round-xl">Đặt hàng thui</Button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      total: 0,
    };
  },
};
</script>
<style lang="scss" scoped>
    .cart {
        display: flex;
        background-color: #94c83d ;
        flex-direction: column;;
    }
</style>
