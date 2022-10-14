<template lang="">
  <div class="cart">
    <div class="cart__header">
      <h2>Giỏ hàng</h2>
    </div>

    <div class="cart__body">
      <ScrollPanel style="width: 100%; height: 100%">
        <ProductItem
          class="mb-1"
          v-for="item in getCartItems"
          :name="item.name"
          :SKU="item.SKU"
          :imagePath="item.imagePath"
          :routePath="item.routePath"
          :retailPrice="item.retailPrice"
          :quantity="item.quantity"
        ></ProductItem>
      </ScrollPanel>
    </div>

    <div class="cart__footer">
      <div class="flex justify-content-between">
        <h4>Tổng giá trị đơn hàng</h4>
        <h4>{{ Intl.NumberFormat().format(total) }}đ</h4>
      </div>

      <p>Bạn có thể xem các chương trình khuyến mãi ở màn hình kế tiếp</p>
      <div class="order">
        <span class="p-fluid">
          <Button
            label="Đặt hàng"
            class="p-button-rounded"
            @click="increaseTotal"
          />
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import ProductItem from "./ProductItem.vue";
import { useCartStorePinia } from "@/stores/store/cart.js";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {
      productArr: [
        {
          id: 100,
          name: "Gel Tắm Cung Cấp Ẩm AVOCADO BODY WASH 300ml (GZ) Cấp Ẩm AVOCADO BODY WASH 300ml (GZ)",
          salePrice: 289000,
          quantity: 2,
          image:
            "https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.15752-9/304828676_529058492554304_1256913194660052362_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=4oWy57Sa9ScAX-QGGDv&_nc_ht=scontent.fsgn13-2.fna&oh=03_AVJevcEs0QQ5_zJJ0qnd5oxk4EBG_SZ3UfHkLkoCpE4efw&oe=635A92F7",
        },
        {
          id: 200,
          name: "Gel Tắm Cung Cấp Ẩm AVOCADO BODY WASH 300ml (GZ) Cấp Ẩm AVOCADO BODY WASH 300ml (GZ)",
          salePrice: 289000,
          quantity: 3,
          image:
            "https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.15752-9/304828676_529058492554304_1256913194660052362_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=4oWy57Sa9ScAX-QGGDv&_nc_ht=scontent.fsgn13-2.fna&oh=03_AVJevcEs0QQ5_zJJ0qnd5oxk4EBG_SZ3UfHkLkoCpE4efw&oe=635A92F7",
        },
        {
          id: 300,
          name: "Gel Tắm Cung Cấp Ẩm AVOCADO BODY WASH 300ml (GZ) Cấp Ẩm AVOCADO BODY WASH 300ml (GZ)",
          salePrice: 289000,
          quantity: 4,
          image:
            "https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.15752-9/304828676_529058492554304_1256913194660052362_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=4oWy57Sa9ScAX-QGGDv&_nc_ht=scontent.fsgn13-2.fna&oh=03_AVJevcEs0QQ5_zJJ0qnd5oxk4EBG_SZ3UfHkLkoCpE4efw&oe=635A92F7",
        },
      ],
    };
  },
  components: {
    ProductItem,
  },
  computed: {
    ...mapState(useCartStorePinia, {
      getCartItems: "getCartItems",
    }),
    total() {
      let totaltemp = 0;
      this.getCartItems.forEach((element) => {
        totaltemp += element.retailPrice*element.quantity
      });
      return totaltemp;
    },
  },
  methods: {
    ...mapActions(useCartStorePinia, {
      increaseTotal: "increaseTotal",
    }),
  },
};
</script>
<style lang="scss" scoped>
.cart {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  padding: 0 2rem;

  &__header {
    width: 100%;
    border-bottom: 1px solid grey;

    h2 {
      margin: 0;
    }
  }

  &__body {
    margin: 0.2rem 0;
    height: 10000px;
    overflow: hidden;
  }

  &__footer {
    width: 100%;
    border-top: 1px solid grey;

    h4,
    p {
      margin: 0.5rem;
    }
  }
}
</style>
