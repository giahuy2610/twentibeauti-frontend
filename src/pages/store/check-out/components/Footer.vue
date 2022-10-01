<template lang="">
  <div>
    <div class="footer">
      <div class="left">
        <div class="infinvoice" v-for="(item, index) in array">
          <div class="contentinvoice">
            <p>{{ item.label }}</p>
          </div>

          <div class="selectbutton">
            <SelectButton
              v-model="item.value"
              :options="options"
              aria-labelledby="single"
            />
          </div>
        </div>
      </div>
      <div class="right">
        <p>Coupon & Voucher</p>
        <span class="p-fluid">
          <div class="apply">
            <div class="grid p-fluid">
              <div class="p-inputgroup p-fluid">
                <InputText placeholder="Nhập mã giảm giá (nếu có)" />
                <Button label="Áp dụng" />
              </div>
            </div>
          </div>
        </span>

        <p>Bạn có phiếu mua quà?</p>
        <span class="p-fluid">
          <div class="dropdown">
            <Dropdown
              v-model="selectedCity1"
              :options="cities"
              optionLabel="name"
              optionValue="code"
              placeholder="Chọn chương trình"
            />
          </div>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "Không",
      options: ["Có", "Không"],
      array: [
        { label: "Ghi chú", value: "Không" },
        { label: "Đây là quà tặng?", value: "Không" },
        { label: "Thông tin xuất hóa đơn", value: "Không" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  margin: 20px;
  display: flex;
  flex-direction: row;

  .left {
    width: 70%;
    display: flex;
    flex-direction: column;
    margin-right: 40px;
    .note {
      display: flex;
      flex-direction: row;
      //margin: 10px;
      width: 100%;
      .contentnote {
        width: 70%;
        font-weight: bold;
        font-size: 1.5rem;
      }
      .selectbutton {
        padding: 20px;
        margin-right: 10px;
      }
    }
    .gift {
      display: flex;
      flex-direction: row;
      //argin: 10px;
      width: 100%;
      .contentgift {
        width: 70%;
        font-weight: bold;
        font-size: 1.5rem;
      }
      .selectbutton {
        padding: 20px;
        margin-right: 10px;
      }
    }
    .infinvoice {
      display: flex;
      flex-direction: row;
      //argin: 10px;
      width: 100%;
      .contentinvoice {
        width: 70%;
        font-weight: bold;
        font-size: 1.5rem;
      }
      .selectbutton {
        padding: 20px;
        margin-right: 10px;
      }
    }
  }
  .right {
    width: 40%;
    border: 1px solid black;
    border-radius: 10px;
    margin-left: 20px;
    padding: 10px;
    margin-right: 20px;
    .apply {
      margin: 20px;
    }
    .dropdown {
      margin: 20px;
    }
  }
}
</style>
