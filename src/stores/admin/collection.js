import axios from "axios";
import { defineStore } from "pinia";
import Router from "@/router/index.js";
export const useCollectionStorePinia = defineStore("collectionStorePinia", {
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
      Products: [],
    },
  }),
  getters: {
    getCollectionItems(state) {
      return state.collectionItems;
    },
  },
  actions: {
    resetPinia() {
      useCollectionStorePinia.$reset;
    },
    getData() {
      this.collectionItems = data;
    },
    saveData() {
      this.createCollection();
    },

    async insertdata() {
      console.log(this.collectionItems.Products);
      await axios
        .post(`/collection/create`, this.collectionItems)
        .then((response) => {
          console.log(response.data);
          if (response.status == 200)
            Router.push({ name: "admin collections" });
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    // async updateCollection(id = "") {
    //   console.log("1000000000000000000000000000000000000000");

    //   return await axios
    //     .put(`/collection/update/${id}`)
    //     .then((response) => {
    //       console.log(response.data);
    //       NameCollection: this.collectionItems.NameCollection;
    //       // this.collectionItems.NameCollection=response.data.NameCollection;
    //       // this.collectionItems.Description=response.data.Description;
    //       // this.collectionItems.LogoImagePath=response.data.LogoImagePath;
    //       // this.collectionItems.WallPaperPath=response.data.WallPaperPath;
    //       // this.collectionItems.CoverImagePath=response.data.CoverImagePath;
    //       return response.data;
    //     })
    //     .catch(function (error) {
    //       console.error(error);
    //     });
    // },
    // async updateCollection() {
    //   console.warn(this.collectionItems)
    //   const result = await axios
    //     .put(`/collection/update/${this.collectionItems.IDCollection}`, this.collectionItems)
    //     .then((response) => {
    //       console.log(response.data);
    //       return response.data;

    //     })
    //     .catch(function (error) {
    //       console.error(error);
    //     });
    // },
    async getInfoCollection(id = "") {
      console.log("1000000000000000000000000000000000000000");
      return await axios
        .get(`/collection/show/${id}`)
        .then((response) => {
          console.log(response.data);
          this.collectionItems.NameCollection = response.data.NameCollection;
          this.collectionItems.Description = response.data.Description;
          this.collectionItems.LogoImagePath = response.data.LogoImagePath;
          this.collectionItems.WallPaperPath = response.data.WallPaperPath;
          this.collectionItems.CoverImagePath = response.data.CoverImagePath;
          this.collectionItems.StartOn = response.data.StartOn;
          this.collectionItems.EndOn = response.data.EndOn;
          this.collectionItems.Products = response.data.Products;
          return response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    async updateCollection(id) {
      console.log(this.getCollectionItems);
      await axios
        .put(`/collection/update/${id}`, this.getCollectionItems)
        .then((response) => {
          console.log(response.data);
          // return response.data;
          // this.$router.push({ path:  '/admin/collections' });
          // this.getInfoCollection();
          if (response.status == 200)
            Router.push({ name: "admin collections" });
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    async delCollection(id = "") {
      return await axios
        .delete(`/collection/delete/${id}`)
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
