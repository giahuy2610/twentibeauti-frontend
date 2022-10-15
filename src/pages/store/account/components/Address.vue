<template lang="">
  <Form v-if="modal1">
    <template v-slot:button>
      <div class="btn-save">
        <button @click="modal1 = false">Lưu</button>
      </div>
    </template>
    <template v-slot:header>
      <div class="m-header">
        <div class="modal-title">
          <div class="m-head">Thêm địa chỉ</div>
        </div>
        <div class="btn-close">
          <i class="pi pi-times" @click="modal1 = false"></i>
        </div>

      </div>
      
    </template>
  </Form>

  <div class="right-column">
    <div class="header">Địa chỉ giao nhận</div>
    <div class="flex_column">
      <div class="address-box-create">
        <div class="plus">
          <button class="pi pi-plus" @click="modal1 = true"></button>
          <div class="add">Thêm địa chỉ</div>
        </div>
      </div>
      <div class="box" v-for="item in 5">
        <div class="address-box">
          <div class="frame_add">
            <div class="address">
              <p>phamlediuaiphamlediuaiphamlediuaiphamlediuaianhtu</p>
            </div>
            <!-- <div class="space">                   
                </div> -->
            <div class="icon">
              <button type="button" class="icon_edit">
                <span class="pi pi-pencil"></span>
              </button>
              <button type="button" class="icon_del">
                <span class="pi pi-trash"></span>
              </button>
            </div>
          </div>
          <div class="frame_info">
            <div class="info">
              <div class="info_name">Ái Dịu</div>
              <div class="info_phone">0868247806</div>
              <div class="info_email">diuai4232@gmail.com</div>
              <div class="info_home">
                44/37/1/3, HT43, phường Hiệp Thành, Quận 12, Hồ Chí Minh
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Form from "./Form_Modal.vue";

export default {
  components: {
    Form,
  },

  data() {
    return {
      modal1: false,
      position: "center",
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";
.m-header {
  text-align: center;
  display:flex;
  flex-direction: row;
  width: 100%;
  gap:20px;
  //background-color: aqua;
.m-head {
  //background-color: #94c83d;
  font-weight: 600;
  width:100%;
  font-size: 24px;
  text-align: center;
  margin-left:115px;
  padding-bottom: 10px;
}
  .btn-close{
    cursor: pointer;
    //margin-top:-35px;
    margin-left: 200px;
  }
}
.right-column {
  display: flex;
  float: right;
  width: 70%;
  min-height: 200px;
  flex-direction: column;
  @include tablet {
    width:100%;
  }
  @include mini-tablet {
    width:100%;
    //color:blue;
  }
  @include mobile {
    width:100%;
    //color:green;
  }
  .header {
    display: block;
    font-size: 24px;
    margin-bottom: 15px;
    font-weight: 700;
    box-sizing: border-box;
    @include tablet {
      
    }
    @include mini-tablet {
      
    }
    @include mobile {
    display:none;
    }
  }
  .flex_column {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    width: 100%;
    gap: 10px;
    @include tablet {
      width:100%;
      //color:palevioletred;
    }
    @include mini-tablet {
      width:100%;
    }
    @include mobile {
      width:100%;
      display:flex;
      flex-direction: column;
    }
    .box {
      display: flex;
      border-style: solid;
      border-width: 1px;
      border-radius: 10px;
      width: 45%;
      margin: 0;
      padding: 0;
      @include mobile {
        width:100%;
      }
      .test_show {
        color: black;
      }
      .address-box {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

        .frame_add {
          display: flex;
          width: 100%;
          height: 40%;
          flex-direction: row;
          border-bottom: 1px solid black;
          gap: 5px;
          padding: 10px 10px 5px 15px;
          text-align: center;
          align-items: center;
          overflow: hidden;
          .address {
            text-align: left;
            box-sizing: border-box;

            width: 80%;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            overflow: hidden;
            word-wrap: break-word;
            word-break: break-all;
            font-size: 14px;
            font-weight: 700;
          }
          .icon {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 20%;
            gap: 5px;

            .icon_edit,
            .icon_del {
              width: 50%;
              border: none;
              background-color: white;
              cursor:pointer;
            }
          }
        }
        .frame_info {
          height: 60%;
          overflow: hidden;
          .info {
            width: 100%;
            margin-top: 5px;

            margin-left: 15px;
            line-height: 1.5715;
            gap: 5px;
            box-sizing: border-box;
            text-align: left;
            font-size: 14px;
            .info_name,
            .info_phone {
              font-weight: 700;
            }
          }
        }
      }
    }

    .address-box-create {
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border-style: dashed;
      -webkit-box-align: center;
      -webkit-box-pack: center;
      border-width: 1px;
      border-radius: 10px;
      height: 190px;
      width: 45%;
      //padding: 20px;
      @include mobile {
        width:100%;
      }
      .plus {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .pi {
          cursor:pointer;
          font-size: 16px;
          color: black;
          border: none;

          //text-justify: center;
        }
        button {
          background: none;
        }

        .add {
          margin-top: 20px;
          box-sizing: border-box;
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
      //margin-top: 40px;
      margin-left: 75%;
      width: 90px;
      height: 40px;
      font-weight: 700;
      box-sizing: border-box;
      color: #fff;
      text-shadow: 0-1px 0 rbg(0 0 0/12%);
      box-shadow: 0-2px rbg(0 0 0 /5%);
      cursor:pointer;
  }
}

</style>

{ nsame: 'bb', age: 12 } { name: '',car: 'gg'} var response = new object{ name:
this.name, age: this.age }
