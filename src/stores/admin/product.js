import axios from "axios";
import { defineStore } from "pinia";

export const useProductStorePinia = defineStore("productStorePinia", {
  state: () => ({
    productInfo: {
      NameProduct:
        "Kem Chống Nắng Nâng Tone Da THE FACE SHOP Power Long Lasting Pink Tone Up Sun Cream Spf50+ Pa++++ 50ml",
      IDBrand: 1,
      Description: "",
      CreatedOn: "2022-11-21 09:14:10",
      IsDeleted: 0,
      Stock: 0,
      TotalPurchaseQuantity: 0,
      Mass: 0,
      UnitsOfMass: "gam",
      Units: "Unit",
      ApplyTaxes: 0,
      StatusSale: 0,
      IDTags: 1,
      IDType: 1,
      ListPrice: 100000,
      RetailPrice: 100000,
      Images: [],
    },
  }),
  actions: {
    async createNewProduct() {
      console.log(this.productInfo);
      await axios
        .post("/collection/create", this.productInfo)
        .then((response) => {
          console.log(response.data);
          return response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
});
