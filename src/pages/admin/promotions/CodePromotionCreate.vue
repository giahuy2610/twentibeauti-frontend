<template lang="">
    <AdminBlankPage>
        <template v-slot:header>
            <div class="header-wrapper">
                <div>
                  <span>Khuyến mãi chưa được lưu</span>
                </div>
                <div class="header-wrapper__right">
                  <Button label="Hủy" class="p-button-outlined p-button-danger" disabled="disabled"/>
                  <Button label="Lưu" class="p-button-info" disabled="disabled"/>
                </div>
              </div>
        </template>
        <template v-slot:main>
            <div class="main-wrapper">
              <MainContent></MainContent>
            </div>
          </template>
    </AdminBlankPage>
</template>
<script>
import AdminBlankPage from '@/pages/admin/AdminBlankPage.vue'
import MainContent from '@/pages/admin/promotions/codepromotioncreate/MainContent.vue'
export default {
  components: {
    AdminBlankPage,
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
  
    .header-wrapper__left:hover {
      color: var(--primary-color)
    }
  
    .header-wrapper__right {
      display: flex;
      gap: 10px;
    }
  }
  .main-wrapper {
    margin:  1rem;
    .product-table {
      width: 100%;
    }
  }
  /*
  ::v-deep(.p-card) {
    border-radius: 10px;
  }
  */
  ::v-deep(.p-card-title) {
    font-size: 1rem !important;
    font-weight: 500 !important;
  }
  ::v-deep(.p-card-content)
  {
    padding: 0rem 0 !important;
  }
  ::v-deep(.field-checkbox)
{
    label
    {
        cursor: pointer;
    }
    margin-bottom: 0rem;
}::v-deep(.field-checkbox)
{
    label
    {
        cursor: pointer;
    }
    margin-bottom: 0rem;
}
::v-deep(.p-radiobutton)
{
}
</style>