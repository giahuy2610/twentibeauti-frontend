
<template lang="">
  <Wrapper>

    <div class="footer-wrapper">
      <div class="footer-wrapper__subscribe">
        <div class="footer-wrapper__subscribe__content">
          <div class="footer-wrapper__subscribe__content__left">
            <h3>NHẬN BẢN TIN LÀM ĐẸP</h3>
            <h5>Đừng bỏ lỡ hàng ngàn sản phẩm và khuyến mãi siêu hấp dẫn</h5>
          </div>
          <div class="footer-wrapper__subscribe__content__right">
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText
                type="text"
                v-model="value3"
                placeholder="Email của bạn iu là"
                style="border-radius: 10000px"
              />
            </span>
          </div>
        </div>
      </div>
  
      <div class="footer">
        <div class="contain">
          <div class="col">
            <h1>THE FACE SHOP</h1>
            <ul>
              <li>Về chúng tôi</li>
              <li>Câu chuyện thương hiệu</li>
              <li>Liên hệ với chúng tôi</li>
            </ul>
          </div>
          <div class="col">
            <h1>CHĂM SÓC KHÁCH HÀNG</h1>
            <ul>
              <li>Đăng kí tài khoản thành viên</li>
              <li>Hướng dẫn mua hàng online</li>
              <li>Chính sách khách hàng thân thiết</li>
              <li>Giao hàng và thanh toán</li>
              <li>Chinha sách đổi hàng</li>
              <li>Điều khoản mua bán hàng hoá</li>
            </ul>
          </div>
          <div class="col">
            <h1>ĐỐI TÁC-LIÊN KẾT</h1>
            <ul>
              <li>Beauty-box</li>
            </ul>
          </div>
          <div class="col social">
            <h1>Social</h1>
            <ul>
              <li><img src="1.png" width="32" style="width: 32px" /></li>
              <li><img src="2.png" width="32" style="width: 32px" /></li>
              <li><img src="3.png" width="32" style="width: 32px" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
</template>
<script>
  import Wrapper from "@/pages/Wrapper.vue"
export default {
components: {
  Wrapper
}
};
</script>
<style lang="scss" scoped>
$desktop: 1280px;
$lg: 1024px;
$md: 768px;
$sm: 568px;

.footer-wrapper {
  &__subscribe {
    height: 100px;
    background-color: #162818;
    color: rgb(241, 238, 238);
    display: flex;
    justify-content: space-around;
    padding: 0 50px;

    @mixin MediaQuery($sm) {
      @media screen and (max-width: $sm) {
        padding: 0;
      }
    }

    &__content {
      width: 100%;
      max-width: 1300px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }

  &__info {
    height: 500px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(219, 205, 205);
    padding: 0 50px;

    &__content {
      width: 100%;
      max-width: 1300px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
}
.footer {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #fff;
}
.footer .col {
  width: 500px;
  height: auto;
  float: left;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding: 0px 20px 20px 20px;
}
.footer .col h1 {
  margin: 0;
  padding: 0;
  font-family: inherit;
  font-size: 12px;
  line-height: 17px;
  padding: 20px 0px 5px 0px;
  color: orange;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.25em;
}
.footer .col ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.footer .col ul li {
  color: #999999;
  font-size: 14px;
  font-family: inherit;
  font-weight: bold;
  padding: 5px 0px 5px 0px;
  cursor: pointer;
  transition: 0.2s;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
}
.social ul li {
  display: inline-block;
  padding-right: 5px;
}

.footer .col ul li:hover {
  color: #ffffff;
  transition: 0.1s;
  -webkit-transition: 0.1s;
  -moz-transition: 0.1s;
}
.clearfix {
  clear: both;
}

.foot {
  border-top: 1px solid #e2e2e2;
}
</style>
