<template lang="">
  <div class="header">
    <div
      class="header-wrapper__left flex align-items-center cursor-pointer"
      @click="$router.push({ name: 'code promotion' })"
    >
      <i class="pi pi-angle-left"></i>
      <span>Khuyến mãi</span>
    </div>
    <h2>Thêm mới mã khuyến mãi</h2>
  </div>
  <div class="main_content">
    <div class="left">
      <PromoCode></PromoCode>
      <PromoType></PromoType>
      <PromoValue></PromoValue>
      <PromoCondition></PromoCondition>
      <PromoCustomer></PromoCustomer>
      <PromoRange></PromoRange>
      <PromoTime></PromoTime>
    </div>
    <div class="right">
      <PromoCheck></PromoCheck>
    </div>
  </div>
</template>
<script>
import PromoCode from "@/pages/admin/promotions/codepromotioncreate/maincontent/PromoCode.vue";
import PromoType from "@/pages/admin/promotions/codepromotioncreate/maincontent/PromoType.vue";
import PromoValue from "@/pages/admin/promotions/codepromotioncreate/maincontent/PromoValue.vue";
import PromoCondition from "@/pages/admin/promotions/codepromotioncreate/maincontent/PromoCondition.vue";
import PromoCustomer from "@/pages/admin/promotions/codepromotioncreate/maincontent/PromoCustomer.vue";
import PromoRange from "@/pages/admin/promotions/codepromotioncreate/maincontent/PromoRange.vue";
import PromoTime from "@/pages/admin/promotions/codepromotioncreate/maincontent/PromoTime.vue";
import PromoCheck from "@/pages/admin/promotions/codepromotioncreate/maincontent/PromoCheck.vue";
export default {
  components: {
    PromoCode,
    PromoType,
    PromoValue,
    PromoCondition,
    PromoCustomer,
    PromoRange,
    PromoTime,
    PromoCheck,
  },
};
</script>
<style lang="scss" scoped>
.main_content {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 10px;
  .left {
    width: 70%;
    margin: 10px;
    & > * {
      padding-bottom: 20px;
    }
  }

  .right {
    width: 30%;
    margin: 10px;
  }
}
</style>
