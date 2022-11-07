<template lang="">
  <div class="info-ticket">
    <div class="info-cus">
      <Card style="width: 25rem; margin-bottom: 2em">
        <template #title>
          <div class="header">Thông tin phiếu</div>
        </template>
        <template #content>
          <div class="body">
            <div class="customer">
              <div class="label">Khách hàng</div>
              <div class="name-phone">
                <a target="_blank" href="/admin/customerdetails">
                  <div class="name">Dịu Ái</div>
                <div class="phone">0868247806</div>
                </a>
                
              </div>
            </div>
            <div class="orderid">
              <div class="label">Mã đơn hàng gốc</div>
              <div class="id">
                <a href="/admin/orderdetails">1</a>
              </div>
            </div>
          </div>
        </template>
      </Card>
    </div>
    <div class="info-plus">
      <Card style="width: 25rem; margin-bottom: 2em">
        <template #title>
          <div class="header">Thông tin bổ sung</div>
        </template>
        <template #content>
          <div class="body">
            <div class="label">Ghi chú</div>
            <div class="text">
               <Textarea v-model="note" :autoResize="true" rows="1" cols="40" />
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>
<script>


export default {

  data () {
    return {
      note:null,
      order: [
        {
          id: "1"
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>

.info-ticket {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap:70px;
  .info-cus {
    width: 50%;

    .header {
      font-size: 18px;
      font-weight: 500;
      border-bottom: 1px solid #f2f2f2;
      padding-bottom: 1rem;
    }
    .body {
      display: flex;
      flex-direction: row;
      width: 100%;
      gap: 40px;
      .customer,
      .orderid {
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 50%;
        .label {
          font-weight: 500;
        }
        .name-phone {
          a{
            display: flex;
          flex-direction: row;
          gap: 10px;
          text-decoration: none;
          }
          cursor:pointer;
          .name {
            color: #0088ff;
          }
          .phone {
            color:#333;
          }
        }
        .id {
          a{
            color: #0088ff;
        cursor: pointer;
        text-decoration: none;
          }
        
      }
      .id:hover {
        text-decoration: underline;
  font-weight: 600;
      }
      }

    }
  }
  .info-plus {
    .header {
        font-size: 18px;
        font-weight: 500;
        border-bottom: 1px solid #f2f2f2;
      padding-bottom: 1rem;
    }
    .body {
        display:flex;
        flex-direction: column;
        gap:5px;
    }
  }
}
</style>
