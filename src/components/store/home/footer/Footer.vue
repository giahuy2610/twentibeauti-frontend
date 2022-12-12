<template lang="">
  <div class="footer-wrapper">
    <div class="footer-wrapper__subscribe">
      <div class="footer-wrapper__subscribe__content">
        <div class="footer-wrapper__subscribe__content__left">
          <h3>NHẬN BẢN TIN LÀM ĐẸP</h3>
          <h5>Đừng bỏ lỡ hàng ngàn sản phẩm và khuyến mãi siêu hấp dẫn</h5>
        </div>
        <div class="footer-wrapper__subscribe__content__right">
          <span class="p-input-icon-right mb-3">
            <InputText
              type="text"
              v-model="email"
              placeholder="Email của bạn iu là"
              style="border-radius: 10000px; width: 100%"
            />
            <i class="pi pi-send cursor-pointer" @click="registerPromotion" />
            <Toast position="bottom-right" group="br" />
          </span>
        </div>
      </div>
    </div>

    <Wrapper class="footer">
      <div class="contain" style="display: flex">
        <div class="col social">
          <h2 class="nameBrand" style="font-size: 36px">TWENTI BEAUTI</h2>
          <h1>SOCIAL DEMIA</h1>
          <ul>
            <li>
              <i
                class="pi pi-facebook"
                style="font-size: 2rem; margin-right: 10px"
              ></i>
            </li>
            <li>
              <i
                class="pi pi-twitter"
                style="font-size: 2rem; margin-right: 10px"
              ></i>
            </li>
            <li>
              <i
                class="pi pi-instagram"
                style="font-size: 2rem; margin-right: 10px"
              ></i>
            </li>
          </ul>
        </div>
        <div class="col">
          <h1>TWENTI BEAUTI</h1>
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
            <li>Chính sách đổi hàng</li>
            <li>Điều khoản mua bán hàng hoá</li>
          </ul>
        </div>
        <div class="col">
          <h1>ĐỐI TÁC-LIÊN KẾT</h1>
          <ul>
            <li>Beauty-box</li>
          </ul>
        </div>
      </div>
    </Wrapper>
  </div>
</template>
<script>
import Wrapper from "@/pages/Wrapper.vue";
export default {
  components: {
    Wrapper,
  },
  methods: {
    async registerPromotion() {
      await this.axios
        .post("/promotion/create", { Email: this.email })
        .then((response) => {
          this.$toast.add({
            severity: "success",
            summary: "Thành công",
            detail: "Chào mừng đến với nhà TWENTI",
            life: 3000,
          });
          this.email = "";
        })
        .catch((e) => console.error(e));
    },
  },
  data() {
    return {
      email: "",
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";

.footer-wrapper {
  width: 100%;

  &__subscribe {
    height: 100px;
    background-color: #162818;
    color: rgb(241, 238, 238);
    display: flex;
    justify-content: space-around;
    padding: 0 50px;

    @include mobile {
      height: fit-content;
    }

    &__content {
      width: 100%;
      max-width: 1300px;
      display: flex;
      justify-content: space-around;
      align-items: center;

      @include mobile {
        flex-direction: column;
      }

      &__left {
        text-align: center;
      }

      &__right {
        .p-input-icon-left {
          @include mobile {
            width: 100%;
          }
        }

        @include mobile {
          width: 100%;
        }
      }
    }
  }

  &__info {
    height: 500px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(219, 205, 205);
    padding: 0 50px;

    &__contain {
      width: 100%;
      max-width: 1400px;
      display: flex;
      justify-content: space-between;
    }

    @include mobile {
      flex-direction: column;
    }
  }
}
.footer {
  width: 100%;
  position: relative;
  // height: auto;
  background-color: #fff;
}
.footer .col {
  height: auto;
  float: left;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.footer .col h1 {
  margin: 0;
  padding: 0;
  font-family: inherit;
  font-size: 14px;
  line-height: 17px;
  padding: 20px 0px 5px 0px;
  color: black;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.25em;
}
.footer .col ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.footer .col ul li {
  color: #464242;
  font-size: 14px;
  font-family: inherit;

  padding: 5px 0px 5px 0px;
  cursor: pointer;
  transition: 0.2s;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
}
.social ul li {
  display: inline-block;
}

.footer .col ul li:hover {
  color: black;
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
@media screen and (max-width: 784px) {
  .contain {
    flex-direction: column;
  }
}
</style>
