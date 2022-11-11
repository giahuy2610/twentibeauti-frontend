<template>
<div>
    <div v-if="getEventPromoItem._appliedMode == 'B'" class="collection">
        <div class="flex justify-content-end mt-1 mb-3">
            <Button icon="pi pi-external-link" label="Nested Dialog" class="p-button-outlined p-button-success" @click="showInfo" />
        </div>
        <DataTable :value="collections" v-model:selection="getEventPromoItem._collection" dataKey="id" :filters="filters" :globalFilterFields="['name', 'code']" filterDisplay="menu" responsiveLayout="scroll">
            <template #header>
                <div class="flex justify-content-between align-items-center">
                    <Button type="button" icon="pi pi-filter-slash" label="Clear" class="p-button-outlined" @click="clearFilter()" />
                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="filters['global'].value" placeholder="Tìm kiếm" />
                    </span>
                </div>
            </template>
            <template #empty> No collections found. </template>
            <template #loading> Loading collections data. Please wait. </template>
            <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="'demo/images/product/' + slotProps.data.image" @error="(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'" :alt="slotProps.data.name" class="shadow-2 w-4rem" />
                </template>
            </Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
    <div v-if="getEventPromoItem._appliedMode == 'C'" class="product">
        <div class="flex justify-content-end mt-1 mb-3">
            <Button icon="pi pi-external-link" label="Nested Dialog" class="p-button-outlined p-button-success" @click="showInfo" />
        </div>
        <DataTable :value="products" v-model:selection="getEventPromoItem._product" dataKey="id" :filters="filters" :globalFilterFields="['name', 'code']" filterDisplay="menu" responsiveLayout="scroll">
            <template #header>
                <div class="flex justify-content-between align-items-center">
                    <Button type="button" icon="pi pi-filter-slash" label="Clear" class="p-button-outlined" @click="clearFilter()" />
                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="filters['global'].value" placeholder="Tìm kiếm" />
                    </span>
                </div>
            </template>
            <template #empty> No collections found. </template>
            <template #loading> Loading collections data. Please wait. </template>
            <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="'demo/images/product/' + slotProps.data.image" @error="(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'" :alt="slotProps.data.name" class="shadow-2 w-4rem" />
                </template>
            </Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</div>
</template>

    
<script>
import DialogService from './service/DialogService';
import { FilterMatchMode, FilterOperator } from "primevue/api";
import { useEventStorePinia } from "@/stores/admin/eventpromotion.js";
import { mapState, mapWritableState, mapActions } from "pinia";
export default {
    inject: ['dialogRef'],
    computed: {
        ...mapWritableState(useEventStorePinia, {
            getEventPromoItem: "getEventPromoItem",
        }),
    },
    data() {
        return {
            filters: null,
            loading: true,
            products: null,
            collections: null,
            customers: null,
            checked: null,
            selectAll: false,
        }
    },
    dialogService: null,
    created() {
        this.dialogService = new DialogService();
        this.initFilters();
    },
    mounted() {
        this.dialogService.getCollectionSmall().then(data => this.collections = data.slice(0, 5));
        this.dialogService.getProductsSmall().then(data => this.products = data.slice(0, 5));

    },
    methods: {
        clearFilter() {
            this.initFilters();
        },
        initFilters() {
            this.filters = { 'global': { value: null, matchMode: FilterMatchMode.CONTAINS } }
        },
        showInfo() {
            console.log(this.getPromoItem._product);
        },
    }
}
</script>

    
<style lang="scss" scoped>
::v-deep(.p-datatable-thead) {
    display: none !important;
}
</style>
