<template lang="">
  <div class="infomation-tracking">
    <div class="info-print">
      <div class="infoID">
        <div class="order-id">SS00{{ $route.params.id }}</div>
        <div class="order-tracking">Đang giao dịch</div>
      </div>
      <div class="print-order">
        <Button>
          <div class="icon-print">
            <i class="pi pi-print"></i>
          </div>
          <div class="title">In đơn hàng</div>
        </Button>
      </div>
    </div>

    <div class="tracking">
      <Toast />
      <div class="card">
        <Steps :model="items" :readonly="true" />
      </div>

      <router-view
        v-slot="{ Component }"
        :formData="formObject"
        @prevPage="prevPage($event)"
        @nextPage="nextPage($event)"
        @complete="complete"
      >
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          label: "Đặt hàng",
          to: "/",
        },
        {
          label: "Duyệt",
          to: "/seat",
        },
        {
          label: "Đóng gói",
          to: "/payment",
        },
        {
          label: "Xuất kho",
          to: "/confirmation",
        },
        {
          label: "Hoàn thành",
          to: "/confirmation",
        },
      ],
      formObject: {},
    };
  },
};
</script>
<style lang="scss" scoped>
.infomation-tracking {
  display: flex;
  flex-direction: row;
  align-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
  .info-print {
    display: flex;
    flex-direction: column;
    .infoID {
      display: flex;
      flex-direction: row;
      gap: 40px;
      margin-bottom: 1rem;
      //width:0%;
      .order-id {
        //width:50%;
        font-weight: 700;
        font-size: 1.4rem;
      }
      .order-tracking {
        //width:50%;
        border: 1px solid rgb(255, 223, 155);
        border-radius: 1.4rem;
        background-color: rgb(255, 247, 231);
        text-overflow: ellipsis;
        white-space: nowrap;
        color: rgb(228, 156, 6);
        font-weight: 400;
        align-items: center;
        font-size: 0.8rem;
        padding: 0.3rem;
        text-align: center;
        vertical-align: middle;
      }
    }
    .print-order {
      display: flex;
      flex-direction: row;
      button {
        gap: 10px;
        border: 1px solid #d3d5d7;
        background-color: #fff;
        color: #0f1824;
        font-weight: 500;
      }
      .icon-print {
        color: rgb(163, 168, 175);
        font-size: 18px;
      }
    }
  }

  .tracking {
    width: 60%;
    margin-left: 14rem;
    background-color: none;
    border: 1px solid #fff;
    background: #fff;
    border-radius: 5px;
    box-shadow: 3px 3px 3px #d3d5d7;
  }
}
</style>
