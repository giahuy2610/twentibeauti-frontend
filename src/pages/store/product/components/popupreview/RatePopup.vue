<template lang="">
    <div class="rate">
        <div class="left">
          <div class="form-item">
            <span>Bạn có sẵn sàng giới thiệu sản phẩm này không?</span>
            <div class="admit flex-row">
              <button type="button" class="yes button-word">
                <span class="word">
                    Có
                </span>
              </button>
              <button type="button" class="no button-word">
                  <span class="word">
                      Không
                  </span>
              </button>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="form-item">
            <span>Đánh giá chung</span>
            <RatingStar></RatingStar>
          </div>
        </div>
      </div>
</template>
<script>
import RatingStar from '@/pages/store/product/ratingstar/RatingStar.vue';
export default {
  components:{
    RatingStar
  },
}
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";
.left {
    padding-left: 10px;
    padding-right: 10px;
    @include desktop {
    flex: 0 0 50%;
    }
    @include mobile {
      flex: 0 0 100%;
    }
  }
  .rate {
    flex-flow: row wrap;
    row-gap: 20px;
    display: flex;
    .form-item {
      flex-direction: column;
      display: flex;

      span {
        padding: 0 0 8px;
        font-weight: 600;
        font-size: 14px;
      }
      .admit {
        .word {
          word-wrap: normal;
          padding: 3px 10px;
          font-weight: 100;
        }
        .button-word {
          :hover {
            color: green;
            cursor: pointer;
          }
        }
        .yes {
          background: transparent;
          box-shadow: none;
          border-radius: 12px 0px 0px 12px;
          border-right: hidden;
          border: 2px solid rgb(239, 239, 239);
          width: auto;
          height: 3rem;
        }

        .no {
          background: transparent;
          box-shadow: none;
          border-radius: 0px 12px 12px 0px;
          border-left: hidden;
          border: 2px solid rgb(239, 239, 239);
          width: auto;
          height: 3rem;
        }
      }
    }
  }
</style>