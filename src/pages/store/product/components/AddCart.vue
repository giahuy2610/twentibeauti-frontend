<template lang="">
    <div class="price">
        <p><b>{{ Intl.NumberFormat().format(listPrice) }} đ</b></p>
    </div>
    <div class="add-cart-align">
        <div class="item flex-row">
            <div class="quantity flex-row">
                <button type="button" class="minus">
                    <span class="minus-outline">
                        <i class="pi pi-minus"></i>
                    </span>
                </button>
                <div class="quantity-text"><p>1</p></div>
                <button type="button" class="plus">
                    <span class="plus-outline">
                        <i class="pi pi-plus"></i>
                    </span>
                </button>
            </div>
            <div class="confirm-add">
                <Button type="button" class="btn-add-cart p-button-rounded p-button-secondary flex-row">
                    <span class="cart"></span>
                    <span class="ml-2 font-bold">Thêm vào giỏ hàng</span>
                </Button>
            </div>
            <div class="buy">
                <Button type="button" class="p-button-rounded p-button-success flex-row">
                    <span class="ml-1 font-bold">MUA NGAY</span>
                </Button>
            </div>
            <div class="add-favourite">
                <Button type="button" class="pi pi-heart p-button-rounded p-button-outlined" style="width: 3rem"></Button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            listPrice: 369000,
        }
    }
    
}
</script>
<style lang="scss" scoped>
.price
{
    font-size: 1.5rem;
}
.flex-row
{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.add-cart-align
{
    .item
    {
        gap : 1.5rem;
        Button
        {
            height: 3rem;
        }
        .quantity
        {   
            .minus
            {   
                background: transparent;
                box-shadow: none;
                border-radius: 38px 0px 0px 38px;
                border-right: hidden;
                border: 2px solid rgb(239, 239, 239);;
                width: 3rem;
                height: 3.1rem;
            }
            .quantity-text
            {
                border-top: 2px solid rgb(239, 239, 239);
                border-bottom: 2px solid rgb(239, 239, 239);
                width: 3rem;
                height: 3.1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center !important;
            }
            .plus
            {
                background: transparent;
                box-shadow: none;
                border-radius: 0px 38px 38px 0px;
                border-left: hidden;
                border: 2px solid rgb(239, 239, 239);
                width: 3rem;
                height: 3.1rem;
            }
        }
        .confirm-add
        {
            
            .btn-add-cart
            {
                padding : 14px 23px;
            }
            .cart:before
            {
                width: 100%;
                height: 100%;
                display: inline-block;
                content : '';
                background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Ic_shopping_cart_48px.svg/1024px-Ic_shopping_cart_48px.svg.png');
                background-size: contain;
            }
            .cart
            {
                width: 2rem;
                height: 2rem;
            }
        } 
    }
}
</style>