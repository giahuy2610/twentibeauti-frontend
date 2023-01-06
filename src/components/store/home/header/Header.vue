<template lang="">
  <Sidebar
    v-model:visible="visibleSidebarMobile"
    :baseZIndex="10000"
    position="left"
    class="p-sidebar-md"
  >
    <SidebarMobile />
  </Sidebar>
  <Sidebar
    v-model:visible="visibleCart"
    :baseZIndex="10000"
    position="right"
    class="p-sidebar-md"
  >
    <Cart />
  </Sidebar>
  <LoginOverlay
    :visible="visibleLogin"
    @change-visible="(value) => (visibleLogin = false)"
  ></LoginOverlay>
  <div
    class="shadow-2"
    :class="{
      relative: $route.path === '/product' || $route.path === '/checkout',
      'w-full': $route.path !== '/product' || $route.path !== '/checkout',
    }"
    style="top: 0; position: fixed; z-index: 33; background-color: #ffff"
  >
    <Wrapper id="header-first-row">
      <div class="main-content">
        <div class="no-underline header-wrapper__content__left">
          <div
            @click="$router.push({ path: '/' })"
            class="header-wrapper__content__left cursor-pointer"
          >
            <img src="@/assets/logo_nobg.png" alt="" style="height: 40px" />
            <h2>TWENTI</h2>
          </div>
          <span class="searcher p-input-icon-left mr-3 ml-3">
            <InputText
              style="border-radius: 30px; width: 21rem"
              type="text"
              v-model="value2"
              placeholder="Mặt nạ, dưỡng da, son môi, dưỡng ẩm,..."
            />
            <i
              class="pi pi-search"
              @click="
                $router.push({ path: '/search/' + value2 });
                value2 = '';
              "
            />
          </span>
        </div>

        <div class="header-wrapper__content__right-group-buttons">
          <i
            class="pi pi-ellipsis-h relative"
            style="font-size: 20px"
            @click="visibleBarSubmenu = true"
            v-click-outside="() => (visibleBarSubmenu = false)"
          >
            <div class="bar-submenu shadow-2" v-show="visibleBarSubmenu">
              <div class="bar-submenu-item">
                <i class="pi pi-send"></i>
                Trung tâm hỗ trợ
              </div>
              <div class="bar-submenu-item">
                <i class="pi pi-search"></i>
                Tra cứu đơn hàng
              </div>
            </div></i
          >
          <i
            class="pi pi-user ml-3 relative"
            style="font-size: 20px"
            @click="
              getUser == null
                ? (visibleLogin = true)
                : (visibleAccountSubmenu = true)
            "
            v-click-outside="
              () =>
                visibleAccountSubmenu == true
                  ? (visibleAccountSubmenu = false)
                  : 1
            "
          >
            <div class="bar-submenu shadow-2" v-show="visibleAccountSubmenu">
              <div
                class="bar-submenu-item"
                @click="$router.push({ name: 'account' })"
              >
                <i class="pi pi-id-card"></i>
                Thông tin tài khoản
              </div>
              <div
                class="bar-submenu-item"
                @click="$router.push({ name: 'history orders' })"
              >
                <i class="pi pi-list"></i>
                Lịch sử đặt hàng
              </div>
              <div
                class="bar-submenu-item"
                @click="
                  (getUser = null), (visibleLogin = false), $router.push('/')
                "
              >
                <i class="pi pi-sign-out"></i>
                Đăng xuất
              </div>
            </div></i
          >

          <i
            @click="count++"
            class="pi pi-heart mx-3"
            style="font-size: 20px"
          ></i>
          <i
            @click="visibleCart = true"
            class="pi pi-shopping-bag"
            style="font-size: 20px"
            v-badge="getCartItemsNumber"
            v-if="getCartItemsNumber > 0"
          ></i>
          <i
            @click="visibleCart = true"
            class="pi pi-shopping-bag"
            style="font-size: 20px"
            v-else
          ></i>
        </div>
      </div>

      <div class="main-content-mobile">
        <div class="header-content-mobile">
          <i class="pi pi-bars" @click="visibleSidebarMobile = true"> </i>
          <div
            @click="$router.push({ path: '/' })"
            class="cursor-pointer flex align-items-center"
          >
            <img src="@/assets/logo_nobg.png" alt="" style="height: 40px" />
            <h2>TWENTI</h2>
          </div>
          <div class="header-content-right-mobile">
            <i
              @click="count++"
              class="pi pi-heart mx-3"
              style="font-size: 20px"
            ></i>
            <i
              @click="visibleCart = true"
              class="pi pi-shopping-bag"
              style="font-size: 20px"
              v-badge="getCartItemsNumber"
              v-if="getCartItemsNumber > 0"
            ></i>
            <i
              @click="visibleCart = true"
              class="pi pi-shopping-bag"
              style="font-size: 20px"
              v-else
            ></i>
          </div>
        </div>
        <span class="searcher p-input-icon-left">
          <InputText
            style="border-radius: 30px; width: 100%"
            type="text"
            v-model="value2"
            placeholder="Mặt nạ, dưỡng da, son môi, dưỡng ẩm,..."
          />
          <i class="pi pi-search" />
        </span>
      </div>
    </Wrapper>

    <Wrapper
      style="
        height: 50px;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        border-top: 1px solid #d3d7d3;
      "
      id="hidden-when-small-screen"
    >
      <HeaderNavigation />
    </Wrapper>
  </div>
</template>

<script>
import Cart from "@/components/store/home/cart/Cart.vue";
import Wrapper from "@/pages/Wrapper.vue";
import { useCartStorePinia } from "@/stores/store/cart.js";
import { mapState, mapWritableState } from "pinia";
import HeaderNavigation from "./headerNavigation/HeaderNavigation.vue";
import SidebarMobile from "./sidebarMobile/SidebarMobile.vue";
import LoginOverlay from "./LoginOverlay.vue";
import vClickOutside from "click-outside-vue3";

export default {
  data() {
    return {
      visibleSidebarMobile: false,
      visibleAccountSubmenu: false,
      visibleBarSubmenu: false,
      visibleLogin: false,
      value2: "",
    };
  },
  components: {
    Cart,
    Wrapper,
    HeaderNavigation,
    SidebarMobile,
    LoginOverlay,
  },
  computed: {
    ...mapWritableState(useCartStorePinia, {
      getCartItemsNumber: "getCartItemsNumber",
      getUser: "user",
      total: "total",
      visibleCart: "visibleCart",
    }),
  },
  directives: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
::v-deep(.p-sidebar) {
  background: red;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

@import "@/scss/mixin";
i {
  cursor: pointer;
}

#hidden-when-small-screen {
  @include mobile {
    display: none;
  }
  @include mini-tablet {
    display: none;
  }
}

#header-first-row {
  height: 80px;
  padding-top: 0 !important;
  padding-bottom: 0 !important;

  @include mobile {
    height: 130px;
  }
  @include mini-tablet {
    height: 130px;
  }
}

#header-second-row {
  height: 50px;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  border-top: 1px solid #d3d7d3;

  @include mobile {
    display: none;
  }
  @include mini-tablet {
    display: none;
  }
}

.bar-submenu {
  position: absolute;
  min-width: 200px;
  width: max-content;
  padding: 1rem;
  border-radius: 10px;
  z-index: 99;
  top: 1.5rem;
  right: 0;
  background-color: #fff;

  .bar-submenu-item {
    display: flex;
    width: fit-content;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 1rem;
    gap: 1rem;

    &:hover {
      color: var(--primary-color);
    }
  }
}

.main-content {
  display: none;
  justify-content: space-between;

  .header-wrapper {
    &__content {
      &__left {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  @include desktop {
    display: flex;
  }
  @include tablet {
    display: flex;
  }
}

.main-content-mobile {
  display: none;
  flex-direction: column;

  @include mobile {
    display: flex;
  }
  @include mini-tablet {
    display: flex;
  }

  .header-content-mobile {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-content-right-mobile {
      display: flex;
    }
  }
}

.header-wrapper__sub-nav ul a {
  width: 68px;
  height: 28px;

  text-decoration: none;

  /* Link */

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */

  text-align: center;
  letter-spacing: 0.2px;

  /* text */

  color: #252b42;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}
.header-wrapper__sub-nav {
  position: relative;
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
    background-color: gray;
  }
}

@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap");

$blue: #4f64f5;

ul {
  padding-left: 0;
  margin: 0;
}

.header {
  background: #fff;
  padding: 10px 7%;
  display: flex;
  align-items: center;
  border-bottom: 1px #f1f1f1 solid;
}

.navigation {
  $bem-block: &;
  display: flex;
  justify-content: space-between;

  &__item {
    display: inline-block;
    position: relative;
    transition: 0.2s ease-in-out;

    &::before {
      content: "";
      width: 6px;
      height: 6px;
      background: $blue;
      border-radius: 50%;
      position: absolute;
      left: 5px;
      top: 18px;
      transition: 0.2s ease-in-out;
      opacity: 0;
    }

    &:hover {
      &::before {
        opacity: 1;
        transform: translateX(2px);
      }
    }

    &:hover #{$bem-block}__link {
      color: $blue;
    }
  }

  &__link {
    display: block;
    padding: 10px 20px;
    text-decoration: none;
    color: #333;
    font-size: 1.25rem;
    font-weight: 500;
  }
}

.submenu {
  $bem-block: &;

  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 50px;
  left: 0;
  width: 750px;
  background: #fff;
  border-radius: 20px;
  border: 1px #f1f1f1 solid;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  transition: 0.5s;
  transform: translateY(50px);
  z-index: 0;

  &__content {
    display: flex;
    padding: 30px 20px 0 20px;
  }

  &__box {
    width: 50%;
    padding-right: 15px;

    &:not(:first-of-type) {
      padding-left: 25px;
      border-left: 2px #f1f1f1 solid;
    }
  }

  &__image {
    width: 100%;
  }

  &__footer {
    background: $blue;
    border-radius: 0 0 20px 20px;
    margin-top: 35px;
    transition: 0.2s ease-in-out;

    &:hover {
      background: darken($blue, 5%);
    }

    &:hover #{$bem-block}__link {
      transform: translateX(3px);
    }
  }

  &__link {
    padding: 20px 30px;
    color: #fff;
    text-decoration: none;
    font-weight: 400;
    display: block;
    position: relative;
    display: flex;
    line-height: 1.5;
    justify-content: space-between;
    transition: 0.2s;
  }
}

.submenu-navigation {
  $bem-block: &;

  list-style-type: none;

  &__item {
    &:not(:first-of-type) {
      margin-top: 5px;
    }
  }

  &__link {
    text-decoration: none;
    display: block;
    padding: 15px 20px 15px 90px;
    position: relative;

    &:hover {
      background: #f2f2f2;
      border-radius: 10px;
    }

    &:hover #{$bem-block}__icon {
      transform: translateY(-50%) translateX(4px);
    }
  }

  &__icon {
    width: 50px;
    height: 50px;
    color: $blue;
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.2s ease-in-out;
  }

  &__title,
  &__subtitle {
    display: block;
  }

  &__title {
    font-weight: 700;
    color: #333;
    font-size: 1.15rem;
  }

  &__subtitle {
    color: #c9c9c9;
    margin-top: 10px;
    font-size: 0.95rem;
    font-weight: 500;
  }
}

.navigation__item:hover {
  .submenu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    z-index: 1;
  }
}

.label {
  background: #a477f8;
  font-weight: 400;
  font-size: 10px;
  margin-top: -5px;
  display: inline-block;
  color: #fff;
  padding: 3px 8px;
  border-radius: 5px;
  text-transform: uppercase;
}

.info {
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 20px;
  color: #c5c5c5;

  font-weight: 300;
  font-size: 12px;

  a {
    color: #c5c5c5;
  }
}

.navigation__link {
  font-weight: 500px;
  font-size: 1rem;
}
.navigation__item navigation__item--has-submenu {
  display: relative;
}
h2 {
  text-decoration: none;
}
.header-wrapper__content__right-group-buttons {
  display: flex;
  align-items: center;
}
.content {
  height: 50px;
}
</style>
