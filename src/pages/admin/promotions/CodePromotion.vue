<template lang="">
  <Card>
    <template #content>
      <div class="no-data-found" v-if="couponList.length == 0">
        <p>Tạo mã khuyến mãi</p>
        <p>Tăng doanh số bán hàng với mã khuyến mãi</p>
        <Button
          label="Tạo mã khuyến mãi"
          class="p-button p-button-info"
          @click="$router.push('/admin/promotions/code/create')"
        />
      </div>
      <div class="promotion-table-wrapper" v-else>
        <DataTable
          :value="couponList"
          :paginator="true"
          :rows="10"
          dataKey="id"
          :rowHover="true"
          :filters="filters"
          filterDisplay="menu"
          :loading="loading"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          :rowsPerPageOptions="[10, 25, 50]"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          :globalFilterFields="['IDCoupon', 'CodeCoupon']"
          responsiveLayout="scroll"
          v-model:selection="selectedCoupons"
        >
          <template #header>
            <div class="flex justify-content-between align-items-center">
              <h5 class="m-0">Danh sách mã khuyến mãi</h5>
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText
                  v-model="filters['global'].value"
                  placeholder="Tìm kiếm"
                />
              </span>
            </div>
          </template>
          <template #empty> No coupons found. </template>
          <template #loading> Loading coupons data. Please wait. </template>
          <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>

          <Column
            header="Mã khuyến mãi"
            sortable
            style="min-width: 12rem"
            field="IDCoupon"
          >
            <template #body="{ data }">
              <p
                @click="
                  $router.push({
                    path: '/admin/promotions/code/edit/' + data.IDCoupon,
                  })
                "
                class="cursor-pointer"
                style="color: var(--primary-color)"
              >
                {{ data.IDCoupon }}
              </p>
            </template>
          </Column>

          <Column
            field="CodeCoupon"
            header="Code"
            sortable
            style="min-width: 13rem"
          >
            <template #body="{ data }">
              <span>{{ data.CodeCoupon }}</span>
            </template>
          </Column>

          <Column
            field="date"
            header="Ngày bắt đầu"
            sortable
            dataType="date"
            style="min-width: 10rem"
          >
            <template #body="{ data }">
              {{ data.StartOn }}
            </template>
            <template #filter="{ filterModel }">
              <Calendar
                v-model="filterModel.value"
                dateFormat="mm/dd/yy"
                placeholder="mm/dd/yyyy"
              />
            </template>
          </Column>

          <Column
            field="date"
            header="Ngày kết thúc"
            sortable
            dataType="date"
            style="min-width: 10rem"
          >
            <template #body="{ data }">
              {{ data.EndOn }}
            </template>
            <template #filter="{ filterModel }">
              <Calendar
                v-model="filterModel.value"
                dateFormat="mm/dd/yy"
                placeholder="mm/dd/yyyy"
              />
            </template>
          </Column>

          <Column
            headerStyle="width: 4rem; text-align: center"
            bodyStyle="text-align: center; overflow: visible"
          >
            <template #body>
              <Button type="button" icon="pi pi-cog"></Button>
            </template>
          </Column>
        </DataTable>
      </div>
    </template>
  </Card>
</template>
<script>
import { FilterMatchMode, FilterOperator } from "primevue/api";
export default {
  data() {
    return {
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      },
      couponList: [
        {
          idCoupon: "1",
          valueDiscount: "",
          startOn: "",
          endOn: "",
          description: "",
          isDeleted: false,
          minInvoiceValue: "200",
          codeCoupon: "123",
          quantity: 100,
        },
      ],
      selectedCoupons: [],
    };
  },
  async mounted() {
    await this.axios
      .get("/coupon/index")
      .then((response) => {
        this.couponList = response.data;
      })
      .catch((e) => console.error(e));
    this.loading = false;
  },
};
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
