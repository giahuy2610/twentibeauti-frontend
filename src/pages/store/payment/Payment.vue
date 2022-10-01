<template lang="">
  <Wrapper>
    <div class="content">
      <div class="header">
        <a href="/">Trang chủ </a>
        <strong> > Thanh toán </strong>
        <div class="ttheader"><b> Thông tin thanh toán </b></div>
      </div>
      <br />
      <div class="body">
        <div class="left">
          <div class="infcus">
            <h2>Thông tin người mua hàng</h2>
            <b>Thông tin liên lạc</b>
            <br />
            <div class="tenho">
              <div class="ten">
                <span class="p-fluid">
                  <AutoComplete
                    style="color: blue"
                    v-model="text1"
                    :suggestions="filteredCountries"
                    @complete="searchCountry($event)"
                    optionLabel="name"
                    placeholder="Tên"
                  />
                </span>
              </div>
              <div class="ho">
                <AutoComplete
                  v-model="text2"
                  :suggestions="filteredCountries"
                  @complete="searchCountry($event)"
                  optionLabel="name"
                  placeholder="Họ"
                />
              </div>
            </div>
            <div class="sdtmail">
              <div class="sdt">
                <AutoComplete
                  v-model="text3"
                  :suggestions="filteredCountries"
                  @complete="searchCountry($event)"
                  optionLabel="name"
                  placeholder="Số điện thoại"
                />
              </div>
              <div class="email">
                <AutoComplete
                  v-model="text4"
                  :suggestions="filteredCountries"
                  @complete="searchCountry($event)"
                  optionLabel="name"
                  placeholder="Email"
                />
              </div>
            </div>
            <br />
            <b>Thông tin nhận hàng</b>
            <br />
            <div class="tinhquan">
              <div class="tinh">
                <Dropdown
                  v-model="selectedCity1"
                  :options="cities"
                  optionLabel="name"
                  optionValue="code"
                  placeholder="Tỉnh/Thành phố"
                />
              </div>
              <br />
              <div class="quanphuong">
                <div class="quan">
                  <Dropdown
                    v-model="selectedCity1"
                    :options="cities"
                    optionLabel="name"
                    optionValue="code"
                    placeholder="Quận/huyện"
                  />
                </div>
                <div class="phuong">
                  <Dropdown
                    v-model="selectedCity1"
                    :options="cities"
                    optionLabel="name"
                    optionValue="code"
                    placeholder="Phường/xã"
                  />
                </div>
              </div>
              <br />
              <div class="diachi">
                <AutoComplete
                  v-model="text1"
                  :suggestions="filteredCountries"
                  @complete="searchCountry($event)"
                  optionLabel="name"
                  placeholder="Địa chỉ"
                />
              </div>
              <br />
              <div class="tendiachi">
                <AutoComplete
                  v-model="text1"
                  :suggestions="filteredCountries"
                  @complete="searchCountry($event)"
                  optionLabel="name"
                  placeholder="Tên địa chỉ(vd:Văn phòng,Nhà,..."
                />
              </div>
              <br />
              <div class="field-checkbox">
                <Checkbox inputId="binary" v-model="checked" :binary="true" />
                <label for="binary">Tạo tài khoản với thông tin này </label>
              </div>
            </div>
          </div>
          <div class="thanhtoan">
            <h2>Phương thức thanh toán</h2>
            <div class="field-radiobutton">
              <RadioButton
                inputId="pt1"
                name="pay"
                value="Thẻ tín dụng / ATM"
                v-model="pay"
              />
              <label for="pt1">Thẻ tín dụng / ATM</label>
            </div>
            <div class="field-radiobutton">
              <RadioButton
                inputId="pt2"
                name="pay"
                value="Ví MoMo"
                v-model="pay"
              />
              <label for="pt2">Ví MoMo</label>
            </div>
            <div class="field-radiobutton">
              <RadioButton
                inputId="pt3"
                name="pay"
                value="Trả góp Flik - MoMo"
                v-model="pay"
              />
              <label for="pt3">Trả góp Flik - MoMo</label>
            </div>
            <div class="field-radiobutton">
              <RadioButton
                inputId="pt4"
                name="pay"
                value="Trả tiền mặt khi nhận hàng"
                v-model="pay"
              />
              <label for="pt4">Trả tiền mặt khi nhận hàng</label>
            </div>
          </div>
          <div class="vanchuyen">
            <h2>Phương thức vận chuyển</h2>
            <div class="field-radiobutton">
              <RadioButton
                inputId="vc1"
                name="patransporty"
                value="Giao hàng tiêu chuẩn (3-6 ngày)(Giao giờ hành chính)"
                v-model="transport"
              />
              <label for="vc1"
                >Giao hàng tiêu chuẩn (3-6 ngày)(Giao giờ hành chính)</label
              >
            </div>
            <div class="field-radiobutton">
              <RadioButton
                inputId="vc2"
                name="patransporty"
                value="Giao hàng trong 24h(Giao giờ hành chính)"
                v-model="transport"
              />
              <label for="vc2">Giao hàng trong 24h(Giao giờ hành chính)</label>
            </div>
            <div class="field-radiobutton">
              <RadioButton
                inputId="vc3"
                name="patransporty"
                value="[NOW] Giao hàng nhanh trong 24h"
                v-model="transport"
              />
              <label for="vc3">[NOW] Giao hàng nhanh trong 24h</label>
            </div>
          </div>
        </div>
        <div class="right">
          <h2>Đơn hàng</h2>
          <Button label="Đặt hàng" />
        </div>
      </div>

      <div class="footer"></div>
    </div>
  </Wrapper>
</template>
<script>
import Wrapper from "../../Wrapper.vue";
export default {
  components: {
    Wrapper,
  },
  data() {
    return {
      pay: null,
      checked: false,
      transport: null,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";
.content {
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;

  .item {
    max-width: 25%;
    padding: 0.5rem;

    @include mobile {
      max-width: 100%;
    }
    @include mini-tablet {
      max-width: 50%;
    }
    @include tablet {
      max-width: 33.33%;
    }
  }
  .header {
    .ttheader {
      font-size: 30pt;
    }
  }
  .body {
    display: flex;
    flex-direction: row;
    height: 1000%;
    margin: 5%;
    margin-left: 0px;
    .left {
      background-color: red;
      width: 70%;
      .infcus {
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        -moz-box-flex: 1;
        -webkit-box-flex: 1;
        margin: 10px 600px 50px 0px;
        padding: 20px;
        font-size: 16px;
        width: 100%;

        .tenho {
          display: flex;
          flex-direction: row;
          margin-bottom: 10pt;
          width: 100%;
          background-color: blue;
          .ten {
            padding-right: 10pt;
            margin-left: 3pt;
            width: 50%;
          }
          .ho {
            padding-left: 10pt;
            margin-right: 10pt;
          }
        }
        .sdtmail {
          display: flex;
          flex-direction: row;
          margin-left: 1pt;
          .email {
            padding-left: 10pt;
            margin-right: 10pt;
          }

          .sdt {
            padding-right: 10pt;
            margin-left: 3pt;
          }
        }
        .tinhquan {
          display: flex;
          flex-direction: column;
          .tinh {
            padding-left: 5pt;
            margin-right: 10pt;
            width: 100%;
          }
          .quanphuong {
            display: flex;
            flex-direction: row;
            .quan {
              padding-right: 10pt;
              margin-left: 3pt;
            }
            .phuong {
              padding-left: 10pt;
              margin-right: 10pt;
            }
          }
          .diachi {
            margin-left: 2pt;
            margin-right: 0pt;
          }
          .tendiachi {
            margin-left: 2pt;
            padding-right: 10pt;
          }
        }
      }
      .thanhtoan {
        border: 1px solid black;
        -moz-box-flex: 1;
        -webkit-box-flex: 1;
        margin: 20px 600px 20px 0px;
        padding: 20px;

        .field-radiobutton {
          border: 1px solid black;
          -moz-box-flex: 1;
          -webkit-box-flex: 1;
          margin: 20px 20px 20px 0px;
          padding: 20px;
        }
      }
      .vanchuyen {
        border: 1px solid black;
        -moz-box-flex: 1;
        -webkit-box-flex: 1;
        margin: 20px 600px 20px 0px;
        padding: 20px;
      }
    }
    .right {
      border: 1px solid black;
      -moz-box-flex: 1;
      -webkit-box-flex: 1;
      //margin: 20px 0px 20px -500px;
      //padding: 150px;
      width: 30%;
    }
  }
}

::v-deep(.p-autocomplete) {
  width: 100%;
  background-color: yellow;
}
</style>
