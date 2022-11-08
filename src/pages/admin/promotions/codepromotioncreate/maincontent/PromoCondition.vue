<template lang="">
<div class="promoCondition">
    <Card>
        <template #title>
            Điều kiện áp dụng
        </template>
        <template #content>
                <div class="field-radiobutton">
                    <RadioButton @click="condition = '0'" inputId="condition2" name="condition" value="0" v-model="condition" />
                    <label for="city2">Không có</label>
                </div>
                <div class="group">
                    <div class="field-radiobutton">
                        <RadioButton @click="condition = '1'" inputId="condition1" name="condition" value="1" v-model="condition" />
                        <label for="city1">Tổng giá trị đơn hàng tối thiểu</label>
                    </div>
                    <InputNumber v-show="condition === '1'" style="width:50%; margin-bottom: 1rem;"   inputId="VND" v-model="value20" mode="currency" currency="VND" locale="de-DE"/><label for="minmax-buttons"></label>
                </div>
                <div class="group">
                    <div class="field-radiobutton">
                        <RadioButton @click="condition = '2'" inputId="condition3" name="condition" value="2" v-model="condition" />
                        <label for="city3">Tổng giá trị sản phẩm được khuyến mãi tối thiểu</label>
                    </div>
                    <InputNumber v-show="condition === '2'" style="width:50%;margin-bottom: 1rem;"  inputId="VND" v-model="value20" mode="currency" currency="VND" locale="de-DE"/><label for="minmax-buttons"></label>
                </div>
                <div class="group">
                    <div class="field-radiobutton">
                        <RadioButton @click="condition = '3'" inputId="condition4" name="condition" value="3" v-model="condition" />
                        <label for="city4">Tổng số lượng sản phẩm được khuyến mãi tối thiếu</label>
                    </div>
                    <InputNumber v-show="condition === '3'" style="width:50%;margin-bottom: 1rem;" showButtons inputId="minmax-buttons" v-model="value20" mode="currency" currency="VND" locale="de-DE" :min="2" :max="1000000000" />
                </div>
        </template>
    </Card>
</div>
</template>

<script>
export default {
    data() {
        return {
            condition:'3',
            value20 : 10,
            selectedCategory:0,
        }
    },
}
</script>

<style lang="scss" scoped>
.group
{
    display: flex;
    flex-direction: column;
}
</style>
