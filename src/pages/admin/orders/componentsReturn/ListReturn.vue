<template>
    <div class="return-table-wrapper shadow-2">
      <DataTable
        :value="returnOrder"
        :paginator="true"
        class="p-datatable-return-orders"
        :rows="10"
        dataKey="idreturn"
        :rowHover="true"
        v-model:selection="selectedReturn"
        v-model:filters="filters"
        filterDisplay="menu"
        :loading="loading"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[10, 25, 50]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        :globalFilterFields="[
          'idorder',
          'idreturn',
          'reason',
          'status',
          'returnmoney',
          'date',

        ]"
        responsiveLayout="scroll"
      >
        <template #header>
          <div class="flex justify-content-between align-items-center">
            <h5 class="m-0">Đơn hàng</h5>
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
        <!-- <Column selectionMode="multiple" headerStyle="width: 3rem"></Column> -->
        <Column field="idreturn" header="Mã đơn trả hàng" style="min-width: 12rem">
          <template #body="{ data }">
          <p
            @click="
              $router.push({
                path: '/admin/create-return',
                query: { sku: data.idreturn },
              })
            "
            class=" idre cursor-pointer hover-primary-color"
            style="color: #0088FF;"
          >
            {{ data.idreturn }}
          </p>
        </template>
        </Column>
        <Column field="id" header="Mã đơn hàng" style="min-width: 11rem">
          <template #body="{ data }">
          <p
            @click="
              $router.push({
                path: '/admin/orderdetails',
                query: { sku: data.idorder },
              })
            "
            class=" idod cursor-pointer hover-primary-color"
            style="color: #0088FF;"
          >
            {{ data.idorder }}
          </p>
        </template>
        </Column>       
        <Column
        field="status"
          header="Trạng thái"
          :showFilterMatchModes="false"
          :filterMenuStyle="{ width: '11rem' }"
          style="min-width: 10rem"
        >
          <template #body="{ data }">
            
           {{ data.statusreturn }}
          </template>
          <template #filter="{ filterModel }">
            <div class="mb-3 font-bold">Agent Picker</div>
            <MultiSelect
              v-model="filterModel.value"
              :options="representatives"
              optionLabel="name"
              placeholder="Any"
              class="p-column-filter"
            >
              <template #option="slotProps">
                <div class="p-multiselect-representative-option">
                  <img
                    :alt="slotProps.option.name"
                    src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
                    width="32"
                    style="vertical-align: middle"
                  />
                  <span class="image-text">{{ slotProps.option.name }}</span>
                </div>
              </template>
            </MultiSelect>
          </template>
        </Column>
        <Column field="returnmoney" header="Hoàn tiền" style="min-width: 10rem">
            <template #body="{ data }">
              {{ data.namereturn }}
            </template>
            <template #filter="{ filterModel }">
              <InputText
                type="text"
                v-model="filterModel.value"
                class="p-column-filter"
                placeholder="Search by name"
              />
            </template>
          </Column>
        <Column
          field="total"
          header="Tổng tiền"
          sortable
          dataType="numeric"
          style="min-width: 10rem"
        >
          <template #body="{ data }">
            {{ formatCurrency(data.total) }}
          </template>
        </Column>
        <Column
          field="date"
          header="Ngày nhận hàng"
          sortable
          dataType="date"
          style="min-width: 14rem"
        >
          <template #body="{ data }">
            {{ data.datereturn }}
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
          field="reason"
          header="Lí do trả hàng"
          :filterMenuStyle="{ width: '10rem' }"
          style="min-width: 11rem"
        >
          <template #body="{ data }">
            <span :class="'order-return-badge status-' + data.status">{{
              data.status
            }}</span>
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
                <span :class="'order-return-badge status-' + slotProps.value">{{
                  slotProps.value
                }}</span>
              </template>
              <template #option="slotProps">
                <span :class="'order-return-badge status-' + slotProps.option">{{
                  slotProps.option
                }}</span>
              </template>
            </Dropdown>
          </template>
        </Column>
        
        <!-- <Column
          headerStyle="width: 4rem; text-align: center"
          bodyStyle="text-align: center; overflow: visible"
        >
          <template #body>
            <Button type="button" icon="pi pi-cog"></Button>
          </template>
        </Column> -->
      </DataTable>
    </div>
  </template>
  
  <script>
  import { FilterMatchMode, FilterOperator } from "primevue/api";
  
  export default {
    data() {
      return {
        returnOrder: null,
        selectedReturn: null,
        filters: {
          global: { value: null, matchMode: FilterMatchMode.CONTAINS },
          idorder: {
            operator: FilterOperator.AND,
            constraints: [
              { value: null, matchMode: FilterMatchMode.STARTS_WITH },
            ],
          },
          idreturn: {
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
          reason: {
            operator: FilterOperator.OR,
            constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
          },
          returnmoney: {
            operator: FilterOperator.OR,
            constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
          },

        },
        loading: true,
        statuses: [
          "Hàng bị lỗi",
          "Không đúng số lượng",
          "Không đúng hàng",
        ],
        statusreturn:[
          "Đã nhận",
          "Chưa nhận",
        ],
        namereturn:[
        "Đã nhận",
          "Chưa nhận",
        ],
        returnOrder: [
          {
            idorder: 1000,
            idreturn: "RT1",
            datereturn: "2015-09-13",
            status: "Hàng bị lỗi",
            statusreturn: "Đã nhận",
            namereturn: "Đã nhận",
            total: 75000,
          },
          {
            idorder: 1500,
            idreturn: "RT2",
            datereturn: "2015-09-13",
            status: "Hàng bị lỗi",
            statusreturn: "Đã nhận",
            namereturn: "Đã nhận",
            total: 75000,
          },
        ],
      };
    },
    created() {},
    mounted() {
      // this.products.forEach(
      //   (products) => (products.createdOn = new Date(products.createdOn))
      // );
      this.loading = false;
    },
    methods: {
      formatDate(value) {
        return value.toLocaleDateString( {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });
      },
      formatCurrency(value) {
        return value.toLocaleString( {
          style: "currency",
          currency: "VND",
        });
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>

  .idod:hover {
    text-decoration: underline;
  font-weight: 600;
  }
  .idre:hover {
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
  
  ::v-deep(.p-datatable.p-datatable-return-orders) {
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
  