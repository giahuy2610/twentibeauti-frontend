<template lang="">
  <ul class="main-navigation">
    <li><a href="#">Khuyến mãi</a></li>
    <li>
      <a href="#">Thương hiệu</a>
      <ul>
        <li @click="$router.push('/collection/1')"><a>THE FACE SHOP</a></li>
        <li @click="$router.push('/collection/65')"><a>CNP</a></li>
        <li @click="$router.push('/collection/69')"><a>BELIF</a></li>
        <li @click="$router.push('/collection/70')"><a>YEHWADAM</a></li>
      </ul>
    </li>
    <li @click="$router.push('/collection/1')">
      <a>Sản phẩm mới</a>
    </li>
    <li>
      <a>Trang điểm</a>
      <ul>
        <li>
          <a>Trang điểm mắt</a>
          <ul>
            <li @click="$router.push('/collection/71')"><a>Phấn mắt</a></li>
            <li @click="$router.push('/collection/71')"><a>Kẻ viền mắt</a></li>
            <li @click="$router.push('/collection/71')"><a>Kẻ chân mày</a></li>
            <li @click="$router.push('/collection/71')"><a>Mascara</a></li>
          </ul>
        </li>
        <li>
          <a>Trang điểm môi</a>
          <ul>
            <li @click="$router.push('/collection/72')"><a>Son lì</a></li>
            <li @click="$router.push('/collection/72')">
              <a>Son dưỡng môi</a>
            </li>
            <li @click="$router.push('/collection/72')"><a>Son môi</a></li>
            <li @click="$router.push('/collection/72')"><a>Son bóng</a></li>
          </ul>
        </li>
        <li>
          <a>Trang điểm mặt</a>
          <ul>
            <li @click="$router.push('/collection/73')"><a>Kem nền</a></li>
            <li @click="$router.push('/collection/73')"><a>Tạo khối</a></li>
            <li @click="$router.push('/collection/73')"><a>Phấn phủ</a></li>
            <li @click="$router.push('/collection/73')">
              <a>Phấn nước cushion</a>
            </li>
            <li @click="$router.push('/collection/73')"><a>Phấn má hồng</a></li>
            <li @click="$router.push('/collection/73')">
              <a>Che khuyến điểm</a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <a>Dưỡng da</a>
      <ul>
        <li>
          <a>Dưỡng da mặt</a>
          <ul>
            <li @click="$router.push('/collection/74')"><a>Kem dưỡng</a></li>
            <li @click="$router.push('/collection/74')">
              <a>Tinh chất dưỡng da</a>
            </li>
            <li @click="$router.push('/collection/74')"><a>Sữa dưỡng</a></li>
            <li @click="$router.push('/collection/74')"><a>Xịt khoáng</a></li>
            <li @click="$router.push('/collection/74')">
              <a>Nước cân bằng</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Làm sạch</a>
          <ul>
            <li @click="$router.push('/collection/75')"><a>Sữa rửa mặt</a></li>
            <li @click="$router.push('/collection/75')"><a>Tẩy trang</a></li>
            <li @click="$router.push('/collection/75')">
              <a>Tẩy tế bào chết</a>
            </li>
            <li @click="$router.push('/collection/75')">
              <a>Tẩy tế bào chết môi</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Mặt nạ</a>
          <ul>
            <li @click="$router.push('/collection/76')">
              <a>Mặt nạ dưỡng</a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <a>Chăm sóc cơ thể</a>
      <ul>
        <li @click="$router.push('/collection/77')">
          <a>Chăm sóc body</a>
        </li>
        <li @click="$router.push('/collection/77')">
          <a>Chăm sóc tóc</a>
        </li>
        <li @click="$router.push('/collection/77')">
          <a>Chăm sóc tay/chân</a>
        </li>
      </ul>
    </li>
    <li @click="$router.push('/promotions')"><a>Nhận mã ưu đãi</a></li>
  </ul>
</template>
<script></script>
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
