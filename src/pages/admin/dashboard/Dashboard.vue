<template lang="">
  <AdminBlankPage>
    <template v-slot:header>
      <div class="header-wrapper">
        <div class="header-wrapper__left">Chúc ngày làm việc vui vẻ!</div>
        <div class="header-wrapper__right">
          <Button label="Thoát" class="p-button-outlined p-button-danger" />
          <Button
            type="button"
            label="In báo cáo"
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
            <div class="flex">
              <div class="" style="width: 60%">
                <LineChartVue></LineChartVue>
              </div>
              <div class="" style="width: 40%"></div>
            </div>
          </template>
        </Card>
        <Card>
          <template #content>
            <div class="percentage-card flex gap-1">
              <div class="flex-1">
                <DoughnutVue></DoughnutVue>
              </div>
              <div class="flex-1">
                <InvoiceChartVue></InvoiceChartVue>
              </div>
              <div class="flex-1">
                <PolarAreaVue></PolarAreaVue>
              </div>
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
import DoughnutVue from "./components/RatingChart.vue";
import PolarAreaVue from "./components/CategoriesChart.vue";
import InvoiceChartVue from "./components/InvoiceChart.vue";
export default {
  components: {
    AdminBlankPage,
    LineChartVue,
    DoughnutVue,
    PolarAreaVue,
    InvoiceChartVue
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

.main-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
