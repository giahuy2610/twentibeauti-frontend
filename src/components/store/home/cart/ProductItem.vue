<template lang="">
  <div class="product-wrapper">
    <div class="product-wrapper__left">
      <Skeleton shape="square" size="80px" v-show="!isLoaded"> </Skeleton>
      <img
        :src="imagePath"
        alt=""
        style="width: 80px; height: 80px; object-fit: fill; border-radius: 10px"
        @load="isLoaded = true"
        v-show="isLoaded"
      />
    </div>
    <div class="product-wrapper__right">
      <div class="product-wrapper__right__info">
        <div class="product-wrapper__right__info__main">
          <p
            class="font-semibold under-hover"
            @click="
              $router.push({ name: 'product', params: { productid: SKU } })
            "
          >
            {{ name }}
          </p>
          <p>SKU: {{ SKU }}</p>
        </div>
        <div class="product-wrapper__right__info__delete">
          <i class="icon pi pi-minus" @click="removeItem(SKU)"></i>
        </div>
      </div>
      <div class="product-wrapper__right__quantity-price">
        <div class="quantity-selector">
          <div class="custom-input">
            <i class="pi pi-minus button" @click="decreaseQuantity(SKU)"></i>
            <div class="number">{{ quantity }}</div>
            <i class="button pi pi-plus" @click="increaseQuantity(SKU)"></i>
          </div>
        </div>
        <p class="font-semibold">
          {{ Intl.NumberFormat().format(retailPrice) }}đ
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { useCartStorePinia } from "@/stores/store/cart.js";
import { mapActions } from "pinia";
export default {
  props: {
    name: String,
    SKU: Number,
    retailPrice: Number,
    quantity: Number,
    imagePath: String,
    routePath: String,
  },
  methods: {
    ...mapActions(useCartStorePinia, {
      increaseQuantity: "increaseQuantity",
      decreaseQuantity: "decreaseQuantity",
      removeItem: "removeItem",
    }),
  },
  data() {
    return {
      isLoaded: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.under-hover:hover {
  color: var(--primary-color);
  text-decoration: underline;
}

.product-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 100px;
  cursor: pointer;
  font-size: 0.7rem;
  overflow: hidden;

  &__left {
  }

  &__right {
    width: 100%;

    padding: 20px;

    p {
      margin: 0;
    }

    &__info {
      display: flex;
      justify-content: space-between;
      width: 100%;
      gap: 1rem;

      &__main p {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      &__delete {
        .icon {
          border-radius: 50%;
          padding: 0.2rem;
          background-color: rgb(164, 161, 161);
          cursor: pointer;

          &:hover {
            background-color: var(--primary-color);
            color: white;
          }
        }
      }
    }

    &__quantity-price {
      display: flex;
      justify-content: space-between;

      .quantity-selector {
        .custom-input {
          width: 80px;
          overflow: hidden;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #fff;
          padding: 2px;
          border-radius: 100px;
          padding: 5px;
          border: 1px solid rgba(179, 179, 179, 0.5);

          .button {
            cursor: pointer;
            font-size: small;
          }
        }
      }
    }
  }
}
</style>
