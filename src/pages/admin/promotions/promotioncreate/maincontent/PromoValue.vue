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
            <div class="search" v-show="selectedCategory === this.categories[2].name">
                <DialogDataTable></DialogDataTable>
            </div>
        </template>
    </Card>
    <Card>
        <template #content>
            <div class="field-checkbox">
                <Checkbox inputId="binary" v-model="checked" :binary="true" />
                <label for="binary">Mã giảm giá sẽ được tính 1 lần trên mỗi đơn hàng</label>
            </div>
            <span style="padding-left:30px">Bỏ tích nghĩa là mã giảm giá sẽ được áp dụng vào mỗi sản phẩm trong đơn hàng.</span>
        </template>
    </Card>
</div>
</template>

<script>
import DialogDataTable from '@/pages/admin/promotions/components/DialogDataTable.vue';

export default {
    
    components : {DialogDataTable,},
    data() {
        return {
            value20: 4,
            value21: 6,
            byPercent: true,
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
}
</style>
