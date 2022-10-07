<template lang="">
    <AdminBlankPage>
      <template v-slot:header>
        <div class="header-wrapper">
          <div class="header-wrapper__left">
            <i class="pi pi-angle-left"></i>
            Quay lại danh sách đơn hàng</div>
          <div class="header-wrapper__right">
            <Button label="Sửa đơn hàng" class="p-button-outlined" style="color:#0088FF" />
            <Button
              type="button"
              label="Đổi trả hàng"
              class="p-button-info ml-2"
              badgeClass="p-badge-danger"
              style="background-color: #0088FF"
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
              
            </div>
          </div>
          <div class="info-product">
            
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
  export default {
    components: {
      AdminBlankPage,
      ProductTable,
      InfoGeneral,
      InfoCus,
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
  