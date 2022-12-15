<template>
  <div class="product-table-wrapper">
    <DataTable
      v-model:value="products"
      :paginator="true"
      class="p-datatable-customize"
      :rows="10"
      dataKey="IDProduct"
      :rowHover="true"
      v-model:selection="selectedProducts"
      v-model:filters="filters"
      filterDisplay="menu"
      :loading="loading"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :rowsPerPageOptions="[10, 25, 50]"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
      :globalFilterFields="[
        'IDProduct',
        'NameProduct',
        'ListPrice',
        'RetailPrice',
        'Brand.NameBrand',
      ]"
      responsiveLayout="scroll"
      @rowSelect="onRowSelect"
      selectionMode="single"
    >
      <template #header>
        <div class="flex justify-content-between align-items-center">
          <h5 class="m-0">Sản phẩm</h5>
          <span v-show="selectedProducts.length > 0">
            Chọn thao tác
            <Dropdown
              v-model="selectedCity1"
              :options="optionOnClick"
              optionLabel="name"
              optionValue="code"
              placeholder="Chọn thao tác"
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
      <template #empty> Không có sản phẩm </template>
      <template #loading> Đang lấy dữ liệu. </template>
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="IDProduct" sortable header="SKU" style="min-width: 10rem">
        <template #body="{ data }">
          <p
            @click="
              $router.push({
                path: `/admin/products/edit/${data.IDProduct}`,
              })
            "
            class="cursor-pointer hover-primary-color"
          >
            {{ data.IDProduct }}
          </p>
        </template>
      </Column>
      <Column
        field="NameProduct"
        header="Tên"
        sortable
        style="min-width: 14rem"
      >
        <template #body="{ data }">
          {{ data.NameProduct }}
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
        field="Brand.NameBrand"
        header="Hãng"
        sortable
        filterMatchMode="contains"
        style="min-width: 14rem"
      >
        <template #body="{ data }">
          <span class="image-text">{{ data.Brand.NameBrand }}</span>
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
        field="CreatedOn"
        header="Ngày tạo"
        sortable
        dataType="date"
        style="min-width: 8rem"
      >
        <template #body="{ data }">
          {{ data.CreatedOn }}
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
        field="ListPrice"
        header="Giá gốc"
        sortable
        dataType="numeric"
        style="min-width: 8rem"
      >
        <template #body="{ data }">
          {{ formatCurrency(data.ListPrice) }}
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
        field="RetailPrice"
        header="Giá bán lẻ"
        sortable
        dataType="numeric"
        style="min-width: 8rem"
      >
        <template #body="{ data }">
          {{ formatCurrency(data.RetailPrice) }}
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
        field="IsDeleted"
        header="Tình trạng"
        sortable
        :filterMenuStyle="{ width: '14rem' }"
        style="min-width: 10rem"
      >
        <template #body="{ data }">
          <span :class="'customer-badge status-' + data.IsDeleted">{{
            !data.IsDeleted ? "Khả dụng" : "Xóa mềm"
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
        field="Stock"
        header="Tồn kho"
        sortable
        :showFilterMatchModes="false"
        style="min-width: 10rem"
      >
        <template #body="{ data }">
          {{data.Stock}}
          <ProgressBar :value="data.Stock" :showValue="false" />
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
      selectedProducts: [],
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
      representatives: [{ name: "Amy Elsner", image: "amyelsner.png" }],
      statuses: [
        "unqualified",
        "qualified",
        "new",
        "negotiation",
        "renewal",
        "proposal",
      ],

      optionOnClick: [
        { name: "Sửa", code: "1" },
        { name: "Xóa", code: "2" },
      ],
      selectedCity1: null,
      products: [],
    };
  },
  async mounted() {
    await this.axios
      .get("/product/index")
      .then((response) => {
        this.products = response.data;
        this.loading = false;
        console.log(this.products);
      })
      .catch((error) => {
        console.log(error);
      });
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

::v-deep(.p-datatable.p-datatable-customize) {
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
