<template lang="">
  <AdminBlankPage>
    <template v-slot:header>
      <div class="header-wrapper">
        <div class="header-wrapper__left">Quản lí giao diện</div>
        <div class="header-wrapper__right">
          <Button
            label="Thoát"
            class="p-button-outlined p-button-danger"
            @click="getCurrentColor"
          />
          <Button
            type="button"
            label="Xem trước"
            class="p-button-info ml-2"
            badgeClass="p-badge-danger"
            @click="$router.push({ path: '/' })"
          />
          <Button
            type="button"
            label="Lưu"
            class="p-button-info ml-2"
            badgeClass="p-badge-danger"
            @click="$router.push({ path: '/admin/products/create' })"
          />
        </div>
      </div>
    </template>
    <template v-slot:main>
      <div class="main-wrapper">
        <div class="color-handling">
          <Card>
            <template #title>Màu chủ đề</template>
            <template #content>
              <div class="product-table">
                {{ primaryColor }}

                <ColorPicker v-model="primaryColor" />
              </div>
            </template>
          </Card>
          <Card>
            <template #title>Màu khung FlashSale</template>
            <template #content>
              <div class="product-table">
                {{ primaryColor }}

                <ColorPicker v-model="primaryColor" />
              </div>
            </template>
          </Card>
        </div>

        <Fieldset legend="Quảng cáo nổi" :toggleable="true" collapsed="false">
          <AdsPopupHandlingVue></AdsPopupHandlingVue> ></Fieldset
        >
        <Card>
          <template #title>Quảng cáo cạnh</template>
          <template #content> </template>
        </Card>
        <Card>
          <template #title>Quảng cáo đầu</template>
          <template #content> </template>
        </Card>
        <Fieldset
          legend="Trang chủ - Khuyến mãi tường Slider"
          :toggleable="true"
          collapsed="false"
        >
          <WallpaperHomePageHandingVue></WallpaperHomePageHandingVue
        ></Fieldset>
        <Card>
          <template #title>Trang chủ - Thương hiệu Slider</template>
          <template #content> </template>
        </Card>

        <Card>
          <template #title>Trang chủ - Danh mục khuyến mãi Slider</template>
          <template #content> </template>
        </Card>
        <Card>
          <template #title>Trang chủ - Sản phẩm nổi bật</template>
          <template #content> </template>
        </Card>
      </div>
    </template>
  </AdminBlankPage>
</template>
<script>
import AdminBlankPage from "../AdminBlankPage.vue";
import Theme from "@/scss/test.module.scss";
import WallpaperHomePageHandingVue from "./components/WallpaperHomePageHanding.vue";
import AdsPopupHandlingVue from "./components/AdsPopupHandling.vue";
export default {
  components: {
    AdminBlankPage,
    WallpaperHomePageHandingVue,
    AdsPopupHandlingVue,
  },
  data() {
    return {
      primaryColor: null,
    };
  },
  methods: {
    getCurrentColor() {
      console.log(Theme.mobileWidth);
    },
  },
  watch: {
    primaryColor: {
      handler(newValue, oldValue) {
        console.log(newValue);
        document.documentElement.style.setProperty(
          "--primary-color",
          "#" + newValue
        );
      },
      deep: true,
    },
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

  .color-handling {
    display: flex;
    gap: 1rem;
  }

  .product-table {
    width: 100%;
  }
}

::v-deep(.p-card) {
  border-radius: 10px;
}
</style>
