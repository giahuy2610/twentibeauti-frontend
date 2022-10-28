<template lang="">
<div class="flex-align">
    <div class="group">
        <div class="confirm-add">
            <Button type="button" class="p-button-rounded p-button-secondary flex-row">
                <span class="icon-shopping-bag"></span>
                <span class="ml-2 font-bold nowrap">Thêm vào giỏ hàng</span>
            </Button>
        </div>
        <div class="buy">
            <Button type="button" class="p-button-rounded p-button-success flex-row">
                <span class="ml-1 font-bold nowrap">MUA NGAY</span>
            </Button>
        </div>
    </div>
    <div class="add-favourite">
        <Button type="button" class="pi pi-heart p-button-rounded p-button-outlined" style="width: 3rem"></Button>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("@/assets/icomoon/style.css");
@import "@/scss/mixin";

Button {
    height: 3rem;
}
.group{
  display: flex;
  flex-wrap: wrap;
  gap:10px;
}
.flex-align {
  gap:10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
@include mobile {
    .group{
      gap:5px
    }
    .cart{
      display: none;
    }
    .flex-align {
        gap:5px;
        flex-direction: row-reverse;
    }
}

@include mini-tablet {
  .group{
    gap:15px
  }
  .cart{
    display: none;
  }
  .flex-align {
      gap:15px;
      flex-direction: row-reverse;
  }
}
@include tablet {
    .group{
      gap:15px
    }
    .cart{
      display: none;
    }
    .flex-align {
        gap:15px;
        flex-direction: row-reverse;
    }
  }
.nowrap {
    white-space: nowrap;
    text-overflow: ellipsis;
}

.confirm-add {
    /* .cart:before {
        width: 100%;
        height: 100%;
        display: inline-block;
        content: "";
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Ic_shopping_cart_48px.svg/1024px-Ic_shopping_cart_48px.svg.png");
        background-size: contain;
        background-repeat: no-repeat;
    } */

    .cart {
        width: 2rem;
        height: 2rem;
    }
}
</style>
