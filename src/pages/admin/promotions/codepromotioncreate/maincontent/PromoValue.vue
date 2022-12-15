<template lang="">
  <div class="promoValue">
    <Card>
      <template #title>
        <span>Giá trị</span>
      </template>
      <template #content>
        <div class="value">
          <div class="left field col-12 md:col-3">
            <label for="minmax-buttons">Giá trị khuyến mãi</label>
            <InputNumber
              @input="change"
              showButtons
              inputId="minmax-buttons"
              v-model="coupon.ValueDiscount"
              mode="currency"
              currency="VND"
              locale="de-DE"
              :min="0"
              :max="1000000000"
              aria-describedby="minmax-help"
              :class="{
                'p-invalid':
                  coupon.ValueDiscount == null || coupon.ValueDiscount == '',
              }"
            />
            <small
              id="codeprod-help"
              class="p-error"
              v-if="coupon.ValueDiscount == null || coupon.ValueDiscount == ''"
            >
              Giá trị khuyến mãi không được để trống</small
            >
            <!-- <InputNumber
              @input="change"
              v-show="coupon._promoType == 'P'"
              showButtons
              inputId="minmax-buttons"
              v-model="coupon.ValueDiscount"
              suffix="%"
              :min="0"
              :max="100"
            /> -->
          </div>
          <!-- <div
            v-if="coupon._promoType == 'P'"
            class="right field col-12 md:col-3"
          >
            <label for="minmax-buttons">Giá trị giảm tối đa (tùy chọn) </label>
            <InputNumber
              type="text"
              @input="change"
              showButtons
              inputId="minmax-buttons"
              v-model="coupon._maxretailValue"
              mode="currency"
              currency="VND"
              locale="de-DE"
              :min="0"
              :max="1000000000"
            />
          </div> -->
        </div>
      </template>
    </Card>
    <Card class="mt-3">
      <template #title>
        <span>Áp dụng cho</span>
      </template>
      <template #content>
        <div
          v-for="(category, index) of categories"
          :key="category.key"
          class="field-radiobutton"
        >
          <RadioButton
            :inputId="category.key"
            name="category"
            :value="category.key"
            v-model="_appliedMode"
            :disabled="index > 0"
          />
          <label :for="category.key">{{ category.name }}</label>
        </div>

        <div
          class="search"
          v-show="
            _appliedMode === this.categories[2].key ||
            _appliedMode === this.categories[1].key
          "
        >
          <ProductDialog></ProductDialog>
        </div>
        <div
          style="margin-top: 10px"
          class="image"
          v-if="
            collection.length > 0 && _appliedMode === this.categories[1].key
          "
        >
          <div
            style="display: flex"
            v-for="(item, index) in collection"
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
              @click="collection.splice(index, 1)"
            />
          </div>
        </div>
        <!-- <div
          style="margin-top: 10px"
          class="image"
          v-if="
            coupon._product.length > 0 &&
            _appliedMode === this.categories[2].key
          "
        >
          <div
            style="display: flex"
            v-for="(item, index) in coupon._product"
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
              @click="coupon._product.splice(index, 1)"
            />
          </div>
        </div> -->
      </template>
    </Card>
    <Card v-if="coupon._promoType == 'M' && _appliedMode != 'A'">
      <template #content>
        <div class="field-checkbox">
          <Checkbox
            inputId="binary"
            v-model="coupon._appliedProduct"
            :binary="true"
          />
          <label for="binary"
            >Mã giảm giá sẽ được tính 1 lần trên mỗi đơn hàng</label
          >
        </div>
        <span style="padding-left: 30px"
          >Bỏ tích nghĩa là mã giảm giá sẽ được áp dụng vào mỗi sản phẩm trong
          đơn hàng.</span
        >
      </template>
    </Card>
  </div>
</template>

<script>
import ProductDialog from "@/pages/admin/promotions/components/ProductDialog.vue";
import { usePromotionStorePinia } from "@/stores/admin/promotion.js";
import { mapState, mapWritableState, mapActions } from "pinia";
export default {
  components: { ProductDialog },
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
      collection: [],
      _appliedMode: "A",
    };
  },
  computed: {
    ...mapWritableState(usePromotionStorePinia, {
      coupon: "coupon",
    }),
  },
  methods: {
    change() {
      console.log(this.coupon.ValueDiscount),
        console.log(this.coupon._maxretailValue);
    },
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
