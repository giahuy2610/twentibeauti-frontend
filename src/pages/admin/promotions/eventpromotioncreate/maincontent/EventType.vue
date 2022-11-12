<template lang="">
    <div class="eventType">
        <Card>
            <template #title>
                <span>Loại khuyến mãi</span>
            </template>
            <template #content>
                <div v-for="category of categories" :key="category.key" class="field-radiobutton">
                    <RadioButton :inputId="category.key" name="category" :value="category.key" v-model="getEventPromoItem._promoType" :disabled="category.key === 'R'" />
                    <label :for="category.key">{{category.name}}</label>
                </div>
            </template>
        </Card>
    </div>
</template>
<script>
import { useEventStorePinia } from "@/stores/admin/eventpromotion.js";
import { mapState, mapWritableState, mapActions } from "pinia";
import axios from 'axios';
export default {
  data() {
    return {
      categories: [
        { name: "Theo phần trăm", key: "P" },
        { name: "Theo số tiền", key: "M" },
        { name: "Đồng giá", key: "S" },
      ],
      
    };
  },
  
  computed: {
        ...mapWritableState(useEventStorePinia, {
            getEventPromoItem: "getEventPromoItem",
        }),
    },
};
</script>
<style lang="scss" scoped>
.field-radiobutton:last-of-type
{
    margin-bottom: 0rem;
}
</style>