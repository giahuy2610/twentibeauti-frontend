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
                    <InputNumber @input="change" v-show="getPromoItem._promoType=='M'" showButtons inputId="minmax-buttons" v-model="getPromoItem._retailValue" mode="currency" currency="VND" locale="de-DE" :min="0" :max="1000000000" />
                    <InputNumber @input="change" v-show="getPromoItem._promoType=='P'" showButtons inputId="minmax-buttons" v-model="getPromoItem._retailValue" suffix="%" :min="0" :max="100" />
                </div>
                <div v-if="getPromoItem._promoType=='P'" class="right field col-12 md:col-3">
                    <label for="minmax-buttons">Giá trị giảm tối đa (tùy chọn) </label>
                    <InputNumber type="text" @input="change"  showButtons inputId="minmax-buttons" v-model="getPromoItem._maxretailValue" mode="currency" currency="VND" locale="de-DE" :min="0" :max="1000000000"/>
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
            <div style="margin-top:10px" class="image" v-if="getPromoItem._product.length > 0">
                <div style="display:flex; align-items:center; gap:10px; margin-bottom: 5px" v-for="(item,index) in getPromoItem._product" :key="index">
                    <img :src="'demo/images/product/' + item.image" @error="(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'" :alt="item.name" class="shadow-2 w-4rem" />
                    <span>{{item.name}}</span>
                </div>
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
import { usePromotionStorePinia } from "@/stores/admin/promotion.js";
import { mapState, mapWritableState , mapActions } from "pinia";
export default {
    
    components : {DialogDataTable,},
    data() {
        return {
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
    computed: {
    ...mapWritableState(usePromotionStorePinia, {
        getPromoItem: "getPromoItem",
    }),
    },
    methods :{
         change(){
            console.log(this.getPromoItem._retailValue),
            console.log(this.getPromoItem._maxretailValue)
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
}
</style>
