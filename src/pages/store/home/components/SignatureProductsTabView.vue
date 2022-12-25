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
      <div class="item" v-for="(item, index) in tabs[tabActived].products">
        <ProductCard :info="item"></ProductCard>
      </div>
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
          path: "",
          products: [],
          idCollection: 80,
        },
        {
          category: "Trang điểm",
          path: "",
          products: [],
          idCollection: 73,
        },
        {
          category: "Dưỡng da",
          path: "",
          products: [],
          idCollection: 74,
        },
      ],
    };
  },
  async mounted() {
    this.tabs.forEach(async (tab) => {
      await this.axios
        .get("/collection/show/" + tab.idCollection)
        .then((response) => {
          console.log(response.data);
          tab.products = response.data.Products;
          tab.products.length = Math.min(tab.products.length, 8);
          tab.path = "/collection/" + tab.idCollection;
        })
        .catch(function (error) {
          console.error(error);
        });
    });
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";
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
    justify-content: flex-start;
    padding: 1rem 0;

    .item {
      max-width: 25%;
      padding: 0.5rem;

      @include mobile {
        max-width: 50%;
      }
      @include mini-tablet {
        max-width: 50%;
      }
      @include tablet {
        max-width: 33.33%;
      }
    }
  }
}
</style>
