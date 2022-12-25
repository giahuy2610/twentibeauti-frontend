<template lang="">
  <ul class="main-navigation">
    <li><a href="#">Khuyến mãi</a></li>
    <li>
      <a href="#">Thương hiệu</a>
      <ul>
        <li @click="$router.push('/collection/1')"><a>THE FACE SHOP</a></li>
        <li @click="$r69outer.push('/collection/65')" ><a href="">CNP</a></li>
        <li @click="$router.push('/collection/69')"><a href="">BELIF</a></li>
        <li @click="$router.push('/collection/70')"><a href="">YEHWADAM</a></li>
      </ul>
    </li>
    <li>
      <a>Sản phẩm mới</a>
    </li>
    <li>
      <a  @click="$router.push('/collection/78')">Trang điểm</a>
      <ul>
        <li  @click="$router.push('/collection/71')">
          <a>Trang điểm mắt</a>
        </li>
        <li  @click="$router.push('/collection/72')">
          <a>Trang điểm môi</a>
        </li>
        <li  @click="$router.push('/collection/73')">
          <a>Trang điểm mặt</a>
        </li>
      </ul>
    </li>
    <li  @click="$router.push('/collection/79')">
      <a>Dưỡng da</a>
      <ul>
        <li  @click="$router.push('/collection/74')">
          <a>Dưỡng da mặt</a>
        </li>
        <li  @click="$router.push('/collection/75')">
          <a>Làm sạch</a>
        </li>
        <li  @click="$router.push('/collection/76')">
          <a>Mặt nạ</a>
        </li>
      </ul>
    </li>
    <li  @click="$router.push('/collection/80')">
      <a>Chăm sóc cơ thể</a>
    </li>
    <li @click="$router.push('/promotions')"><a>Nhận mã ưu đãi</a></li>
  </ul>
</template>
<script>

</script>
<style lang="scss" scoped>
@import "@/scss/mixin";
// @media screen and (max-width: 1067px) {
//   :deep(.p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link) {
//     padding: 0;
//   }
// }
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul li {
  display: block;
  position: relative;
  float: left;
}
li ul {
  display: none;
}
ul li a {
  display: block;
  padding: 11px 38px;
  text-decoration: none;
  white-space: nowrap;
  color: #333;
  font-size: 18px;
  cursor: pointer;
  
  @include mini-tablet {
    padding: 11px 10px;
    font-size: 16px;
  }
  @include tablet {
    padding: 11px 10px;
    font-size: 18px;
  }


}

ul li a:hover {
}
li:hover > ul {
  display: block;
  position: absolute;
}
li:hover li {
  float: none;
}
li:hover a {
  background: #fff;

}
li:hover li a:hover {
  background: #edeeef;
}
.main-navigation li ul li {
  border-top: 0;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.1);
}
ul ul ul {
  left: 100%;
  top: 0;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.1);
}
ul:before,
ul:after {
  content: " "; /* 1 */
  display: table; /* 2 */
}
ul:after {
  clear: both;
}
</style>
