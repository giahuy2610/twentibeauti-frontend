<template lang="">
<div class="promoValue">
    <Card>
        <template #title>
            <span>Giá trị</span>
        </template>
        <template #content>
            <div class="value">
                <div class="left field col-12 md:col-3">
                    <label for="minmax-buttons">Giá trị khuyến mãi</label>
                    <InputNumber v-show="!byPercent" showButtons inputId="minmax-buttons" v-model="value20" mode="currency" currency="VND" locale="de-DE" :min="0" :max="1000000000" />
                    <InputNumber v-show="byPercent" showButtons inputId="minmax-buttons" v-model="value21" suffix="%" :min="0" :max="100" />
                </div>
                <div class="right field col-12 md:col-3">
                    <label for="minmax-buttons">Giá trị giảm tối đa (tùy chọn) </label>
                    <InputNumber showButtons inputId="minmax-buttons" v-model="value21" suffix="%" :min="0" :max="100" />
                </div>
            </div>
        </template>
    </Card>
    <Card>
        <template #title>
            <span>Áp dụng cho</span>
        </template>
        <template #content>
            <div v-for="category of categories" :key="category.key" class="field-radiobutton">
                <RadioButton :inputId="category.key" name="category" :value="category.name" v-model="selectedCategory" :disabled="category.key === 'R'" />
                <label :for="category.key">{{ category.name }}</label>
            </div>
            <div class="search" v-show="selectedCategory === this.categories[1].name">
                <span class="input p-input-icon-left">
                    <i class="pi pi-search" />
                    <InputText  @click="onShow" placeholder="Tìm kiếm danh mục" /> <!--v-model="filters['global'].value"!-->
                </span>
                <Button class="button p-button-outlined" label="Tìm kiếm" @click="onShow" />
            </div>
            <div class="search" v-show="selectedCategory === this.categories[0].name">
                <span class="input p-input-icon-left">
                    <i class="pi pi-search" />
                    <InputText  @click="onShow" placeholder="Tìm kiếm sản phẩm" /> <!--v-model="filters['global'].value"!-->
                </span>
                <Button class="button p-button-outlined" label="Tìm kiếm" @click="onShow" />
            </div>
            <DynamicDialog />
        </template>
    </Card>
    <Card>
        <template #content>
            <div class="field-checkbox">
                <Checkbox inputId="binary" v-model="checked" :binary="true" />
                <label for="binary">Áp dụng cùng với chương trình khuyến mãi</label>
            </div>
            <span style="padding-left:30px">Bỏ tích nghĩa là mã giảm giá sẽ được áp dụng vào mỗi sản phẩm trong đơn hàng.</span>
        </template>
    </Card>
</div>
</template>

<script>
import { h } from 'vue';
import Button from 'primevue/button';
import ProductList from '@/pages/admin/promotions/promotioncreate/maincontent/promovalue/ProductList.vue';
export default {
    components : {ProductList,},
    data() {
        return {
            value20: 4,
            value21: 6,
            byPercent: false,
            categories: [
                { name: "Tất cả sản phẩm", key: "A" },
                { name: "Danh mục sản phẩm", key: "B" },
                { name: "Sản phẩm", key: "C" }
            ],
            selectedCategory: null,
            checked : true,
        };
    },
    created() {
    this.selectedCategory = this.categories[1].name;
    },
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
};
</script>

<style lang="scss" scoped>
.value {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 10px;

    .left {
        display: flex;
        flex-direction: column;
        margin: 10px;
        flex: 1 1 auto;
    }

    .right {
        width: 45%;
        display: flex;
        flex-direction: column;
        margin: 10px;
    }
}
.search
{
    display: flex;
    .input
    {
        .p-inputtext{
            width: 100%;
        }
        flex : 1 1 auto;
    }
}
</style>
