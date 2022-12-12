<template lang="">
  <div class="promocustomer">
    <Card>
      <template #title> Nhóm khách hàng </template>
      <template #content>
        <div class="field-radiobutton">
          <RadioButton
            inputId="customer0"
            name="customer"
            value="A"
            v-model="_customerType"
          />
          <label for="customer0">Tất cả</label>
        </div>
        <div class="group">
          <div class="field-radiobutton">
            <RadioButton
              inputId="customer1"
              name="customer"
              value="T"
              v-model="_customerType"
              :disabled="true"
            />
            <label for="customer1">Nhóm khách hàng đã lưu</label>
          </div>

          <!-- <div class="search" v-show="this._customerType === 'T'">
            <CustomerDialog></CustomerDialog>
          </div> -->
        </div>
        <!-- <div
          style="margin-top: 10px"
          class="image"
          v-if="
            getPromoItem._customer.length > 0 &&
            getPromoItem._customerType === 'T'
          "
        >
          <div
            style="display: flex"
            v-for="(item, index) in getPromoItem._customer"
            :key="index"
          >
            <div
              style="
                display: flex;
                align-items: center;
                margin-bottom: 5px;
                flex: 1 1 auto;
              "
              class="item"
            >
              <span style="text-decoration: underline; cursor: pointer">{{
                item.name
              }}</span>
            </div>
            <Button
              v-model="checked2"
              icon="pi pi-times"
              class="p-button-text"
              @click="getPromoItem._customer.splice(index, 1)"
            />
          </div>
        
        </div> -->
      </template>
    </Card>
  </div>
</template>
<script>
import CustomerDialog from "@/pages/admin/promotions/components/CustomerDialog.vue";
import { usePromotionStorePinia } from "@/stores/admin/promotion.js";
import { mapState, mapWritableState, mapActions } from "pinia";
export default {
  computed: {
    ...mapWritableState(usePromotionStorePinia, {
      getPromoItem: "getPromoItem",
    }),
  },
  components: { CustomerDialog },

  data() {
    return {
      _customerType: "A",
    };
  },
};
</script>
<style lang="scss" scoped>
.search {
  display: flex;
}
</style>
