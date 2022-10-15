<template lang="">
  <div class="info-plus">
    <Card style="width: 20rem; margin-bottom: 2em; margin-left: 2em">
      <template #title>
        <div class="title">Thông tin bổ sung</div>
      </template>
      <template #content>
        <div class="body">
          <div class="orderby">
            <div class="label">Bán bởi:</div>
            <div class="text">
              <SplitButton
                label="nhân viên"
                :model="items"
                class="p-button-text mb-2"
              ></SplitButton>
            </div>
          </div>
          <div class="date-ship">
            <div class="label">Hẹn giao hàng</div>
            <div class="text">
              <Calendar inputId="icon" v-model="date3" :showIcon="true" />
            </div>
          </div>
          <div class="idpro">
            <div class="label">Mã đơn hàng</div>
            <div class="text">
                <InputText type="text" v-model="value5" placeholder="SS001" disabled style="width:240px" />
            </div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // items: [
      //     {
      //         label: 'Update',
      //         command: () => {
      //             this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
      //         }
      //     },
      //     {
      //         label: 'Delete',
      //         command: () => {
      //             this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
      //         }
      //     },
      //     {
      //         label: 'Vue Website',
      //         command: () => {
      //             window.location.href = 'https://vuejs.org/'
      //         }
      //     },
      //     {   label: 'Upload',
      //         command: () => {
      // 			window.location.hash = "/fileupload"
      // 		}
      //     }
      // ],
    };
  },
};
</script>
<style lang="scss" scoped>
.title {
    font-size: 16px;
    padding-bottom: 10px;
    border-bottom: 1px solid #D3D5D7;
}
.body {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 14px;
  gap:10px;
  .orderby {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 10px;
    //padding:20px;
    text-align: center;
    margin:0;
    .label {
      //width: 50%;
      text-align: left;
    }
    .text {
      //padding-top:-30px;
      border: none;
      //top:-10px;
    }
  }
  .dateship {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    //padding:20px;
    text-align: center;
    .label {
      width: 50%;
      text-align: left;
    }
    .text {
      //padding-top:15px;
      border: none;
      //bottom:30px;
      width: 100%;
    }
  }
}
</style>
