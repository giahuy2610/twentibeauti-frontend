<template lang="">
    <div class="review-detail">
        <div class="region">
            <div class="form-item">
                <span>Đánh giá chi tiết</span>
                <div class="text_input">
                    <textarea placeholder="Viết đánh giá chi tiết" type="text"></textarea>
                </div>
                <div class="review-note">
                    Bạn có thể nói thêm về sản phẩm ở dưới đây, ví dụ như độ hoàn thiện, sự thoải mái
                </div>
            </div>
            <div class="flex-center">
                <Button label="Gửi cho chúng tôi" type="button" class="p-button-rounded p-button-success" />
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.region {
  
  padding: 10px;
  flex: 0 0 100%;
  width: 100%;
}
.review-detail {
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
      width: 100%;
      flex: auto;
      textarea {
        display: inline-block;
        width: 100%;
        border-radius: 5px;
        font-size: 16px;
        height: 6rem;
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
  .flex-center {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
}
</style>