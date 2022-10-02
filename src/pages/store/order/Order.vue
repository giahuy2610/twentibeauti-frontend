<template lang="">
  <Wrapper>
    <div class="content">
      <ul class="breadcrumb">
        <li><a href="/">Trang chủ</a></li>
        <li>Tài khoản</li>
      </ul>
      <div class="right-column">
        <div class="header">Đơn hàng</div>
        <div class="scrollmenu">
          <a href="#home">Tất cả</a>
          <a href="#blog">Chờ xác nhận</a>
          <a href="#tools">Đang chuẩn bị đơn</a>
          <a href="#news">Đang giao</a>
          <a href="#contact">Đã giao</a>
          <a href="#about">Đã hủy</a>
          <a href="#support">Đơn không thành công</a>
        </div>
        <div class="search">
          <div class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText type="text" v-model="value3" placeholder="Tìm kiếm" />
          </div>
        </div>
      </div>
      <div class="left-column">
        <div class="sidebar-account">
          <p>
            <li><a href="#">Tài khoản</a></li>
          </p>
          <p>
            <li><a href="#">Đơn hàng</a></li>
          </p>
          <p>
            <li><a href="#">Địa chỉ giao nhận</a></li>
          </p>
          <p>
            <li><a href="#">Ưu đãi của tôi</a></li>
          </p>
        </div>
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
ul.breadcrumb {
  padding: 10px 16px;
  list-style: none;
  // background-color: #eee;
}

/* Display list items side by side */
ul.breadcrumb li {
  display: inline;
  font-size: 14px;
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
.right-column {
  display: flex;
  float: right;
  width: 60%;
  min-height: 200px;
  flex-direction: column;
  gap: 10px;
  .header {
    display: block;
    font-size: 24px;
    margin-bottom: 15px;
    font-weight: 700;
    box-sizing: border-box;
  }

  .search {
    display: block;
    background-color: #aed56b;
    width: 100%;
    display: flex;
    .p-input-icon-left {
      width: 100%;
    }
  }
  .scrollmenu {
    background-color: #fff;
    overflow: auto;
    white-space: nowrap;
  }
  .scrollmenu a {
    display: inline-block;
    color: #333;
    text-align: center;
    padding: 14px;
    text-decoration: none;
  }
  .scrollmenu a:hover {
    background: rgb(228, 241, 205);
    color: #aed56b;
    font-weight: 600;
  }
}

  .left-column {
    display: flex;
    float: left;
    width: 40%;
    list-style-type: none;
    flex-direction: column;
    .sidebar-account a {
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
  
}
</style>
