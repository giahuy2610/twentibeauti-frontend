<template >
    <div class="customer-table-wrapper ">
      <DataTable
        :value="customer"
        :paginator="true"
        class="p-datatable-customers "
        :rows="10"
        dataKey="id"
        :rowHover="true"
        v-model:filters="filters"
        filterDisplay="menu"
        :loading="loading"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[10, 25, 50]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        :globalFilterFields="[
          'nameCus',
          'total',
          'email',
          'phone',
        ]"
        responsiveLayout="scroll"
      >
      <template #header>
          <div class="flex justify-content-between align-items-center ">
            <h5 class="m-0">Khách hàng</h5>
          </div>
        </template>
        <template #empty> No customers found. </template>
        <template #loading> Loading customers data. Please wait. </template>
        <Column
          field="id"
          header="Thông tin"
          style="min-width: 3rem"
        >
          <template #body="{ data }">
            <p 
            @click="
              $router.push({
                path: '/admin/customerdetails',
                query: { sku: data.name },
              })
            "
            class="idod cursor-pointer "
            style="color: var(--text-admin-color);"
          >
            {{ data.name }}
          </p>
          </template>
        </Column>
        <Column
          field="email"
          header="Email"
          style="min-width: 6rem"
        >
          <template #body="{ data }">         
              {{ data.email }}
          </template>
        </Column>
        <Column
          field="phone"
          header="Điện thoại"
          style="min-width: 6rem"
        >
          <template #body="{ data }">         
              {{ data.phone }}
          </template>
        </Column>
        <Column
          field="quatity"
          header="Đơn hàng"
          style="min-width: 6rem"
        >
          <template #body="{ data }">         
              {{ data.quatity }}
          </template>
        </Column>
        <Column
          field="total"
          header="Tổng chi tiêu"
          sortable
          dataType="numeric"
          style="min-width: 6rem"
        >
          <template #body="{ data }">
            {{ formatCurrency(data.total) }}
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
        customer: null,
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
         
          total: {
            operator: FilterOperator.AND,
            constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
          },
          phone: {
            operator: FilterOperator.OR,
            constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
          },
          email: {
            operator: FilterOperator.OR,
            constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
          },
          quatity: {
            operator: FilterOperator.OR,
            constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
          },
          activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
          verified: { value: null, matchMode: FilterMatchMode.EQUALS },
        },
        loading: true,
        customer: [
          {
            id: 1,
            name: "Dịu Ái",
            email: "20520368@gm.uit.edu.vn",
            phone: "0868247806",
            quatity: 2,
            createdOn: "2015-09-13",
            status: "Đang giao hàng",
            total: 80000,
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
        return value.toLocaleDateString("en-US", {
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
  
  ::v-deep(.p-datatable.p-datatable-customers) {
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
  