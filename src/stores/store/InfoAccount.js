import { defineStore } from "pinia";
import axios from "axios";
import { useCartStorePinia } from "./cart.js";
export const useInfoAccountStorePinia = defineStore("infoAccountStorePinia", {
    state: () => ({
        infoCus:{
            FirstName: null,
            LastName: null,
            Email: null,
            Phone: null,
        }
    }),
    getters: {
        getInfoCus(state) {
          console.log(4589347508427)
          return state.infoCus;
        }
      },
    
    actions:{
        async loadDefaultInfoCus() {
            console.log(55555555555555555);
            //console.log(useCartStorePinia().user);
            return await axios.get("https://localhost:7084/api/Customer/get/6")
            .then((response) => {
                this.infoCus.FirstName = response.data.firstName
                this.infoCus.LastName = response.data.lastName;
                this.infoCus.Email = response.data.email;
                this.infoCus.Phone = response.data.phone;
                return response.data;
                console.log(response.data.email);
              })
              .catch(function (error) {
                console.error(error);
              });
        },
        async updatedInfoCus() {
            console.log(this.getInfoCus);
            //console.log(useCartStorePinia().user);
            await axios.put("https://localhost:7084/api/Customer/update/6",this.getInfoCus)
            .then((response) => {
                
                console.log(response.data.email);
              })
              .catch(function (error) {
                console.error(error);
              });
        },
        

    },
    persist: true,


})