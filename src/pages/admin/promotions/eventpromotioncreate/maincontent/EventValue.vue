<template lang="">
  <div class="eventValue">
    <Card>
      <template #title>
        <span>Giá trị</span>
      </template>
      <template #content>
        <div class="value">
          <div class="left field col-12 md:col-3">
            <label for="minmax-buttons">Giá trị khuyến mãi</label>
            <InputNumber
              v-show="eventPromotion.UnitsDiscount == 1"
              showButtons
              inputId="minmax-buttons"
              v-model="eventPromotion.ValueDiscount"
              mode="currency"
              currency="VND"
              locale="de-DE"
              :min="0"
              :max="1000000000"
              aria-describedby="promocode-help"
              :class="{
                'p-invalid':
                  eventPromotion.ValueDiscount == null ||
                  eventPromotion.ValueDiscount == '',
              }"
            />
            <InputNumber
              v-show="eventPromotion.UnitsDiscount == 2"
              showButtons
              inputId="minmax-buttons"
              v-model="eventPromotion.ValueDiscount"
              suffix="%"
              :min="0"
              :max="100"
              aria-describedby="promocode-help"
              :class="{
                'p-invalid':
                  eventPromotion.ValueDiscount == null ||
                  eventPromotion.ValueDiscount == '',
              }"
            />
            <InputNumber
              v-show="eventPromotion.UnitsDiscount == 3"
              showButtons
              inputId="minmax-buttons"
              v-model="eventPromotion.ValueDiscount"
              mode="currency"
              currency="VND"
              locale="de-DE"
              :min="0"
              :max="1000000000"
              aria-describedby="promocode-help"
              :class="{
                'p-invalid':
                  eventPromotion.ValueDiscount == null ||
                  eventPromotion.ValueDiscount == '',
              }"
            />
            <small
          id="idbrand-help"
          class="p-error"
          v-if="eventPromotion.ValueDiscount == null || eventPromotion.ValueDiscount == ''"
        >
          Giá trị khuyến mãi không được để trống</small
        >
          </div>
        </div>
      </template>
    </Card>
    <Card class="mt-3">
      <template #title>
        <span>Áp dụng cho</span>
      </template>

      <template #content>
        <!-- <div
          @click="change"
          v-for="category of categories"
          :key="category.key"
          class="field-radiobutton"
        >
          <RadioButton
            :inputId="category.key"
            name="category"
            :value="category.key"
            v-model="_appliedMode"
          />
          <label :for="category.key">{{ category.name }}</label>
        </div> -->
        <ProductTable></ProductTable>
        <!-- <div
          class="search"
          v-show="
            _appliedMode == this.categories[2].key ||
            _appliedMode == this.categories[1].key
          "
        >
          <EventProductDialog></EventProductDialog>
        </div> -->
        <!-- <div
          style="margin-top: 10px"
          class="image"
          v-if="
            eventPromoItem._collection.length > 0 &&
            _appliedMode === this.categories[1].key
          "
        >
          <div
            style="display: flex"
            v-for="(item, index) in eventPromoItem._collection"
            :key="index"
          >
            <div
              style="
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 5px;
                flex: 1 1 auto;
              "
              class="item"
            >
              <img
                :src="'demo/images/product/' + item.image"
                @error="
                  (e) =>
                    (e.target.src =
                      'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
                "
                :alt="item.name"
                class="shadow-2 w-4rem"
              />
              <span>{{ item.name }}</span>
            </div>
            <Button
              v-model="checked1"
              icon="pi pi-times"
              class="p-button-text"
              @click="eventPromoItem._collection.splice(index, 1)"
            />
          </div>
        </div>
        <div
          style="margin-top: 10px"
          class="image"
          v-if="
            eventPromoItem._product.length > 0 &&
            _appliedMode === this.categories[2].key
          "
        >
          <div
            style="display: flex"
            v-for="(item, index) in eventPromoItem._product"
            :key="index"
          >
            <div
              style="
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 5px;
                flex: 1 1 auto;
              "
              class="item"
            >
              <img
                :src="'demo/images/product/' + item.image"
                @error="
                  (e) =>
                    (e.target.src =
                      'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
                "
                :alt="item.name"
                class="shadow-2 w-4rem"
              />
              <span>{{ item.name }}</span>
            </div>
            <Button
              v-model="checked2"
              icon="pi pi-times"
              class="p-button-text"
              @click="eventPromoItem._product.splice(index, 1)"
            />
          </div>
        </div> -->
      </template>
    </Card>
  </div>
</template>

<script>
import EventProductDialog from "@/pages/admin/promotions/components/EventProductDialog.vue";
import { useEventStorePinia } from "@/stores/admin/eventpromotion.js";
import { mapWritableState } from "pinia";
import ProductTable from "./ProductTable.vue";

export default {
  components: { EventProductDialog, ProductTable },
  data() {
    return {
      checked1: true,
      checked2: true,
      byPercent: true,
      categories: [
        { name: "Tất cả sản phẩm", key: "A" },
        { name: "Danh mục sản phẩm", key: "B" },
        { name: "Sản phẩm", key: "C" },
      ],
      checked: true,
      _appliedMode: "A",
    };
  },
  computed: {
    ...mapWritableState(useEventStorePinia, {
      eventPromotion: "eventPromotion",
    }),
  },
};
</script>

<style lang="scss" scoped>
.value {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 10px;

  .left {
    display: flex;
    flex-direction: column;
    margin: 10px;
    flex: 1 1 auto;
  }

  .right {
    width: 45%;
    display: flex;
    flex-direction: column;
    margin: 10px;
  }
}

.search {
  display: flex;
}
</style>
