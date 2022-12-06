import axios from "axios";
import { defineStore } from "pinia";
import "vue-router";
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
      console.log(this.collectionItems);
      await axios
        .post(`/collection/create`, this.collectionItems)
        .then((response) => {
          console.log(response.data);
          return response.data;
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
          return response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    async updateCollection(id) {
      console.log(444444444444444444444);
      console.log(this.getCollectionItems);
      await axios
        .put(`/collection/update/${id}`, this.getCollectionItems)
        .then((response) => {
          console.log(response.data);
          // return response.data;
          // this.$router.push({ path:  '/admin/collections' });
          // this.getInfoCollection();
          return response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    async delCollection(id = "") {
      console.log("1000000000000000000000000000000000000000");
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
