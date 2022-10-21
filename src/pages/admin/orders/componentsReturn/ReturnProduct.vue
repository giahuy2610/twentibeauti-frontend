<template>
    <div class="product-table-wrapper">
      <DataTable
        :value="products"
        class="p-datatable-customers"
        :rows="10"
        dataKey="id"
        :rowHover="true"
        v-model:selection="selectedCustomers"
        v-model:filters="filters"
        filterDisplay="menu"
        :loading="loading"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[10, 25, 50]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        :globalFilterFields="[
          'name',
          'country.name',
          'representative.name',
          'status',
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
  
        <Column field="name" header="STT" style="min-width: 5rem">
          <template #body="{ data }">
            {{ data.id }}
          </template>
        </Column>
        <Column
        field="brand.name"
        header="Ảnh"
        filterMatchMode="contains"
        style="min-width: 5rem"
      >
        <template #body="{ data }">
          <img
            src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
            :class="'flag flag-' + data.brand.code"
            width="30"
          />
         
        </template>
      </Column>
      <Column field="name" header="Tên sản phẩm" style="min-width: 10rem">
        <template #body="{ data }">
          {{ data.name}}
        </template>
      </Column>
      <Column field="name" header="Số lượng" style="min-width: 7rem">
        <template #body="{ data }">
          {{ data.id }}
        </template>
      </Column>
        
        <Column
          field="balance"
          header="Đơn giá"
          dataType="numeric"
          style="min-width: 7rem"
        >
          <template #body="{ data }">
            {{ formatCurrency(data.salePrice) }}
          </template>
        </Column>
        <Column
          field="balance"
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
                  <div class="money">300,000</div>
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
        customers: null,
        selectedCustomers: null,
        filters: {
          global: { value: null, matchMode: FilterMatchMode.CONTAINS },
          name: {
            operator: FilterOperator.AND,
            constraints: [
              { value: null, matchMode: FilterMatchMode.STARTS_WITH },
            ],
          },
          "country.name": {
            operator: FilterOperator.AND,
            constraints: [
              { value: null, matchMode: FilterMatchMode.STARTS_WITH },
            ],
          },
          representative: { value: null, matchMode: FilterMatchMode.IN },
          date: {
            operator: FilterOperator.AND,
            constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
          },
          balance: {
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
        representatives: [
          { name: "Amy Elsner", image: "amyelsner.png" },
          { name: "Anna Fali", image: "annafali.png" },
          { name: "Asiya Javayant", image: "asiyajavayant.png" },
          { name: "Bernardo Dominic", image: "bernardodominic.png" },
          { name: "Elwin Sharvill", image: "elwinsharvill.png" },
          { name: "Ioni Bowcher", image: "ionibowcher.png" },
          { name: "Ivan Magalhaes", image: "ivanmagalhaes.png" },
          { name: "Onyama Limba", image: "onyamalimba.png" },
          { name: "Stephen Shaw", image: "stephenshaw.png" },
          { name: "XuXue Feng", image: "xuxuefeng.png" },
        ],
        statuses: [
          "Đang giao dịch",
          "Hoàn thành",
        ],
        products: [
          {
            id: 1000,
            name: "Kem Nền Hiệu Ứng Căng Mướt THEFACESHOP AURA CC CREAM SPF30 PA++ 20g",
            brand: {
              name: "The Face Shop",
              id: 100,
              path: "/collections/the-face-shop",
              country: "Hàn Quốc",
            },
            createdOn: "2015-09-13",
            status: "Đang giao dịch",
            stock: 20,
            images: ["abc.png", "bcd.png"],
            listprice: 80000,
            salePrice: 75000,
            description:
              "Công dụng chính: Kem nền hiệu chỉnh sắc diện da, giúp làn da rạng rỡ và tỏa sáng.Hiệu ứng: Nâng tông, căng mướt da",
            category: {
              name: "Trang điểm",
              id: "1",
              path: "/categories/trang-diem",
            },
            review: [
              {
                id: 111,
                userId: 1112,
                rating: 4,
                content: "Sản phẩm tốt",
                createdOn: "2015-09-13",
                invoice: { id: 152 },
              },
              {
                id: 115,
                userId: 1113,
                rating: 2,
                content: "Sản phẩm tốt",
                createdOn: "2015-09-14",
                invoice: { id: 165 },
              },
            ],
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
        return value.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
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
  