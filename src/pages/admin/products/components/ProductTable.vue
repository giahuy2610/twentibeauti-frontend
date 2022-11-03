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
      @rowSelect="onRowSelect"
      selectionMode="single"
    >
      <template #header>
        <div class="flex justify-content-between align-items-center">
          <h5 class="m-0">Sản phẩm</h5>
          <span v-show="selectedCustomers.length > 0">
            Chọn thao tác
            <Dropdown
              v-model="selectedCity1"
              :options="cities"
              optionLabel="name"
              optionValue="code"
              placeholder="Select a City"
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
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="details" header="Chi tiết" style="min-width: 10rem">
        <template #body="{ data }">
          <p
            @click="
              $router.push({
                path: '/admin/products/create',
                query: { sku: data.id },
              })
            "
            class="cursor-pointer hover-primary-color"
          >
            Xem chi tiết
          </p>
        </template>
      </Column>
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
            :class="'flag flag-' + data.brand.code"
            width="30"
          />
          <span class="image-text">{{ data.brand.name }}</span>
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
        style="min-width: 8rem"
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
        field="listPrice"
        header="Giá gốc"
        sortable
        dataType="numeric"
        style="min-width: 8rem"
      >
        <template #body="{ data }">
          {{ formatCurrency(data.listPrice) }}
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
        field="balance"
        header="Giá bán"
        sortable
        dataType="numeric"
        style="min-width: 8rem"
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
          <ProgressBar :value="data.stock" :showValue="false" />
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
import { FilterMatchMode, FilterOperator } from "primevue/api";

export default {
  data() {
    return {
      customers: null,
      selectedCustomers: [],
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
          status: "unqualified",
          stock: 20,
          images: ["abc.png", "bcd.png"],
          listPrice: 80000,
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
      cities: [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" },
      ],
      selectedCity1: null,
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
    onRowSelect(event) {
      // this.$router.push({
      //   path: "/admin/products/create",
      //   query: { sku: event.data.id },
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
.hover-primary-color {
  text-decoration: underline;
  &:hover {
    color: var(--primary-color);
  }
}

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
