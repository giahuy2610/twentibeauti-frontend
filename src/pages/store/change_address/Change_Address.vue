<template lang="">
  <Form v-if="modal1">
    <template v-slot:title>
      <div class="title"></div>
    </template>
    <template v-slot:context>
      <div>BBBBB</div>
    </template>
    <template v-slot:footer>
      <div>CCCCC</div>
    </template>
    <template v-slot:button>
      <button @click="close()">close</button>
    </template>
  </Form>
  <Wrapper>
    <div class="content">
      <div class="right-column">
        <div class="header">Địa chỉ giao nhận</div>
        <div class="flex_column">
          <div class="box_add">
            <div class="plus">
              <button @click="modal1 = true">Open</button>

              <!-- <div class="add">Thêm địa chỉ</div> -->
            </div>
          </div>
          <div class="test">
            <div class="frame_test">
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
          <div class="test">...</div>
        </div>
      </div>
      <div class="left-column"></div>
    </div>
  </Wrapper>
</template>
<script>
import Wrapper from "../../Wrapper.vue";
import Form from "./Form_Modal.vue";

export default {
  components: {
    Form,
    Wrapper,
  },

  data() {
    return {
      modal1: false,
      // displayBasic: false,
      // displayBasic2: false,
      // displayModal: false,
      // displayResponsive: false,
      // displayConfirmation: false,
      // displayMaximizable: false,
      // displayPosition: false,
      position: "center",
    };
  },
  methods: {
    close() {
      this.modal1 = false;
    },

    openBasic() {
      this.displayBasic = true;
    },
    closeBasic() {
      this.displayBasic = false;
    },
    openBasic2() {
      this.displayBasic2 = true;
    },
    closeBasic2() {
      this.displayBasic2 = false;
    },
    openResponsive() {
      this.displayResponsive = true;
    },
    closeResponsive() {
      this.displayResponsive = false;
    },
    openModal() {
      this.displayModal = true;
    },
    closeModal() {
      this.displayModal = false;
    },
    openConfirmation() {
      this.displayConfirmation = true;
    },
    closeConfirmation() {
      this.displayConfirmation = false;
    },
    openMaximizable() {
      this.displayMaximizable = true;
    },
    closeMaximizable() {
      this.displayMaximizable = false;
    },
    openPosition(position) {
      this.position = position;
      this.displayPosition = true;
    },
    closePosition() {
      this.displayPosition = false;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";
.right-column {
  display: flex;
  float: right;
  width: 70%;
  min-height: 200px;
  flex-direction: column;
  .header {
    display: block;
    font-size: 24px;
    margin-bottom: 15px;
    font-weight: 700;
    box-sizing: border-box;
  }
  .flex_column {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    width: 100%;
    gap: 10px;

    .test {
      display: flex;
      //align-items: center;
      //justify-content: center;
      border-style: solid;

      border-width: 1px;
      border-radius: 10px;
      height: 190px;
      width: 45%;
      margin: 0;
      padding: 0;
      //flex-direction: row;
      //margin-left:2px;
      .test_show {
        color: black;
      }
      .frame_test {
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

          //gap: 10px;
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

            // height: 70%;

            .info_name,
            .info_phone {
              font-weight: 700;
            }
          }
        }
      }
    }

    .box_add {
      display: flex;
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
      .plus {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .pi {
          font-size: 16px;
          color: black;
          border: none;

          //text-justify: center;
        }

        .add {
          margin-top: 20px;
          box-sizing: border-box;
        }
      }
    }
  }
}
.left-column {
  display: flex;
  float: left;
  width: 30%;
}
</style>
