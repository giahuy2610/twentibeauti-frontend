import axios from "axios";
import { defineStore } from "pinia";
export const useCollectionStorePinia = defineStore({
  id: "collectionStorePinia",
  state: () => ({
    collectionItems: {
      IDCollection: null,
      NameCollection: null,
      Description: null,
      LogoImagePath: null,
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
    // resetData() {
    //   this.IDCollection = '';
    //   this.NameCollection= '';
    //   // Description: null,
    //   // LogoImagePath: null,
    //   // WallPaperPath: null,
    //   // StartOn: null,
    //   // EndOn: null,
    //   // CoverImagePath: null,
    // },
    createCollection() {
      axios
        .post(`/collection/create`, this.collectionItems)
        .then((response) => {
          console.log(response.data);
          return response.data;
          
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    async updateCollection(id = "") {
      console.log("1000000000000000000000000000000000000000");
      return await axios
        .get(`/collection/update/${id}`)
        .then((response) => {
          console.log(response.data);
          this.collectionItems.NameCollection=response.data.NameCollection;
          this.collectionItems.Description=response.data.Description;
          this.collectionItems.LogoImagePath=response.data.LogoImagePath;
          this.collectionItems.WallPaperPath=response.data.WallPaperPath;
          this.collectionItems.CoverImagePath=response.data.CoverImagePath;
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
          this.collectionItems.NameCollection=response.data.NameCollection;
          this.collectionItems.Description=response.data.Description;
          this.collectionItems.LogoImagePath=response.data.LogoImagePath;
          this.collectionItems.WallPaperPath=response.data.WallPaperPath;
          this.collectionItems.CoverImagePath=response.data.CoverImagePath;
          return response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
  persist: true,
});
