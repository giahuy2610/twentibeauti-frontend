<template>
<div>
    <div class="flex justify-content-end mt-1 mb-3">
        <Button icon="pi pi-external-link" label="Nested Dialog" class="p-button-outlined p-button-success" @click="showInfo" />
    </div>
    <DataTable :value="customers" v-model:selection="getPromoItem._customer" dataKey="name" :filters="filters" :globalFilterFields="['name']" filterDisplay="menu" responsiveLayout="scroll">
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
        <Column field="name" header="Name"></Column>
    </DataTable>
</div>
</template>

<script>
import DialogService from './service/DialogService';
import { FilterMatchMode, FilterOperator } from "primevue/api";
import { usePromotionStorePinia } from "@/stores/admin/promotion.js";
import { mapState, mapWritableState, mapActions } from "pinia";
export default {
    inject: ['dialogRef'],
    computed: {
        ...mapWritableState(usePromotionStorePinia, {
            getPromoItem: "getPromoItem",
        }),
    },
    data() {
        return {
            filters: null,
            loading: true,
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
        this.dialogService.getCustomerSmall().then(data => this.customers = data.slice(0, 5));

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
