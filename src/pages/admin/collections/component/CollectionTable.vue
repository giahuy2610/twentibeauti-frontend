<template>
  <Toast />
  <ConfirmDialog></ConfirmDialog>
  <div class="product-table-wrapper">
    <DataTable
      :value="list"
      :paginator="true"
      class="p-datatable-customers"
      :rows="10"
      dataKey="IDCollection"
      :rowHover="true"
      :filters="filters"
      filterDisplay="menu"
      :loading="loading"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :rowsPerPageOptions="[10, 25, 50]"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
      :globalFilterFields="[
        'IDCollection',
        'NameCollection',
        'CreatedOn',
        'StartOn',
        'EndOn',
      ]"
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

      <Column
        field="IDCollection"
        header="Mã danh mục"
        sortable
        style="min-width: 9rem"
      >
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
        field="NameCollection"
        header="Tên danh mục"
        sortable
        filterField="representative"
        sortField="representative.name"
        style="min-width: 11rem"
      >
        <template #body="{ data }">
          <span>{{ data.NameCollection }}</span>
        </template>
      </Column>

      <Column
        field="StartOn"
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
        field="EndOn"
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
        field="CreatedOn"
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
        style="min-width: 3rem"
        headerStyle="text-align: center"
        bodyStyle="text-align: center; overflow: visible"
      >
        <template #body="{ data }">
          <Button
            @click="onDelete(data.IDCollection)"
            icon="pi pi-times"
            class="p-button-rounded p-button-danger p-button-text"
          >
          </Button>
        </template>
      </Column>
      <!-- <Column
        headerStyle="width: 3rem; text-align: center"
        bodyStyle="text-align: center; overflow: visible"
      >
      <template #body="{ data }">
          <Button
            icon="pi pi-pencil"
            class="p-button-rounded p-button-success p-button-text"
            @click="
              $router.push({
                path: `/admin/collections/edit/${data.IDCollection}`,
              })
            "
          />
        </template>
      </Column> -->
    </DataTable>
  </div>
</template>

<script>
import { FilterMatchMode, FilterOperator } from "primevue/api";
import { useCollectionStorePinia } from "@/stores/admin/collection";
import { mapState, mapActions } from "pinia";
export default {
  // name:'collectiontable',
  data() {
    return {
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        NameCollection: {
          operator: FilterOperator.AND,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
        // "country.name": {
        //   operator: FilterOperator.AND,
        //   constraints: [
        //     { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        //   ],
        // },
        // representative: { value: null, matchMode: FilterMatchMode.IN },
        // date: {
        //   operator: FilterOperator.AND,
        //   constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
        // },
        // balance: {
        //   operator: FilterOperator.AND,
        //   constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
        // },
        // status: {
        //   operator: FilterOperator.OR,
        //   constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
        // },
        // activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
        // verified: { value: null, matchMode: FilterMatchMode.EQUALS },
      },
      loading: true,
      list: [],
      selectedCategories: [],
    };
  },
  computed: {
    ...mapState(useCollectionStorePinia, {
      getCollectionItems: "getCollectionItems",
      collectionItems: "collectionItems",
    }),
  },
  created() {},
  async mounted() {
    this.list = await this.getInfoCollection("");
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
    ...mapActions(useCollectionStorePinia, [
      "getInfoCollection",
      "delCollection",
    ]),
    onDelete(IDCollection) {
      this.$confirm.require({
        message: "Bạn có chắc chắn muốn xóa không ?",
        header: "Delete Confirmation",
        icon: "pi pi-info-circle",
        acceptClass: "p-button-danger",
        accept: () => {
          this.delCollection(IDCollection);
          this.$toast.add({
            severity: "info",
            summary: "Confirmed",
            detail: "Xóa thành công",
            life: 3000,
          });
        },
        reject: () => {
          this.$toast.add({
            severity: "error",
            summary: "Rejected",
            detail: "Đã hủy thao tác xóa",
            life: 3000,
          });
        },
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
