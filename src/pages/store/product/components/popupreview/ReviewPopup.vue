<template lang="">
    <div class="review">
        <div class="left">
          <div class="form-item">
            <span>Tóm tắt đánh giá</span>
            <div class="text_input">
              <input placeholder="Tóm tắt đánh giá của bạn" type="text">
            </div>
            <div class="review-note">
              Tóm tắt mọi thứ trong 1 câu. Ví dụ: Tôi cực kì ưng ý
            </div>
          </div>
        </div>
        <div class="right">
          <div class="form-item">
            <span>Hình ảnh</span>
          </div>
            <div class="image-load" >
              <input type="file" id="uploadmyfile" ref="fileInput" />
              <Button @click="trigger"  type="button" class="btn-load-img p-button-rounded p-button-outlined p-button-secondary flex-row">
                <label for="uploadmyfile">
                  <span class="icon-upload-to-cloud"></span>
                  <span class="ml-2">Tải lên</span>
                </label>
              </Button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  setup(context){
    const trigger = () => {
      context.refs.fileInput.click()
    };
    return {
      trigger 
    };
  }
};
</script>
<style lang="scss" scoped>
@import url("@/assets/icomoon/style.css");
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
.review {
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
    .text_input {
      max-width: 100%;
      flex: auto;
      input {
        display: inline-block;
        width: 90%;
        border-radius: 5px;
        font-size: 16px;
        height: 2.65rem;
        text-indent: 10px;
        border-color: var(--border-color);
      }
    }
    .review-note {
      font-size: 14px;
      line-height: 22px;
      color: var(--text-secondary);
      margin: 0.5rem 0rem;
    }
  }

  #uploadmyfile
  {
    display: none;
  }
  label
  {
    display: flex;
    cursor: pointer;
    align-items: center;
  }
  /*
  .upload:before {
    width: 100%;
    height: 100%;
    display: inline-block;
    content: "";
    background-image: url("https://www.sparebank1.no/content/dam/SB1/ikoner/GUI-ikoner/last-opp-ikon.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
  .upload {
    width: 1.7rem;
    height: 1.7rem;
  }
  */
}
</style>