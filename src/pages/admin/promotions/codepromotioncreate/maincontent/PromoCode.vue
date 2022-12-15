<template lang="">
  <div class="promoCode">
    <Card>
      <template #title>
        <span class="title">Mã khuyến mãi</span>
        <span class="generate-code" @click="generateCode()"
          >Sinh mã ngẫu nhiên</span
        >
      </template>
      <template #content>
        <span class="p-fluid">
          <InputText
            id="promocode"
            type="text"
            v-model="coupon.CodeCoupon"
            @input="change"
            placeholder="Ví dụ: COUPON10%"
            aria-describedby="promocode-help"
            :class="{
              'p-invalid': coupon.CodeCoupon == null || coupon.CodeCoupon == '',
            }"
          />
          <small
            id="codeprod-help"
            class="p-error"
            v-if="coupon.CodeCoupon == null || coupon.CodeCoupon == ''"
          >
            Mã khuyến mãi không được để trống</small
          >
        </span>
        <p>Khách hàng sẽ nhập mã khuyến mãi này ở màn hình thanh toán.</p>
      </template>
    </Card>
    <Card class="mt-4">
      <template #title>
        <span class="title">Mô tả</span>
        <small
          id="codeprod-help"
          class="p-error"
          v-if="coupon.Description == null || coupon.Description == ''"
        >
          Mô tả không được để trống</small
        >
      </template>
      <template #content>
        <span class="p-fluid">
          <InputText
            id="promodes"
            type="text"
            v-model="coupon.Description"
            @input="change"
            placeholder="Ví dụ: Mừng ngày..."
            aria-describedby="promocode-help"
            :class="{
              'p-invalid':
                coupon.Description == null || coupon.Description == '',
            }"
          />
        </span>
        <Checkbox
          @click="change"
          inputId="binary"
          v-model="coupon.IsMutualEvent"
          :binary="true"
          class="mt-2 mr-2"
        />
        <label for="binary">Áp dụng cùng với chương trình khuyến mãi</label>
      </template>
    </Card>
  </div>
</template>

<script>
import { usePromotionStorePinia } from "@/stores/admin/promotion.js";
import { mapWritableState } from "pinia";

export default {
  computed: {
    ...mapWritableState(usePromotionStorePinia, {
      coupon: "coupon",
    }),
  },

  methods: {
    async generateCode() {
      const request = new Request(
        "https://api.voucherjet.com/api/v1/p/generator",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // body: '{ "count": 100, "pattern": "DE-####", "characters" : "0123456789" }',
          body: JSON.stringify({
            count: 1,
            pattern: "###########",
            characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890",
          }),
        }
      );
      const res = await fetch(request);
      const data = await res.json();
      this.coupon.CodeCoupon = data.codes[0];
    },
  },
};
</script>

<style lang="scss" scoped>
.p-card {
  position: relative;
}

.title {
  flex: 1 1 auto;
}

.generate-code {
  float: right;
  font-weight: 300 !important;
  color: #08f;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
