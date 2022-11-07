<template lang="">
  <div class="info-address shadow-2">
    <Card style="width: 24rem; margin-bottom: 2em">
      <template #title>
        <div class="address-order">
          <div class="head-address">
            <div class="tit-content">Sổ địa chỉ</div>
            <div class="button">
              <a class="form-address" href="#dialog-address">Sửa</a>
              <div class="dialog overlay" id="dialog-address">
                <a class="overlay-close" href="#"></a>
                <div class="dialog-body">
                  <div class="dialog-header">
                    <button class="dialog-add-btn" @click="basic = true">
                      Thêm mới
                    </button>
                    <FormNewAddress v-if="basic">
                      <template v-slot:title>
                        <div class="m-header">
                          <div class="modal-title">
                            <div class="m-head">Thêm địa chỉ</div>
                          </div>
                          <div class="btn-close">
                            <i class="pi pi-times" @click="basic = false"></i>
                          </div>
                        </div>
                      </template>
                    </FormNewAddress>
                    <div class="dialog-title">Thay đổi địa chỉ</div>
                  </div>
                  <ul class="list-body">
                    <li class="list-item">
                      <div class="item-address">
                        <div
                          class="body"
                          style="
                            font-weight: 400;
                            display: flex;
                            flex-direction: column;
                            gap: 5px;
                            font-size: 14px;
                            color: var(--surface-600);
                          "
                        >
                          <div class="text">Dịu Ái</div>
                          <div class="text">0868247806</div>
                          <div class="text">
                            44/37/1/3,HT43,khu phố 4, phường Hiệp Thành,quận
                            12,TPHCM
                          </div>
                          <div class="text">phường Hiệp Thành</div>
                          <div class="text">Quận 12</div>
                          <div class="text">TP Hồ Chí minh</div>
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
        </div>
      </template>
      <template #content>
        <div class="body">
          <div class="text">Dịu Ái</div>
          <div class="text">0868247806</div>
          <div class="text">
            44/37/1/3,HT43,khu phố 4, phường Hiệp Thành,quận 12,TPHCM
          </div>
          <div class="text">phường Hiệp Thành</div>
          <div class="text">Quận 12</div>
          <div class="text">TP Hồ Chí minh</div>
        </div>
      </template>
    </Card>
  </div>
</template>
<script>
import FormEditAddress from "./FormEditAddress.vue";
import FormNewAddress from "./FormNewAddress.vue";
export default {
  components: {
    FormEditAddress,
    FormNewAddress,
  },
  data() {
    return {
      basic: false,
      basic1: false,
      position: "center",
    };
  },
};
</script>
<style lang="scss" scoped>
.address-order {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 400;
  .head-address {
    display: flex;
    flex-direction: row;
    font-weight: 600;
    .tit-content {
        width:90%;
        font-size: 20px;
    }
    .button {
        &:hover {
            text-decoration: underline;
        }
      .form-address {
        border: none;
        cursor: pointer;
        background-color: #fff;
        font-weight: 400;
        text-decoration: none;
        font-size: 16px;
        margin-top: 5px;
        color: var(--text-admin-color);
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
            .m-header-edit {
        text-align: center;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        gap:20px;
        color:#333;
        //background-color: aqua;
      .m-head {
        //background-color: #94c83d;
        font-weight: 600;
        width:100%;
        font-size: 24px;
        text-align: center; 
        margin-left:10.5rem;
        padding-bottom: 10px;
        
      }
        .btn-close{
          cursor: pointer;
          //margin-top:-35px;
          margin-left: 200px;
        }
      }
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
.body {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
  color: var(--surface-600);
}
</style>
