<template lang="">
  <div class="right">
    <div class="righttop shadow-3 ">
      <h2>Đơn hàng</h2>
      <div class="cart__body">
        <ScrollPanel style="width: 100%; height: 700px">
          <ProductItem class="mb-1" v-for="item in 17"></ProductItem>
        </ScrollPanel>
      </div>
      <div class="cart__footer">
        <div class="flex justify-content-between">
          <h4>Tổng giá trị đơn hàng</h4>
          <h4>{{ total }}</h4>
        </div>
        <div class="coupon">
          <div class="flex justify-content-between">
            <h4>Giảm giá</h4>
            <h4>{{ discount }}</h4>
          </div>
          <div class="idcoupon">
            magiamgia
          </div>
        </div>
        <div class="flex justify-content-between">
          <h4>Tổng tiền ship</h4>
          <h4>{{ total }}</h4>
        </div>
        <hr  width="90%" align="center" />
        <div class="flex justify-content-between">
          <h4>Tổng (đã bao gồm VAT)</h4>
          <h4>{{ total }}</h4>
        </div>
        <hr  width="90%" align="center" />

  
        
        <div class="order">
          <span class="p-fluid">
            <Button label="Đặt hàng" class="p-button-rounded" />
          </span>
        </div>
        <div class="footer">
          <p>Khi tiếp tục, bạn đồng ý với các điều khoản & điều kiện và Chính sách</p>
        </div>
        
        
      </div>
    </div>
    <div class="rightbottom shadow-3">
      <p>Coupon & Voucher</p>
      <span class="p-fluid">
        <div class="apply">
          <div class="grid p-fluid">
            <div class="p-inputgroup p-fluid">
              <InputText placeholder="Nhập mã giảm giá (nếu có)" />
              <Button label="Áp dụng" />
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
import ProductItem from '../../../../../components/store/home/cart/ProductItem.vue'
export default {
  components: {
    ProductItem,
  },
  data(){
    return{
      total:0,
      discount:0
    }
  }
};
</script>
<style lang="scss" scoped>
.right {
  width: 50%;
  .righttop {
    height:84% ;
    border: 1px solid rgb(235, 224, 224);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    .cart__body{
    }
    .idcoupon{
      width: 50%;
      border: 1px solid rgb(252, 240, 240);
      border-radius: 10px;
    }
    .footer{
      text-align: center;
      font-size: 0.75rem;
    }
  }.rightbottom{
    border: 1px solid rgb(235, 224, 224);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    margin-top: 10px;
    flex-direction: column;
  }
}
</style>
