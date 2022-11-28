import axios from "axios";
import { defineStore } from "pinia";
export const useCollectionStorePinia = defineStore({
  id: "collectionStorePinia",
  state: () => ({
    collectionItems: {
      IDCollection: null,
      NameCollection: null,
      Description: null,
      LogoImagePath: {},
      WallPaperPath: null,
      StartOn: null,
      EndOn: null,
      CoverImagePath: null,
    },
  }),
  getters: {
    getCollectionItems(state) {
      return state.collectionItems;
    },
  },
  actions: {
    getData() {
      this.collectionItems = data;
    },
    saveData() {
      this.createCollection();
    },
    createCollection() {
      axios
        .post(`/collection/create`, this.collectionItems)
        .then((response) => {
          //this.receiverInfo.IDAddress = response.data.IDAddress;
          //this.receiverInfo.firstName = response.data.firstName;
          console.log(response.data);
          return response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    async getInfoCollection(id = "") {
      console.log("1000000000000000000000000000000000000000");
      return await axios
        .get(`/collection/show/${id}`)
        .then((response) => {
          console.log(response.data);
          // localStorage.NameCollection= this.NameCollection;
          this.collectionItems.NameCollection=response.data.NameCollection;
          this.collectionItems.Description=response.data.Description;
          return response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
  persist: true,
});
