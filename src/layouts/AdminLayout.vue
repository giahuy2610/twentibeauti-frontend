<template lang="">
    <div class="wrapper">
        <SideBar></SideBar>
        <div class="main-content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import SideBar from "@/components/admin/side-bar/SideBar.vue";

export default {
    components: {
        SideBar,
    }


}
</script>
<style lang="scss" scoped>
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;

    }
</style>