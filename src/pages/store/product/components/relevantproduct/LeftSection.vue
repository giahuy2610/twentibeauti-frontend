<template lang="">
    <div class="left-section">
        <div class="section-region">
          <h2 class="header">Sản phẩm liên quan</h2>
          <Button class="p-button-secondary p-button-text" @click="$router.push({ path: '/', replace: true })">
            <span>
                XEM TẤT CẢ SẢN PHẨM LIÊN QUAN
            </span>
          </Button>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.left-section
{
  flex-shrink : 1;
}
.section-region {
  padding-right: 30px;
  min-width: 30% !important;
}
.left-section {
  width: 100% !important;
  span {
    color: black;
    display: inline-block;
    text-transform: uppercase;
    text-decoration: underline !important;
    line-height: 20px;
    font-size: 14px;
    font-weight: 700;
  }
}
</style>