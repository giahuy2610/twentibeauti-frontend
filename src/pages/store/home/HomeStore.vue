<template lang="">
    <div style ="height: 100vh; display:flex; justify-content: center; align-items: center">
        <ProductCard uid='123'></ProductCard>
        <ButtonPrimary message="Xem tất cả"></ButtonPrimary>
    </div>
</template>
<script>
import ProductCard from "@/components/atoms/productCard/ProductCard.vue"
import ButtonPrimary from "@/components/atoms/buttonPrimary/ButtonPrimary.vue"
export default {
    components: {
        ProductCard,
        ButtonPrimary,
    }
}
</script>
<style lang="">
    
</style>