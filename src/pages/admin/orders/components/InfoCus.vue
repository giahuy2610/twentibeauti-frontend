<template lang="">
  <div class="info-cus shadow-2">
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
                <a target="_blank" href="/admin/customerdetails">
                  <h6 class="name-cus">
                    {{
                      invoice.Address?.FirstName +
                      " " +
                      invoice.Address?.LastName
                    }}
                  </h6>
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
                        <button class="dialog-add-btn" @click="basic = true">
                          Thêm mới
                        </button>
                        <FormAddress v-if="basic">
                          <template v-slot:title>
                            <div class="m-header">
                              <div class="modal-title">
                                <div class="m-head">Thêm địa chỉ</div>
                              </div>
                              <div class="btn-close">
                                <i
                                  class="pi pi-times"
                                  @click="basic = false"
                                ></i>
                              </div>
                            </div>
                          </template>
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
                              {{ invoice.Address?.Phone }}
                            </div>
                            <div
                              class="address-list-home"
                              style="font-weight: 400; line-height: 20px"
                            >
                              {{ invoice.Address?.Ward }}
                              {{ invoice.Address?.District }}
                              {{ invoice.Address?.City }}
                              {{ invoice.Address?.AddressDetail }}
                            </div>
                          </div>
                          <div class="address-list edit">
                            <button
                              class="dialog-edit-btn"
                              style="
                                color: #0088ff;
                                border: none;
                                background-color: #fff;
                                cursor: pointer;
                              "
                              @click="basic1 = true"
                            >
                              Sửa
                            </button>
                            <FormEditAddress v-if="basic1">
                              <template v-slot:title>
                                <div class="m-header-edit">
                                  <div class="modal-title">
                                    <div class="m-head">Sửa địa chỉ</div>
                                  </div>
                                  <div class="btn-close">
                                    <i
                                      class="pi pi-times"
                                      @click="basic1 = false"
                                    ></i>
                                  </div>
                                </div>
                              </template>
                            </FormEditAddress>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="phone-order">{{ invoice.Address?.Phone }}</div>
              <div class="address">
                {{ invoice.Address?.AddressDetail }}
                {{ invoice.Address?.Ward }}
                {{ invoice.Address?.District }}
                {{ invoice.Address?.City }}
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
        <div class="product-table"></div>
      </template>
    </Card>
  </div>
</template>
<script>
import FormAddress from "./FormAddress.vue";
import Wrapper from "../../../Wrapper.vue";
import FormEditAddress from "./FormEditAddress.vue";
export default {
  components: {
    FormAddress,
    Wrapper,
    FormEditAddress,
  },
  props: ["invoice"],
  data() {
    return {
      displayBasic: false,
      basic: false,
      basic1: false,
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
    margin-bottom: -30px;
    .m-header-edit {
      text-align: center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      gap: 20px;
      color: #333;
      //background-color: aqua;
      .m-head {
        //background-color: #94c83d;
        font-weight: 600;
        width: 100%;
        font-size: 24px;
        text-align: center;
        margin-left: 10.5rem;
        padding-bottom: 10px;
      }
      .btn-close {
        cursor: pointer;
        //margin-top:-35px;
        margin-left: 200px;
      }
    }
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
            margin-top: -25px;
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
            .form-address:hover {
              font-weight: 700;
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
              width: 500px;
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
                .dialog-add-btn {
                  position: absolute;
                  //top:2px;
                  right: 6px;
                  text-decoration: none;
                  color: #0088ff;
                  //color:red;
                  cursor: pointer;
                  border: none;
                  background-color: #fff;
                }
                .dialog-add-btn:hover {
                  font-weight: 700;
                }
                .dialog-edit-btn {
                  button:hover {
                    font-weight: 700;
                  }
                }
                .dialog-title {
                  width: 50%;
                }
                .m-header {
                  text-align: center;
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  width: 100%;
                  gap: 20px;
                  //background-color: aqua;
                  .m-head {
                    //background-color: #94c83d;
                    font-weight: 600;
                    width: 100%;
                    font-size: 24px;
                    text-align: center;
                    margin-left: 10.5rem;
                    padding-bottom: 10px;
                  }
                  .btn-close {
                    cursor: pointer;
                    //margin-top:-35px;
                    margin-left: 200px;
                  }
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
                    button {
                      color: #0088ff;
                      border: none;
                    }
                  }
                }
                .list-item:hover {
                  color: #0088ff;
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
          justify-content: space-between;
          // padding: 10px;
          .label {
            width: 75%;
          }
          .total {
            font-weight: 500;
            color: red;
            margin-left: 30px;
            text-align: right;
          }
        }
      }
    }
  }
}
</style>
