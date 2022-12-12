<template>
  <div class="order-table-wrapper">
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
      :globalFilterFields="[
        'id',
        'nameCus',
        'total',
        'date',
        'status',
        'statuses.name',
      ]"
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

      <Column field="id" header="Mã đơn hàng" style="min-width: 3rem">
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
      <Column field="nameCus" header="Khách hàng" style="min-width: 6rem">
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
        field="date"
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
        field="total"
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
        field="status"
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

      <Column header="Hủy đơn hàng" style="min-width: 6rem">
        <template #body>
          <Button
            type="button"
            icon="pi pi-times"
            class="p-button-rounded p-button-danger p-button-text"
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
  created() {},
  async mounted() {
    await this.axios
      .get("/invoice/show")
      .then((response) => {
        this.orders = response.data;
      })
      .catch((e) => console.error(e));
    this.loading = false;
  },
  methods: {
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
