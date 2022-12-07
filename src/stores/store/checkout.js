import { defineStore } from "pinia";
import axios from "axios";
import { useCartStorePinia } from "./cart.js";
import Router from "@/router/index.js";
export const useCheckoutStorePinia = defineStore("checkoutStorePinia", {
  state: () => ({
    receiverInfo: {
      City: null,
      District: null,
      Ward: null,
      AddressDetail: null,
      Phone: null,
      FirstName: null,
      LastName: null,
      Email: null,
      MethodPay: null,
      MethodTransfer: null,
      IsPrintInvoice: null,
      IsPaid: null,
    },
    couponSelected: {
      // IDCoupon: 1,
      // ValueDiscount: 50000,
      // StartOn: "2022-11-21 04:45:07",
      // EndOn: "2023-01-20 10:45:08",
      // Description: "TIETKIEM4 - Giảm 1.500k cho đơn từ 10.000K",
      // IsDeleted: 0,
      // MinInvoiceValue: 0,
      // CodeCoupon: "TIETKIEM4",
      // Quantity: 100,
      // IsMutualEvent: 0,
      // Stock: 1,
    },
  }),
  // getters: {
  //   getInfoCus(state) {
  //     console.log(4589347508427);
  //     return state.receiverInfo;
  //   },
  // },
  actions: {
    // async loadDefaultInfo() {
    //   // const data = await axios.get("/api/address/get");
    //   // console.log(data);
    // },
    // increaseTotal() {
    //   console.log(555555555555555);
    //   console.log(this.receiverInfo);
    //   axios
    //     .post("invoice/create", this.receiverInfo)
    //     .then((response) => {
    //       console.log(response.data);
    //       return response.data;
    //     })
    //     .catch(function (error) {
    //       console.error(error);
    //     });
    // },
    async getCoupon(CodeCoupon) {
      await axios
        .get(`/coupon/check-available/` + CodeCoupon)
        .then((response) => {
          if (response.status === 200) {
            this.couponSelected = response.data;
          } else {
            alert(response.data);
          }
        })
        .catch(function (error) {
          alert(error.response.data);
          console.error(error);
        });
    },
    async createInvoice() {
      if (this.receiverInfo.MethodPay == 2) {
        window.location.href =
          "http://localhost/vnpay_php/vnpay_create_payment.php?order_desc=Thanh+toan+don+hang125&amount=10000000";
        // Router.pus({
        //   path: "/",
        // });
      }
      //the base invoice
      var newInvoice = this.receiverInfo;
      //list of products info(idproduct,quantity) in this invoice
      newInvoice.InvoiceDetail = useCartStorePinia().cartItems.map(
        (product) => {
          return { IDProduct: product.IDProduct, Quantity: product.Quantity };
        }
      );
      newInvoice.CodeCoupon = this.couponSelected.CodeCoupon;
      console.log(newInvoice);
      await axios
        .post(`/invoice/create`, newInvoice)
        .then((response) => {
          if (response.status == true) {
            console.log(111111111111111111111111111);
          } else console.log(0);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
});
