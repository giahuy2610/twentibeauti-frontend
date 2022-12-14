import { defineStore } from "pinia";
import axios from "axios";
import Router from "@/router/index.js";
export const useEventStorePinia = defineStore("eventStorePinia", {
  state: () => ({
    // eventPromotions: [
    //   {
    //     _nameEvent: "",
    //     _promoType: "P", // P : Theo phần trăm , M: Theo số tiền, S: đồng giá
    //     _retailValue: 30, // nếu promoType : P thì đơn vị là %, M đơn vị là đ, S: đ
    //     _appliedMode: "B", //  A : all, B: collection, C: product
    //     _condition: "0", // 0:none, 1:Tổng giá trị đơn tối thiểu 2:Tổng giá trị sản phẩm được khuyến mãi tối thiểu
    //     _conditionValue1: null,
    //     _conditionValue2: null,
    //     _startDate: null,
    //     _startTime: null,
    //     _endDate: null,
    //     _endTime: null,
    //     _product: [],
    //     _collection: [],
    //   },
    // ],
    eventPromotion: {
      IDEvent: 0,
      NameEvent: "",
      ValueDiscount: 0,
      UnitsDiscount: 1,
      IsDeleted: 0,
      CreatedOn: "2022-11-22 15:57:01",
      StartOn: "2022-11-22 09:56:26",
      EndOn: "2022-11-30 15:56:26",
      Products: [],
    },
  }),
  getters: {
    // getEventPromoItem(state) {
    //   return state.eventPromotions[state.eventPromotions.length - 1];
    // },
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
    async createEvent() {
      console.log(this.eventPromotion);
      await axios
        .post("/event/create", this.eventPromotion)
        .then((response) => {
          console.log(response.data);
          if (response.status == 200) Router.push({ name: "event promotion" });
        })
        .catch((e) => console.error(e));
    },
    async getEvent($IDEvent) {
      await axios
        .get("/event/show/" + $IDEvent)
        .then((response) => {
          this.eventPromotion = response.data;
          console.log(this.eventPromotion);
        })
        .catch((e) => console.error(e));
    },
    async updateEvent() {
      await axios
        .put("/event/update/", this.eventPromotion)
        .then((response) => {
          console.log(response.data);
          if (response.status == 200) Router.push({ name: "event promotion" });
        })
        .catch((e) => console.error(e));
    },
  },
});
