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
                <h1 class="title">Dịu Ái</h1>
              </div>
              <div class="name-phone">
                44/37/1/3,HT43,khu phố 4, phường Hiệp Thành,quận 12,TPHCM,
                Phường Tân Hưng, Quận 7, Vietnam
              </div>
            </div>
            <div class="address-order">
              <div class="head-address">
                <div class="tit-content">Sổ địa chỉ</div>
                <div class="button">
                  <a class="form-address" href="#dialog-address">Thay đổi</a>
                  <div class="dialog overlay" id="dialog-address">
                    <a class="overlay-close" href="#"></a>
                    <div class="dialog-body">
                      <div class="dialog-header">
                        <button class="dialog-add-btn" @click="basic = true">
                          Thêm mới
                        </button>

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
        </div>
      </template>
      <template #content>
        <div class="product-table"></div>
      </template>
    </Card>
  </div>
</template>
<script>
import Wrapper from "../../../Wrapper.vue";
export default {
  components: {
    Wrapper,
  },
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
    //gap: 50px;
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
            width: 45px;
            align-items: center;
            text-align: center;
            //padding-bottom: 5px;
          }
          .title {
            font-size: 20px;
            margin-top: 7px;
            font-weight: 600;
          }
        }
        .name-phone {
          display: flex;
          flex-direction: row;
          margin-left: 10px;
          font-size: 14px;
          font-weight: 400;
          color: var(--text-color-secondary);
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
                  // width: 100%;
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
  }
}
</style>
