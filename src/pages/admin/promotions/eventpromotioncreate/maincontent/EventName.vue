<template lang="">
  <div class="eventName">
    <Card>
      <template #title>
        <span class="title">Tên chương trình khuyến mãi</span>
      </template>
      <template #content>
        <span class="p-fluid">
          <InputText
            id="promocode"
            type="text"
            @input="change"
            placeholder="Ví dụ: Chương trình khuyến mãi tháng 4"
            v-model="eventPromotion.NameEvent"
            aria-describedby="promocode-help"
            :class="{
              'p-invalid':
              eventPromotion.NameEvent== null || eventPromotion.NameEvent == '',
            }"
          />
          <small
          id="idbrand-help"
          class="p-error"
          v-if="eventPromotion.NameEvent == null || eventPromotion.NameEvent == ''"
        >
          Tên chương trình khuyến mãi không được để trống</small
        >
        </span>
      </template>
    </Card>
  </div>
</template>

<script>
import { useEventStorePinia } from "@/stores/admin/eventpromotion.js";
import { mapWritableState } from "pinia";

export default {
  computed: {
    ...mapWritableState(useEventStorePinia, {
      eventPromotion: "eventPromotion",
    }),
  },

  // methods: {
  //   change() {
  //     console.log(this.geteventPromotion._nameEvent);
  //   },
  //   async generateCode() {
  //     const request = new Request(
  //       "https://api.voucherjet.com/api/v1/p/generator",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         // body: '{ "count": 100, "pattern": "DE-####", "characters" : "0123456789" }',
  //         body: JSON.stringify({
  //           count: 1,
  //           pattern: "###########",
  //           characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890",
  //         }),
  //       }
  //     );
  //     const res = await fetch(request);
  //     const data = await res.json();
  //     this.getEventPromoItem._promoCode = data.codes[0];
  //   },
  // },
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
