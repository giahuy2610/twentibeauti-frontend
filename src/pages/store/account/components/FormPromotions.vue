<template lang="">
  <div class="wrapper" :style="[isHidden ? 'display: none' : '']">
    <ScrollPanel>
      <div class="modal">
        <div class="modal-content">
          <slot name="header"></slot>
          <div class="modal-context">
            <div class="header">
              <div class="ticket">
                <div class="qr">
                    <div class="bar-code flex justify-content-center">
                        <Skeleton shape="square" size="100px" class="mr-2" v-show="!isLoaded">
                        </Skeleton>
                        <img
                          src="https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=Example"
                          alt="qr"
                          @load="isLoaded = true"
                          v-show="isLoaded"
                        />
                      </div>
                </div>
                <div class="text">
                    <div class="title">
                    THANGYEUTHUONG</div>
                    <div class="label">Tất cả hình thức thanh toán</div>
                    <div class="money">1.000.000</div>
              </div>
              </div>
            </div>
            <div class="detail-info">
                <div class="box1">
                    <div class="label">Thanh toán</div>
                    <div class="description">Áp dụng cho toàn bộ sản phẩm</div>
                </div>
                <div class="box2">
                    <div class="label">Có hiệu lực</div>
                    <div class="description">04/10/2022-20/10/2022</div>
                </div>
                <div class="box3">
                    <div class="label">Thanh toán</div>
                    <div class="description">Tất cả hình thức thanh toán</div>
                </div>
                <div class="box4">
                    <div class="label">Xem chi tiết</div>
                    <div class="description">Giảm 1.000.000đ cho đơn từ 15.000.000đ</div>
                </div>
            </div>
          </div>
          <div class="modal-footer">
            <slot name="button"></slot>
          </div>
        </div>
      </div>
    </ScrollPanel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isHidden: false,
      modal: false,
      position: "center",
      isLoaded: false,
    };
  },
  methods: {
    close() {
      this.isHidden = false;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1111;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overscroll-behavior: contain;
  //height: 200vh;

  .modal {
    background-clip: padding-box;
    border: 0;
    box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
      0 9px 28px 8px rgb(0 0 0 / 5%);
    pointer-events: auto;
    position: fixed;
    width: 500px;
    left: calc(50% - 250px);
    top: 40px;
    text-decoration: none;
    //-webkit-scrollbar{ display: none; }
    //height: 200vh;
    

    .modal-content {
      //padding: 18px 24px 16px;
      display: flex;
      flex-direction: column;
      width: 100%;
      position: relative;
      pointer-events: auto;
      background-color: #fff;
      background-clip: padding-box;
      border: none rgba(0, 0, 0, 0.9);
      outline: none;
      border-radius: 10px;
    }

    .modal-context {
      width: 100%;
      // padding: 24px;
      // font-size: 14px;
      // line-height: 1.5715;
      //box-sizing: inherit;
      //height: 100%;
      -moz-box-flex: 1;
      -webkit-box-flex: 1;
      display: flex;
      flex-direction: column;
      gap: 15px;
      @include mobile {
        //top:10px;
      }
      .header {
        width: 100%;
        // height: 150px;
        background-color: #94c83d;
        padding: 20px;
        border-bottom: 2px dashed rgba(0,0,0,.06);
        .ticket {
          display: flex;
          flex-direction: row;
          border-radius: 5px;
          position: relative;
          box-sizing: border-box;
          height: fit-content;
          box-shadow: rgb(0 0 0 / 25%) 0px 0px 4px;
          .qr {
            width: 35%;
            padding: 5px;
            background: rgb(255, 255, 255);
          }
          .text {
            font-size: 28px;
            line-height: 30px;
            //margin-bottom: 10px !important;
            font-weight: 700;
            background: rgb(239, 239, 239);
            border-radius: 0px 5px 5px 0px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-flex: 2;
            flex-grow: 2;
            .title {
                margin-bottom: 10px !important;
                @include mobile {
                    flex-wrap: wrap;
                    word-wrap: break-word;
                    word-break: break-all;
                }
            }
            .label {
                font-size:14px;
                font-weight: 500;
            }
            .money {
                font-size:14px;
                font-weight: 700;
            }
          }
        }
      }
    }
    .detail-info {
        padding:25px;
        display:flex;
        flex-direction: column;
        gap:10px;
        .box1,.box2,.box3,.box4 {
            display: flex;
            flex-direction: column;
            gap:5px;
            .label {
                font-weight:700;
            }
            .description {
                color:#777;
            }

        }
    }
    .modal-footer {
      button {
        background-color: aqua;
      }
    }
  }
}
</style>
