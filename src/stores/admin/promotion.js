import { defineStore } from 'pinia'

export const usePromotionStorePinia = defineStore('promotionStorePinia', {
  state: () => ({
    promotions : [{
        _promoCode : "LK8E7YMSK40U",
        _withCampaignPromo: true, // 1: Sử dụng với chương trình khuyến mãi, 0: không sử dụng
        _promoType : "M", // P : Theo phần trăm , M: Theo số tiền
        _retailValue : 30, // nếu promoType : 1 thì đơn vị là %, ngược lại đơn vị là đ
        _maxretailValue : 10, // đ, chỉ tính nếu byPercent true
        _appliedMode : 1, //  1 : all, 2: collection, 3: product
        _appliedProduct : true,// chỉ tính nếu  byPercent true và appliedMode khác 1, nếu true: áp dụng giảm tiền cả đơn, nếu false giảm từng sản phẩm
        _condition :  1, // 1:none, 2:Tổng giá trị đơn tối thiểu 3:Tổng giá trị sản phẩm được khuyến mãi tối thiểu, 4:Tổng số lượng sản phẩm được khuyến mãi tối thiếu
        _customer : 1, // 1:all 2:type customer
        _numpromo : 1, // số  lượng promo (>=1)
        _isRestrict : true,  // giới hạn khách hàng sử  dụng mã một lần
    },
    {
      _promoCode : "GFAWFP93FKA",
      _withCampaignPromo: true,
      _promoType : "P", // 1 : Theo phần trăm , 0: Theo số tiền
      _retailValue : 30, // nếu promoType : 1 thì đơn vị là %, ngược lại đơn vị là đ
      _maxretailValue : 10, // đ, chỉ tính nếu byPercent true
      _appliedMode : 1, //  1 : all, 2: collection, 3: product
      _appliedProduct : true,// chỉ tính nếu  byPercent true và appliedMode khác 1, nếu true: áp dụng giảm tiền cả đơn, nếu false giảm từng sản phẩm
      _condition :  1, // 1:none, 2:Tổng giá trị đơn tối thiểu 3:Tổng giá trị sản phẩm được khuyến mãi tối thiểu, 4:Tổng số lượng sản phẩm được khuyến mãi tối thiếu
      _customer : 1, // 1:all 2:type customer
      _numpromo : 1, // số  lượng promo (>=1)
      _isRestrict : true,  // giới hạn khách hàng sử  dụng mã một lần
  },
  {
    _promoCode : "B2NKCGQH0WA7",
    _withCampaignPromo: true,
    _promoType : "P", // 1 : Theo phần trăm , 0: Theo số tiền
    _retailValue : 30, // nếu promoType : P thì đơn vị là %, ngược lại đơn vị là đ
    _maxretailValue : 10, // đ, chỉ tính nếu byPercent true
    _appliedMode : "B", //  A : all, B: collection, C: product
    _appliedProduct : false,// chỉ tính nếu  promoType :M và appliedMode khác 1, nếu true: áp dụng giảm tiền cả đơn, nếu false giảm từng sản phẩm
    _condition :  '0', // 0:none, 1:Tổng giá trị đơn tối thiểu 2:Tổng giá trị sản phẩm được khuyến mãi tối thiểu, 3:Tổng số lượng sản phẩm được khuyến mãi tối thiếu
    _conditionValue1 : null,
    _conditionValue2 : null,
    _conditionValue3 : null,
    _customerType : 'A', // A:all T:type customer
    _isNumRestrict : true,
    _numpromo : 1, // số  lượng promo (>=1)
    _isRestrict : true,  // giới hạn khách hàng sử  dụng mã một lần
    _startDate : null,
    _startTime : null,
    _endDate: null,
    _endTime: null, 
    _product : [],
    _collection : [],
    _customer : []
},
]
  }),
  getters: {
    getPromoItems(state) {
      return state.promotions;
    },
    getPromoItemsNumber(state) {
      return state.promotions.length;
    },
    getPromoItem(state){
      return state.promotions[state.promotions.length-1];
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