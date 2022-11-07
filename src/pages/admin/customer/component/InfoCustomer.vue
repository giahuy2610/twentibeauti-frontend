<template lang="">
  <div class="info-cus shadow-2">
    <Card style="width: 40rem; margin-bottom: 2em">
      <template #title>
        <div class="info-general">

        <div class="header">
          <div class="header-title">
            <div class="icon-ava">
              <i class="pi pi-user"></i>
            </div>
            <h1 class="MyName">Dịu Ái</h1>
          </div>
          <div class="MyAddress">
            44/37/1/3,HT43,khu phố 4, phường Hiệp Thành,quận 12,TPHCM, Phường
            Tân Hưng, Quận 7, Vietnam
          </div>
        </div>
        <div class="note">
        <span class="note-head">Ghi chú</span>
        <Textarea class="text" v-model="value1" rows="3" cols="45" placeholder="Nhập ghi chú về khách hàng" />
      </div>          
    </div>
      </template>
      <template #content>
      <div class="info-order">
        <div class="new-order">
            <span class="label">Đơn hàng mới nhất</span>
            <div class="detail">1</div>
        </div>
        <div class="total-order">
            <span class="label">Tổng chi tiêu</span>
            <div class="detail">500.000</div>
        </div>
        <div class="number-order">
            <span class="label">Số lượng đơn hàng</span>
            <div class="detail">2</div>
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
            value1: '',
        }
    }
}
</script>
<style lang="scss" scoped>
.info-cus {
    .info-general {
        border-bottom: 1px solid #d3d5d7;
    .header {
          display: flex;
          flex-direction: column;
          gap: 5px;
          //border-bottom: 1px solid #d3d5d7;
          padding-top: 10px;
          border-width: 50%;
          margin-bottom: 10px;
          .header-title {
            display: flex;
            flex-direction: row;
            gap: 10px;
  
            .icon-ava {
              border: 1px solid #d3d5d7;
              background-color: #d3d5d7;
              border-radius: 50%;
              width: 45px;
              align-items: center;
              text-align: center;
              //padding-bottom: 5px;
            }
            .MyName {
              font-size: 20px;
              margin-top: 7px;
              font-weight: 600;
            }
          }
          .MyAddress {
             
              display: flex;
              flex-direction: row;
              margin-left: 10px;
              font-size: 16px;
              font-weight: 400;
              color:var(--text-color-secondary);   
          }
        }
        .note {
            display: flex;
            flex-direction: column;
            gap:10px;
            margin-bottom: 20px;
            .note-head{
                font-size: 18px;
                font-weight: 500;
            }
        }
}
.info-order {
    display: flex;
    flex-direction: row;
    gap:50px;
    padding-left:50px;
    .new-order,.total-order,.number-order {
        display: flex;
            flex-direction: column;
            gap:10px;
            .label {
                font-weight: 500;
            }
        .detail {
            text-align: center;
        }
    }
}
}
</style>
