<template lang="">
  <ul class="main-navigation">
    <li><a href="#">Khuyến mãi</a></li>
    <li>
      <a href="#">Thương hiệu</a>
      <ul>
        <li @click="$router.push('/collection/1')"><a>THE FACE SHOP</a></li>
        <li><a href="">CNP</a></li>
        <li><a href="">BELIF</a></li>
        <li><a href="">YEHWADAM</a></li>
        <li><a href="">AHC</a></li>
      </ul>
    </li>
    <li>
      <a href="#">Sản phẩm mới</a>
    </li>
    <li>
      <a href="#">Trang điểm</a>
      <ul>
        <li>
          <a href="#">Trang điểm mắt</a>
          <ul>
            <li><a href="">Phấn mắt</a></li>
            <li><a href="">Kẻ viền mắt</a></li>
            <li><a href="">Kẻ chân mày</a></li>
            <li><a href="">Mascara</a></li>
          </ul>
        </li>
        <li>
          <a href="#">Trang điểm môi</a>
          <ul>
            <li><a href="#">Son lì</a></li>
            <li><a href="#">Son dưỡng môi</a></li>
            <li><a href="#">Son môi</a></li>
            <li><a href="">Son bóng</a></li>
          </ul>
        </li>
        <li>
          <a href="#">Trang điểm mặt</a>
          <ul>
            <li><a href="#">Kem nền</a></li>
            <li><a href="#">Tạo khối</a></li>
            <li><a href="">Phấn phủ</a></li>
            <li><a href="">Phấn nước cushion</a></li>
            <li><a href="">Phấn má hồng</a></li>
            <li><a href="">Che khuyến điểm</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <a href="#">Dưỡng da</a>
      <ul>
        <li>
          <a href="#">Dưỡng da mặt</a>
          <ul>
            <li><a href="">Kem dưỡng</a></li>
            <li><a href="">Tinh chất dưỡng da</a></li>
            <li><a href="">Sữa dưỡng</a></li>
            <li><a href="">Xịt khoáng</a></li>
            <li><a href="">Nước cân bằng</a></li>
          </ul>
        </li>
        <li>
          <a href="#">Làm sạch</a>
          <ul>
            <li><a href="#">Sữa rửa mặt</a></li>
            <li><a href="#">Tẩy trang</a></li>
            <li><a href="#">Tẩy tế bào chết</a></li>
            <li><a href="">Tẩy tế bào chết môi</a></li>
          </ul>
        </li>
        <li>
          <a href="#">Mặt nạ</a>
          <ul>
            <li><a href="">Mặt nạ dưỡng</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <a href="#">Chăm sóc cơ thể</a>
      <ul>
        <li><a href="#">Chăm sóc body</a></li>
        <li>
          <a href="#">Chăm sóc tóc</a>
        </li>
        <li>
          <a href="#">Chăm sóc tay/chân</a>
        </li>
      </ul>
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
  padding: 11px 30px;
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
}
ul ul ul {
  left: 100%;
  top: 0;
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
