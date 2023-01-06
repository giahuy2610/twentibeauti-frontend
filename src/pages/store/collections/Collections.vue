<template lang="">
  <Loading v-if="loading"></Loading>
  <Wrapper v-else>
    <div class="heading">
      <Heading></Heading>
    </div>
    <div class="content">
      <div class="content__top">
        <h5 class="font-light title-content" @click="$router.push({ path: '/'})">Trang chủ</h5>
        <h2 class="uppercase">{{ collectionItems.NameCollection }}</h2>
      </div>
      <div class="content__main">
        <div class="sider">
          <CollectionFilterSider :title="collectionItems?.NameCollection"></CollectionFilterSider>
        </div>
        
        <div class="products-wrapper">
          <div class="products-wrapper__top flex align-items-center">
            <p>{{  collectionItemsDisplay.Products.length }} Kết quả</p>
            <p class="filter-chooser" @click="isFilterChose = !isFilterChose">
              <i class="pi pi-filter-fill"></i>
              <span
                >{{ filterChooser[filtered]
                }}<span><i class="pi" :class="{'pi-angle-down': !isFilterChose,'pi-angle-up': isFilterChose }"></i></span
              ></span>
            <div class="filter-chooser-card shadow-3" v-show="isFilterChose">
              <p v-for="(item, index) in filterChooser" @click="filtered = index" :class="{'text-primary': index === filtered}">{{ item }}</p>
            </div>              
            </p>
          </div>
          <div class="products-wrapper__content">
            <div class="item" v-for="(item, index) in collectionItemsDisplay.Products">
              <ProductCard :info="item"></ProductCard>
            </div>
          </div>
          <div class="products-wrapper__bottom">
            <ButtonPrimary message="Xem thêm" @click="moreProducts()" v-if="collectionItemsDisplay?.length < collectionItemsDisplay?.length"></ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
</template>
<script>
import Wrapper from "../../Wrapper.vue";
import CollectionFilterSider from "@/components/atoms/collectionFilterSider/CollectionFilterSider.vue";
import ProductCard from "@/components/atoms/productCard/ProductCard.vue";
import ButtonPrimary from "@/components/atoms/buttonPrimary/ButtonPrimary.vue";
import Heading from "./components/Heading.vue";
import Loading from "@/components/atoms/loadingScreen/Loading.vue";
import { useCollectionStorePinia } from "@/stores/store/collection.js";
import { mapWritableState, mapActions } from "pinia";
export default {
  components: {
    Wrapper,
    CollectionFilterSider,
    ProductCard,
    ButtonPrimary,
    Heading,
    Loading
  },
  computed: {
    ...mapWritableState(useCollectionStorePinia, {
      collectionItems: "collectionItems",
      collectionItemsDisplay: "collectionItemsDisplay"
    }),
  },
  methods: {
    ...mapActions(useCollectionStorePinia,["getInfoCollection"],
    ),
    moreProducts() {

    }
  },
  async mounted() {
    await this.getInfoCollection(this.$route.params.id);
    this.loading = false;
  },
  data() {
    return {
      countProductsInCollection: 2,
      filterChooser: ["Giá tăng dần", "Giá giảm dần", "% giảm", "Mua nhiều"],
      filtered: 2, //default: % giảm
      isFilterChose: false,
      loading: true
    };
  },
  watch: {
    filtered(newValue, oldValue) {
      if (newValue == 0) {
        console.log(this.collectionItemsDisplay.Products.sort((a,b) => a.RetailPrice > b.RetailPrice ? 1 : -1));
      }
      else if (newValue == 1) {
        console.log(this.collectionItemsDisplay.Products.sort((a,b) => a.RetailPrice < b.RetailPrice ? 1 : -1));
      }
      else if (newValue == 2) {
        console.log(this.collectionItemsDisplay.Products.sort((a,b) => (a.ListPrice - a.RetailPrice) > (b.ListPrice - b.RetailPrice) ? 1 : -1));

      }
      else {
        console.log(this.collectionItemsDisplay.Products.sort((a,b) => a.Stock > b.Stock ? 1 : -1));
      }
    },
    '$route' (to, from) {
      this.getInfoCollection(this.$route.params.id)
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";
.content {
  max-width: 1300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  &__top {
    width: 100%;

    .title-content {

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  &__main {
    display: flex;
    justify-content: space-between;

    .sider {
      width: 100%;
      max-width: 20%;

      @include mobile {
        display: none;
      }
      @include mini-tablet {
        display: none;
      }
    }

    .products-wrapper {
      width: fit-content;
      max-width: 80%;
      margin-left: 1rem;

      @include mobile {
        max-width: 100%;
      }
      @include mini-tablet {
        max-width: 100%;
      }

      &__top {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .filter-chooser {
          position: relative;
          cursor: pointer;
          border: 1px solid var(--primary-color);
          padding: 0.4rem 0.2rem;
          border-radius: 10px;


          .filter-chooser-card {
            position: absolute;
            background-color: #fff;
            right: 0;
            padding: 0 1rem;
            margin-top: 0.5rem;
            border-radius: 10px;
            z-index: 3;
            width: 10rem;

            p:hover {
              color: var(--primary-color);
            }
          }
        }
      }

      &__bottom {
        display: flex;
        justify-content: center;
        margin: 2rem 0;
      }

      &__content {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;

        .item {
          padding: 0.5rem;
          max-width: 25%;

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
  }
}
</style>
