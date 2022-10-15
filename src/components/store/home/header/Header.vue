<template lang="">
  <Sidebar
    v-model:visible="visibleCart"
    :baseZIndex="10000"
    position="right"
    class="p-sidebar-md"
  >
    <Cart></Cart>
  </Sidebar>
  <div
    class="shadow-2"
    style="
      top: 0;
      width: 100vw;
      position: fixed;
      z-index: 33;
      background-color: #ffff;
    "
  >
    <Wrapper
      style="
        height: 80px;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
      "
    >
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
            style="font-size: 20px"
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
    </Wrapper>

    <!--navigation here-->
    <Wrapper
      style="
        height: 50px;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        border-top: 1px solid #d3d7d3;
      "
    >
      <div class="content flex">
        <div
          class="item-submenu flex"
          v-for="(item, index) in dataList"
          @mouseover="hoveredItem = index"
          @mouseout="hoveredItem = -1"
        >
          <p>{{ item.name }}</p>
          <i v-if="item.isHover" class="pi pi-angle pi-angle-down"></i>
        </div>
        {{ hoveredItem }}
      </div>
    </Wrapper>
  </div>
  <!-- <div
    class="sub-menu-wrapper"
    style="position: absolute; z-index: 9999; background-color: #ffff"
    v-show="hoveredItem > -1"
  >
    <div class="sub-menu-content">
      <div
        class="sub-menu-item"
        v-for="(item, index) in dataList[hoveredItem]"
      >
        <h3>{{ item.heading }}</h3>
        <p v-for="(item2, index) in item2.children">
          {{ item2.name }}
        </p>
      </div>
    </div>
  </div> -->
</template>

<script>
import Cart from "@/components/store/home/cart/Cart.vue";
import Wrapper from "@/pages/Wrapper.vue";
import { useCartStorePinia } from "@/stores/store/cart.js";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {
      count: 9,
      visibleCart: false,
      hoveredItem: -1,
      dataList: [
        {
          name: "Khuyến mãi",
          path: null,
          isHover: true,
          subnavData: [
            {
              heading: "Trang",
              path: "/",
              children: [
                { name: "co", path: "/" },
                { name: "co", path: "/" },
                { name: "co", path: "/" },
              ],
            },
            {
              heading: "Trang",
              path: "/",
              children: [
                { name: "co", path: "/" },
                { name: "co", path: "/" },
                { name: "co", path: "/" },
              ],
            },
          ],
        },
        {
          name: "Thương hiệu",
          path: "/brands",
          isHover: true,
          subnavData: [
            {
              heading: "Trang",
              path: "/",
              children: [
                { name: "co", path: "/" },
                { name: "co", path: "/" },
                { name: "co", path: "/" },
              ],
            },
            {
              heading: "Trang",
              path: "/",
              children: [
                { name: "co", path: "/" },
                { name: "co", path: "/" },
                { name: "co", path: "/" },
              ],
            },
          ],
        },
        {
          name: "Sản phẩm",
          path: "/collections",
          isHover: false,
          subnavData: [
            {
              heading: "Trang",
              path: "/",
              children: [
                { name: "co", path: "/" },
                { name: "co", path: "/" },
                { name: "co", path: "/" },
              ],
            },
            {
              heading: "Trang",
              path: "/",
              children: [
                { name: "co", path: "/" },
                { name: "co", path: "/" },
                { name: "co", path: "/" },
              ],
            },
          ],
        },
      ],
    };
  },
  components: {
    Cart,
    Wrapper,
  },
  computed: {
    ...mapState(useCartStorePinia, {
      getCartItemsNumber: "getCartItemsNumber",
    }),
  },
};
</script>

<style lang="scss" scoped>
i {
  cursor: pointer;
}

.main-content {
  display: flex;
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

body {
  width: 100vw;
  height: 100vw;
}

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
</style>
