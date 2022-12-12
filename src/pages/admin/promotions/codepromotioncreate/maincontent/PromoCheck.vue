<template lang="">
  <div class="promocheck">
    <Card>
      <template #title> Tổng quan khuyến mãi </template>
      <template #content>
        <div>{{ this.coupon.CodeCoupon }}</div>
        <ul style="display: flex; flex-direction: column">
          <li v-if="this.coupon.IsMutualEvent == true">
            <div>Dùng chung với chương trình khuyến mãi</div>
          </li>
          <li v-show="this.show_appliedSummary">{{ appliedSummary() }}</li>
          <li v-show="this.show_maxretailValue">{{ maxretailValue() }}</li>
          <li v-show="this.show_appliedProduct">{{ appliedProduct() }}</li>
          <li v-show="this.show_conditionPromo">{{ conditionPromo() }}</li>
          <li v-show="this.show_customerPromo">{{ customerPromo() }}</li>
          <li v-show="this.show_rangePromo">{{ rangePromo() }}</li>
          <li v-show="this.show_timePromo">{{ timePromo() }}</li>
        </ul>
      </template>
    </Card>
  </div>
</template>
<script>
import { usePromotionStorePinia } from "@/stores/admin/promotion.js";
import { mapState } from "pinia";
import moment from "moment";

export default {
  data() {
    return {
      checked: false,
      show_appliedSummary: false,
      show_maxretailValue: false,
      show_appliedProduct: false,
      show_conditionPromo: false,
      show_customerPromo: false,
      show_rangePromo: false,
      show_timePromo: false,
    };
  },
  computed: {
    ...mapState(usePromotionStorePinia, {
      coupon: "coupon",
    }),
  },

  methods: {
    change() {
      console.log(this.coupon.CodeCoupon);
    },
    appliedSummary() {
      if (this.coupon._promoType == "P") {
        if (
          this.coupon._appliedMode == "B" &&
          this.coupon._collection.length > 0
        ) {
          this.show_appliedSummary = true;
          return `Giảm ${this.coupon.ValueDiscount}% cho ${this.coupon._collection.length} danh mục`;
        } else if (
          this.coupon._appliedMode == "C" &&
          this.coupon._product.length > 0
        ) {
          this.show_appliedSummary = true;
          return `Giảm ${this.coupon.ValueDiscount}% cho ${this.coupon._product.length} sản phẩm`;
        }
      } else this.coupon._promoType == "M";
      {
        if (
          this.coupon._appliedMode == "B" &&
          this.coupon._collection.length > 0
        ) {
          this.show_appliedSummary = true;
          return `Giảm ${this.coupon.ValueDiscount}₫ cho ${this.coupon._collection.length} danh mục`;
        } else if (
          this.coupon._appliedMode == "C" &&
          this.coupon._product.length > 0
        ) {
          this.show_appliedSummary = true;
          return `Giảm ${this.coupon.ValueDiscount}₫ cho ${this.coupon._product.length} sản phẩm`;
        }
      }
    },
    maxretailValue() {
      if (
        this.coupon._promoType == "P" &&
        this.coupon._maxretailValue != null
      ) {
        this.show_maxretailValue = true;
        return `Giới hạn số tiền khuyến mãi là ${this.coupon._maxretailValue}₫`;
      } else this.show_maxretailValue = false;
    },
    appliedProduct() {
      if (this.coupon._promoType == "M") {
        this.show_appliedProduct = true;
        if (this.coupon._appliedProduct == true) {
          return `Áp dụng 1 lần cho mỗi đơn hàng`;
        } else {
          return `Áp dụng cho từng mặt hàng trong giỏ hàng`;
        }
      } else this.show_appliedProduct = false;
    },
    conditionPromo() {
      if (
        (this.coupon._condition = "1" && this.coupon._conditionValue1 != null)
      ) {
        this.show_conditionPromo = true;
        return `Tổng giá trị đơn hàng phải tối thiểu là ${this.coupon._conditionValue1}₫`;
      } else if (
        (this.coupon._condition = "2" && this.coupon._conditionValue2 != null)
      ) {
        this.show_conditionPromo = true;
        return `Tổng giá trị sản phẩm được khuyến mãi phải tối thiểu là ${this.coupon._conditionValue2}₫`;
      } else if (
        (this.coupon._condition = "3" && this.coupon._conditionValue3 != null)
      ) {
        this.show_conditionPromo = true;
        return `Tổng số lượng sản phẩm được khuyến mãi phải tối thiểu là ${this.coupon._conditionValue1}`;
      }
      this.show_conditionPromo = false;
    },
    customerPromo() {
      if (
        this.coupon._customerType == "T" &&
        this.coupon._customer.length > 0
      ) {
        this.show_customerPromo = true;
        return `Áp dụng với ${this.coupon._customer.length} nhóm khách hàng`;
      } else this.show_customerPromo = false;
    },
    rangePromo() {
      if (this.coupon._isNumRestrict == true && this.coupon._numpromo > 0) {
        this.show_rangePromo = true;
        if (this.coupon._isRestrict == true) {
          return `Mã được phép sử dụng ${this.coupon._numpromo} lần, mỗi khách hàng được sử dụng 1 lần`;
        } else {
          return `Mã được phép sử dụng ${this.coupon._numpromo} lần`;
        }
      }
      if (this.coupon._isRestrict == true) {
        return `Mỗi khách hàng được sử dụng 1 lần`;
      }
      this.show_rangePromo = false;
    },
    timePromo() {
      //   if (this.show_appliedSummary == true) {
      //     if (this.coupon._startDate != null && this.coupon._startTime != null) {
      //       this.show_timePromo = true;
      //       if (this.coupon._endDate != null && this.coupon._endTime != null) {
      //         return `Áp dụng từ ${moment(this.coupon._startTime).format(
      //           "LT"
      //         )} ngày ${moment(this.coupon._startDate).format("L")} đến ${moment(
      //           this.coupon._endTime
      //         ).format("LT")} ngày ${moment(this.coupon._endDate).format("L")}`;
      //       } else {
      //         return `Áp dụng từ ${moment(this.coupon._startTime).format(
      //           "LT"
      //         )} ngày ${moment(this.coupon._startDate).format("L")}`;
      //       }
      //     } else this.show_timePromo = false;
      //   }
    },
  },
};
</script>
<style lang=""></style>
