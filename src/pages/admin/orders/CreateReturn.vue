<template lang="">
  <AdminBlankPage>
    <template v-slot:header>
      <div class="header-wrapper">
        <div class="header-wrapper__left" style="cursor:pointer" @click="$router.push({ path: '/admin/order-return' })">
          <i class="pi pi-angle-left"  ></i>
          Quay lại danh sách đơn trả hàng</div>
        <div class="header-wrapper__right">
          <Button label="Thoát" class="p-button-outlined p-button-danger" />
          <Button
            type="button"
            label="Tạo đơn trả hàng"
            class="p-button-info ml-2"
            badgeClass="p-badge-danger"
            
          />
        </div>
      </div>
    </template>
    <template v-slot:main>
      <div class="main-wrapper">
        <div class="info">
            <InfoTicket></InfoTicket>
        </div>
        <div class="return-product">
            <ReturnProduct></ReturnProduct>
        </div>
        <div class="tracking-return">
          <TrackingReturn></TrackingReturn>
        </div>
        <div class="change-product">
          <ChangeProduct></ChangeProduct>
        </div>
        <div class="return-money">
          <ReturnMoney></ReturnMoney>
        </div>
      </div>
    </template>
  </AdminBlankPage>
</template>
<script>
import AdminBlankPage from "../AdminBlankPage.vue";
import InfoTicket from "../orders/componentsReturn/InfoTicket.vue";
import ReturnProduct from "../orders/componentsReturn/ReturnProduct.vue";
import TrackingReturn from "../orders/componentsReturn/TrackingReturn.vue";
import ChangeProduct from "../orders/componentsReturn/ChangeProduct.vue";
import ReturnMoney from "../orders/componentsReturn/ReturnMoney.vue";
export default {
  components: {
    AdminBlankPage,
    InfoTicket,
    ReturnProduct,
    TrackingReturn,
    ChangeProduct,
    ReturnMoney,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.header-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-wrapper__left:hover {
    color:var(--primary-color);
  }
}
.main-wrapper {
  .product-table {
    width: 100%;
  }
}

::v-deep(.p-card) {
  border-radius: 10px;
}
</style>
