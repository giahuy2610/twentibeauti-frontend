<template lang="">
  <div class="payment shadow-5">
    <div class="h2">
      <b>Phương thức thanh toán</b>
      <br />
    </div>
    <div class="atm" v-for="(item, index) in array">
      <div class="field-radiobutton1">
        <RadioButton
          :inputId="item.id"
          name="pay"
          :value="item.id"
          v-model="receiverInfo.MethodPay"
        />
        <label class="ml-1" :for="item.id">{{ item.label }}</label>
      </div>

      <img
        :src="item.img"
        style="width: 90px; height: 40px; object-fit: contain"
      />
    </div>
  </div>
</template>
<script lang="js">
import { useCheckoutStorePinia } from "@/stores/store/checkout.js";
import { mapWritableState, mapActions } from "pinia";
export default {
  data() {
    return {
      selectedPayment: null,
      array: [
        // {
        //   label: "Thẻ tín dụng / ATM",
        //   img: "https://inkythuatso.com/uploads/images/2021/12/payoo-logo-inkythuatso-02-15-47-06.jpg",
        //   id: "1",
        // },
        // {
        //   label: "Ví momo",
        //   img: "https://play-lh.googleusercontent.com/dQbjuW6Jrwzavx7UCwvGzA_sleZe3-Km1KISpMLGVf1Be5N6hN6-tdKxE5RDQvOiGRg",
        //   id: "2",
        // },
        // {
        //   label: "Trả góp Flik - MoMo",
        //   img: "https://static.mservice.io/fileuploads/svg/momo-file-220802114354.svg",
        //   id: "3",
        // },
        {
          label: "Trả tiền mặt khi nhận hàng",
          img: "https://cdn.pixabay.com/photo/2013/07/13/12/03/banknotes-159085_960_720.png",
          id: "1",
        },
        {
          label: "Thanh toán qua VNPAY",
          img: "https://doanhnghiep.quocgiakhoinghiep.vn/wp-content/uploads/2020/07/1581089357407-1580819448160-vnpay.png",
          id: "2",
        },
      ],
    };
  },
  mounted() {
    //set default
    this.receiverInfo.MethodPay = this.array[0].id;
  },
  computed: {
    ...mapWritableState(useCheckoutStorePinia, {
      receiverInfo: "receiverInfo",
    }),
  },
};
</script>

<style lang="scss" scoped>
.payment {
  border-radius: 10px;

  -moz-box-flex: 1;
  -webkit-box-flex: 1;
  margin-top: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  .atm {
    width: 100%;
    border: 1px solid #aaa;
    border-radius: 10px;
    -moz-box-flex: 1;
    -webkit-box-flex: 1;
    display: flex;
    margin: 10px 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .field-radiobutton1 {
      -moz-box-flex: 1;
      -webkit-box-flex: 1;
      padding: 20px;
      width: 70%;
    }
  }
}
</style>
