<template lang="">
  <div style="position: fixed; z-index: 99; background-color: #ffff">
    <div class="header-wrapper">
      <div class="header-wrapper__content">
        <div to="/" class="no-underline header-wrapper__content__left">
          <router-link to="/" class="header-wrapper__content__left"
            ><img src="@/assets/logo_nobg.png" alt="" style="height: 40px" />
            <h2>TWENTI</h2>
          </router-link>

          <span class="searcher p-input-icon-left mr-3 ml-3">
            <InputText
              style="border-radius: 1000px"
              type="text"
              v-model="value2"
              placeholder="Mặt nạ, dưỡng da, son môi, dưỡng ẩm,..."
            />
            <i class="pi pi-search" />
          </span>
        </div>

        <div class="header-wrapper__content__right-group-buttons">
          <i
            @click="count++"
            class="pi pi-ellipsis-h"
            style="font-size: 20px"
          ></i>
          <i
            @click="count++"
            class="pi pi-user ml-3"
            style="font-size: 20px;"
          ></i>
          
          <i
            @click="count++"
            class="pi pi-heart mx-3"
            style="font-size: 20px"
          ></i>
          <i
            @click="visibleCart = true"
            class="pi pi-shopping-bag"
            style="font-size: 20px"
            v-badge="2"
          ></i>
        </div>
      </div>
    </div>
    <div class="header-wrapper__sub-nav">
      <div class="header-wrapper__sub-nav__content">f</div>
    </div>
  </div>

  <Sidebar v-model:visible="visibleCart" :baseZIndex="10000" position="right">
    <Cart></Cart>
  </Sidebar>
</template>

<script>
import Cart from "@/components/store/home/cart/Cart.vue";

export default {
  data() {
    return {
      count: 9,
      visibleCart: false,
    };
  },
  components: {
    Cart,
  },
};
</script>

<style lang="scss">
i {
  cursor: pointer;
}
.header-wrapper {
  width: 100vw;
  min-height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 50px;

  &__content {
    width: 100%;
    max-width: 1300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    &__left {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

.header-wrapper__sub-nav {
  width: 100vw;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  padding: 0 50px;

  &__content {
    width: 100%;
    max-width: 1300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
  }
}
</style>
