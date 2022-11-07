<template lang="">
        <span class="input p-input-icon-left">
            <i class="pi pi-search" />
            <InputText  @click="onShow" placeholder="Tìm kiếm sản phẩm" /> <!--v-model="filters['global'].value"!-->
        </span>
        <Button class="button p-button-outlined" label="Tìm kiếm" @click="onShow" />
    <DynamicDialog />
</template>
<script>
import { h } from 'vue';
import Button from 'primevue/button';
import ProductList from '@/pages/admin/promotions/components/dialogdatatable/ProductList.vue'
export default {
    components : {ProductList,},
    methods:{
        onShow() {
            console.log(this.$dialog)
            const dialogRef = this.$dialog.open(ProductList, {
                props: {
                    header: 'Product List',
                    style: {
                        width: '50vw',
                    },
                    breakpoints:{
                        '960px': '75vw',
                        '640px': '90vw'
                    },
                    modal: true
                },
                templates: {
                    footer: () => {
                        return [
                            h(Button, { label: "No", icon: "pi pi-times", onClick: () => dialogRef.close({ buttonType: 'No' }), class: "p-button-text" }),
                            h(Button, { label: "Yes", icon: "pi pi-check", onClick: () => dialogRef.close({ buttonType: 'Yes' }), autofocus: true })
                        ]
                    }
                },
                onClose: (options) => {
                    const data = options.data;
                    if (data) {
                        const buttonType = data.buttonType;
                        const summary_and_detail = buttonType ? { summary: 'No Product Selected', detail: `Pressed '${buttonType}' button` } : { summary: 'Product Selected', detail: data.name };

                        this.$toast.add({ severity:'info', ...summary_and_detail, life: 3000 });
                    }
                }
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