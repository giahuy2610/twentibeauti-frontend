<template lang="">
  <div class="promoCondition">
    <Card>
      <template #title> Điều kiện áp dụng </template>
      <template #content>
        <div class="field-radiobutton">
          <RadioButton
            @click="condition = '0'"
            inputId="condition2"
            name="condition"
            value="0"
            v-model="getEventPromoItem._condition"
          />
          <label for="city2">Không có</label>
        </div>
        <div class="group">
          <div class="field-radiobutton">
            <RadioButton
              @click="condition = '1'"
              inputId="condition1"
              name="condition"
              value="1"
              v-model="getEventPromoItem._condition"
            />
            <label for="city1">Tổng giá trị đơn hàng tối thiểu</label>
          </div>
          <InputNumber
            v-show="condition === '1'"
            style="width: 50%; margin-bottom: 10px; margin-left: 30px"
            inputId="VND"
            v-model="getEventPromoItem._conditionValue1"
            mode="currency"
            currency="VND"
            locale="de-DE"
          /><label for="minmax-buttons"></label>
        </div>
        <div class="group">
          <div class="field-radiobutton">
            <RadioButton
              @click="condition = '2'"
              inputId="condition3"
              name="condition"
              value="2"
              v-model="getEventPromoItem._condition"
            />
            <label for="city3"
              >Tổng giá trị sản phẩm được khuyến mãi tối thiểu</label
            >
          </div>
          <InputNumber
            v-show="condition === '2'"
            style="width: 50%; margin-bottom: 10px; margin-left: 30px"
            inputId="VND"
            v-model="getEventPromoItem._conditionValue2"
            mode="currency"
            currency="VND"
            locale="de-DE"
          /><label for="minmax-buttons"></label>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import { useEventStorePinia } from "@/stores/admin/eventpromotion.js";
import { mapState, mapWritableState, mapActions } from "pinia";
export default {
  computed: {
    ...mapWritableState(useEventStorePinia, {
      eventPromotion: "eventPromotion",
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
}
</style>
