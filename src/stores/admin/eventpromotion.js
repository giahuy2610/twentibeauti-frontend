import { defineStore } from 'pinia'

export const useEventStorePinia = defineStore('eventStorePinia', {
  state: () => ({
    eventPromotions : [
  {
    _nameEvent : "",
    _promoType : "P", // P : Theo phần trăm , M: Theo số tiền, S: đồng giá
    _retailValue : 30, // nếu promoType : P thì đơn vị là %, M đơn vị là đ, S: đ
    _appliedMode : "B", //  A : all, B: collection, C: product
    _condition :  '0', // 0:none, 1:Tổng giá trị đơn tối thiểu 2:Tổng giá trị sản phẩm được khuyến mãi tối thiểu
    _conditionValue1 : null,
    _conditionValue2 : null,
    _startDate : null,
    _startTime : null,
    _endDate: null,
    _endTime: null, 
    _product : [],
    _collection : [],
},
]
  }),
  getters: {
    getPromoItems(state) {
      return state.eventPromotions;
    },
    getPromoItemsNumber(state) {
      return state.eventPromotions.length;
    },
    getPromoItem(state){
      return state.eventPromotions[state.eventPromotions.length-1];
    },

    // promoCode(state) {
    //   return computed({
    //     get() {
    //       return (
    //         state.promotions[state.promotions.length-1]._promoCode
    //       );
    //     },
    //     set(value) {
    //       state.promotions[state.promotions.length-1]._promoCode = value;
    //     },
    //   });
    // }
    //return state.promotions[state.promotions.length-1].promoCode;
    

  },
  actions: {
    
  },
  
})