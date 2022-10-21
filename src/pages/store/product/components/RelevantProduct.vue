<template lang="">
    <div class="divider-horizontal"></div>
    <div class="flex-row">
        <LeftSection></LeftSection>
        <RightSection></RightSection>
    </div>
</template>
<script>
import LeftSection from '@/pages/store/product/components/relevantproduct/LeftSection.vue';
import RightSection from '@/pages/store/product/components/relevantproduct/RightSection.vue';
export default {
    components: {
        LeftSection,
        RightSection,
    }
}
</script>
<style lang="scss" scoped>
.flex-row {
    position: relative;
    display: flex;
    flex-direction: row;
}

</style>