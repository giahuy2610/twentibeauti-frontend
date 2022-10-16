<template lang="">
    <div class="overlay">
      <div class="popup" >
        <div class="content">
          <div class="header">
            <h1>Viết đánh giá</h1>
            <Button icon="pi pi-times" class="popup-close p-button-secondary p-button-text p-button-lg" @click="CancelPopup()"/>
          </div>
          <div class="body">
            <div class="wrap-content">
              <div class="row-product">
                <div class="order-product-item flex-row">
                  <div>
                    <img src="https://image.hsv-tech.io/0x400/tfs/common/fda5ef41-4b41-4bfb-9b07-6cdcdad2f0e9.webp">
                  </div>
                  <div class="name-product">
                    <div class="category">Mat na duong</div>
                    <span onclick='window.scrollTo({top: 0, behavior: "smooth"});'>
                      <div>Mặt Nạ Kỳ Dịu Nhẹ THEFACESHOP SMART PEELING MILD PAPAYA 150ml</div>
                    </span>
                  </div>
                </div>
                <div class="rate">
                  <div class="left">
                    <div class="form-item">
                      <span>Bạn có sẵn sàng giới thiệu sản phẩm này không?</span>
                      <div class="admit flex-row">
                        <button type="button" class="yes button-word">
                          <span class="word">
                              Có
                          </span>
                        </button>
                        <button type="button" class="no button-word">
                            <span class="word">
                                Không
                            </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <div class="form-item">
                      <span>Đánh giá chung</span>
                      <Rating class="item-align-center" v-model="numStarActive" :cancel="false"  offIcon="pi pi-star-fill" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      numStarActive: 0,
    };
  },
  props: ["CancelPopup", "buttonTrigger"],
};
</script>
<style lang="scss" scoped>
.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.overlay {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.popup {
  width: 1000px;
  transform-origin: 190.8px 136px;
  box-sizing: border-box;
  max-width: 100%;
  font-size: 14px;
  line-height: 1.5715;
  position: relative;
  top: 100px;
  margin: 0 auto;
  padding: 0 0 24px;
}
.content {
  overflow: hidden;
  border-radius: 5px;
  position: relative;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 10px;
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
    0 9px 28px 8px rgb(0 0 0 / 5%);

  .header {
    h1 {
      text-align: center !important;
    }

    .popup-close {
      position: absolute;
      text-align: center;
      margin: 20px 32px;
      padding: 10px;
      text-align: center;
      top: 0;
      right: 0;
      z-index: 10;
      color: rgba(0, 0, 0, 0.45);
      font-weight: 700;
      line-height: 1;
      text-decoration: none;
      background: transparent;
      border: 0;
      outline: 0;
      cursor: pointer;
      transition: color 0.3s;
    }
  }

  .body {
    padding: 24px;
    padding-top: 0px;
    font-size: 14px;
    line-height: 1.5715;
    word-wrap: break-word;

    .wrap-content {
      box-sizing: content-box;
      margin-left: auto;
      margin-right: auto;
      max-width: 1300px;
      position: relative;
      width: 90%;

      .row-product {
        .order-product-item {
          margin-bottom: 24px;
          margin-top: 24px;
          align-items: center;
          padding: 20px;
          border: 1px solid var(--border-color);
          background-color: var(--bg-input);
          border-radius: 5px;
          img {
            width: 80px;
            height: auto;
          }
        }
        .name-product {
          margin-left: 15px;
          .category {
            font-size: 14px;
            font-weight: 600;
            line-height: 20px;
          }
          span {
            color: black;
            text-decoration: none;
            background-color: transparent;
            outline: none;

            div {
              font-size: 16px;
              font-weight: 400;
              line-height: 23px;
              cursor: pointer;
            }
          }
        }
        .rate {
          flex-flow: row wrap;
          row-gap: 20px;
          display: flex;
          .form-item {
            flex-direction: column;
            display: flex;

            span {
              padding: 0 0 8px;
              font-weight: 600;
              font-size: 14px;
            }
          }
          .left {
            padding-left: 10px;
            padding-right: 10px;
            flex: 0 0 50%;

            .admit {
              .word {
                word-wrap: normal;
                padding: 3px 10px;
                font-weight: 100;
              }
              .button-word {
                :hover {
                  color: green;
                  cursor: pointer;
                }
              }
              .yes {
                background: transparent;
                box-shadow: none;
                border-radius: 12px 0px 0px 12px;
                border-right: hidden;
                border: 2px solid rgb(239, 239, 239);
                width: auto;
                height: 3rem;
              }

              .no {
                background: transparent;
                box-shadow: none;
                border-radius: 0px 12px 12px 0px;
                border-left: hidden;
                border: 2px solid rgb(239, 239, 239);
                width: auto;
                height: 3rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>