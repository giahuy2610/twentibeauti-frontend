<template lang="">
    <AdminBlankPageVue>
        <template v-slot:header>
            <div class="header-wrapper">
                <div class="header-wrapper__left">Khuyến mãi</div>
                <div class="header-wrapper__right">
                    <Button class="p-button-raised p-button-info">
                        <span>Tạo khuyến mãi</span>
                    </Button>
                </div>
            </div>
        </template>
        <template v-slot:main>
            <div class="main-wrapper">
                <MainContent></MainContent>
            </div>
        </template>
    </AdminBlankPageVue>
</template>
<script>
import AdminBlankPageVue from "../AdminBlankPage.vue";
import MainContent from '@/pages/admin/promotions/promotion/MainContent.vue'
export default {
  components: {
    AdminBlankPageVue,
    MainContent,
  },
};
</script>
<style lang="scss" scoped>
.header-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__left {
  }

  &__right {
  }
}
.main-wrapper {
  .product-table {
    width: 100%;
  }
}
</style>