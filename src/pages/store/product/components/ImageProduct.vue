<template lang="">
    <div class="scroll-wrapper" ref="wrapper" >
        <Button
            @click="scrollUp"
            icon="pi pi-angle-up "
            class="btn-up p-button p-button-rounded p-button-outlined"
        />
        <Button class="pag p-button-lg p-button-rounded p-button-outlined"/>
        <Button class="pag-down pag p-button-lg p-button-rounded p-button-outlined"/>
        <Button
          @click="scrollLeft"
          icon="pi pi-angle-down"
          class="btn-down p-button p-button-rounded p-button-outlined"
        />
    </div>
    <div class="img">
        <img src="https://image.hsv-tech.io/400x0/tfs/common/db6c3fd2-2d35-41c3-83ae-af6289768918.webp" alt="Ảnh sản phẩm">
    </div>
</template>
<script>
export default {
    methods: {
        
    }
};
</script>
<style lang="scss" scoped>
.scroll-wrapper 
{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-x: scroll;
    scroll-behavior: smooth;
    flex-basis: 170px;
    
    &::-webkit-scrollbar {
        display: none;
    }
    
    .pag 
    {
        background-image: url("https://image.hsv-tech.io/400x0/tfs/common/db6c3fd2-2d35-41c3-83ae-af6289768918.webp");
        background-size: 165%;
        background-size: contain;
        background-position: 45% 53%;
        position: absolute;
        top: 20%;
        gap: 0.5rem;
    }
    .pag-down 
    {
        top: 35% !important;
    }
    .btn-up {
        position: absolute;
        top: 0%;
        z-index: 100;
    }
    .btn-down {
        position: absolute;
        top: 90%;
        z-index: 100;
    }

}
</style>