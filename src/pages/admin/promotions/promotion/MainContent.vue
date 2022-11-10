<template lang="">
    <div class="main_content">
        <div style="padding-right: 3.2rem;padding-left: 3.2rem;" class="layout">
            <section stylle="margin-bottom:1.5rem">
                <div class="next-tab">
                    <ul class="next-tab__list">
                        <li class="filter-tab-item" @click="$router.push({ path: '/admin/promotions/code/create'})">
                            <span>Mã khuyến mãi</span>
                        </li>
                        <li class="filter-tab-item" @click="$router.push({ path: ''})">
                            <span>Mã khuyến mãi</span>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>