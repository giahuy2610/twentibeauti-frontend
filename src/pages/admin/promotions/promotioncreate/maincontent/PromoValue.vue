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
        </template>
    </Card>
</div>
</template>

<script>
export default {
    data() {
        return {
            value20: 4,
            value21: 6,
            byPercent: false,
            categories: [
                { name: "Theo phần trăm", key: "A" },
                { name: "Theo số tiền", key: "M" },
            ],
            selectedCategory: null,
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
</style>
