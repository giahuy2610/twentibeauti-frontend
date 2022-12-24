<template lang="">
  <Wrapper>
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
        <li><router-link to="/">Trang chủ</router-link></li>
        <li><router-link to="/account/orders">Tài khoản</router-link></li>
        <li>Đơn hàng</li>
      </ul>
    </div>
    <div class="order-detail">
      <div class="header">
        <div class="header-id">
          <h1 class="order-id">Đơn hàng SS00{{ invoiceData.IDInvoice }}</h1>
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
          <div class="name">
            {{ invoiceData.Address.FirstName }}
            {{ invoiceData.Address.LastName }}
          </div>
          <div class="phone">{{ invoiceData.Address.Phone }}</div>
          <div class="address">
            {{ invoiceData.Address.AddressDetail }}
            {{ invoiceData.Address.Ward }}
            {{ invoiceData.Address.District }}
            {{ invoiceData.Address.City }}
          </div>
        </div>
        <div class="box-info-payment">
          <div class="title">Phương thức thanh toán</div>
          <div class="payment">
            {{
              invoiceData.MethodPay == "1"
                ? "Trả tiền mặt khi nhận hàng (COD)"
                : "Thanh toán qua VNPay"
            }}
          </div>
          <div class="script">
            {{
              invoiceData.MethodPay == 1 &&
              invoiceData.IsPaid == 0 &&
              invoiceData.IDTracking == 1
                ? "Quý khách vui lòng thanh toán " +
                  invoiceData.TotalValue +
                  "đ khi nhận hàng"
                : invoiceData.MethodPay == 2
                ? "Đã thanh toán"
                : ""
            }}
          </div>
        </div>
        <div class="box-info-delivery">
          <div class="title">Thông tin vận chuyển</div>
          <div class="id-delivery">SS00{{ invoiceData.IDInvoice }}</div>
        </div>
      </div>
      <div class="step">
        <Step :statusNum="invoiceData.IDTracking"></Step>
      </div>
      <div class="order">
        <div class="title">Đơn hàng</div>
        <div class="product" v-for="(item, index) in invoiceData.Products">
          <div class="img">
            <img :src="item.Images[0]['Path']" alt="Ảnh sản phẩm" />
          </div>

          <div class="nameproduct">
            <div class="name">
              <router-link
                role="presentation"
                :to="'/product/' + item.IDProduct"
              >
                {{ item.NameProduct }}
              </router-link>
            </div>
            <div class="number-sku">
              <div class="sku">SKU: {{ item.IDProduct }}</div>
              <div class="number">x{{ item.Quantity }}</div>
            </div>
          </div>
          <div class="price ml-1">
            {{ Intl.NumberFormat().format(item.RetailPrice) }}đ
          </div>
        </div>
        <div class="payment">
          <div class="list">
            <div class="label">Tạm tính</div>
            <div class="money">
              {{
                Intl.NumberFormat().format(
                  invoiceData.TotalValue +
                    (invoiceData.Coupon?.ValueDiscount ?? 0)
                )
              }}đ
            </div>
          </div>
          <div class="list">
            <div class="label">Giảm giá</div>
            <div class="money">
              {{
                Intl.NumberFormat().format(
                  invoiceData.Coupon?.ValueDiscount ?? 0
                )
              }}đ
            </div>
          </div>
          <div class="list">
            <div class="label">Phí giao hàng</div>
            <div class="money">{{ Intl.NumberFormat().format(0) }}đ</div>
          </div>
          <div class="list">
            <div class="label">Tổng</div>
            <div class="money">
              {{ Intl.NumberFormat().format(invoiceData.TotalValue) }}đ
            </div>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
</template>
<script>
import FormOrderAgain from "./FormOrderAgain.vue";
import Step from "./Step.vue";
import Wrapper from "../../../Wrapper.vue";
export default {
  components: {
    FormOrderAgain,
    Step,
    Wrapper,
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
      invoiceData: {
        IDInvoice: 0,
        IDTracking: 1,
        IDAddress: 1,
        IDCoupon: null,
        IDCus: 2,
        Note: null,
        TotalValue: 0,
        MethodPay: 0,
        MethodTransfer: 0,
        CreatedOn: "2022-12-03 16:30:50",
        IsPrintInvoice: 0,
        IsPaid: 0,
        Products: [
          {
            IDProduct: 0,
            NameProduct: "",
            IDBrand: 6,
            Description: "",
            CreatedOn: "",
            IsDeleted: 0,
            Stock: 0,
            TotalPurchaseQuantity: 0,
            Mass: 0,
            UnitsOfMass: "",
            Units: "Unit",
            ApplyTaxes: 0,
            StatusSale: 1,
            IDTag: 2,
            IDType: 3,
            ListPrice: 699000,
            RetailPrice: 699000,
            Brand: {
              IDBrand: 0,
              NameBrand: "",
              IDCollection: "",
              Country: "",
              CreatedOn: "",
              IsDeleted: 0,
              TotalProduct: 0,
              TotalPurchaseQuantity: 0,
            },
            Images: [
              {
                Path: "",
              },
            ],
            Rating: 0,
            Reviews: [],
            Quantity: 1,
          },
        ],
        Address: {
          IDAddress: 0,
          City: "",
          District: "",
          AddressDetail: "",
          Ward: "",
          Phone: 0,
          IsDeleted: 0,
          FirstName: "",
          LastName: "",
          Email: "",
        },
        Coupon: {
          IDCoupon: 0,
          ValueDiscount: 0,
          StartOn: "",
          EndOn: "",
          Description: "",
          IsDeleted: 0,
          MinInvoiceValue: 0,
          CodeCoupon: "",
          Quantity: 0,
          IsMutualEvent: 0,
          Stock: 0,
        },
      },
    };
  },
  async mounted() {
    await this.axios
      .get("/invoice/show/" + this.$route.params.id)
      .then((response) => {
        this.invoiceData = response.data;
        console.log(this.invoiceData);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/mixin";
.header-bread {
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
  margin: 0px 80px;
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
        margin-bottom: 10px;
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
    margin: 130px 0px;
    border: 1px solid #d3d7d3;
    border-radius: 15px;
    padding: 20px;
    @include mobile {
      margin-top: 20px;
    }
    @include mini-tablet {
      margin-top: 20px;
    }
    @include tablet {
      margin-top: 150px;
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
          margin-left: 15px;
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
    font-weight: 600;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0-1px 0 rbg(0 0 0/12%);
    box-shadow: 0-2px rbg(0 0 0 /5%);
    cursor: pointer;
  }
}
</style>
