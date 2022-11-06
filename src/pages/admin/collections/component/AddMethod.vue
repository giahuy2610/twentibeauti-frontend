<template>
  <Card>
    <template #title>Chọn sản phẩm </template>
    <template #content>
      <div class="field-radiobutton px-3">
        <RadioButton
          inputId="methodByHand"
          name="method"
          value="Thêm sản phẩm thủ công"
          v-model="method"
          v-on:click="active = false"
        />
        <label for="methodByHand">Thêm sản phẩm thủ công</label>
      </div>
      <div class="field-radiobutton px-3">
        <RadioButton
          inputId="methodAuto"
          name="method"
          value="Thêm sản phẩm tự động"
          v-model="method"
          v-on:click="active = !active"
        />
        <div for="methodAuto">Thêm sản phẩm tự động</div>
      </div>
      <Card v-show="active">
        <template #content>
          <div class="flex">
            <div class="">Sản phẩm phải thoả mãn</div>
            <div class="flex">
              <div class="field-radiobutton px-3">
                <RadioButton
                  inputId="allConditions"
                  name="condition"
                  value="Tất cả điều kiện"
                  v-model="condition"
                />
                <label for="allConditions">Tất cả điều kiện</label>
              </div>
              <div class="field-radiobutton px-3">
                <RadioButton
                  inputId="oneOfConditions"
                  name="condition"
                  value="Một trong các điều kiện"
                  v-model="condition"
                />
                <label for="oneOfConditions">Một trong các điều kiện</label>
              </div>
            </div>
          </div>
          
       
          
        </template>
      </Card>
    </template>
  </Card>
</template>

<script>



export default {
  data() {
    return {
      condition: null,
      method: null,
      active: false,
    };
  },
};
</script>

<style></style>
