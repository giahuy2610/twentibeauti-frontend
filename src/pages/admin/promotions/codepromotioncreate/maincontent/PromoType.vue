<template lang="">
    <div class="promoType">
        <Card>
            <template #title>
                <span>Loại khuyến mãi</span>
            </template>
            <template #content>
                <div v-for="category of categories" :key="category.key" class="field-radiobutton">
                    <RadioButton :inputId="category.key" name="category" :value="category.key" v-model="getPromoItem._promoType" :disabled="category.key === 'R'" />
                    <label :for="category.key">{{category.name}}</label>
                </div>
            </template>
        </Card>
    </div>
</template>
<script>
import { usePromotionStorePinia } from "@/stores/admin/promotion.js";
import { mapState, mapWritableState , mapActions } from "pinia";
export default {
  data() {
    return {
      categories: [
        { name: "Theo phần trăm", key: "P" },
        { name: "Theo số tiền", key: "M" },
      ],
      
    };
  },
  
  computed: {
    ...mapWritableState(usePromotionStorePinia, {
        getPromoItem: "getPromoItem",
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