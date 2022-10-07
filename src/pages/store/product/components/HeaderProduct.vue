<template lang="">
    <div class="product-header">
        <div class="brand-name" role="presentation" @click="$router.push({ path: '/collections', replace: true })">TWENTI BEAUTI </div>
        <h1 class="info-title">Gel Tắm Cung Cấp Ẩm AVOCADO BODY WASH 300ml (GZ)</h1>
      </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.product-header {
    div 
    {
        margin-bottom: 18px;
    }
    line-height: 20px;
    font-size: 14px;

    .brand-name 
    {
        color: var(--primary-color);
        text-transform: uppercase;
        margin-bottom: 5px;
    }
    .brand-name:hover
        {
        text-decoration: underline;
        }
    .info-title {
        font-size: 18px;
        width: 95%;
    }
}
</style>