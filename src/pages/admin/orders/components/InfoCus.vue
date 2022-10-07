<template lang="">
  <div class="info-cus">
    <Card>
      <template #title>
        <div class="card-info">
          <div class="left-info">
            <div class="header">
              <div class="header-title">
                <div class="icon-ava">
                  <i class="pi pi-user"></i>
                </div>
                <div class="title">Thông tin khách hàng</div>
              </div>
              <div class="name-phone">
                <a target="_blank" href="/admin/customer">
                  <h6 class="name-cus">Chị Oanh</h6>
                  <h6 class="phone-cus">- 094594553</h6>
                </a>
              </div>
            </div>
            <div class="address-order">
              <div class="head-address">
                <div class="tit-content">Địa chỉ giao hàng</div>
                <div class="button">
                  <a class="form-address" href="#dialog-address">Thay đổi</a>
                  <div class="dialog overlay" id="dialog-address">
                    <a class="overlay-close" href="#"></a>
                    <div class="dialog-body">
                      <div class="dialog-header">
                        <button class="dialog-close-btn" @click="basic=true">Thêm mới</button>
                        <FormAddress v-if="basic">
                         
                        </FormAddress>
                        <div class="dialog-title">Thay đổi địa chỉ</div>
                      </div>
                      <ul class="list-body">
                        <li class="list-item">
                          <div class="item-address">
                            <div
                              class="address-list-phone"
                              style="font-weight: 500; line-height: 20px"
                            >
                              094594553
                            </div>
                            <div
                              class="address-list-home"
                              style="font-weight: 400; line-height: 20px"
                            >
                              Quảng Bình, Phường Phúc Xá, Quận Ba Đình, Hà Nội
                            </div>
                          </div>
                          <div
                            class="address-list edit"
                            style="margin-left: 8px; color: #0088ff"
                          >
                            Sửa
                          </div>
                        </li>
                        <li class="list-item">
                          <div class="item-address">
                            <div
                              class="address-list-phone"
                              style="font-weight: 500; line-height: 20px"
                            >
                              094594553
                            </div>
                            <div
                              class="address-list-home"
                              style="font-weight: 400; line-height: 20px"
                            >
                              Quảng Bình, Phường Phúc Xá, Quận Ba Đình, Hà Nội
                            </div>
                          </div>
                          <div
                            class="address-list edit"
                            style="margin-left: 8px; color: #0088ff"
                          >
                            Sửa
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="phone-order">094594553</div>
              <div class="address">
                Quảng Bình, Phường Phúc Xá, Quận Ba Đình, Hà Nội
              </div>
            </div>
          </div>
          <div class="right-info">
            <div class="info-total">
              <li class="debt-collection">
                <div class="label">
                  <p class="label-content">Nợ phải thu</p>
                </div>
                <div class="total">
                  <p class="total-number">0</p>
                </div>
              </li>
              <li class="all-total">
                <div class="label">
                  <p class="label-content">Tổng chi tiêu (1 đơn)</p>
                </div>
                <div class="total">
                  <p class="total-number">500,000</p>
                </div>
              </li>
              <li class="refund">
                <div class="label">
                  <p class="label-content">Trả hàng (0 sản phẩm)</p>
                </div>
                <div class="total">
                  <p class="total-number">0</p>
                </div>
              </li>
              <li class="unsuccess-order">
                <div class="label">
                  <p class="label-content">Giao hàng thất bại (0 đơn)</p>
                </div>
                <div class="total">
                  <p class="total-number">0</p>
                </div>
              </li>
            </div>
          </div>
        </div>
      </template>
      <template #content>
        <div class="product-table">
        </div>
      </template>
    </Card>
  </div>
</template>
<script>
import FormAddress from "./FormAddress.vue";
import Wrapper from "../../../Wrapper.vue";
export default {
  components: {
    FormAddress,
    Wrapper,
  },
  data() {
    return {
      displayBasic: false,
      basic: false,
      position: "center",
    };
  },
  methods: {
    open() {
      this.basic = true;
    },
    close() {
      this.basic = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.info-cus {
  .card-info {
    display: flex;
    flex-direction: row;
    gap: 50px;
    .left-info {
      width: 50%;
      .header {
        display: flex;
        flex-direction: column;
        gap: 5px;
        border-bottom: 1px solid #d3d5d7;
        padding-top: 10px;
        border-width: 50%;
        margin-bottom: 10px;
        .header-title {
          display: flex;
          flex-direction: row;
          gap: 10px;

          .icon-ava {
            border: 1px solid #d3d5d7;
            background-color: #d3d5d7;
            border-radius: 50%;
            width: 35px;
            align-items: center;
            text-align: center;
            //padding-bottom: 5px;
          }
          .title {
            font-size: 16px;
            margin-top: 7px;
            font-weight: 600;
          }
        }
        .name-phone {
          a {
            display: flex;
            flex-direction: row;
            text-decoration: none;
            color: #0088ff;
            margin-top: -40px;
            margin-left: 10px;
            .phone-cus {
              color: #333;
              font-weight: 600;
            }
          }
        }
      }
      .address-order {
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-weight: 400;
        .head-address {
          display: flex;
          flex-direction: row;
          font-size: 14px;
          gap: 30px;
          font-weight: 500;
          .button {
            .form-address {
              color: #0088ff;
              border: none;
              cursor: pointer;
              background-color: #fff;
              font-weight: 600;
              text-decoration: none;
            }
            .dialog {
              position: fixed;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 10;
              display: flex;
              align-items: center;
              justify-content: center;
              visibility: hidden;
              opacity: 0;
              transition: opacity linear 0.2s;
              .overlay-close {
                position: absolute;
                width: 100%;
                height: 100%;
                cursor: default;
              }
            }
            .overlay {
              background-color: rgba(0, 0, 0, 0.5);
            }
            .dialog-body {
              border-radius: 5px;
              width: 450px;
              position: relative;
              padding-bottom: 16px;
              background-color: #fff;
              display: flex;
              flex-direction: column;
              //gap:20px;
              .dialog-header {
                padding: 15px;
                display: flex;
                flex-direction: row;
                width: 100%;
                border-bottom: 1px solid #a3a8af;
                .dialog-close-btn {
                  position: absolute;
                  //top:2px;
                  right: 6px;
                  text-decoration: none;
                  color: #0088ff;
                  cursor: pointer;
                }
                .dialog-title {
                  width: 50%;
                }
              }
              .list-body {
                padding-right: 15px;
                margin: 0;
                padding: 0;
                //position:relative;
                .list-item {
                  font-size: 14px;
                  cursor: pointer;
                  padding: 15px;
                  //margin:0px;
                  // background-color: #0088FF;
                  overflow: hidden;
                  position: relative;
                  min-height: 56px;
                  margin-right: 10px;
                  justify-content: space-between;
                  width: 100%;
                  display: flex;
                  flex-direction: row;
                  //flex-wrap: nowrap;
                  list-style: none;
                  //display: block;
                  border-bottom: 1px solid #a3a8af;
                  .item-address {
                    //text-align: left;
                    display: flex;
                    flex-direction: column;
                    margin: 0;
                  }
                  .address-list-edit {
                    width: 50%;
                    background-color: #0088ff;
                  }
                }
                .list-item:hover {
                  color:#0088ff;
                  background-color: #e6f5ff;
                }
              }
            }
            .dialog:target {
              visibility: visible;
              opacity: 1;
            }
            .change-address {
              display: flex;
              flex-direction: column;

              .text-address2 {
                border-bottom: 1px solid #a3a8af;
                display: flex;
                flex-direction: column;
                color: #0088ff;
              }
            }
          }
        }
        .phone-order {
          font-size: 13px;
        }
        .address {
          font-size: 13px;
        }
      }
    }
    .right-info {
      width: 50%;
      .info-total {
        width: 100%;
        display: flex;
        flex-direction: column;
        font-size: 14px;
        font-weight: 400;
        border: 1px dashed #a3a8af;
        border-radius: 5px;
        position: relative;
        text-align: left;
        //align-items: center;
        justify-content: flex-start;
        text-decoration: none;
        padding: 5px 8px;
        .debt-collection,
        .all-total,
        .refund,
        .unsuccess-order {
          display: flex;
          flex-direction: row;
          // padding: 10px;
          .label {
            width: 75%;
          }
          .total {
            font-weight: 500;
            color: red;
            margin-left: 30px;
          }
        }
      }
    }
  }
}
</style>
