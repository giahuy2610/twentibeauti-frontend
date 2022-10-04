<template lang="">
    <div class="main_content">
        <GeneralInfoVue></GeneralInfoVue>
        <ProductPrice></ProductPrice>
    </div>

</template>
<script>
    import GeneralInfoVue from './GeneralInfo.vue';
    import ProductPrice from './ProductPrice.vue';
export default {
    components: {
        GeneralInfoVue,
        ProductPrice,
    }
}
</script>
<style lang="scss" scoped>

    .main-content{
        display: flex;
        flex-direction: column;
        
    }
</style>