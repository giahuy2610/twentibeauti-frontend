<template lang="">
<div class="eventValue">
    <Card>
        <template #title>
            <span>Giá trị</span>
        </template>
        <template #content>
            <div class="value">
                <div class="left field col-12 md:col-3">
                    <label for="minmax-buttons">Giá trị khuyến mãi</label>
                    <InputNumber @input="change" v-show="getEventPromoItem._promoType=='M'" showButtons inputId="minmax-buttons" v-model="getEventPromoItem._retailValue" mode="currency" currency="VND" locale="de-DE" :min="0" :max="1000000000" />
                    <InputNumber @input="change" v-show="getEventPromoItem._promoType=='P'" showButtons inputId="minmax-buttons" v-model="getEventPromoItem._retailValue" suffix="%" :min="0" :max="100" />
                    <InputNumber @input="change" v-show="getEventPromoItem._promoType=='S'" showButtons inputId="minmax-buttons" v-model="getEventPromoItem._retailValue" mode="currency" currency="VND" locale="de-DE" :min="0" :max="1000000000" />
                </div>
            </div>
        </template>
    </Card>
    <Card>
        <template #title>
            <span>Áp dụng cho</span>
        </template>
        <template #content>
            <div @click="change" v-for="category of categories" :key="category.key" class="field-radiobutton">
                <RadioButton :inputId="category.key" name="category" :value="category.key" v-model="getEventPromoItem._appliedMode" />
                <label :for="category.key">{{ category.name }}</label>
            </div>

            <div class="search" v-show="getEventPromoItem._appliedMode === this.categories[2].key || getEventPromoItem._appliedMode === this.categories[1].key">
                <EventProductDialog></EventProductDialog>
            </div>
            <div style="margin-top:10px" class="image" v-if="getEventPromoItem._collection.length > 0 && getEventPromoItem._appliedMode === this.categories[1].key">
                <div style="display:flex;" v-for="(item,index) in getEventPromoItem._collection" :key="index">
                    <div style="display:flex;align-items:center; gap:10px; margin-bottom: 5px;flex: 1 1 auto" class="item">
                        <img :src="'demo/images/product/' + item.image" @error="(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'" :alt="item.name" class="shadow-2 w-4rem" />
                        <span>{{item.name}}</span>
                    </div>
                    <Button v-model="checked1" icon="pi pi-times" class="p-button-text" @click="getEventPromoItem._collection.splice(index,1)" />
                </div>
            </div>
            <div style="margin-top:10px" class="image" v-if="getEventPromoItem._product.length > 0 && getEventPromoItem._appliedMode === this.categories[2].key">
                <div style="display:flex;" v-for="(item,index) in getEventPromoItem._product" :key="index">
                    <div style="display:flex;align-items:center; gap:10px; margin-bottom: 5px;flex: 1 1 auto" class="item">
                        <img :src="'demo/images/product/' + item.image" @error="(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'" :alt="item.name" class="shadow-2 w-4rem" />
                        <span>{{item.name}}</span>
                    </div>
                    <Button v-model="checked2" icon="pi pi-times" class="p-button-text" @click="getEventPromoItem._product.splice(index,1)" />
                </div>
            </div>
        </template>
    </Card>
</div>
</template>

    
<script>
import EventProductDialog from '@/pages/admin/promotions/components/EventProductDialog.vue';
import { useEventStorePinia } from "@/stores/admin/eventpromotion.js";
import { mapState, mapWritableState, mapActions } from "pinia";
import axios from 'axios';
export default {

    components: { EventProductDialog, },
    data() {
        return {
            checked1: true,
            checked2: true,
            byPercent: true,
            categories: [
                { name: "Tất cả sản phẩm", key: "A" },
                { name: "Danh mục sản phẩm", key: "B" },
                { name: "Sản phẩm", key: "C" }
            ],
            checked: true,
        };
    },
    computed: {
        ...mapWritableState(useEventStorePinia, {
            getEventPromoItem: "getEventPromoItem",
        }),
    },
    methods: {
        change() {
            console.log(this.getEventPromoItem._retailValue),
            console.log(this.getEventPromoItem._appliedMode)
        },
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

.search {
    display: flex;
}
</style>
