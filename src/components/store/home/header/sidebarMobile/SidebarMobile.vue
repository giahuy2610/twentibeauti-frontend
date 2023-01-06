<template lang="">
  <div class="layout has-sidebar fixed-sidebar fixed-header">
    <aside id="sidebar" class="sidebar break-point-lg has-bg-image">
      <div class="sidebar-layout">
        <div class="sidebar-header">
          <span
            style="
              width: 100%;
              text-transform: uppercase;
              font-size: 1.3rem;
              letter-spacing: 3px;
              font-weight: bold;
              text-align: center;
            "
            >TWENTI</span
          >
        </div>
        <div class="sidebar-content">
          <nav class="menu open-current-submenu">
            <ul>
              <li
                class="menu-item sub-menu"
                :class="{
                  open: selectedSubMenuIndex === index,
                  selected: $route.path === item.path,
                }"
                v-for="(item, index) in sideItems"
                @click="
                  selectedSubMenuIndex === index
                    ? (selectedSubMenuIndex = null)
                    : (selectedSubMenuIndex = index)
                "
              >
                <router-link
                  :to="item.path"
                  :class="{ 'none-children': item.children == null }"
                >
                  <span class="menu-icon">
                    <i class="pi" :class="item.icon"> </i>
                  </span>
                  <span class="menu-title">{{ item.name }}</span>
                </router-link>
                <div
                  class="sub-menu-list"
                  :class="{
                    block:
                      selectedSubMenuIndex === index ||
                      (item.children != null
                        ? item.children.filter(
                            (child) => child.path === $route.path
                          ).length > 0
                        : false),
                  }"
                >
                  <ul>
                    <li
                      class="menu-item"
                      :class="{ selected: $route.path === nestedItem.path }"
                      v-for="(nestedItem, nestedIndex) in item.children"
                    >
                      <router-link :to="nestedItem.path" class="none-children">
                        <span class="menu-title">{{ nestedItem.name }}</span>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div class="container-slide">
          <div
            class="sidebar-footer flex align-items-center cursor-pointer"
            @click="$router.push({ path: '/account' })"
          >
            <i class="pi pi-sign-in mr-2"></i><span>Đăng nhập</span>
          </div>
          <div class="contain_final_sidebar">
            <i class="pi pi-search mr-2"></i>
            <span class="context__final_sidebar">Tra cứu đơn hàng</span>
          </div>
          <div class="contain_final_sidebar">
            <i class="pi pi-table mr-2"></i>
            <span class="context__final_sidebar">Hệ thống cửa hàng</span>
          </div>

          <div class="contain_final_sidebar">
            <i class="pi pi-comment mr-2"></i>
            <span class="context__final_sidebar">Tư vấn sắc đẹp</span>
          </div>
          <div class="contain_final_sidebar">
            <i class="pi pi-credit-card mr-2"></i>
            <span class="context__final_sidebar">Trung tâm hỗ trợ</span>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedSubMenuIndex: null,
      sideItems: [
        {
          name: "Khuyến mãi",
          icon: "pi pi-tags",
          children: [
            {
              name: "Siêu Sale tháng 10",
              path: "",
            },
            {
              name: "Siêu sale tháng 10",
              path: "",
            },
          ],
          path: "",
        },
        {
          name: "Thương hiệu",
          icon: "pi pi-list",
          children: [
            {
              name: "The face shop",
              path: "",
            },
            {
              name: "Cmp",
              path: "",
            },
          ],
          path: "",
        },
        {
          name: "Sản phẩm mới",
          icon: "pi pi-slack",
          children: null,
          path: "",
        },

        {
          name: "Trang điểm",
          icon: "pi pi-slack",
          children: [
            { name: "Trang điểm mắt", path: "" },
            { name: "Trang điểm môi", path: "" },
          ],
          path: "",
        },
        {
          name: "Dưỡng da",
          icon: "pi pi-slack",
          children: [
            {
              name: "Dưỡng da mắt",
              path: "",
            },
            {
              name: "Dưỡng da môi",
              path: "",
            },
            {
              name: "Dưỡng da body",
              path: "",
            },
          ],
          path: "",
        },
        {
          name: "Chăm sóc cơ thể",
          icon: "pi pi-slack",
          children: [
            { name: "Chăm sóc tóc", path: "" },
            { name: "Chăm sóc cơ thể", path: "" },
          ],
          path: "",
        },
        {
          name: "Nhận mã ưu đãi",
          icon: "pi pi-ticket",
          children: null,
          path: "",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
$text-color: black;

$bg-color: #0c1e35;
$secondary-text-color: #dee2ec;

$secondary-bg-color: white;

$border-color: rgba(#535d7d, 0.3);
$sidebar-header-height: 64px;
$sidebar-footer-height: 64px;
.selected {
  background-color: rgba(#535d7d, 0.3);
}
.layout {
  z-index: 1;
  .header {
    box-shadow: 1px 1px 4px #9aa0b9;
    display: flex;
    align-items: center;
    padding: 20px;
  }
  .content {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  .footer {
    text-align: center;
    margin-top: auto;
    margin-bottom: 20px;
    padding: 20px;
  }
  &.rtl {
    .header {
      box-shadow: -1px 1px 4px #9aa0b9;
    }
  }
}
.sidebar {
  color: $text-color;
  overflow-x: hidden !important;
  position: relative;
  height: 100vh;
  .image-wrapper {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.2;
    z-index: 1;
    display: none;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  &.has-bg-image .image-wrapper {
    display: block;
  }
  .sidebar-layout {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;

    .sidebar-header {
      height: $sidebar-header-height;
      min-height: $sidebar-header-height;
      display: flex;
      align-items: center;
      padding: 0 20px;
      border-bottom: 1px solid $border-color;
      > span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      &:hover {
        color: #9aa0b9;
        cursor: pointer;
      }
    }
    .sidebar-content {
      flex-grow: 1;
      padding: 10px 0;
      &:hover {
        color: #9aa0b9;
        cursor: pointer;
      }
    }
    .sidebar-footer {
      height: $sidebar-footer-height;
      min-height: $sidebar-footer-height;
      display: flex;
      align-items: center;
      border-top: 1px solid $border-color;
      padding: 0 20px;
      > span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      &:hover {
        font-weight: 100px;
        cursor: pointer;
      }
    }
  }
}
@keyframes swing {
  0%,
  30%,
  50%,
  70%,
  100% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(10deg);
  }
  40% {
    transform: rotate(-10deg);
  }
  60% {
    transform: rotate(5deg);
  }
  80% {
    transform: rotate(-5deg);
  }
}
.layout {
  .sidebar {
    .menu {
      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }
      .menu-item {
        a {
          display: flex;
          align-items: center;
          height: 50px;
          padding: 0 20px;
          color: $text-color;
          .menu-icon {
            font-size: 1.2rem;
            width: 35px;
            min-width: 35px;
            height: 35px;
            line-height: 35px;
            text-align: center;
            display: inline-block;
            margin-right: 10px;
            border-radius: 2px;
            transition: color 0.3s;
            i {
              display: inline-block;
            }
          }
          .menu-title {
            font-size: 0.9rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            flex-grow: 1;
            transition: color 0.3s;
          }
          &:hover {
            font-weight: bold;
          }
          .menu-prefix,
          .menu-suffix {
            display: inline-block;
            padding: 5px;
            opacity: 1;
            transition: opacity 0.3s;
          }
          &:hover {
            .menu-title {
            }
            .menu-icon {
              i {
                animation: swing ease-in-out 0.5s 1 alternate;
              }
            }
            &::after {
            }
          }
        }
        &.sub-menu {
          position: relative;
          a:has(.none-children) {
            &::after {
            }
          }
          a:not(.none-children) {
            &::after {
              content: "";
              transition: transform 0.3s;
              border-right: 2px solid currentcolor;
              border-bottom: 2px solid currentcolor;
              width: 5px;
              height: 5px;
              transform: rotate(-45deg);
            }
          }
          > .sub-menu-list {
            padding-left: 20px;
            display: none;
            overflow: hidden;
            z-index: 999;
          }
          &.open {
            > a {
              &::after {
                transform: rotate(45deg);
              }
            }
          }
        }
        &.active {
          > a {
            .menu-title {
            }
            &::after {
            }
            .menu-icon {
            }
          }
        }
      }
      > ul > .sub-menu > .sub-menu-list {
      }
      &.icon-shape-circle,
      &.icon-shape-rounded,
      &.icon-shape-square {
        .menu-item a .menu-icon {
        }
      }
      &.icon-shape-circle .menu-item a .menu-icon {
        border-radius: 50%;
      }
      &.icon-shape-rounded .menu-item a .menu-icon {
        border-radius: 4px;
      }
      &.icon-shape-square .menu-item a .menu-icon {
        border-radius: 0;
      }
    }
    &:not(.collapsed) {
      .menu > ul {
        > .menu-item {
          &.sub-menu {
            > .sub-menu-list {
              visibility: visible !important;
              position: static !important;
              transform: translate(0, 0) !important;
            }
          }
        }
      }
    }
    &.collapsed {
      .menu > ul {
        > .menu-item {
          > a {
            .menu-prefix,
            .menu-suffix {
              opacity: 0;
            }
          }
          &.sub-menu {
            > a {
              &::after {
                content: "";
                width: 5px;
                height: 5px;
                background-color: currentcolor;
                border-radius: 50%;
                display: inline-block;
                position: absolute;
                right: 10px;
                top: 50%;
                border: none;
                transform: translateY(-50%);
              }
              &:hover {
                &::after {
                  background-color: $secondary-text-color;
                }
              }
            }
            > .sub-menu-list {
              transition: none !important;
              width: 200px;
              margin-left: 3px !important;
              border-radius: 4px;
              display: block !important;
            }
          }
          &.active {
            > a {
              &::after {
                background-color: $secondary-text-color;
              }
            }
          }
        }
      }
    }
    &.has-bg-image {
      .menu {
        &.icon-shape-circle,
        &.icon-shape-rounded,
        &.icon-shape-square {
          .menu-item a .menu-icon {
            background-color: rgba($secondary-bg-color, 0.6);
          }
        }
      }
      &:not(.collapsed) {
        .menu {
          > ul > .sub-menu > .sub-menu-list {
            background-color: rgba($secondary-bg-color, 0.6);
          }
        }
      }
    }
  }
  &.rtl {
    .sidebar {
      .menu {
        .menu-item {
          a {
            .menu-icon {
              margin-left: 10px;
              margin-right: 0;
            }
          }
          &.sub-menu {
            > a {
              &::after {
                transform: rotate(135deg);
              }
            }
            > .sub-menu-list {
              padding-left: 0;
              padding-right: 20px;
            }
            &.open {
              > a {
                &::after {
                  transform: rotate(45deg);
                }
              }
            }
          }
        }
      }
      &.collapsed {
        .menu > ul {
          > .menu-item {
            &.sub-menu {
              a::after {
                right: auto;
                left: 10px;
              }
              > .sub-menu-list {
                margin-left: -3px !important;
              }
            }
          }
        }
      }
    }
  }
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  height: 100vh;
  font-family: "Roboto", sans-serif;
  color: #212529;
}
a {
  text-decoration: none;
}
@media (max-width: 992px) {
  #btn-collapse {
    display: none;
  }
}
.contain_final_sidebar {
  display: flex;
  padding: 10px 20px;
}
.context__final_sidebar {
  font-family: system-ui;

  font-size: 0.9rem;
}

.context__final_sidebar:hover {
  font-weight: bold;
  cursor: pointer;
}
</style>
