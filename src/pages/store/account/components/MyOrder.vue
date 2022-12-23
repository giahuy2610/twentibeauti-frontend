<template lang="">
  <Wrapper>
    <div
      class="myorder"
      v-for="(item, index) in orders.slice(
        paginator['first'],
        paginator['first'] + 5
      )"
    >
      <div class="myorder-top">
        <div class="list-items">
          <ul class="list">
            <li class="item">
              <div class="id-date">{{ item.CreatedOn }}</div>
              <div class="id-order">
                <span class="label">Mã đơn hàng:</span>
                <span class="id">SS00{{ item.IDInvoice }}</span>
              </div>

              <div class="delivery-form">
                <span class="label">Tổng tiền:</span>
                <span class="total"
                  >{{ Intl.NumberFormat().format(item.TotalValue) }}đ</span
                >
              </div>
              <div class="address">
                <span class="label">Giao đến:</span>
                <span class="txtaddress">
                  {{ item.Address.AddressDetail }}
                  {{ item.Address.Ward }}
                  {{ item.Address.District }}
                  {{ item.Address.City }}</span
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="myorder-bottom">
        <div class="tracking">
          <div class="status">
            <span class="label">Tình trạng:</span>
            <span class="status-order">{{
              trackingStatus[item.IDTracking - 1]
            }}</span>
          </div>
          <div class="btn-details">
            <button
              type="button"
              class="btn"
              @click="
                $router.push({
                  name: 'order details',
                  params: { id: item.IDInvoice },
                })
              "
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="paginator">
      <Paginator
        :rows="5"
        :totalRecords="orders.length"
        @page="paginator = $event"
      ></Paginator>
    </div>
  </Wrapper>
</template>
<script>
import Wrapper from "../../../Wrapper.vue";
export default {
  components: {
    Wrapper,
  },
  props: ["orders"],
  data() {
    return {
      trackingStatus: [
        "Chờ xác nhận",
        "Đang chuẩn bị đơn",
        "Đang giao",
        "Đã giao",
        "Đã hủy",
        "Đơn không thành công",
      ],
      paginator: { "page": 0, "first": 0, "rows": 10, "pageCount": 7 },
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";

.myorder {
  border: 1px solid #d3d7d3;
  border-radius: 15px;
  margin-bottom: 15px;
  @include mobile {
    //margin:0;
  }
  .myorder-top {
    .list {
      list-style: none;
      padding-inline-start: 10px;
      padding: 10px;
      border-bottom: 1px solid #d3d7d3;
      .item {
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: space-between;

        .label {
          font-weight: 600;
        }
        .id-date {
          display: flex;
          flex-direction: row;
        }
        .id-order,
        .delivery-form,
        .address {
          display: flex;
          flex-direction: row;
          width: 100%;
          .label {
            width: 20%;
            @include mobile {
              width: 30%;
            }
          }
        }
      }
    }
  }
  .myorder-bottom {
    padding: 5px;
    .tracking {
      display: flex;
      flex-direction: row;
      width: 100%;
      @include mobile {
        display: flex;
        flex-direction: column;
      }
      .status {
        padding-left: 5px;
        display: flex;
        width: 100%;
        flex-direction: row;
        font-weight: 600;
        .label {
          width: 25%;
          @include mobile {
            width: 30%;
          }
        }
      }
      .btn-details {
        button {
          margin-top: -10px;
          border: 1px solid rgb(0, 0, 0);
          border-radius: 38px;
          font-weight: 700;
          box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
          user-select: none;
          touch-action: manipulation;
          height: 40px;
          padding: 8px 15px;
          background-color: #fff;
          width: 110px;
          //line-height: 20px;
          @include mobile {
            // margin-left: 250px;
            margin-top: 5px;
            margin-bottom: 5px;
            float: right;
          }
        }
        .btn:hover {
          color: #94c83d;
        }
      }
    }
  }
}
</style>
