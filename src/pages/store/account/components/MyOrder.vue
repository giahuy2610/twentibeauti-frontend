<template lang="">
  <div class="myorder" v-for="item in 2">
    <div class="myorder-top">
      <div class="list-items">
        <ul class="list">
          <li class="item">
            <div class="id-date">
              <div class="date-order">30/09/2022</div>
              <div class="id-order">
                <span class="label">Mã đơn hàng:</span>
                <span class="id">SS001</span>
              </div>
            </div>
            <div class="delivery-form">
              <span class="label">Tổng tiền:</span>
              <span class="total">850.000đ</span>
            </div>
            <div class="address">
              <span class="label">Giao đến:</span>
              <span class="txtaddress"
                >Phường Linh Trung, Quận Thủ Đức, TPHCM</span
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
          <span class="status-order">Giao hàng không thành công</span>
        </div>
        <div class="btn-details">
          <button
            type="button"
            class="btn"
            @click="$router.push({ path: '/orders/details' })"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="paginator">
    <Paginator :rows="10" :totalRecords="totalRecords"></Paginator>
  </div>
</template>
<script>
export default {
  data() {
    return {
      first: 0,
      totalRecords: 120,
      totalRecords2: 12,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";
.myorder {
  border: 1px solid #d3d7d3;
  border-radius: 15px;
  margin: 20px 0px;
  @include mobile {
    //margin:0;
  }
  .myorder-top {
    //padding-bottom: 15px;
    .list {
      list-style: none;
      padding-inline-start: 10px;
      padding-bottom: 15px;
      //padding: 15px;
      // display: flex;
      //flex-direction: column;
      //gap: 15px;
      border-bottom: 1px solid #d3d7d3;
      @include mobile {
        //margin:0;
      }
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
          gap: 40px;
          @include mobile {
            gap: 20px;
          }
          .label {
            font-weight: 500;
          }
          .id-order {
            display: flex;
            flex-direction: row;
            gap: 10px;
          }
        }
        .delivery-form {
          display: flex;
          flex-direction: row;
          gap: 50px;
          @include mobile {
            gap: 20px;
          }
        }
        .address {
          display: flex;
          flex-direction: row;
          gap: 50px;
          .label {
            @include mobile {
              word-wrap: break-word;
              word-break: break-all;
            }
          }
          @include mobile {
            display: flex;
            flex-direction: row;
            gap: 0px;
            // font-size: 14px;
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
        gap: 15px;
      }
      .status {
        padding-left: 5px;
        display: flex;
        flex-direction: row;
        gap: 10px;
        font-weight: 600;
        width: 100%;
        @include mobile {
          padding-left: 5px;
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
