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
                    <li v-show="this.show_appliedSummary">{{appliedSummary()}}</li>
                    <li v-show="this.show_maxretailValue">{{maxretailValue()}}</li>
                    <li v-show="this.show_appliedProduct">{{appliedProduct()}}</li>
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
            show_appliedSummary: false,
            show_maxretailValue: false,
            show_appliedProduct: false,
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
         },
         appliedSummary(){
          if (this.getPromoItem._promoType == 'P')
          {
            if(this.getPromoItem._appliedMode == 'B') {
                this.show_appliedSummary = true;
                return  `Giảm ${this.getPromoItem._retailValue}% cho ${this.getPromoItem._collection.length} danh mục`;
            }
            else if (this.getPromoItem._appliedMode == 'C') {
                this.show_appliedSummary = true;
                return `Giảm ${this.getPromoItem._retailValue}% cho ${this.getPromoItem._product.length} sản phẩm`
            };
          }
          else (this.getPromoItem._promoType == 'M')
          {
            
            if(this.getPromoItem._appliedMode == 'B') {
                this.show_appliedSummary = true;
                return `Giảm ${this.getPromoItem._retailValue}₫ cho ${this.getPromoItem._collection.length} danh mục`;
            }
            else if (this.getPromoItem._appliedMode == 'C') {
                this.show_appliedSummary = true;
                return `Giảm ${this.getPromoItem._retailValue}₫ cho ${this.getPromoItem._product.length} sản phẩm`
            };
          }
          
         },
        maxretailValue(){
            if(this.getPromoItem._promoType == 'P' && this.getPromoItem._maxretailValue != null){
                this.show_maxretailValue = true;
                return `Giới hạn số tiền khuyến mãi là ${this.getPromoItem._maxretailValue}₫`;
            }
            else this.show_maxretailValue = false;
        },
        appliedProduct(){
            if (this.getPromoItem._promoType == 'M')
            {
                this.show_appliedProduct = true;
                if (this.getPromoItem._appliedProduct == true){
                    return `Áp dụng 1 lần cho mỗi đơn hàng`;
                }
                else 
                {
                    return `Áp dụng cho từng mặt hàng trong giỏ hàng`;
                }
            }
            else this.show_appliedProduct = false;
        }
    }
};
</script>
<style lang="">
    
</style>