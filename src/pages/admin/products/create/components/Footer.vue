<template lang="">
  <div class="footer">
    <Card>
        <template #title>Thông tin thêm </template>
      <template #content>
        <div class="top">
          <h4>Trạng thái bán</h4>
          <InputSwitch v-model="checkedstatus" />
        </div>
        <div class="bottom">
          <h4>Áp dụng thuế</h4>
          <InputSwitch v-model="taxapp" />
        </div>
      </template>
    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkedstatus: false,
      taxapp: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.footer {
  .top,
  .bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
