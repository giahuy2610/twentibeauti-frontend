<template lang="">
<div class="left-section">
  <div class="section-region">
    <h2 class="header">Đánh giá</h2>
    <div class="flex-row num-review">
        <div><strong>3</strong>&nbsp;Đánh giá</div>
        <Button class="p-button-text" @click="Popup">
            <span class="review">Viết đánh giá</span>
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
.section-region{
  padding-right: 30px;
}
.flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
.left-section {
  width: 30% !important;

  .num-review {
    position: relative;

    Button {
      position: absolute;
      right: 0;
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
