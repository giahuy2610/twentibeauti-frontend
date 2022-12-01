<template>
  <div class="product-table-wrapper">
    <DataTable
      :value="list"
      :paginator="true"
      class="p-datatable-customers"
      :rows="10"
      dataKey="id"
      :rowHover="true"
      :filters="filters"
      filterDisplay="menu"
      :loading="loading"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :rowsPerPageOptions="[10, 25, 50]"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
      :globalFilterFields="['name', 'id']"
      responsiveLayout="scroll"
      v-model:selection="selectedCategories"
    >
      <template #header>
        <div class="flex justify-content-between align-items-center">
          <h5 class="m-0">Danh sách danh mục</h5>
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText
              v-model="filters['global'].value"
              placeholder="Tìm kiếm"
            />
          </span>
        </div>
      </template>
      <template #empty> No collections found. </template>
      <template #loading> Loading collections data. Please wait. </template>
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>

      <Column header="Mã danh mục" sortable style="min-width: 11rem" field="id">
        <template #body="{ data }">
          <p
            @click="
              $router.push({
                path: `/admin/collections/edit/${data.IDCollection}`,
              })
            "
            class="cursor-pointer"
            style="color: var(--primary-color)"
          >
            {{ data.IDCollection }}
          </p>
        </template>
      </Column>

      <Column
        field="name"
        header="Tên danh mục"
        sortable
        filterField="representative"
        sortField="representative.name"
        style="min-width: 13rem"
      >
        <template #body="{ data }">
          <span>{{ data.NameCollection }}</span>
        </template>
      </Column>

      <Column
        field="date"
        header="Ngày hiển thị"
        sortable
        dataType="date"
        style="min-width: 10rem"
      >
        <template #body="{ data }">
          {{ data.StartOn }}
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
        field="date"
        header="Ngày kết thúc"
        sortable
        dataType="date"
        style="min-width: 10rem"
      >
        <template #body="{ data }">
          {{ data.EndOn }}
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
        field="date"
        header="Ngày tạo"
        sortable
        dataType="date"
        style="min-width: 10rem"
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
        headerStyle="width: 4rem; text-align: center"
        bodyStyle="text-align: center; overflow: visible"
      >
        <template #body>
          <Button
            icon="pi pi-times"
            class="p-button-rounded p-button-danger p-button-text"
          />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
import { FilterMatchMode, FilterOperator } from "primevue/api";
import { useCollectionStorePinia } from "@/stores/admin/collection";
import { mapState, mapActions } from "pinia";
export default {
  data() {
    return {
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
      list: [],
      selectedCategories: [],
    };
  },
  computed: {
    ...mapState(useCollectionStorePinia, {
      getCollectionItems: "getCollectionItems",
    }),
  },
  created() {},
  async mounted() {
    this.list = await this.getInfoCollection('');
    this.loading = false;
    console.log(this.list);
  },
  methods: {
    formatDate(value) {
      return value.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    },
    ...mapActions(useCollectionStorePinia, ["getInfoCollection"]),
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
