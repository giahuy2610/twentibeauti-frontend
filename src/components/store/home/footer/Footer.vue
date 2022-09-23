<template lang="">
  <div class="footer-wrapper">
    <div class="footer-wrapper__subscribe">
      <div class="footer-wrapper__subscribe__content">
        <div class="footer-wrapper__subscribe__content__left">
          <h3>NHẬN BẢN TIN LÀM ĐẸP</h3>
          <h5>Đừng bỏ lỡ hàng ngàn sản phẩm và khuyến mãi siêu hấp dẫn</h5>
        </div>
        <div class="footer-wrapper__subscribe__content__right">
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText
              type="text"
              v-model="value3"
              placeholder="Email của bạn iu là"
              style="border-radius: 10000px"
            />
          </span>
        </div>
      </div>
    </div>
    <div class="footer-wrapper__info">
      <div class="footer-wrapper__info_content">
        <h1>TWENTI BEAUTI - Hàng chất lượng thấp bán giá chất lượng cao</h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
$desktop:1280px;
$lg:1024px;
$md:768px;
$sm:568px;

.footer-wrapper {
  &__subscribe {
    height: 100px;
    background-color: #162818;
    color: rgb(241, 238, 238);
    display: flex;
    justify-content: space-around;
    padding: 0 50px;

    @mixin MediaQuery($sm) {
      @media screen and (max-width: $sm) {
        padding: 0;
        
      }
    }

    &__content {
      width: 100%;
      max-width: 1300px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }

  &__info {
    height: 500px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(219, 205, 205);
    padding: 0 50px;

    &__content {
      width: 100%;
      max-width: 1300px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
}
</style>
