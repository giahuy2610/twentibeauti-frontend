import { defineStore } from 'pinia'

export const usePromotionStorePinia = defineStore('promotionStorePinia', {
  state: () => ({
    promotions : [{
        promoCode : "LK8E7YMSK40U",
        byPercent : true, // 1 : Theo phần trăm , 0: Theo số tiền
        retailValue : 30, // nếu promoType : 1 thì đơn vị là %, ngược lại đơn vị là đ
        maxretailValue : 10, // đ, chỉ tính nếu byPercent true
        appliedMode : 1, //  1 : all, 2: collection, 3: product
        appliedProduct : true,// chỉ tính nếu  byPercent true và appliedMode khác 1, nếu true: áp dụng giảm tiền cả đơn, nếu false giảm từng sản phẩm
        condition :  1, // 1:none, 2:Tổng giá trị đơn tối thiểu 3:Tổng giá trị sản phẩm được khuyến mãi tối thiểu, 4:Tổng số lượng sản phẩm được khuyến mãi tối thiếu
        customer : 1, // 1:all 2:type customer
        numpromo : 1, // số  lượng promo (>=1)
        isRestrict : true,  // giới hạn khách hàng sử  dụng mã một lần
    }
  ]
  }),
  getters: {
    getPromoItems(state) {
      return state.promotions;
    },
    getPromoItemsNumber(state) {
      return state.promotions.length;
    },
  },
  actions: {
    
  },
  
})