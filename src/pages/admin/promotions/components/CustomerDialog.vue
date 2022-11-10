<template lang="">
        <span class="input p-input-icon-left">
            <i class="pi pi-search" />
            <InputText v-if="getPromoItem._customerType == 'T'" @input="onShow" placeholder="Tìm kiếm nhóm khách hàng" />
        </span>
        <Button class="button p-button-outlined" label="Tìm kiếm" @click="onShow()" />
        <DynamicDialog/>
        
</template>
<script>
import { h } from 'vue';
import Button from 'primevue/button';
import CustomerList from '@/pages/admin/promotions/components/dialogdatatable/CustomerList.vue'
import { FilterMatchMode, FilterOperator } from "primevue/api";
import { usePromotionStorePinia } from "@/stores/admin/promotion.js";
import { mapState, mapWritableState , mapActions } from "pinia";
export default {
    components : {CustomerList,},
    computed : {
        ...mapWritableState(usePromotionStorePinia, {
        getPromoItem: "getPromoItem",
    }),
    },
    methods:{
        
        onShow() {
            console.log(this.$dialog)
            const dialogRef = this.$dialog.open(CustomerList, {
                data() {
                    return {
                    }
                },
                props: {
                    header: 'Customer List',
                    position : 'top',
                    style: {
                        
                        width: '50vw',
                        
                    },
                    breakpoints:{
                        '960px': '75vw',
                        '640px': '90vw',
                    },
                    modal: true,
                    
                },
                templates: {
                    footer: () => {
                        return [
                            //h(Button, { label: "No", icon: "pi pi-times", onClick: () => dialogRef.close({ buttonType: 'No' }), class: "p-button-text" }),
                            h(Button, { label: "Yes", icon: "pi pi-check", onClick: () => dialogRef.close({ buttonType: 'Yes' }), autofocus: true })
                        ]
                    }
                },
                
            });
        }
    }
}
</script>
<style lang="scss" scoped>

    .input
    {
        .p-inputtext{
            width: 100%;
        }
        flex : 1 1 auto;
    }

</style>