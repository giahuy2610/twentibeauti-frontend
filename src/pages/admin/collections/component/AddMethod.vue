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
        <label for="methodAuto"> Thêm sản phẩm tự động</label>
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
          <div class="flex">
            <select
              name="conditions"
              id="conditions"
              style="padding: 10px; border-radius: 10px; margin: 10px"
            >
              <option value="Nhà sản xuất">Nhà sản xuất</option>
              <option value="Tên sản phẩm">Tên sản phẩm</option>
              <option value="Loại sản phẩm">Loại sản phẩm</option>
              <option value="Giá sản phẩm">Giá sản phẩm</option>
              <option value="Tag sản phẩm">Tag sản phẩm</option>
            </select>
            <select
              name="compare"
              id="compare"
              style="padding: 10px; border-radius: 10px; margin: 10px"
            >
              <option value="bằng">bằng</option>
              <option value="lớn hơn">lớn hơn</option>
              <option value="nhỏ hơn">nhỏ hơn</option>
              <option value="kết thúc với">kết thúc với</option>
              <option value="chứa từ">chứa từ</option>
            </select>
            <input
              type="text"
              style="padding: 10px; border-radius: 10px; margin: 10px"
            />
          </div>
          <div style="padding: 10px">
            <button
              type="button"
              style="
                background: white;
                padding: 10px;
                cursor: pointer;
                border-radius: 10px;
                border-color: brown;
              "
            >
              Thêm điều kiện
            </button>
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

<style scoped>
.conditions {
  padding: 10px;
}
</style>
