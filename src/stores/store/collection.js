import axios from "axios";
import { defineStore } from "pinia";
import Router from "@/router/index.js";

export const useCollectionStorePinia = defineStore({
  id: "collectionStorePinia",
  state: () => ({
    collectionItems: {
      IDCollection: null,
      NameCollection: undefined,
      Description: null,
      LogoImagePath: {},
      WallPaperPath: null,
      StartOn: null,
      EndOn: null,
      CoverImagePath: null,
      Products: [],
    },
    collectionItemsDisplay: {
      IDCollection: null,
      NameCollection: undefined,
      Description: null,
      LogoImagePath: {},
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
    getData() {
      this.collectionItems = data;
    },
    async getInfoCollection(id = "") {
      return await axios
        .get(`/collection/show/${id}`)
        .then((response) => {
          this.collectionItems.NameCollection = response.data.NameCollection;
          this.collectionItems.Description = response.data.Description;
          this.collectionItems.WallPaperPath = response.data.WallPaperPath;
          this.collectionItems.LogoImagePath = response.data.LogoImagePath;
          this.collectionItems.Products = response.data.Products;
          this.collectionItemsDisplay.Products = response.data.Products;
          return response.data;
        })
        .catch(function (error) {
          console.error(error);
          Router.push({
            name: "not found",
          });
        });
    },
  },
});
