<template lang="">
  <Wrapper>
    <div class="content">
      <div class="left-column">
        <div class="header">
          <ul class="breadcrumb">
            <li><a href="/">Trang chủ</a></li>
            <li>Tài khoản</li>
          </ul>
        </div>
        <div class="sidebar-heading">
          <SavePointCard></SavePointCard>
        </div>

        <div class="sidebar-account">
          <p>
            <li>
              <router-link to="/account/profile"> Tài khoản </router-link>
            </li>
          </p>
          <p>
            <li>
              <router-link to="/account/orders">Đơn hàng</router-link>
            </li>
          </p>
          <p>
            <li>
              <router-link to="/account/address">Địa chỉ giao nhận</router-link>
            </li>
          </p>
          <p>
            <li>
              <router-link to="/account/my-promotions"
                >Ưu đãi của tôi</router-link
              >
            </li>
          </p>
        </div>
      </div>
      <div class="right-column shadow-2">
        <router-view></router-view>
      </div>
    </div>
  </Wrapper>
</template>
<script>
import Wrapper from "../../Wrapper.vue";
import SideBar from "./components/SideBar.vue";
import SavePointCard from "./components/SavePointCard.vue";
export default {
  components: {
    Wrapper,
    SideBar,
    SavePointCard,
  },
  data() {
    return {
      routeLink: [
        {
          title: "Tài khoản",
          path: "account/profile",
        },
        {
          title: "Đơn hàng",
          path: "account/profile",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";

.content {
  width: 100%;
  min-height: 100vh;

  .left-column {
    width: 30%;
    height: 100%;
    float: left;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    //border-right: 1px solid gray;
    @include mobile {
      width: 100%;
      display: flex;
      flex-direction: column;
      //border-right: none;
    }
    @include mini-tablet {
      width: 100%;
      display: flex;
      flex-direction: column;
      //border-right: none;
    }
    @include tablet {
      width: 100%;
      display: flex;
      flex-direction: column;
      //border-right: none;
    }

    ul.breadcrumb {
      padding: 10px 16px;
      list-style: none;
    }

    /* Display list items side by side */
    ul.breadcrumb li {
      display: inline;
    }
    /* Add a slash symbol (/) before/behind each list item */
    ul.breadcrumb li + li:before {
      padding: 8px;
      color: #797979;
      content: ">\00a0";
    }

    /* Add a color to all links inside the list */
    ul.breadcrumb li a {
      color: #797979;
      text-decoration: none;
    }

    /* Add a color on mouse-over */
    ul.breadcrumb li a:hover {
      color: #797979;
      font-weight: 600;
      text-decoration: underline;
    }

    
    .sidebar-account {
      font-size: 16px;

      &::-webkit-scrollbar {
        display: none;
      }


      @include mobile {
        text-align: center;
        max-width: 100%;
        display: flex;
        flex-direction: row;
        white-space: nowrap;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none;
        // border-bottom: 1px solid rgba(198, 197, 197, 0.5);
        //border-right: 1px solid rgba(198, 197, 197, 0.5);
        margin-bottom: 10px;
        overflow: scroll;
      }
      @include mini-tablet {
        text-align: center;
        font-size: 18px;
        max-width: 100%;
        display: flex;
        flex-direction: row;
        white-space: nowrap;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none;
        border-bottom: 1px solid rgba(198, 197, 197, 0.5);
        //border-right: 1px solid rgba(198, 197, 197, 0.5);
        margin-bottom: 10px;
        overflow: scroll;
      }
      @include tablet {
        text-align: center;
        font-size: 18px;
        max-width: 100%;
        display: flex;
        flex-direction: row;
        white-space: nowrap;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none;
        border-bottom: 1px solid rgba(198, 197, 197, 0.5);
        //border-right: 1px solid rgba(198, 197, 197, 0.5);
        margin-bottom: 10px;
        overflow: scroll;
      }
    }

    .sidebar-account li a {
      padding: 14px;
      text-decoration: none;
      color: #333;
      h4 {
        margin-bottom: 20px;
      }
    }
    .sidebar-account a:hover {
      text-decoration: underline;
      color: #aed56b;
    }
    .sidebar-account a:focus {
      color: var(--primary-color) !important;
      
      font-weight: 600;
      text-decoration: none;
      @include mobile {
        border-bottom: 2px solid var(--primary-color);
      }
      @include mini-tablet {
        border-bottom: 2px solid var(--primary-color);
      }
      @include tablet {
        border-bottom: 2px solid var(--primary-color);
      }
    }
  }
}
</style>
>
