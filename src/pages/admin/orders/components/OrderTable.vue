<template>
  <div class="order-table-wrapper">
    <Toast />
    <ConfirmDialog></ConfirmDialog>
    <DataTable
      :value="orders"
      :paginator="true"
      class="p-datatable-orders"
      :rows="10"
      dataKey="id"
      :rowHover="true"
      v-model:selection="selectedStatus"
      v-model:filters="filters"
      filterDisplay="menu"
      :loading="loading"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :rowsPerPageOptions="[10, 25, 50]"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
      :globalFilterFields="['IDInvoice', 'IDCus']"
      responsiveLayout="scroll"
    >
      <template #header>
        <div class="flex justify-content-between align-items-center">
          <h5 class="m-0">Đơn hàng</h5>
          <span v-show="selectedStatus.length > 0">
            Chọn thao tác
            <Dropdown
              v-model="selectedTracking"
              :options="tracking"
              optionLabel="name"
              optionValue="code"
              placeholder="Trạng thái đơn hàng"
            />
          </span>
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText
              v-model="filters['global'].value"
              placeholder="Tìm kiếm"
            />
          </span>
        </div>
      </template>
      <template #empty> No customers found. </template>
      <template #loading> Loading customers data. Please wait. </template>
      <Column selectionMode="multiple" headerStyle="width: 2rem"></Column>

      <Column
        field="IDInvoice"
        header="Mã đơn hàng"
        style="min-width: 3rem"
        sortable
      >
        <template #body="{ data }">
          <p
            @click="
              $router.push({
                path: '/admin/orderdetails/' + data.IDInvoice,
              })
            "
            class="idod cursor-pointer"
            style="color: var(--text-admin-color)"
          >
            {{ data.IDInvoice }}
          </p>
        </template>
      </Column>
      <Column
        field="IDCus"
        header="ID Khách hàng"
        sortable
        style="min-width: 6rem"
      >
        <template #body="{ data }">
          <p
            @click="
              $router.push({
                path: '/admin/orderdetails',
                query: { sku: data.IDCus },
              })
            "
            class="idod cursor-pointer"
            style="color: var(--text-admin-color)"
          >
            {{ data.IDCus }}
          </p>
        </template>
      </Column>

      <Column
        field="CreatedOn"
        header="Ngày tạo"
        sortable
        dataType="date"
        style="min-width: 6rem"
      >
        <template #body="{ data }">
          {{ data.CreatedOn }}
        </template>
      </Column>
      <Column
        field="TotalValue"
        header="Tổng đơn"
        sortable
        dataType="numeric"
        style="min-width: 6rem"
      >
        <template #body="{ data }">
          {{ formatCurrency(data.TotalValue) }}
        </template>
      </Column>
      <Column
        field="IDTracking"
        sortable
        header="Tình trạng"
        :filterMenuStyle="{ width: '10rem' }"
        style="min-width: 6rem"
      >
        <template #body="{ data }">
          <span>{{ data.IDTracking }}</span>
        </template>
        <template #filter="{ filterModel }">
          <Dropdown
            v-model="filterModel.value"
            :options="statuses"
            placeholder="Any"
            class="p-column-filter"
            :showClear="true"
          >
            <template #value="slotProps">
              <span :class="'order-badge status-' + slotProps.value">{{
                slotProps.value
              }}</span>
            </template>
            <template #option="slotProps">
              <span :class="'order-badge status-' + slotProps.option">{{
                slotProps.option
              }}</span>
            </template>
          </Dropdown>
        </template>
      </Column>
      <Column header="Cập nhật" style="min-width: 6rem">
        <template #body="{ data }">
          <Button
            :label="data.IDTracking"
            type="button"
            icon="pi pi-check"
            class="p-button-outlined p-button-info"
            @click="
              this.$confirm.require({
                message: 'Bạn muốn chuyển trạng thái đơn hàng sang...',
                header: 'Xác nhận',
                icon: 'pi pi-exclamation-triangle',
                accept: nextToTrackingStatusInvoice(data.IDInvoice, 3),
                reject: () => {
                  this.$toast.add({
                    severity: 'error',
                    summary: 'Rejected',
                    detail: 'Đã hủy thao tác',
                    life: 3000,
                  });
                },
              })
            "
          ></Button>
        </template>
      </Column>
      <Column header="Hủy đơn hàng" style="min-width: 6rem">
        <template #body="{ data }">
          <Button
            type="button"
            icon="pi pi-times"
            class="p-button-rounded p-button-danger p-button-text"
            @click="
              this.$confirm.require({
                message: 'Bạn có chắc chắn muốn xóa không ?',
                header: 'Delete Confirmation',
                icon: 'pi pi-info-circle',
                acceptClass: 'p-button-danger',
                accept: rejectInvoice(data.IDInvoice),
                reject: () => {
                  this.$toast.add({
                    severity: 'error',
                    summary: 'Rejected',
                    detail: 'Đã hủy thao tác xóa',
                    life: 3000,
                  });
                },
              })
            "
          ></Button>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
import { FilterMatchMode, FilterOperator } from "primevue/api";

export default {
  data() {
    return {
      customers: null,
      selectedStatus: [],
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        nameCus: {
          operator: FilterOperator.AND,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
        "statuses.name": {
          operator: FilterOperator.AND,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
        date: {
          operator: FilterOperator.AND,
          constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
        },
        total: {
          operator: FilterOperator.AND,
          constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
        },
        status: {
          operator: FilterOperator.OR,
          constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
        },
        activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS },
      },
      loading: true,
      tracking: [
        { name: "Đơn hàng đang được chuẩn bị", code: "WT" },
        { name: "Đang giao hàng", code: "SHIPPING" },
        { name: "Đã giao hàng", code: "SHIPPED" },
        { name: "Giao hàng không thành công", code: "UNS" },
        { name: "Đơn hàng bị hủy", code: "CANC" },
      ],
      selectedTracking: null,
      statuses: [
        { name: "Đơn hàng đang được chuẩn bị", code: "WT" },
        { name: "Đang giao hàng", code: "SHIPPING" },
        { name: "Đã giao hàng", code: "SHIPPED" },
        { name: "Giao hàng không thành công", code: "UNS" },
        { name: "Đơn hàng bị hủy", code: "CANC" },
      ],
      orders: [],
    };
  },
  async mounted() {
    await this.loadData();
    this.loading = false;
  },
  methods: {
    async loadData() {
      await this.axios
        .get("/invoice/show")
        .then((response) => {
          this.orders = response.data;
        })
        .catch((e) => console.error(e));
    },

    formatDate(value) {
      return value.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    },
    formatCurrency(value) {
      return value.toLocaleString({
        style: "currency",
        currency: "VND",
      });
    },
    async rejectInvoice(IDInvoice) {
      await this.axios
        .put("/invoice/tracking-status", {
          IDInvoice: IDInvoice,
          IDTracking: 6,
        })
        .then((response) => {
          if (response.status == 200) {
            this.$toast.add({
              severity: "info",
              summary: "Confirmed",
              detail: "Hủy đơn thành công",
              life: 3000,
            });
            this.loadData();
            this.$confirm.close();
          }
        })
        .catch((err) => console.error(err));
    },
    async nextToTrackingStatusInvoice(IDInvoice, IDTracking) {
      await this.axios
        .put("/invoice/tracking-status", {
          IDInvoice: IDInvoice,
          IDTracking: IDTracking,
        })
        .then((response) => {
          if (response.status == 200) {
            this.$toast.add({
              severity: "info",
              summary: "Confirmed",
              detail: "Cập nhật trạng thái đơn thành công",
              life: 3000,
            });
            this.loadData();
            this.$confirm.close();
          }
        })
        .catch((err) => console.error(err));
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep(.p-paginator) {
  .p-paginator-current {
  }
}
.idod:hover {
  text-decoration: underline;
  font-weight: 600;
}
::v-deep(.p-progressbar) {
  height: 0.5rem;
  background-color: #d8dadc;

  .p-progressbar-value {
    background-color: #607d8b;
  }
}

::v-deep(.p-datepicker) {
  min-width: 25rem;

  td {
    font-weight: 400;
  }
}

::v-deep(.p-datatable.p-datatable-orders) {
  .p-datatable-header {
    padding: 1rem;
    text-align: left;
    font-size: 1.5rem;
  }

  .p-paginator {
    padding: 1rem;
  }

  .p-datatable-thead > tr > th {
    text-align: left;
  }

  .p-datatable-tbody > tr > td {
    cursor: auto;
  }

  .p-dropdown-label:not(.p-placeholder) {
    text-transform: uppercase;
  }
}
</style>
