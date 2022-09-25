<template lang="">
  <div class="wrapper">
    <h3>SẢN PHẨM NỔI BẬT</h3>
    <div class="wrapper__tabs">
      <p
        v-for="(item, index) in tabs"
        :class="[index === tabActived ? 'active' : '']"
        @click="tabActived = index"
      >
        {{ item.category }}
      </p>
    </div>
    <div class="wrapper__products">
      <ProductCard
        v-for="(item, index) in tabs[tabActived].products"
      ></ProductCard>
    </div>
    <ButtonPrimary
      message="Xem tất cả sản phẩm"
      :pathRoute="tabs[tabActived].path"
      style="margin: 2rem 0"
    ></ButtonPrimary>
  </div>
</template>
<script>
import ProductCard from "@/components/atoms/productCard/ProductCard.vue";
import ButtonPrimary from "@/components/atoms/buttonPrimary/ButtonPrimary.vue";

export default {
  components: {
    ProductCard,
    ButtonPrimary,
  },
  props: {
    message: {
      type: String,
      default: "head",
    },
  },
  data() {
    return {
      tabActived: 0,
      tabs: [
        {
          category: "Chăm sóc cơ thể",
          path: "/categories/cham-soc-co-the",
          products: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
        {
          category: "Trang điểm",
          path: "/categories/trang-diem",
          products: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
        {
          category: "Dưỡng da",
          path: "/categories/duong-da",
          products: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__tabs {
    display: flex;
    gap: 1rem;

    p {
      cursor: pointer;

      &:hover {
        color: var(--primary-color);
        text-decoration: underline;
      }
    }

    .active {
      color: var(--primary-color);
      font-weight: bold;
      text-decoration: none !important;
    }
  }

  &__products {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 0;
  }
}
</style>
