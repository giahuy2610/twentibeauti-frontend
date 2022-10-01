<template lang="">
  <div class="product-wrapper">
    <div class="product-wrapper__left">
      <img
        src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.15752-9/304828676_529058492554304_1256913194660052362_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=4oWy57Sa9ScAX-QGGDv&_nc_ht=scontent.fsgn13-2.fna&oh=03_AVJevcEs0QQ5_zJJ0qnd5oxk4EBG_SZ3UfHkLkoCpE4efw&oe=635A92F7"
        alt=""
        style="width: 80px; height: 80px; object-fit: fill; border-radius: 10px"
      />
    </div>
    <div class="product-wrapper__right">
      <div class="product-wrapper__right__info">
        <div class="product-wrapper__right__info__main">
          <p class="font-semibold">{{ name }}</p>
          <p>SKU: {{ SKU }}</p>
        </div>
        <div class="product-wrapper__right__info__delete">
          <i class="icon pi pi-minus"></i>
        </div>
      </div>
      <div class="product-wrapper__right__quantity-price">
        <div class="quantity-selector">
          <div class="custom-input">
            <i class="pi pi-minus button" @click="quantity--"></i>
            <div class="number">{{ quantity }}</div>
            <i class="button pi pi-plus" @click="quantity++"></i>
          </div>
        </div>
        <p class="font-semibold">
          {{ Intl.NumberFormat().format(listPrice) }}đ
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "Gel Tắm Cung Cấp Ẩm AVOCADO BODY WASH 300ml (GZ) Cấp Ẩm AVOCADO BODY WASH 300ml (GZ)",
      SKU: 30700710,
      listPrice: 289000,
      quantity: 1,
    };
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.product-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 100px;

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

      &__main {
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
