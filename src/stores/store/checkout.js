import { defineStore } from "pinia";
import axios from "axios";

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
    },
    magiamgia:
    {
      CodeCoupon: null,
    }
  }),
  getters: {
        getInfoCus(state) {
          console.log(4589347508427)
          return state.receiverInfo;
        }
      },
  actions: {
    async loadDefaultInfo() {
      // const data = await axios.get("https://localhost:7084/api/address/get");
      // console.log(data);
      
    },
    increaseTotal() {
      console.log(555555555555555);
      console.log(this.receiverInfo);
      axios
        .post("https://localhost:7084/api/address/create", this.receiverInfo)
        .then((response) => {
          console.log(response.data);
          return response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    getCoupon(){
      const status = axios.post(`https://localhost:7084/api/coupon/post`,this.magiamgia)
      .then((response) => {
        if (response.status == true )
        {
          console.log(111111111111111111111111111);
        }else 
        console.log(0);
      })
      .catch(function(error){
        console.error(error)
      })
      
    },
    createInvoice() {
      var total = {
        receiverInfo: this.receiverInfo
      }
      
      const status = axios.post(`https://localhost:7084/api/invoice/create`, total)
      .then((response) => {
        if (response.status == true )
        {
          console.log(111111111111111111111111111);
        }else 
        console.log(0);
      })
      .catch(function(error){
        console.error(error)
      })
    }
  },

});
