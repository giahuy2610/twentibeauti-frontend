<template lang="">
  <AdminBlankPage>
    <template v-slot:header>
      <div class="header-wrapper">
        <div class="header-wrapper__left">Tạo đơn hàng</div>
        <div class="header-wrapper__right">
          <Button label="Thoát" class="p-button-outlined p-button-danger" />
          <Button
            type="button"
            label="Thêm đơn hàng"
            icon="pi pi-plus"
            class="p-button-info ml-2"
            badgeClass="p-badge-danger"
          />
        </div>
      </div>
    </template>
    <template v-slot:main>
      <div class="main-wrapper">
        <Card>
          <template #title>Doanh số</template>
          <template #content>
            <div class="">
              <LineChartVue></LineChartVue>
              <LineChartVue></LineChartVue>
            </div>
          </template>
        </Card>
      </div>
    </template>
  </AdminBlankPage>
</template>
<script>
import AdminBlankPage from "../AdminBlankPage.vue";
import LineChartVue from "./components/LineChart.vue";
export default {
  components: {
    AdminBlankPage,
    LineChartVue,
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



  &__left {

  }

  &__right {
  }
}
</style>
