<template>
<div class="product-table-wrapper">
    <DataTable  :value="categories" :paginator="true" class="p-datatable-customers" :rows="10" dataKey="id" :rowHover="true" :filters="filters" filterDisplay="menu" :loading="loading" paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10, 25, 50]" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries" :globalFilterFields="['name', 'id']" responsiveLayout="scroll" v-model:selection="selectedCategories">
        <template #header>
            <div class="flex justify-content-between align-items-center">
                <h5 class="m-0">Danh sách danh mục</h5>
                <span class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <InputText v-model="filters['global'].value" placeholder="Tìm kiếm" />
                </span>
            </div>
        </template>
        <template #empty> No collections found. </template>
        <template #loading> Loading collections data. Please wait. </template>
        <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>

        <Column header="Mã danh mục" sortable style="min-width: 12rem" field="id">
            <template #body="{ data }">
                <p @click="
              $router.push({
                path: '/admin/collections/create',
                query: { id: data.id },
              })
            " class="cursor-pointer" style="color: var(--primary-color)">
                    {{ data.id }}
                </p>
            </template>
        </Column>

        <Column field="name" header="Tên danh mục" sortable filterField="representative" sortField="representative.name" style="min-width: 13rem">
            <template #body="{ data }">
                <span>{{ data.name }}</span>
            </template>
        </Column>

        <Column field="date" header="Ngày hiển thị" sortable dataType="date" style="min-width: 10rem">
            <template #body="{ data }">
                {{ data.startOn }}
            </template>
            <template #filter="{ filterModel }">
                <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
            </template>
        </Column>

        <Column field="date" header="Ngày kết thúc" sortable dataType="date" style="min-width: 10rem">
            <template #body="{ data }">
                {{ data.endOn }}
            </template>
            <template #filter="{ filterModel }">
                <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
            </template>
        </Column>

        <Column field="date" header="Ngày tạo" sortable dataType="date" style="min-width: 10rem">
            <template #body="{ data }">
                {{ data.createdOn }}
            </template>
            <template #filter="{ filterModel }">
                <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
            </template>
        </Column>

        <Column headerStyle="width: 4rem; text-align: center" bodyStyle="text-align: center; overflow: visible">
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
            categories: [{
                    id: 1000,
                    name: "Sản phẩm mới",
                    createdOn: "2015-09-13",
                    startOn: "2015-09-13",
                    endOn: "2015-09-13",
                },
                {
                    id: 1002,
                    name: "Sản phẩm giả",
                    createdOn: "2015-09-12",
                    startOn: "2015-09-13",
                    endOn: "2015-09-13",
                },
                {
                    id: 1004,
                    name: "Sản phẩm cũ",
                    createdOn: "2015-09-13",
                    startOn: "2015-09-13",
                    endOn: "2015-09-13",
                },
            ],
            selectedCategories: [],
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
    },
};
</script>

<style lang="scss" scoped>
.product-table-wrapper {}

::v-deep(.p-paginator) {
    .p-paginator-current {}
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

    .p-datatable-thead>tr>th {
        text-align: left;
    }

    .p-datatable-tbody>tr>td {
        cursor: auto;
    }

    .p-dropdown-label:not(.p-placeholder) {
        text-transform: uppercase;
    }
}
</style>
