<template lang="">
  <div class="no-data-found">
    <p>Tạo mã khuyến mãi</p>
    <p>Tăng doanh số bán hàng với mã khuyến mãi</p>
    <Button
      label="Tạo mã khuyến mãi"
      class="p-button p-button-info"
      @click="$router.push('/admin/promotions/code/create')"
    />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.no-data-found {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 300px;
}
</style>

<!-- couponList: [
{
  idCoupon,
  valueDiscount,
  startOn,
  endOn,
  description,
  isDeleted,
  minInvoiceValue,
  codeCoupon,
  quantity,
},
], -->
