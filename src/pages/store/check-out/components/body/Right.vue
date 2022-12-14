<template lang="">
  <Toast />
  <Toast position="bottom-center" group="bc">
    <template #message="slotProps">
      <div class="flex flex-column">
        <div class="text-center">
          <i class="pi pi-exclamation-triangle" style="font-size: 3rem"></i>
          <h4>{{ slotProps.message.summary }}</h4>
          <p>{{ slotProps.message.detail }}</p>
        </div>
      </div>
    </template>
  </Toast>
  <div class="right">
    <div class="righttop shadow-3">
      <h2>Đơn hàng</h2>
      <div class="cart__body">
        <ScrollPanel
          style="width: 100%; max-height: 500px; height: fit-content"
        >
          <ProductItemList></ProductItemList>
        </ScrollPanel>
      </div>
      <div class="cart__footer">
        <div class="flex justify-content-between">
          <h4>Tổng giá trị đơn hàng</h4>
          <h4>{{ Intl.NumberFormat().format(total()) }}</h4>
        </div>
        <div class="coupon">
          <div class="flex justify-content-between">
            <h4>Giảm giá</h4>
            <h4>
              {{
                Intl.NumberFormat().format(couponSelected["ValueDiscount"] ?? 0)
              }}
            </h4>
          </div>
          <div class="idcoupon" v-if="couponSelected['CodeCoupon'] != null">
            <p>{{ couponSelected["CodeCoupon"] }}</p>
            <i class="pi pi-times" @click="couponSelected = {}"></i>
          </div>
        </div>
        <div class="flex justify-content-between">
          <h4>Tổng tiền ship</h4>
          <h4>0đ</h4>
        </div>

        <div class="flex justify-content-between">
          <h4>Tổng (đã bao gồm VAT)</h4>
          <h4>
            {{
              Intl.NumberFormat().format(
                total() - (couponSelected["ValueDiscount"] ?? 0)
              )
            }}
          </h4>
        </div>

        <div class="order">
          <span class="p-fluid">
            <Button
              label="Đặt hàng"
              class="p-button-rounded"
              @click="save()"
            />
          </span>
        </div>
        <div class="footer">
          <p>
            Khi tiếp tục, bạn đồng ý với các điều khoản & điều kiện và Chính
            sách
          </p>
        </div>
      </div>
    </div>
    <div class="rightbottom shadow-3">
      <p>Coupon & Voucher</p>
      <span class="p-fluid">
        <div class="apply">
          <div class="grid p-fluid">
            <div class="p-inputgroup p-fluid">
              <InputText
                placeholder="Nhập mã giảm giá (nếu có)"
                v-model="couponCode"
              />
              <Button
                label="Áp dụng"
                @click="
                  getCoupon(couponCode);
                  couponCode = '';
                "
              />
            </div>
          </div>
        </div>
      </span>

      <p>Bạn có phiếu mua quà?</p>
      <span class="p-fluid">
        <div class="dropdown">
          <Dropdown
            v-model="selectedCity1"
            :options="cities"
            optionLabel="name"
            optionValue="code"
            placeholder="Chọn chương trình"
          />
        </div>
      </span>
    </div>
  </div>
</template>
<script>
import ProductItemList from "@/components/store/home/cart/ProductItemList.vue";
import { useCheckoutStorePinia } from "@/stores/store/checkout.js";
import { useCartStorePinia } from "@/stores/store/cart.js";
import { mapWritableState, mapActions } from "pinia";
export default {
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    ...mapActions(useCheckoutStorePinia, ["getCoupon", "createInvoice"]),
    ...mapActions(useCartStorePinia, ["total"]),
    
    save() {
      if (
        this.receiverInfo.LastName == null ||
        this.receiverInfo.LastName == "" ||
        this.receiverInfo.FirstName == null ||
        this.receiverInfo.FirstName == "" ||
        this.receiverInfo.Phone == null ||
        this.receiverInfo.Phone == "" ||
        this.receiverInfo.Email == null ||
        this.receiverInfo.Email == "" ||
        this.receiverInfo.City == null ||
        this.receiverInfo.City == null ||
        this.receiverInfo.City == "" ||
        this.receiverInfo.District == null ||
        this.receiverInfo.District == "" ||
        this.receiverInfo.AddressDetail == null ||
        this.receiverInfo.AddressDetail== "" 
      ) {
        this.$toast.add({
          severity: "error",
          summary: "Error Message",
          detail: "Chưa điền đầy đủ thông tin",
          life: 3000,
        });
      }
      else if (
        !this.receiverInfo.Email?.match(
                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                ) || !this.receiverInfo.Phone?.match(
          /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/
        )
      ) {
        this.$toast.add({
          severity: "error",
          summary: "Error Message",
          detail: "Sai định dạng",
          life: 3000,
        });
      } 
      else {
        this.createInvoice();
        this.$toast.add({
          severity: "success",
          summary: "Success Message",
          detail: "Đặt hàng thành công",
          life: 3000,
        });

      }
    },
  },
  components: {
    ProductItemList,
  },
  data() {
    return {
      couponCode: "",
      discount: 0,
    };
  },
  computed: {
    ...mapWritableState(useCheckoutStorePinia, {
      couponSelected: "couponSelected",
      receiverInfo: "receiverInfo",
    }),
    ...mapWritableState(useCartStorePinia, []),
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/mixin";

.right {
  width: 50%;
  margin-left: 20px;
  padding-right: 10pt;
  @include mobile {
    width: 100%;
  }
  @include mini-tablet {
    max-width: 100%;
    width: 100%;
  }
  @include tablet {
    max-width: 100%;
    width: 100%;
  }
  .righttop {
    //height: 84%;
    border: 1px solid rgb(235, 224, 224);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;

    .cart__body {
      border-top: 1px solid rgb(235, 224, 224);
      border-bottom: 1px solid rgb(235, 224, 224);
    }

    .cart__footer {
      h4 {
        margin: 0.5rem 0;
      }
    }

    .idcoupon {
      display: flex;
      justify-content: space-between;
      width: 50%;
      padding: 5px;
      border: 1px solid rgb(207, 206, 206);
      background-color: rgb(242, 241, 241);
      border-radius: 10px;
      cursor: pointer;

      p {
        margin: 0;
      }

      i:hover {
        color: rgb(176, 157, 157);
      }

      &:hover {
        background-color: rgb(237, 236, 236);
      }
    }
    .footer {
      text-align: center;
      font-size: 0.75rem;
    }
  }
  .rightbottom {
    border: 1px solid rgb(235, 224, 224);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    margin-top: 10px;
    flex-direction: column;
  }
}
::v-deep(.p-scrollpanel-content) {
  padding: 0;
}
</style>
