import { defineStore } from "pinia";
import axios from "axios";
import Router from "@/router/index.js";
export const usePromotionStorePinia = defineStore("promotionStorePinia", {
  state: () => ({
    promotions: [
      {
        _promoCode: "LK8E7YMSK40U",
        _withCampaignPromo: true, // 1: Sử dụng với chương trình khuyến mãi, 0: không sử dụng
        _promoType: "M", // P : Theo phần trăm , M: Theo số tiền
        _retailValue: 30, // nếu promoType : 1 thì đơn vị là %, ngược lại đơn vị là đ
        _maxretailValue: 10, // đ, chỉ tính nếu byPercent true
        _appliedMode: 1, //  1 : all, 2: collection, 3: product
        _appliedProduct: true, // chỉ tính nếu  byPercent true và appliedMode khác 1, nếu true: áp dụng giảm tiền cả đơn, nếu false giảm từng sản phẩm
        _condition: 1, // 1:none, 2:Tổng giá trị đơn tối thiểu 3:Tổng giá trị sản phẩm được khuyến mãi tối thiểu, 4:Tổng số lượng sản phẩm được khuyến mãi tối thiếu
        _customer: 1, // 1:all 2:type customer
        _numpromo: 1, // số  lượng promo (>=1)
        _isRestrict: true, // giới hạn khách hàng sử  dụng mã một lần
      },
    ],
    coupon: {
      // IDCoupon: 1,
      ValueDiscount: 0,
      StartOn: "",
      EndOn: "",
      Description: "",
      MinInvoiceValue: 0,
      CodeCoupon: "",
      Quantity: 999999,
      IsMutualEvent: 0,
    },
  }),
  getters: {
    getPromoItems(state) {
      return state.promotions;
    },
    getPromoItemsNumber(state) {
      return state.promotions.length;
    },
    getPromoItem(state) {
      return state.promotions[state.promotions.length - 1];
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
    async createCoupon() {
      console.log(this.coupon);
      await axios
        .post(`/coupon/create`, this.coupon)
        .then((response) => {
          console.log(response.data);
          if (response.status == 200) {
            Router.push({ name: "code promotion" });
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    async getCoupon($IDCoupon) {
      await axios
        .get(`/coupon/show/` + $IDCoupon)
        .then((response) => {
          this.coupon = response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    async updateCoupon() {
      await axios
        .put(`/coupon/update/`, this.coupon)
        .then((response) => {
          if (response.status == 200) {
            Router.push({ name: "code promotion" });
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
});
