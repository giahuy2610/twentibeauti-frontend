<template lang="">
<div class="left-section">
  <div class="section-region">
    <h2 class="header">Đánh giá</h2>
    <div class="flex-row num-review">
        <div class=""><strong>3</strong>&nbsp;Đánh giá</div>
        <div class="seperator">&nbsp;</div>
        <Button class="p-button-text" @click="Popup">
            <span class="review" style="white-space: nowrap">Viết đánh giá</span>
        </Button>
    </div>
    <div class="star-rate">
        <i v-for="index in 5" class="pi pi-star-fill star"></i>
    </div>
    <div class="rate flex-row">
        <div class="score">5</div>
        <div class="progress-line"></div>
        <div class="num-rate">(0)</div>
    </div>
    <div class="rate flex-row">
        <div class="score">4</div>
        <div class="progress-line"></div>
        <div class="num-rate">(0)</div>
    </div>
    <div class="rate flex-row">
        <div class="score">3</div>
        <div class="progress-line"></div>
        <div class="num-rate">(0)</div>
    </div>
    <div class="rate flex-row">
        <div class="score">2</div>
        <div class="progress-line"></div>
        <div class="num-rate">(0)</div>
    </div>
    <div class="rate flex-row">
        <div class="score">1</div>
        <div class="progress-line"></div>
        <div class="num-rate">(0)</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods:{
    Popup(){
        this.$emit('popupmsg');
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/mixin";
.star-rate
{
  
}
.section-region{
  padding-right: 30px;
}
.flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
.left-section {
  

  @include mobile {
    width: 90% !important;
  }
  @include mini-tablet {
    width: 40% !important;
  }
  @include tablet {
    width: 40% !important;
  }
  @include desktop {
    width: 30% !important;;
  }

  .num-review {
    position: relative;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;

    .seperator
    {
      margin: 0px;
      position: relative;
      top: -0.06em;
      display: inline-block;
      height: 0.9em;
      margin: 0 8px;
      vertical-align: middle;
      border-top: 0;
      border-left: 1px solid rgba(0,0,0,.06);
    }

  }

  .star {
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    margin-top: 1rem;
    margin-right: 5px;
    font-size: 2rem;
  }

  .rate {
    margin-bottom: 1rem;

    .progress-line {
      position: relative;
      margin-right: 10px;
      margin-left: 10px;
      width: 100%;
      height: 5px;
      overflow: hidden;
      vertical-align: middle;
      background-color: #f5f5f5;
      border-radius: 100px;
    }
  }
}
</style>
