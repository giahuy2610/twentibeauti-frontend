<template lang="">
  <AdminBlankPage>
    <template v-slot:header>
      <div class="header-wrapper">
        <div class="header-wrapper__left">Tạo đơn hàng</div>
        <div class="header-wrapper__right">
          <Button label="Thoát" class="p-button-outlined p-button-danger" />
          <Button
            type="button"
            label="Thêm sản phẩm"
            icon="pi pi-plus"
            class="p-button-info ml-2"
            badgeClass="p-badge-danger"
          />
        </div>
      </div>
    </template>
    <template v-slot:main>
        <div class="main-top">
      <div class="main-wrapper">
        <Card style="width: 40rem; margin-bottom: 2em">
          <template #title> Thông tin khách hàng </template>
          <template #content>
            <div class="product-table">
              <ProductTable> </ProductTable>
            </div>
            <div class="info">
              <div class="search-cus">
                <span class="p-fluid">
                  <div class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <InputText
                      type="text"
                      v-model="value3"
                      placeholder="Tìm theo tên, SĐT, mã khách hàng "
                      
                    />
                    
                  </div>
                </span>
              </div>
            </div>
          </template>
        </Card>
      </div>
      <div class="main-info-plus">
        <Card style="width: 20rem; margin-bottom: 2em">
          <template #title> Thông tin bổ sung </template>
          <template #content>
            <div class="info-plus">
              <div class="search-cus">
                <span class="p-fluid">
                  <div class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <InputText
                      type="text"
                      v-model="value3"
                      placeholder="Tìm theo tên, SĐT, mã khách hàng"
                    />
                  </div>
                </span>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
    </template>
  </AdminBlankPage>
</template>
<script>
import AdminBlankPage from "../AdminBlankPage.vue";
import ProductTable from "../products/components/ProductTable.vue";
export default {
  components: {
    AdminBlankPage,
    ProductTable,
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
.main-top {
    display: flex;
    flex-direction: row;
    gap: 10px;
.main-wrapper {

  .product-table {
    width: 100%;
    overflow: hidden;
  }
  .search-cus {
    width: 100%;
  }
}
.main-info-plus {

}
}
::v-deep(.p-card) {
  border-radius: 10px;
}
</style>
