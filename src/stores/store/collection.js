import axios from "axios";
import { defineStore } from "pinia";
import { isProxy, toRaw } from "vue";
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
      CoverImagePath: null
    },
  }),
  //   state: () => {
  //     return {
  //       collectionItems: [
  //         {
  //           NameCollection: "Merzy",
  //           Description: "test dữ liệu mẫu",
  //           LogoImagePath: "https://imgur.com/nyynLaS",
  //           WallPaperPath: "https://imgur.com/w5BzklR",
  //           StartOn: null,
  //           EndOn: null,
  //           CoverImagePath: [
  //             "https://imgur.com/JqnkemS",
  //             "https://imgur.com/x5fd0Yb",
  //           ],
  //         },
  //       ],
  //     };
  //   },
  getters: {
    getCollectionItems(state) {
      console.log(122222222222222222)
      return state.collectionItems;
    }
  },
  actions: {
    getData() {
      this.collectionItems = data;
    },
    // getInfoCollection () {
    //     console.log('1000000000000000000000000000000000000000');
    //     axios
    //         .get(`/collection/show/${id}`)
    //         .then((response) => {
    //             this.collectionItems.NameCollection=response.data.NameCollection;
    //             this.collectionItems.Description=response.data.Description;
    //             this.collectionItems.LogoImagePath=response.data.LogoImagePath;
    //             console.log(response.data);
    //             return response.data;
    //         })
    //         .catch(function (error){
    //             console.error(error);
    //         })
    // },
    async getInfoCollection(id='') {
      console.log("1000000000000000000000000000000000000000");
      return await axios
        .get(`/collection/show/${id}`)
        .then((response) => {
          console.log(response.data);
          // localStorage.NameCollection= this.NameCollection;
          this.collectionItems.NameCollection=response.data.NameCollection;
           this.collectionItems.Description=response.data.Description;
           this.collectionItems.WallPaperPath=response.data.WallPaperPath;
           this.collectionItems.LogoImagePath=response.data.LogoImagePath;
          return response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
  persist: true,
});
