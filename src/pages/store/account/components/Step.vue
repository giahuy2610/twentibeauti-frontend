<template lang="">
  <div class="step">
    <ul class="progressbar">
      <!-- <li :class="{complete: }">Đã đặt đơn hàng</li>
      <li class="complete">Xác nhận đơn hàng</li>
      <li class="active">Đang chuẩn bị đơn hàng</li>
      <li>Đang vận chuyển</li>
      <li>Giao hàng không thành công</li> -->
      <li
        v-for="(item, index) in statusName"
        :class="{
          complete: index + 1 < statusNum,
          active: index + 1 === statusNum,
        }"
      >
        {{ item }} 
        <p style="margin:5px; color:rgba(0,0,0,0.45); font-size:14px; font-weight:500">
            {{statusDate[index]}} days ago
        </p>
       
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      statusNum: 3,
      statusName: [
        "Đã đặt đơn hàng",
        "Xác nhận đơn hàng",
        "Đang chuẩn bị đơn hàng",
        "Đang vận chuyển",
        "Giao hàng không thành công",
      ],
      statusDate: [
        15 ,
        15,
        14,
        14,
        13,
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";
.step {
  // margin:20px 0px;

  .progressbar {
    counter-reset: step;
    padding: 0;


    @include mobile {
      display: flex;
      flex-direction: column;
    }
  }

  .progressbar li {
    float: left;
    list-style: none;
    position: relative;
    text-align: center;
    width: calc(100% / 5);

    @include mobile {
        width:auto;
       margin-top: 3rem;
       //text-align: right;
       //text-decoration: none;
       //margin-left:10px;
    }
  }
  .progressbar li:before {
    background: #fff;
    border: 2px solid #bebebe;
    border-radius: 50%;
    color: #bebebe;
    content: counter(step);
    counter-increment: step;
    display: block;
    font-weight: 700;
    height: 30px;
    line-height: 27px;
    margin: 0 auto 10px;
    text-align: center;
    width: 30px;
    @include mobile {
        //height:20px;
        //width:50px;
    }

  }
  .progressbar li:after {
    background: #979797;
    content: "";
    height: 3px;
    left: -50%;
    position: absolute;
    top: 15px;
    width: 100%;
    z-index: -1;

    @include mobile {
        width: 3px;
        height: 4rem;
        left: 50%;
        top: -60%;
        transform: translate(-50%);
    }
  }
  .progressbar li:first-child:after {
    content: none;
  }
  .progressbar li.active:after,
  .progressbar li.complete:after {
    background: #94c83d;
  }

  .progressbar li.active:before,
  .progressbar li.complete:before {
    background: #94c83d;
    border-color: #94c83d;
    color: #fff;
  }

  .progressbar li.active {
    color: #94c83d;
    font-weight: 700;
  }

  .progressbar li.complete {
    color: #333;
    font-weight: 700;
  }
}
</style>
