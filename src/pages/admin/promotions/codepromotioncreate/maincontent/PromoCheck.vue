<template lang="">
    <div class="promocheck">
        <Card>
            <template #title>
                Tổng quan khuyến mãi
            </template>
            <template #content>
                <div>{{this.getPromoItem._promoCode}}</div>
                <ul style="display:flex; flex-direction : column">
                    <li v-if="this.getPromoItem._withCampaignPromo == true"><div>Dùng chung với chương trình khuyến mãi</div></li>
                    <li v-if="this.getPromoItem._promoType == 'P' "><div>Giảm {{this.getPromoItem._retailValue}}% cho {{this.getPromoItem._product.length}} sản phẩm</div></li>
                    <li v-if="this.getPromoItem._promoType == 'P' && this.getPromoItem._maxretailValue != null">Tổng giá trị đơn hàng phải tối thiểu là {{this.getPromoItem._maxretailValue}}₫</li>


                </ul>
                
                
            </template>
        </Card>
    </div>
</template>
<script>
import { usePromotionStorePinia } from "@/stores/admin/promotion.js";
import { mapState, mapWritableState , mapActions } from "pinia";
export default {
    data()  {
        return {
            checked: false,
        }
    },
    computed: {
    ...mapState(usePromotionStorePinia, {
        getPromoItem: "getPromoItem",
    }),
    },
    
    methods :{
         change(){
             console.log(this.getPromoItem._promoCode)
         }
    }
};
</script>
<style lang="">
    
</style>