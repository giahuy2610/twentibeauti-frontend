<template lang="">
  <div class="tracking-return shadow-2">
    <Card style="width: 100%; margin-top: 2em">
      <!-- <template #title>
            <div class="title">
                Nhận hàng trả lại
            </div>
        </template> -->
      <template #content>
        <div class="content">
          <div class="label">Nhận hàng trả lại</div>

          <div class="button">
            <div class="done">
              <button>Đã nhận và nhập kho</button>
            </div>
            <div class="no-done">
              <button>Chưa nhận hàng</button>
            </div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.tracking-return {
  width: 100%;
  margin-bottom: 2em;
  .content {
    display: flex;
    flex-direction: row;
    .label {
        width:70%;
        justify-content: center;
        padding-top:10px;
        font-weight: 500;
        font-size: 18px;
    }
    .button {
      display: flex;
      flex-direction: row;
      gap:10px;
      button {
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #fff;
        color:#333;
        border:1px solid rgba(0,0,0,0.12);
        border-radius: 4px;
        cursor:pointer;
        font-weight: 500;
        display: inline-block;
      }
    }
  }
}
</style>
