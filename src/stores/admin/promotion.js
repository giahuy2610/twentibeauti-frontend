import { defineStore } from 'pinia'

export const usePromotionStorePinia = defineStore('promotionStorePinia', {
  state: () => {
    return {
        promoCode : "LK8E7YMSK40U",
        promoType : 1, // 1 : Theo phần trăm , 2: Theo số tiền
        retailValue : 30, // nếu promoType : 1 thì đơn vị là %, ngược lại đơn vị là đ
        appliedProduct : [1,3],
         

    }
  },
  actions: {
    logout() {
      this.isLoggedIn = false;
      // this.$route.push({path:});
    }
  },
  persist: true,
})