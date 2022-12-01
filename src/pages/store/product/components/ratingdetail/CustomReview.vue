<template lang="">
    <div class="list-item">
        <div class="item-region">
            <div class="item">
                <div class="avatar">
                    <span class="avatar-image">
                        <img src="https://joeschmoe.io/api/v1/random" alt="avatar">
                    </span>
                </div>
                <div class="seperator">&nbsp;</div>
                <div class="date">
                    {{Creaton}}
                </div>
                <div class="star-rate">
                    <Rating v-model="Rating" :readonly="true" :cancel="false" offIcon="pi pi-star-fill" />
                </div>
            </div>
            <div class="short-review">
                {{ContentShort}}
            </div>
            <div class="long-review">
                {{ContentLong}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["Rating","Creaton","ContentShort","ContentLong"],
};
  
</script>
<style lang="scss" scoped>
.list-item {
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  color: #000;
  outline: none;
  box-sizing: border-box;
  .item-region {
    margin-bottom: 20px;
    width: 100%;
    .item {
      gap: 15px;
      margin-bottom: 12px;
      align-items: center;
      display: inline-flex;
      .avatar-image {
        display: inline-block;
        font-size: 18px;
        background: transparent;
        width: 32px;
        height: 32px;
        line-height: 32px;
        border-radius: 50%;

        img {
          position: relative;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .date
      {
        line-height: 20px;
        font-size: 14px;
        font-weight: 400;;
      }
    }
    .short-review
    {
        margin-bottom: 12px;
        line-height: 23px;
        font-size: 16px;
        font-weight: 700;
    }
    .long-review
    {
        line-height: 23px;
        font-size: 16px;
        font-weight: 400;
    }
  }
}
</style>