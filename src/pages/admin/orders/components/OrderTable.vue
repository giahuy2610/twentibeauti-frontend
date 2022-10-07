<template>
    <div class="product-table-wrapper">
      <DataTable
        :value="products"
        :paginator="true"
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
        <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
  
        <Column field="name" header="Mã đơn hàng" sortable style="min-width: 12rem">
          <template #body="{ data }">
            {{ data.id }}
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
          header="Tên khách hàng"
          sortable
          filterField="representative"
          sortField="representative.name"
          :showFilterMatchModes="false"
          :filterMenuStyle="{ width: '11rem' }"
          style="min-width: 13rem"
        >
          <template #body="{ data }">
            <img
              :alt="data.category.name"
              src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
              width="32"
              style="vertical-align: middle"
            />
            <span class="image-text">{{ data.category.name }}</span>
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
        <Column
          field="date"
          header="Ngày tạo"
          sortable
          dataType="date"
          style="min-width: 10rem"
        >
          <template #body="{ data }">
            {{ data.createdOn }}
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
          field="balance"
          header="Tổng đơn"
          sortable
          dataType="numeric"
          style="min-width: 11rem"
        >
          <template #body="{ data }">
            {{ formatCurrency(data.salePrice) }}
          </template>
          <template #filter="{ filterModel }">
            <InputNumber
              v-model="filterModel.value"
              mode="currency"
              currency="USD"
              locale="en-US"
            />
          </template>
        </Column>
        <Column
          field="status"
          header="Tình trạng"
          sortable
          :filterMenuStyle="{ width: '10rem' }"
          style="min-width: 11rem"
        >
          <template #body="{ data }">
            <span :class="'customer-badge status-' + data.status">{{
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
                <span :class="'customer-badge status-' + slotProps.value">{{
                  slotProps.value
                }}</span>
              </template>
              <template #option="slotProps">
                <span :class="'customer-badge status-' + slotProps.option">{{
                  slotProps.option
                }}</span>
              </template>
            </Dropdown>
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
    
  }
  
  ::v-deep(.p-paginator) {
    .p-paginator-current {
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
  