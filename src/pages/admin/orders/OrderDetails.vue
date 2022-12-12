<template lang="">
  <AdminBlankPage>
    <template v-slot:header>
      <div class="header-wrapper">
        <div
          class="header-wrapper__left"
          style="cursor: pointer"
          @click="$router.push({ path: '/admin/listorders' })"
        >
          <i class="pi pi-angle-left"> </i>
          Quay lại danh sách đơn hàng
        </div>
        <div class="header-wrapper__right">
          <Button
            label="Sửa đơn hàng"
            class="p-button-outlined"
            style="color: #0088ff"
            @click="$router.push({ path: '/admin/orderdetails/editorder' })"
          />
          <Button
            type="button"
            label="Đổi trả hàng"
            class="p-button-info ml-2"
            badgeClass="p-badge-danger"
            style="background-color: #0088ff"
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
            <InfoCus :invoice="invoiceData"></InfoCus>
          </div>
          <div class="body-right">
            <InfoPlus></InfoPlus>
          </div>
        </div>
        <div class="info-product shadow-2">
          <InfoProductTable :invoice="invoiceData"></InfoProductTable>
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
import InfoProductTable from "./components/InfoProductTable.vue";
import InfoPlus from "./components/InfoPlus.vue";
export default {
  components: {
    AdminBlankPage,
    ProductTable,
    InfoGeneral,
    InfoCus,
    InfoProductTable,
    InfoPlus,
  },
  data() {
    return {
      invoiceData: {},
    };
  },
  async mounted() {
    await this.axios
      .get("/invoice/show/" + this.$route.params.id)
      .then((response) => {
        this.invoiceData = response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};
</script>
<style lang="scss" scoped>
.header-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    //font-family: 'Arial';
    border: none;
    background: rgba(255, 255, 255, 0.25);
  }
  .header-wrapper__left:hover {
    color: var(--primary-color);
  }
}
.main-wrapper {
  display: flex;
  flex-direction: column;
  .product-table {
    width: 100%;
  }
  .top {
    margin-top: 10rem;
  }
  .body {
    display: flex;
    flex-direction: row;
    .body-left {
      width: 65%;
    }
  }
}

::v-deep(.p-card) {
  border-radius: 5px;
}
</style>
