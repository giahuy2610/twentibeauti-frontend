<template lang="">
    <div class="product-rating-align ">
        <div class="product-rating flex-row product-rating__space">
            <div class="space-item" >
                <a href="/product#product-review" class="flex-row">
                    <div class="rate-section">
                        <Rating v-model="ratingStar" :cancel="false" offIcon="pi pi-star-fill" />
                    </div>
                    <div class="num-reviews">
                        <p>{{numReviews}} Đánh giá</p>
                    </div>
                </a> 
            </div>
            <div class="num-likes flex-row">
                <b> <i class="pi pi-heart-fill" style="color:red"></i> 4 thích</b>
            </div>
            <div class="origin">
                <b>Xuất xứ: </b>
                Hàn Quốc
            </div>
            <div class="sku">
                <b>SKU: </b>
                34400251
            </div>
        </div>
      </div>
</template>
<script>
export default {
  props: ["ratingStar","numReviews"],
};
</script>
<style lang="scss" scoped>
::before {
  box-sizing: inherit;
}
.product-rating__space > div:not(:first-child)::before {
  width: 2px;
  background-color: rgba(0, 0, 0, 0.125);
  content: "";
  position: absolute;
  top: 0px;
  left: -10px;
  bottom: 0px;
}
.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}
.product-rating-align {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  .product-rating {
    position: relative;
    gap: 20px;
    .space-item {
      position: relative;
      text-size-adjust: 100%;
      a {
        text-decoration: none;
        gap: 0.5rem;
      }
      .num-reviews {
        position: relative;
        text-decoration: underline !important;
      }
    }
    .num-likes {
      position: relative;
      gap: 0.25rem;
    }
    .origin {
      position: relative;
      gap: 0.25rem;
    }
    .sku {
      position: relative;
      gap: 0.25rem;
    }
  }
}
</style>