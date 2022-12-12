<template lang="">
  <div class="promocheck">
    <Card>
      <template #title> Tổng quan khuyến mãi </template>
      <template #content>
        <div>{{ eventPromotion.NameEvent }}</div>
        <!-- <ul style="display: flex; flex-direction: column">
          <li v-show="this.show_appliedSummary">{{ appliedSummary() }}</li>
          <li v-show="this.show_conditionPromo">{{ conditionPromo() }}</li>
          <li v-show="this.show_timePromo">{{ timePromo() }}</li>
        </ul> -->
      </template>
    </Card>
  </div>
</template>
<script>
import { useEventStorePinia } from "@/stores/admin/eventpromotion.js";
import { mapWritableState} from "pinia";
import moment from "moment";

export default {
  data() {
    return {
      checked: false,
      show_appliedSummary: false,
      show_conditionPromo: false,
      show_timePromo: false,
    };
  },
  computed: {
    ...mapWritableState(useEventStorePinia, {
      eventPromotion: "eventPromotion",
    }),
  },

  // methods: {
  //   change() {
  //     console.log(this.getEventPromoItem._nameEvent);
  //   },
  //   appliedSummary() {
  //     if (this.getEventPromoItem._promoType == "P") {
  //       if (this.getEventPromoItem._appliedMode == "A") {
  //         this.show_appliedSummary = true;
  //         return `Giảm ${this.getEventPromoItem._retailValue}% cho toàn bộ sản phẩm`;
  //       }
  //       if (this.getEventPromoItem._appliedMode == "B") {
  //         this.show_appliedSummary = true;
  //         return `Giảm ${this.getEventPromoItem._retailValue}% cho ${this.getEventPromoItem._collection.length} danh mục`;
  //       } else if (this.getEventPromoItem._appliedMode == "C") {
  //         this.show_appliedSummary = true;
  //         return `Giảm ${this.getEventPromoItem._retailValue}% cho ${this.getEventPromoItem._product.length} sản phẩm`;
  //       }
  //     } else this.getEventPromoItem._promoType == "M";
  //     {
  //       if (this.getEventPromoItem._appliedMode == "A") {
  //         this.show_appliedSummary = true;
  //         return `Giảm ${this.getEventPromoItem._retailValue}₫ cho toàn bộ sản phẩm`;
  //       }
  //       if (this.getEventPromoItem._appliedMode == "B") {
  //         this.show_appliedSummary = true;
  //         return `Giảm ${this.getEventPromoItem._retailValue}₫ cho ${this.getEventPromoItem._collection.length} danh mục`;
  //       } else if (this.getEventPromoItem._appliedMode == "C") {
  //         this.show_appliedSummary = true;
  //         return `Giảm ${this.getEventPromoItem._retailValue}₫ cho ${this.getEventPromoItem._product.length} sản phẩm`;
  //       }
  //     }
  //     this.show_appliedSummary = false;
  //   },
  //   conditionPromo() {
  //     if (
  //       (this.getEventPromoItem._condition =
  //         "1" && this.getEventPromoItem._conditionValue1 != null)
  //     ) {
  //       this.show_conditionPromo = true;
  //       return `Tổng giá trị đơn hàng phải tối thiểu là ${this.getEventPromoItem._conditionValue1}₫`;
  //     } else if (
  //       (this.getEventPromoItem._condition =
  //         "2" && this.getEventPromoItem._conditionValue2 != null)
  //     ) {
  //       this.show_conditionPromo = true;
  //       return `Tổng giá trị sản phẩm được khuyến mãi phải tối thiểu là ${this.getEventPromoItem._conditionValue2}₫`;
  //     }
  //     this.show_conditionPromo = false;
  //   },

  //   timePromo() {
  //     if (this.show_appliedSummary == true) {
  //       if (
  //         this.getEventPromoItem._startDate != null &&
  //         this.getEventPromoItem._startTime != null
  //       ) {
  //         this.show_timePromo = true;
  //         if (
  //           this.getEventPromoItem._endDate != null &&
  //           this.getEventPromoItem._endTime != null
  //         ) {
  //           return `Áp dụng từ ${moment(
  //             this.getEventPromoItem._startTime
  //           ).format("LT")} ngày ${moment(
  //             this.getEventPromoItem._startDate
  //           ).format("L")} đến ${moment(this.getEventPromoItem._endTime).format(
  //             "LT"
  //           )} ngày ${moment(this.getEventPromoItem._endDate).format("L")}`;
  //         } else {
  //           return `Áp dụng từ ${moment(
  //             this.getEventPromoItem._startTime
  //           ).format("LT")} ngày ${moment(
  //             this.getEventPromoItem._startDate
  //           ).format("L")}`;
  //         }
  //       } else this.show_timePromo = false;
  //     }
  //   },
  // },
};
</script>
<style lang=""></style>
