<template lang="">
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
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
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
  }
</style>