<template lang="">
    <Wrapper>
      <div class="content">
        <div class="right-column">
            <div class="header">
                Đơn hàng
            </div>
            <div class="menu">
                <div class="menu_left">
                  <ul id="nav">
                    <li><a href="">Tất cả</a></li>
                    <li><a href="">Chờ xác nhận</a></li>
                    <li><a href="">Đang chuẩn bị hàng</a></li>
                    <li><a href="">Đang giao</a></li>
                  </ul>
                </div>
                <div class="menu_right">
                  <ul id="nav_right">
                    <li>
                      <a href="">
                        <i class="ti-more-alt"></i>
                      </a>
                    </li>
                  </ul>
                </div>
            </div>
        </div>
        <div class="left-column">

        </div>
      </div>
    </Wrapper>
  </template>
  <script>

  import Wrapper from "../../Wrapper.vue";
  export default {
    components: {
      Wrapper,
    },
  };
  </script>
  <style lang="scss" scoped>
  @import "@/scss/mixin";
  .right-column {
    display:flex;
    float:right;
    width:60%;
    min-height: 200px;
    flex-direction: column;
    .header {
        display: block;
        font-size: 24px;
        margin-bottom:15px;
        font-weight: 700;
        box-sizing: border-box;
    }
  }
  .left-column {
    display: flex;
    float:left;
    width:40%;
  }
  </style>
  