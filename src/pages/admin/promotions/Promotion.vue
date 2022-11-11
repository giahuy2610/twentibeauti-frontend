<template lang="">
  <AdminBlankPage>
    <template v-slot:header>
      <div class="header-wrapper">
        <div class="header-wrapper__left">Quản lí khuyến mã</div>
        <div class="header-wrapper__right">
          <Button
            label="Thoát"
            class="p-button-outlined p-button-danger"
            @click="getCurrentColor"
          />
        </div>
      </div>
    </template>
    <template v-slot:main>
      <div class="main-wrapper">
        <div class="promotion-handling">
          <div class="promotion-handling__header">
            <p
              :class="{ isActived: $route.path == '/admin/promotions/code' }"
              @click="$router.push('/admin/promotions/code')"
            >
              Mã khuyến mãi
            </p>
            <p
              :class="{ isActived: $route.path == '/admin/promotions/event' }"
              @click="$router.push('/admin/promotions/event')"
            >
              Chương trình khuyến mãi
            </p>
          </div>
          <div class="promotion-handling-content">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </template>
  </AdminBlankPage>
</template>
<script>
import AdminBlankPage from "../AdminBlankPage.vue";

export default {
  components: {
    AdminBlankPage,
  },
  data() {
    return {};
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
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .promotion-handling {
    &__header {
      border-bottom: 1px solid #333;
      display: flex;
      padding: 0;

      p {
        cursor: pointer;
        padding: 1rem;
        margin: 0;

        &:hover {
          color: var(--primary-color);
        }
      }

      p.isActived {
        margin-bottom: -2px;
        font-weight: bolder;
        border-bottom: 3px solid var(--primary-color);
      }
    }

    &__content {
    }
  }
}

::v-deep(.p-card) {
  border-radius: 10px;
}
</style>
