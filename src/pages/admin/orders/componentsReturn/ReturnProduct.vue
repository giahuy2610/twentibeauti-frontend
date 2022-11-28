<template>
    <div class="product-table-wrapper shadow-2">
      <DataTable
        :value="productreturn"
        class="p-datatable-product-return"
        :rows="10"
        dataKey="id"
        :rowHover="true"
        v-model:selection="selectedProductReturn"
        v-model:filters="filters"
        filterDisplay="menu"
        :loading="loading"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[10, 25, 50]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        :globalFilterFields="[
          'name',
          'id',
        ]"
        responsiveLayout="scroll"
      >
        <template #header>
          <div class="flex justify-content-between align-items-center">
            <h5 class="m-0" style="font-size:18px; font-weight:500">Sản phẩm trả</h5>
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
        <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
  
        <Column field="stt" header="STT" style="min-width: 5rem">
          <template #body="{ data }">
            {{ data.id }}
          </template>
        </Column>
        <Column
        field="img"
        header="Ảnh"
        filterMatchMode="contains"
        style="min-width: 5rem"
      >
        <template #body="{ data }">
          <img
            src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
            :class="'flag flag-' + data.img"
            width="30"
          />
         
        </template>
      </Column>
      <Column field="name" header="Tên sản phẩm" style="min-width: 10rem">
        <template #body="{ data }">
          <p
            @click="
              $router.push({
                path: '/admin/products/create',
                query: { sku: data.name },
              })
            "
            class="namepro cursor-pointer hover-primary-color"
          >
            {{ data.name }}
          </p>
        </template>
      </Column>
      <Column field="quatity" header="Số lượng" style="min-width: 7rem">
        <template #body="{ data }">
          {{ data.quatity }}
        </template>
      </Column>
        
        <Column
          field="price"
          header="Đơn giá"
          dataType="numeric"
          style="min-width: 7rem"
        >
          <template #body="{ data }">
            {{ formatCurrency(data.salePrice) }}
          </template>
        </Column>
        <Column
          field="total"
          header="Thành tiền"
          dataType="numeric"
          style="min-width: 7rem"
        >
          <template #body="{ data }">
            {{ formatCurrency(data.salePrice) }}
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
        <template #footer>
            <div class="footer">
              
              <div class="info-payment">
                <div class="total">
                  <div class="label">Số lượng trả</div>
                  <div class="money">0</div>
                </div>
                <div class="total-of-cus">
                  <div class="label">Cần hoàn tiền trả hàng</div>
                  <div class="money">300.000</div>
                </div>
              </div>
            </div>
          </template>
      </DataTable>
    </div>
  </template>
  
  <script>
  import { FilterMatchMode, FilterOperator } from "primevue/api";
  
  export default {
    data() {
      return {
        productreturn: null,
        selectedProductReturn: null,
        filters: {
          global: { value: null, matchMode: FilterMatchMode.CONTAINS },
          id: {
            operator: FilterOperator.AND,
            constraints: [
              { value: null, matchMode: FilterMatchMode.STARTS_WITH },
            ],
          },
          name: {
            operator: FilterOperator.AND,
            constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
          },
          representative: { value: null, matchMode: FilterMatchMode.IN },
          quatity: {
            operator: FilterOperator.AND,
            constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
          },
          total: {
            operator: FilterOperator.AND,
            constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
          },
          price: {
            operator: FilterOperator.AND,
            constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
          },
        },
        loading: true,
        statuses: [
          "Đang giao dịch",
          "Hoàn thành",
        ],
        productreturn: [
          {
            id: 1000,
            name: "Kem Nền Hiệu Ứng Căng Mướt THEFACESHOP AURA CC CREAM SPF30 PA++ 20g",
            img: ["abc.png", "bcd.png"],
            quatity:100,
            salePrice: 75000,
            
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
  .product-table-wrapper {
    display: block;
    border-radius: 15px;
    
  }
  .footer {
    width: 100%;
    .info-payment {
      margin-left: 460px;
      display: flex;
      flex-direction: column;
      width: 50%;
      gap: 10px;
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
      justify-content: space-between;
      
      .total,
      .total-of-cus {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        width: 100%;
        .label {
          width: 80%;
        }
        .money {
          text-align: right;
          width: 20%;
          font-weight: 500;
        }
      }
      .total-of-cus {
        font-weight: 500;
      }
    }
  }

  .namepro:hover {
    text-decoration: underline;
    color:var(--text-admin-color);
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
  