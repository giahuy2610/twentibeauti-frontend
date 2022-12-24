<template lang="">
  <div class="wrapper">
    <div class="wrapper__content">
      <div
        class="w-full"
        v-for="(item, index) in [priceFilter, tagsFilter, brandsFilter]"
      >
        <div
          class="toggle flex justify-content-between align-items-center"
          @click="item.isActived = !item.isActived"
        >
          <h4>{{ item.title }}</h4>
          <i
            class="pi"
            :class="{
              'pi-angle-down': !item.isActived,
              'pi-angle-up': item.isActived,
            }"
          ></i>
        </div>
        <div class="accordion" v-show="item.isActived">
          <div
            class="field-checkbox"
            v-for="(itemNest, indexNest) in item.titleArr"
          >
            <Checkbox
              :inputId="indexNest"
              name="priceFilterCheckbox"
              :value="indexNest"
              v-model="item.selectedArr"
            />
            <label :for="indexNest">{{ itemNest }}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useCollectionStorePinia } from "@/stores/store/collection.js";
import { mapWritableState, mapActions } from "pinia";
export default {
  props: {
    title: {
      type: String,
      default: "Sản phẩm mới",
    },
    listOfBrands: [],
  },
  data() {
    return {
      priceFilter: {
        title: "Giá sản phẩm",
        titleArr: [
          "Dưới 500.000đ",
          "500.000₫ - 1.000.000₫",
          "1.000.000₫ - 1.500.000₫",
          "1.500.000₫ - 2.000.000₫",
          "Trên 2.000.000₫",
        ],
        selectedArr: [],
        isActived: false,
      },
      tagsFilter: {
        title: "Loại sản phẩm",
        titleArr: ["Mặt nạ ngủ", "Serum"],
        selectedArr: [],
        isActived: false,
      },
      brandsFilter: {
        title: "Dòng sản phẩm",
        titleArr: ["The face shop", "The ordinary"],
        selectedArr: [],
        isActived: false,
      },
    };
  },
  methods: {
    toggleAccordion(el) {
      console.log(el);
    },
  },
  computed: {
    ...mapWritableState(useCollectionStorePinia, {
      collectionItems: "collectionItems",
      collectionItemsDisplay: "collectionItemsDisplay",
    }),
    priceFilterSelectedArr() {
      return this.priceFilter.selectedArr;
    },
    collectionItemsProducts() {
      return this.collectionItemsDisplay.Products;
    },
    brandsFilterSelectedArr() {
      return this.brandsFilter.selectedArr;
    },
  },
  watch: {
    priceFilterSelectedArr(newValue, oldValue) {
      if (newValue.length == 0) {
        this.collectionItemsDisplay.Products = this.collectionItems.Products;
      } else {
        this.collectionItemsDisplay.Products = [];
        newValue.forEach((element) => {
          if (element == 0) {
            this.collectionItemsDisplay.Products =
              this.collectionItemsDisplay.Products.concat(
                this.collectionItems.Products.filter(
                  (c) => c.RetailPrice < 500000
                )
              );
          } else if (element == 1) {
            this.collectionItemsDisplay.Products =
              this.collectionItemsDisplay.Products.concat(
                this.collectionItems.Products.filter(
                  (c) => c.RetailPrice >= 500000 && c.RetailPrice < 1000000
                )
              );
          } else if (element == 2) {
            this.collectionItemsDisplay.Products =
              this.collectionItemsDisplay.Products.concat(
                this.collectionItems.Products.filter(
                  (c) => c.RetailPrice >= 1000000 && c.RetailPrice < 1500000
                )
              );
          } else if (element == 3) {
            this.collectionItemsDisplay.Products =
              this.collectionItemsDisplay.Products.concat(
                this.collectionItems.Products.filter(
                  (c) => c.RetailPrice >= 1500000 && c.RetailPrice < 2000000
                )
              );
          } else {
            this.collectionItemsDisplay.Products =
              this.collectionItemsDisplay.Products.concat(
                this.collectionItems.Products.filter(
                  (c) => c.RetailPrice >= 1500000 && c.RetailPrice > 2000000
                )
              );
          }
        });
      }
      console.log(this.collectionItemsDisplay.Products);
    },
    collectionItemsProducts(newValue, oldValue) {
      this.brandsFilter.titleArr = [
        ...new Set(newValue.map((p) => p.Brand.NameBrand)),
      ];
      this.tagsFilter.titleArr = [
        ...new Set(newValue.map((p) => p.Brand.NameBrand)),
      ];
    },
    brandsFilterSelectedArr(newValue, oldValue) {},
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  max-width: 100%;

  &__content {
    .toggle {
      width: 100%;
      // padding: 1rem 0;

      &:hover {
        cursor: pointer;
        background-color: rgba(193, 188, 188, 0.2);
      }
    }
  }
}
</style>
