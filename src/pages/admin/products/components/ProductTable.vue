<template>
  <div class="product-table-wrapper">
    <DataTable
      :value="customers"
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
          <h5 class="m-0">Sản phẩm</h5>
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

      <Column field="name" header="Tên" sortable style="min-width: 14rem">
        <template #body="{ data }">
          {{ data.name }}
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
        field="brand.name"
        header="Hãng"
        sortable
        filterMatchMode="contains"
        style="min-width: 14rem"
      >
        <template #body="{ data }">
          <img
            src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
            :class="'flag flag-' + data.country.code"
            width="30"
          />
          <span class="image-text">{{ data.country.name }}</span>
        </template>
        <template #filter="{ filterModel }">
          <InputText
            type="text"
            v-model="filterModel.value"
            class="p-column-filter"
            placeholder="Search by country"
          />
        </template>
      </Column>
      <Column
        header="Danh mục"
        sortable
        filterField="representative"
        sortField="representative.name"
        :showFilterMatchModes="false"
        :filterMenuStyle="{ width: '14rem' }"
        style="min-width: 14rem"
      >
        <template #body="{ data }">
          <img
            :alt="data.representative.name"
            src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
            width="32"
            style="vertical-align: middle"
          />
          <span class="image-text">{{ data.representative.name }}</span>
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
        style="min-width: 8rem"
      >
        <template #body="{ data }">
          {{ formatDate(data.date) }}
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
        header="Giá"
        sortable
        dataType="numeric"
        style="min-width: 8rem"
      >
        <template #body="{ data }">
          {{ formatCurrency(data.balance) }}
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
        :filterMenuStyle="{ width: '14rem' }"
        style="min-width: 10rem"
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
        field="stock"
        header="Tồn kho"
        sortable
        :showFilterMatchModes="false"
        style="min-width: 10rem"
      >
        <template #body="{ data }">
          <ProgressBar :value="data.activity" :showValue="false" />
        </template>
        <template #filter="{ filterModel }">
          <Slider v-model="filterModel.value" range class="m-3"></Slider>
          <div class="flex align-items-center justify-content-between px-2">
            <span>{{ filterModel.value ? filterModel.value[0] : 0 }}</span>
            <span>{{ filterModel.value ? filterModel.value[1] : 100 }}</span>
          </div>
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
import CustomerService from "./CustomerService";
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
        "unqualified",
        "qualified",
        "new",
        "negotiation",
        "renewal",
        "proposal",
      ],
    };
  },
  created() {
    this.customerService = new CustomerService();
  },
  mounted() {
    this.customers = [
      {
        id: 1000,
        name: "James Butt",
        country: {
          name: "Algeria",
          code: "dz",
        },
        company: "Benton, John B Jr",
        date: "2015-09-13",
        status: "unqualified",
        verified: true,
        activity: 17,
        representative: {
          name: "Ioni Bowcher",
          image: "ionibowcher.png",
        },
        balance: 70663,
      },
      {
        id: 1001,
        name: "Josephine Darakjy",
        country: {
          name: "Egypt",
          code: "eg",
        },
        company: "Chanay, Jeffrey A Esq",
        date: "2019-02-09",
        status: "proposal",
        verified: true,
        activity: 0,
        representative: {
          name: "Amy Elsner",
          image: "amyelsner.png",
        },
        balance: 82429,
      },
      {
        id: 1002,
        name: "Art Venere",
        country: {
          name: "Panama",
          code: "pa",
        },
        company: "Chemel, James L Cpa",
        date: "2017-05-13",
        status: "qualified",
        verified: false,
        activity: 63,
        representative: {
          name: "Asiya Javayant",
          image: "asiyajavayant.png",
        },
        balance: 28334,
      },
      {
        id: 1003,
        name: "Lenna Paprocki",
        country: {
          name: "Slovenia",
          code: "si",
        },
        company: "Feltz Printing Service",
        date: "2020-09-15",
        status: "new",
        verified: false,
        activity: 37,
        representative: {
          name: "Xuxue Feng",
          image: "xuxuefeng.png",
        },
        balance: 88521,
      },
      {
        id: 1004,
        name: "Donette Foller",
        country: {
          name: "South Africa",
          code: "za",
        },
        company: "Printing Dimensions",
        date: "2016-05-20",
        status: "proposal",
        verified: true,
        activity: 33,
        representative: {
          name: "Asiya Javayant",
          image: "asiyajavayant.png",
        },
        balance: 93905,
      },
      {
        id: 1005,
        name: "Simona Morasca",
        country: {
          name: "Egypt",
          code: "eg",
        },
        company: "Chapman, Ross E Esq",
        date: "2018-02-16",
        status: "qualified",
        verified: false,
        activity: 68,
        representative: {
          name: "Ivan Magalhaes",
          image: "ivanmagalhaes.png",
        },
        balance: 50041,
      },
      {
        id: 1006,
        name: "Mitsue Tollner",
        country: {
          name: "Paraguay",
          code: "py",
        },
        company: "Morlong Associates",
        date: "2018-02-19",
        status: "renewal",
        verified: true,
        activity: 54,
        representative: {
          name: "Ivan Magalhaes",
          image: "ivanmagalhaes.png",
        },
        balance: 58706,
      },
      {
        id: 1007,
        name: "Leota Dilliard",
        country: {
          name: "Serbia",
          code: "rs",
        },
        company: "Commercial Press",
        date: "2019-08-13",
        status: "renewal",
        verified: true,
        activity: 69,
        representative: {
          name: "Onyama Limba",
          image: "onyamalimba.png",
        },
        balance: 26640,
      },
    ];
    this.customers.forEach(
      (customer) => (customer.date = new Date(customer.date))
    );
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

products= [ 
{ 
id: 1000, 
productName: "Kem Nền Hiệu Ứng Căng Mướt THEFACESHOP AURA CC CREAM SPF30 PA++ 20g", 
brand: {name: "The Face Shop", id: 100, path: "/collections/the-face-shop", country: "Hàn Quốc" },
createdOn: "2015-09-13", status: "unqualified", 
stock: 20,
images: ['abc.png','bcd.png'], 
listprice: 80000, 
saleprice: 75000, 
description: 'Công dụng chính: Kem nền hiệu chỉnh sắc diện da, giúp làn da rạng rỡ và tỏa sáng.Hiệu ứng: Nâng tông, căng mướt da', 
category: {
  name: "",
  id: "",
  path: "",
}
review: 
[
{ id: 111, user: 1112, rating: 4, content: 'Sản phẩm tốt', createdOn: '2015-09-13', invoice: {id: 152} },
{ id: 115, user: 1113, rating: 2, content: 'Sản phẩm tốt', createdOn: '2015-09-14', invoice: {id: 165} }
]

]
