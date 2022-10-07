<template lang="">
  <Toast />
  <div class="shadow-2 coupon-card">
    <div class="coupon-card__top">
      <h3>Mã ưu đãi</h3>
      <Button
        :label="couponValue"
        icon="pi pi-copy"
        class="p-button-rounded p-button-secondary p-button-text"
        iconPos="right"
        @click="save"
      />
    </div>
    <hr />
    <div class="coupon-card__main">
      <h3 class="coupon-card__main__coupon-description">
        {{ couponDescription }}
      </h3>
      <div class="expired">
        <h5>Hiệu lực từ: <span>21/09/20</span></h5>
        <h5>Hết hạn: <span>21/09/20</span></h5>
      </div>
    </div>
    <hr />
    <div class="coupon-card__bottom">
      <p>Ưu đãi không giới hạn</p>
      <Button
        label="Lưu"
        class="surface-900 text-white font-bold p-button-raised p-button-secondary p-button-text"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    couponValue: {
      type: String,
      required: true,
      default: "TIETKIEM4",
    },
    couponDescription: {
      type: String,
      required: true,
      default: "TIETKIEM4 - Giảm 1.500k cho đơn từ 10.000K",
    },
    startOn: {
      type: Date,
      required: true,
      default: function () {
        return new Date();
      },
    },
    endOn: {
      type: Date,
      required: true,
      default: function () {
        return new Date();
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    save() {
      navigator.clipboard.writeText(this.couponValue);
      this.$toast.add({
        severity: "success",
        summary: "Đã lưu vào bộ nhớ đệm",
        detail: "Lưu rồi á nha bà dà",
        life: 3000,
      });
    },
  },
};
</script>
<style lang="scss" scoped>

.coupon-card {
  padding: 1rem;
  border-radius: 10px;

  &__top,
  &__bottom,
  .expired {
    display: flex;
    justify-content: space-between;
  }

  &__main {
    &__coupon-description {
      width: 100%;
    }
  }


}
</style>
