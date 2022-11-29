import { defineStore } from "pinia";
import axios from "axios";

export const useCheckoutStorePinia = defineStore("checkoutStorePinia", {
  state: () => ({
    receiverInfo: {
      City: "Hà Nội",
      District: "Ba Đình",
      Ward: "Phúc Xá",
      AddressDetail: null,
      Phone: null,
      FirstName: null,
      LastName: null,
      Email: null,
    },
  }),

  actions: {
    async loadDefaultInfo() {
      const data = await axios.get("https://localhost:7084/api/address/get");
      console.log(data);
    },
    increaseTotal() {
      console.log(this.receiverInfo);
      axios
        .post(`https://localhost:7084/api/address/create`, this.receiverInfo)
        .then((response) => {
          //this.receiverInfo.IDAddress = response.data.IDAddress;
          //this.receiverInfo.firstName = response.data.firstName;
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },

});
