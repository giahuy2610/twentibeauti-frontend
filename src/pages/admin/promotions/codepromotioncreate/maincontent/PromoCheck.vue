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
                    <li v-show="this.show_conditionPromo">{{conditionPromo()}}</li>
                    <li v-show="this.show_customerPromo">{{customerPromo()}}</li>
                    <li v-show="this.show_rangePromo">{{rangePromo()}}</li>
                    <li v-show="this.show_timePromo">{{timePromo()}}</li>
                </ul>
                
            </template>
        </Card>
    </div>
</template>
<script>
import { usePromotionStorePinia } from "@/stores/admin/promotion.js";
import { mapState, mapWritableState , mapActions } from "pinia";
import moment from 'moment';

export default {
    data()  {
        return {
            checked: false,
            show_appliedSummary: false,
            show_maxretailValue: false,
            show_appliedProduct: false,
            show_conditionPromo: false,
            show_customerPromo: false,
            show_rangePromo: false,
            show_timePromo: false,
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
        },
        conditionPromo(){
            if (this.getPromoItem._condition = '1' && this.getPromoItem._conditionValue1 != null){
                this.show_conditionPromo = true;
                return `Tổng giá trị đơn hàng phải tối thiểu là ${this.getPromoItem._conditionValue1}₫`
            }
            else if (this.getPromoItem._condition = '1' && this.getPromoItem._conditionValue2 != null){
                this.show_conditionPromo = true;
                return `Tổng giá trị sản phẩm được khuyến mãi phải tối thiểu là ${this.getPromoItem._conditionValue2}₫`
            }
            else if (this.getPromoItem._condition = '1' && this.getPromoItem._conditionValue3 != null){
                this.show_conditionPromo = true;
                return `Tổng số lượng sản phẩm được khuyến mãi phải tối thiểu là ${this.getPromoItem._conditionValue1}`
            }
            this.show_conditionPromo = false;
        },
        customerPromo(){
            if (this.getPromoItem._customerType == 'T' && this.getPromoItem._customer.length > 0){
                this.show_customerPromo = true;
                return `Áp dụng với ${this.getPromoItem._customer.length} nhóm khách hàng`;
            }
            else this.show_customerPromo = false;
        },
        rangePromo(){
            if (this.getPromoItem._isNumRestrict == true && this.getPromoItem._numpromo > 0)
            {
                this.show_rangePromo = true;
                if (this.getPromoItem._isRestrict == true)
                {
                    return `Mã được phép sử dụng ${this.getPromoItem._numpromo} lần, mỗi khách hàng được sử dụng 1 lần`;
                }
                else 
                {
                    return `Mã được phép sử dụng ${this.getPromoItem._numpromo} lần`;
                }
            }
            if (this.getPromoItem._isRestrict == true)
            {
                return `Mỗi khách hàng được sử dụng 1 lần`;
            }
            this.show_rangePromo = false;
        },
        timePromo(){
            if(this.show_appliedSummary == true)
            {
                if (this.getPromoItem._startDate != null && this.getPromoItem._startTime != null)
                {
                    this.show_timePromo = true;
                    if (this.getPromoItem._endDate != null && this.getPromoItem._endTime != null)
                    {
                        return `Áp dụng từ ${moment(this.getPromoItem._startTime).format('LT')} ngày ${moment(this.getPromoItem._startDate).format('L')} đến ${moment(this.getPromoItem._endTime).format('LT')} ngày ${moment(this.getPromoItem._endDate).format('L')}`
                    }
                    else
                    {
                        return `Áp dụng từ ${moment(this.getPromoItem._startTime).format('LT')} ngày ${moment(this.getPromoItem._startDate).format('L')}`
                    }
                }
                else this.show_timePromo = false;
            }
        }
    }
};
</script>
<style lang="">
    
</style>