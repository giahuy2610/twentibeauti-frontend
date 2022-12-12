<template lang="">
  <div class="promotime">
    <Card>
      <template #title> Giới hạn sử dụng </template>
      <template #content>
        <div class="group">
          <div class="field-checkbox">
            <Checkbox
              :binary="true"
              name="time"
              inputId="option1"
              v-model="coupon._isNumRestrict"
            />
            <label for="option1"
              >Giới hạn số lần mã giảm giá được áp dụng</label
            >
          </div>
          <InputNumber
            style="margin-bottom: 10px; margin-left: 26px; margin-top: 10px"
            v-show="coupon._isNumRestrict == true"
            showButtons
            inputId="minmax-buttons"
            v-model="coupon.Quantity"
            :min="0"
            :max="1000000000"
          />
        </div>
        <div class="group">
          <div class="field-checkbox">
            <Checkbox
              :binary="true"
              name="time"
              inputId="option2"
              v-model="coupon._isRestrict"
            />
            <label for="option2"
              >Giới hạn mỗi khách hàng chỉ được sử dụng mã giảm giá này 1
              lần</label
            >
          </div>
          <span v-show="coupon._isRestrict == true" style="margin-left: 30px"
            >Kiểm tra bằng email</span
          >
        </div>
      </template>
    </Card>
  </div>
</template>
<script>
import { usePromotionStorePinia } from "@/stores/admin/promotion.js";
import { mapState, mapWritableState, mapActions } from "pinia";
export default {
  computed: {
    ...mapWritableState(usePromotionStorePinia, {
      coupon: "coupon",
    }),
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.group {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
</style>
