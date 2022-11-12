<template lang="">
<div class="promoCondition">
    <Card>
        <template #title>
            Điều kiện áp dụng
        </template>
        <template #content>
                <div class="field-radiobutton">
                    <RadioButton @click="condition = '0'" inputId="condition2" name="condition" value="0" v-model="getPromoItem._condition" />
                    <label for="city2">Không có</label>
                </div>
                <div class="group">
                    <div class="field-radiobutton">
                        <RadioButton @click="condition = '1'" inputId="condition1" name="condition" value="1" v-model="getPromoItem._condition" />
                        <label for="city1">Tổng giá trị đơn hàng tối thiểu</label>
                    </div>
                    <InputNumber v-show="condition === '1'" style="width:50%; margin-bottom: 10px; margin-left: 30px"   inputId="VND" v-model="getPromoItem._conditionValue1" mode="currency" currency="VND" locale="de-DE"/><label for="minmax-buttons"></label>
                </div>
                <div class="group">
                    <div class="field-radiobutton">
                        <RadioButton @click="condition = '2'" inputId="condition3" name="condition" value="2" v-model="getPromoItem._condition" />
                        <label for="city3">Tổng giá trị sản phẩm được khuyến mãi tối thiểu</label>
                    </div>
                    <InputNumber v-show="condition === '2'" style="width:50%; margin-bottom: 10px; margin-left: 30px"  inputId="VND" v-model="getPromoItem._conditionValue2" mode="currency" currency="VND" locale="de-DE"/><label for="minmax-buttons"></label>
                </div>
                <div class="group">
                    <div class="field-radiobutton">
                        <RadioButton @click="condition = '3'" inputId="condition4" name="condition" value="3" v-model="getPromoItem._condition" />
                        <label for="city4">Tổng số lượng sản phẩm được khuyến mãi tối thiếu</label>
                    </div>
                    <InputNumber v-show="condition === '3'" style="width:50%; margin-bottom: 10px; margin-left: 30px" showButtons inputId="minmax-buttons" v-model="getPromoItem._conditionValue3" :min="2" :max="100000" />
                </div>
        </template>
    </Card>
</div>
</template>

<script>
import { usePromotionStorePinia } from "@/stores/admin/promotion.js";
import { mapState, mapWritableState , mapActions } from "pinia";
export default {
    computed: {
    ...mapWritableState(usePromotionStorePinia, {
        getPromoItem: "getPromoItem",
    }),
    },
    data() {
        return {
            
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
