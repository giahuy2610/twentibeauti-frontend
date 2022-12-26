<template lang="">
  <div class="flex-align">
    <div class="confirm-add">
      <button type="button" class="btn-confirm flex-row nowrap">
        <span class="icon-shopping-bag"></span>
        <span class="ml-2 font-bold" @click="addProducts()"
          >Thêm vào giỏ hàng</span
        >
      </button>
    </div>
    <div class="buy">
      <button type="button" class="btn-buy flex-row nowrap">
        <span @click="buyNow()">MUA NGAY</span>
      </button>
    </div>
    <div class="add-favourite">
      <Button
        type="button"
        class="love pi pi-heart p-button-rounded p-button-outlined"
      ></Button>
    </div>
  </div>
</template>

<script>
import { useCartStorePinia } from "@/stores/store/cart.js";
import { mapActions, mapWritableState } from "pinia";
export default {
  methods: {
    ...mapActions(useCartStorePinia, {
      increaseQuantity: "increaseQuantity",
      decreaseQuantity: "decreaseQuantity",
      removeItem: "removeItem",
      removeAll: "removeAll",
    }),
    async addProducts() {
      for (var i = 0; i < this.numberOfProduct; i++) {
        await this.increaseQuantity(this.$route.params.productid);
      }
      this.numberOfProduct = 1;
      this.visibleCart = true;
    },
    buyNow() {
      this.removeAll();
      this.increaseQuantity(this.$route.params.productid);
      this.$router.push({ name: "checkout" });
    },
  },
  computed: {
    ...mapWritableState(useCartStorePinia, {
      numberOfProduct: "numberOfProduct",
      visibleCart: "visibleCart",
    }),
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/icomoon/style.css");
@import "@/scss/mixin";

.btn-confirm {
  cursor: pointer;
  font-size: 13px;
  padding: 14px 23px;
  -webkit-appearance: button;
  border-radius: 38px;
  flex: 1 1 0%;
  font-weight: 600;
  box-sizing: border-box;
  background: var(--bg-dark-green) !important;
  border: 1px solid var(--bg-dark-green) !important;
  color: #fff;
  border-color: #94c83d;
  background: #94c83d;
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
}
.btn-buy {
  cursor: pointer;
  text-align: center;
  -webkit-appearance: button;
  font-size: 12px;
  padding: 14px 23px;
  border-radius: 38px;
  font-weight: 600;
  color: #fff;
  box-sizing: border-box;
  border-color: #94c83d;
  background: #94c83d;
  box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  line-height: 1.5715;
  height: 50px;
  padding: 11.4px 15px;
  white-space: nowrap;
  text-align: center;
}
.love {
  width: 3rem;
  height: 3rem;
}
.flex-align {
  gap: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  -webkit-box-align: center;
  align-items: center;
}

@include mobile {
  .icon-shopping-bag {
    display: none;
  }
  .flex-align {
    flex-direction: row-reverse;
    justify-content: space-around;
  }
}

@include mini-tablet {
  .flex-align {
    gap: 15px;
    flex-direction: row-reverse;
  }
  .confirm-add {
    order: 2;
  }
  .buy {
    order: 3;
  }
}

@include tablet {
  .cart {
    display: none;
  }

  .flex-align {
    gap: 15px;
    flex-direction: row-reverse;
  }
}

.nowrap {
  white-space: nowrap;
  text-overflow: ellipsis;
}

.confirm-add {
  /* .cart:before {
        width: 100%;
        height: 100%;
        display: inline-block;
        content: "";
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Ic_shopping_cart_48px.svg/1024px-Ic_shopping_cart_48px.svg.png");
        background-size: contain;
        background-repeat: no-repeat;
    } */

  .cart {
    width: 2rem;
  }
}
</style>
