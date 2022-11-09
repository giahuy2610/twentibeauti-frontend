<template lang="">
        <span class="input p-input-icon-left">
            <i class="pi pi-search" />
            <InputText v-if="getPromoItem._appliedMode == 'B'"  @input="onShow" placeholder="Tìm kiếm danh mục" /> <!--v-model="filters['global'].value"!-->
            <InputText v-if="getPromoItem._appliedMode == 'C'" @input="onShow" placeholder="Tìm kiếm sản phẩm" />
        </span>
        <Button class="button p-button-outlined" label="Tìm kiếm" @click="onShow()" />
        <DynamicDialog/>
        
</template>
<script>
import { h } from 'vue';
import Button from 'primevue/button';
import ProductList from '@/pages/admin/promotions/components/dialogdatatable/ProductList.vue'
import { FilterMatchMode, FilterOperator } from "primevue/api";
import { usePromotionStorePinia } from "@/stores/admin/promotion.js";
import { mapState, mapWritableState , mapActions } from "pinia";
export default {
    components : {ProductList,},
    computed : {
        ...mapWritableState(usePromotionStorePinia, {
        getPromoItem: "getPromoItem",
    }),
    },
    methods:{
        
        onShow() {
            console.log(this.$dialog)
            const dialogRef = this.$dialog.open(ProductList, {
                data() {
                    return {
                    }
                },
                
                props: {
                    header: 'Product List',
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