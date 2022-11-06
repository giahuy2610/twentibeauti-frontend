<template lang="">
    <AdminBlankPage>
      <template v-slot:header>
        <div class="header-wrapper">
          <div class="header-wrapper__left" style="cursor:pointer" @click="$router.push({ path: '/admin/orderdetails' })">
            <i class="pi pi-angle-left" ></i>
            Quay lại đơn hàng</div>
          <div class="header-wrapper__right">
            <Button label="Sửa đơn hàng" class="p-button-outlined" style="color:#0088FF" />
            <Button
              type="button"
              label="Đổi trả hàng"
              class="p-button-info ml-2"
              badgeClass="p-badge-danger"
              style="background-color: #0088FF"
              @click="$router.push({ path: '/admin/create-return' })"
            />
          </div>
        </div>
      </template>
      <template v-slot:main>
        <div class="main-wrapper">
          <div class="info-general">
            <InfoGeneral></InfoGeneral>
          </div>
          <div class="body">
            <div class="body-left">
              <InfoCus></InfoCus>
            </div>
            <div class="body-right">
              <InfoPlus></InfoPlus>
            </div>
          </div>
          <div class="info-product">
            <OrderTableEdit></OrderTableEdit>
          </div>
          
        </div>
      </template>
    </AdminBlankPage>
  </template>
  <script>
  import AdminBlankPage from "../AdminBlankPage.vue";
  import ProductTable from "./../products/components/ProductTable.vue";
  import InfoGeneral from "./components/InfoGeneral.vue";
  import InfoCus from "./components/InfoCus.vue";
  import InfoPlus from "./components/InfoPlus.vue";
  import OrderTableEdit from "./componentsedit/OrderTableEdit.vue";
  export default {
    components: {
      AdminBlankPage,
      ProductTable,
      InfoGeneral,
      InfoCus,
      OrderTableEdit,
      InfoPlus,
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
    .header-wrapper__left:hover{
      color:var(--primary-color);
    }
 
  }
  .main-wrapper {
    display: flex;
    flex-direction: column;
    .product-table {
      width: 100%;
    }
    .top {
      margin-top:10rem;
    }
    .body {
      display:flex;
      flex-direction: row;
      .body-left {
        width:65%;
      }
    }
  }
  
  ::v-deep(.p-card) {
    border-radius: 5px;
  }
  </style>
  