<template lang="">
  <div class="wrapper" :style="[isHidden ? 'display: none' : '']">
    <ScrollPanel>
      <div class="modal">
        <div class="modal-content">
          <slot name="header"></slot>
          <div class="modal-context">
            <div class="product">
              <div class="img">
                <img
                  src="https://image.hsv-tech.io/65x65/tfs/products/5a9dd1c9-efec-41f6-b956-13d49e792d3e.webp"
                  alt="Ảnh sản phẩm"
                />
              </div>
              <div class="nameproduct">
                <div class="name">
                  <a
                    role="presentation"
                    href="https://thefaceshop.com.vn/products/kem-chong-nang-hieu-chinh-da-belif-uv-protector-multi-sunscreen-spf50-pa-50ml"
                  >
                    Kem chống nắng hiệu chỉnh da BELIF UV PROTECTOR MULTI
                    SUNSCREEN SPF50++ PA++++ 50ml
                  </a>
                </div>
                <div class="number-sku">
                  <div class="sku">SKU: 52101289</div>
                  <div class="number">x1</div>
                </div>
              </div>
              <div class="price">850.000đ</div>
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
    top: 80px;
    text-decoration: none;
    //-webkit-scrollbar{ display: none; }
    //height: 200vh;
    @include mobile {
      top: 5px;
      width: 450px;
      left: calc(50% - 230px);
    }

    .modal-content {
      padding: 18px 24px 16px;
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
      //height: 300px;
      .header {
        font-weight: 700;
      }
      .m-icon {
        position: absolute;
        top: 10;
        right: 5;
        z-index: 10;
        padding: 0;
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
      .pi {
        display: block;
        width: 80px;
        height: 80px;
        font-size: 16px;
        font-style: normal;
        line-height: 80px;
        text-align: center;
      }
    }

    .modal-title {
      display: flex;
      flex-direction: row;
      width: 100%;
      text-align: center;

      .m-head {
        width: 100%;
        text-align: center;
        align-items: center;
        margin-right: 250px;
        font-size: 24px;
        line-height: 36px;
        font-weight: 700;
        margin: 0;
        color: rgba(0, 0, 0, 0.85);
        box-sizing: inherit;
      }
    }
    .modal-context {
      width: 100%;
      display: block;
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
      .product {
        display: flex;
        flex-direction: row;
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
