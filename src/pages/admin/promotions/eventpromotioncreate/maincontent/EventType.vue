<template lang="">
  <div class="eventType">
    <Card>
      <template #title>
        <span>Loại khuyến mãi</span>
      </template>
      <template #content>
        <div
          v-for="category of categories"
          :key="category.key"
          class="field-radiobutton"
        >
          <RadioButton
            :inputId="category.key"
            name="category"
            :value="category.key"
            v-model="eventPromotion.UnitsDiscount"
          />
          <label :for="category.key">{{ category.name }}</label>
        </div>
      </template>
    </Card>
  </div>
</template>
<script>
import { useEventStorePinia } from "@/stores/admin/eventpromotion.js";
import { mapWritableState} from "pinia";

export default {
  data() {
    return {
      categories: [
        { name: "Trừ trực tiếp giá", key: 1 },
        { name: "Theo phần trăm", key: 2 },
        { name: "Đồng giá", key: 3 },
      ],
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
.field-radiobutton:last-of-type {
  margin-bottom: 0rem;
}
</style>
