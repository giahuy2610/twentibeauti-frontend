import { defineStore } from "pinia";

export const useCartStorePinia = defineStore("cartStorePinia", {
  state: () => ({
    // @type {{ name: string, SKU: int, retailPrice: int, imagePath: string, routePath: string, quantity: int}[]}
    cartItems: [
      {
        name: "Gel Tắm Cung Cấp Ẩm AVOCADO BODY WASH 300ml (GZ) Cấp Ẩm AVOCADO BODY WASH 300ml (GZ)",
        SKU: 30700710,
        retailPrice: 289000,
        quantity: 1,
        imagePath:
          "https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.15752-9/304828676_529058492554304_1256913194660052362_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=4oWy57Sa9ScAX-QGGDv&_nc_ht=scontent.fsgn13-2.fna&oh=03_AVJevcEs0QQ5_zJJ0qnd5oxk4EBG_SZ3UfHkLkoCpE4efw&oe=635A92F7",
        routePath: "/product",
      },
      {
        name: "Gel Tắm Cung Cấp Ẩm AVOCADO BODY WASH 300ml (GZ) Cấp Ẩm AVOCADO BODY WASH 300ml (GZ)",
        SKU: 30700711,
        retailPrice: 289000,
        quantity: 1,
        imagePath:
          "https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.15752-9/304828676_529058492554304_1256913194660052362_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=4oWy57Sa9ScAX-QGGDv&_nc_ht=scontent.fsgn13-2.fna&oh=03_AVJevcEs0QQ5_zJJ0qnd5oxk4EBG_SZ3UfHkLkoCpE4efw&oe=635A92F7",
        routePath: "/product",
      },
      {
        name: "Gel Tắm Cung Cấp Ẩm AVOCADO BODY WASH 300ml (GZ) Cấp Ẩm AVOCADO BODY WASH 300ml (GZ)",
        SKU: 30700712,
        retailPrice: 289000,
        quantity: 1,
        imagePath:
          "https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.15752-9/304828676_529058492554304_1256913194660052362_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=4oWy57Sa9ScAX-QGGDv&_nc_ht=scontent.fsgn13-2.fna&oh=03_AVJevcEs0QQ5_zJJ0qnd5oxk4EBG_SZ3UfHkLkoCpE4efw&oe=635A92F7",
        routePath: "/product",
      },
    ],
    total: 10,
    user: null,
    isVisibleLogin: true,
  }),
  getters: {
    getCartItems(state) {
      return state.cartItems;
    },
    getCartItemsNumber(state) {
      return state.cartItems.length;
    },
  },
  actions: {
    increaseTotal() {
      this.total++;
    },
    addCartItem(newItem) {
      //newItem @type {{ name: string, SKU: int, retailPrice: int, imagePath: string, routePath: string}[]}
      // check if the item already
      if (this.cartItems.find((e) => e.SKU === newItem.SKU)) {
        //increase quantity
        this.cartItems.find((e) => e.SKU === newItem.SKU).quantity++;
      } else {
        //add new item to cartItems list, remember to init the quantity for it
        newItem.quantity = 1;
        this.cartItems.push(newItem);
      }
    },
    increaseQuantity(SKU) {
      //check available quantity
      var available = 10;
      var item = this.cartItems.find((e) => e.SKU === SKU);
      if (available < item.quantity + 1) {
        return "Không đủ số lượng";
      } else {
        item.quantity++;
      }
    },
    decreaseQuantity(SKU) {
      var available = 10;
      var item = this.cartItems.find((e) => e.SKU === SKU);
      if (available < item.quantity - 1) {
        return "Không đủ số lượng";
      } else {
        item.quantity--;
        //remove if the quantity isn't greater than 0
        if (item.quantity === 0) this.removeItem(SKU);
      }
    },
    removeItem(SKU) {
      this.cartItems = this.cartItems.filter((e) => e.SKU !== SKU);
    },
    login(user) {
      state.user = user;
    },
  },
  persist: true,
});
