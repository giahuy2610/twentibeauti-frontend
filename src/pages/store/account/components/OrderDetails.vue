<template lang="">

  <FormOrderAgain v-if="modal1">
    <template v-slot:button>
      <div class="btn-save">
        <button @click="modal1 = false">Mua lại</button>
      </div>
    </template>
    <template v-slot:header>
      <div class="m-header">
        <div class="modal-title">
          <div class="m-head">Thêm vào giỏ hàng</div>
        </div>
        <div class="btn-close">
          <i class="pi pi-times" @click="modal1 = false"></i>
        </div>
      </div>
    </template>
  </FormOrderAgain>
  <div class="header-bread">
    <ul class="breadcrumb">
      <li><a href="/">Trang chủ</a></li>
      <li><a href="/account/orders">Tài khoản</a></li>
      <li>Đơn hàng</li>

    </ul>
  </div>
  <div class="order-detail">
    <div class="header">
      <div class="header-id">
        <h1 class="order-id">Đơn hàng SS001</h1>
        <h5 class="time-delivery">
          Giao hàng dự kiến: 03/10/2022 - 06/10/2022
        </h5>
      </div>
      <div class="btn-buy-again">
        <button type="button" @click="modal1 = true">Mua lại</button>
      </div>
    </div>
    <div class="box-info">
      <div class="box-info-order">
        <div class="title">Thông tin nhận hàng</div>
        <div class="name">Ái Dịu</div>
        <div class="phone">0868247806</div>
        <div class="address">Phường Hiệp Thành, Quận 12, Hồ Chí Minh</div>
      </div>
      <div class="box-info-payment">
        <div class="title">Phương thức thanh toán</div>
        <div class="payment">Trả tiền mặt khi nhận hàng (COD)</div>
        <div class="script">
          Quý khách vui lòng thanh toán 850.000đ khi nhận hàng
        </div>
      </div>
      <div class="box-info-delivery">
        <div class="title">Thông tin vận chuyển</div>
        <div class="id-delivery">SS001</div>
      </div>
    </div>
    <div class="step">
      <Step></Step>
    </div>
    <!-- <div class="step">
        <Toast />
        
        <div class="card">
            <Steps :model="items" :readonly="true" />
        </div>

        <router-view v-slot="{Component}" :formData="formObject" @prevPage="prevPage($event)" @nextPage="nextPage($event)" @complete="complete">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </div> -->
    <div class="order">
      <div class="title">Đơn hàng</div>
      <div class="product">
        <div class="img">
          <img
            src="https://image.hsv-tech.io/65x65/tfs/products/5a9dd1c9-efec-41f6-b956-13d49e792d3e.webp"
            alt="Ảnh sản phẩm"
          />
        </div>
        <div class="nameproduct">
          <div class="name">
            <router-link
              role="presentation"
              to="/product"
            >
              Kem chống nắng hiệu chỉnh da BELIF UV PROTECTOR MULTI SUNSCREEN
              SPF50++ PA++++ 50ml
            </router-link>
          </div>
          <div class="number-sku">
            <div class="sku">SKU: 52101289</div>
            <div class="number">x1</div>
          </div>
        </div>
        <div class="price">850.000đ</div>
      </div>
      <div class="payment">
        <div class="list">
          <div class="label">Tạm tính</div>
          <div class="money">850.000đ</div>
        </div>
        <div class="list">
          <div class="label">Giảm giá</div>
          <div class="money">0 đ</div>
        </div>
        <div class="list">
          <div class="label">Phí giao hàng</div>
          <div class="money">0 đ</div>
        </div>
        <div class="list">
          <div class="label">Tổng</div>
          <div class="money">850.000đ</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FormOrderAgain from "./FormOrderAgain.vue";
import Step from "./Step.vue";
export default {
  components: {
    FormOrderAgain,
    Step,
  },
  data() {
    return {
      modal1: false,
      position: "center",
      items: [
        {
          label: "Đã đặt đơn hàng",
          to: "/",
        },
        {
          label: "Xác nhận đơn hàng",
          to: "/confirm",
        },
        {
          label: "Đang chuẩn bị đơn hàng",
          to: "/prepare",
        },
        {
          label: "Đang vận chuyển",
          to: "/delivery",
        },
        {
          label: "Giao hàng không thành công",
          to: "/status",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/mixin";
.header-bread{
  ul.breadcrumb {
    padding: 20px 40px;
    list-style: none;
    //margin-left:50px;
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
}
.m-header {
  //text-align: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
  //background-color: aqua;
  .m-head {
    //background-color: #94c83d;
    font-weight: 600;
    line-height: 36px;
    width: 100%;
    font-size: 24px;
    text-align: center;
    //justify-content: center;
    margin-left: 110px;
    padding-bottom: 10px;
  }
  .btn-close {
    cursor: pointer;
    //margin-top:-35px;
    margin-left: 200px;
  }
}
.order-detail {
  margin:0px 80px;
  .header {
    display: flex;
    flex-direction: row;
    @include mobile {
      display: flex;
      flex-direction: column;
      margin: 0px;
    }

    .header-id {
      width: 80%;
    }
    .btn-buy-again {
      margin-top: 50px;
      @include mobile {
          
        margin-top: 0px;
        margin-bottom:10px;
      }
      button {
        background-color: #fff;
        border-radius: 35px;
        font-weight: 400;
        height: 40px;
        white-space: nowrap;
        text-align: center;
        padding: 8px 15px;
        cursor: pointer;
      }
    }
  }
  .box-info {
    display: flex;
    flex-direction: row;
    gap: 15px;
    @include mobile {
      display: flex;
      flex-direction: column;
      width: 100%;
      //margin: 0px;
    }
    .box-info-order,
    .box-info-payment,
    .box-info-delivery {
      display: flex;
      flex-direction: column;
      gap: 10px;
      border: 1px solid rgb(223, 223, 223);
      border-radius: 15px;
      padding: 20px;
      min-height: 140px;
      width: 35%;
      @include mobile {
        width: 100%;
      }
      .title {
        font-weight: 600;
      }
      .text {
        word-wrap: break-word;
        word-break: break-all;
      }
      .id-delivery {
        text-decoration: underline;
      }
    }
  }
  
  .order {
    margin: 120px 0px;
    border: 1px solid #d3d7d3;
    border-radius: 15px;
    padding: 20px;
    @include mobile {
      margin-top:20px;
    }
    .title {
      margin-bottom: 20px;
      font-weight: 700;
      font-size: 16px;
    }
    .product {
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid #d3d7d3;
      @include mobile {
        width: 100%;
        display: flex;
        flex-direction: column;
      }
      .nameproduct {
        flex: 1 1 auto;
        margin-left: 15px;
        .name {
          text-decoration: underline;
          cursor: pointer;
          a {
            color: #333;
          }
        }
        .number-sku {
          margin-top: 15px;
          display: flex;
          flex-direction: row;
          gap: 30px;
          .number {
            font-size: 14px;
          }
        }
        
      }
      .price {
        //font-weight: 600;
        @include mobile {
          //font-weight: 600;
          margin-top: 10px;
          margin-left:15px;
        }
      }
    }
    .payment {
      display: flex;
      flex-direction: column;
      margin-top: 15px;
      gap: 15px;
      //justify-content: space-between;
      .list {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .list2 {
          .label {
            width: 100%;
          }
        }

        .label {
          width: 95%;
        }
        .money {
          text-align: right;
          //justify-content: flex-end;
          float: right;
        }
      }
    }
  }
}
.btn-save {
  button {
    border: none;
    background-color: #94c83d;
    text-align: center;
    display: inline-block;
    font-size: 18px;
    border-radius: 20px;
    margin-top: 20px;
    margin-left: 40%;
    width: 90px;
    height: 40px;
    font-weight: 700;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0-1px 0 rbg(0 0 0/12%);
    box-shadow: 0-2px rbg(0 0 0 /5%);
    cursor: pointer;
  }
}
</style>
