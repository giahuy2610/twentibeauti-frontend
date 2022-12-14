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
      v-model:filters="filterModel"
      filterDisplay="menu"
      :loading="loading"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :rowsPerPageOptions="[10, 25, 50]"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
      :globalFilterFields="['IDProduct', 'NameProduct', 'Brand.NameBrand']"
      responsiveLayout="scroll"
    >
      <template #header>
        <div class="flex justify-content-between align-items-center">
          <h5 class="m-0">Sản phẩm</h5>
          <span v-show="selectedProducts.length > 0">
            Chọn thao tác
            <Dropdown
              v-model="selectedAction"
              :options="optionOnClick"
              optionLabel="name"
              optionValue="code"
              placeholder="Chọn thao tác"
            />
          </span>

          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText
              v-model="filterModel['global'].value"
              placeholder="Tìm kiếm"
            />
          </span>
        </div>
      </template>
      <template #empty> Không có sản phẩm </template>
      <template #loading> Đang lấy dữ liệu. </template>
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="IDProduct" header="SKU" sortable style="min-width: 10rem">
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
        style="min-width: 10rem"
      >
        <template #body="{ data }">
          <p>
            {{ data.Brand.NameBrand }}
          </p>
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
import { useEventStorePinia } from "@/stores/admin/eventpromotion.js";
import { mapWritableState, mapActions } from "pinia";
export default {
  data() {
    return {
      selectedProducts: [],
      filterModel: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        IDProduct: {
          operator: FilterOperator.AND,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
        NameProduct: {
          operator: FilterOperator.AND,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
        "Brand.NameBrand": {
          operator: FilterOperator.AND,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
      },
      loading: true,
      optionOnClick: [
        { name: "Sửa", code: "1" },
        { name: "Xóa", code: "2" },
      ],
      selectedAction: null,
      products: [],
    };
  },
  async mounted() {
    await this.axios
      .get("/product/index")
      .then((response) => {
        this.products = response.data;
        this.loading = false;
      })

      .catch((error) => {
        console.log(error);
      });
    if (
      this.$route.path.slice(0, this.$route.path.lastIndexOf("/") + 1) ==
      "/admin/promotions/event/edit/"
    )
      this.selectedProducts = this.eventPromotion.Products;
    console.log(this.eventPromotion.Products);
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
  computed: {
    ...mapWritableState(useEventStorePinia, {
      eventPromotion: "eventPromotion",
    }),
  },
  watch: {
    eventPromotion(newValue, oldValue) {
      if (
        this.$route.path.slice(0, this.$route.path.lastIndexOf("/") + 1) ==
        "/admin/promotions/event/edit/"
      )
        this.selectedProducts = newValue["Products"];
    },
    selectedProducts(newValue, oldValue) {
      this.eventPromotion.Products = newValue.map(
        (product) => product["IDProduct"]
      );
      console.log(this.eventPromotion.Products);
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
