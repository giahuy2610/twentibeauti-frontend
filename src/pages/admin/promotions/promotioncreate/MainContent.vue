<template lang="">
    <div class="header">
        <div
          class="header-wrapper__left flex align-items-center cursor-pointer"
          @click="$router.push({ path: '/admin/products'})"
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
        </div>
        <div class="right">

        </div>
    </div>
</template>
<script>
import PromoCode from '@/pages/admin/promotions/promotioncreate/maincontent/PromoCode.vue';
import PromoType from '@/pages/admin/promotions/promotioncreate/maincontent/PromoType.vue';
import PromoValue from '@/pages/admin/promotions/promotioncreate/maincontent/PromoValue.vue'
export default {
  components :
  {
    PromoCode,
    PromoType,
    PromoValue
  }
}
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