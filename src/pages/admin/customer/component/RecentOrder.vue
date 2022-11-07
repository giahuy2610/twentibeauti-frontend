<template lang="">
  <div class="recentorder shadow-2">
    <Card style="width: 40rem; margin-bottom: 2em">
      <template #title>
        <div class="title">
          <span style="width: 70%; font-size:20px; font-weight:600">Đơn hàng gần đây</span>
          <div
            class="all-order"
            @click="
              $router.push({
                path: '/admin/listorders',
              })
            "
          >
            Toàn bộ đơn hàng
          </div>
        </div>
      </template>
      <template #content>
        <table>
          <tbody>
            <tr class="my-order">
              <td
                style="
                  display: flex;
                  flex-direction: column;
                  gap: 10px;
                  align-content: space-between;
                "
              >
                <div
                  class="line-info"
                  style="
                    display: flex;
                    flex-direction: row;
                    gap: 400px;
                    align-content: space-between;
                  "
                >
                  <div
                    class="item hover-primary-color"
                    style="
                      width: 80%;
                      color: var(--text-admin-color);
                      cursor: pointer;
                    "
                    @click="
                      $router.push({
                        path: '/admin/orderdetails',
                      })
                    "
                  >
                    Đơn hàng 1
                  </div>
                  <div class="time-order" style="width: 20%; text-align: right">
                    04/11/2022
                  </div>
                </div>
                <div
                  class="total"
                  style="
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    align-content: space-between;
                  "
                >
                  <div class="price" style="width: 72%">800.000</div>
                  <div
                    class="status"
                    style="
                      background-color: #ffc58b;
                      border-radius: 2rem;
                      padding: 0 1rem;
                      width:8.47rem;
                      font-size:14px;
                      margin-left:20px;
                    "
                  >
                    Chưa thanh toán
                  </div>
                </div>
                
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      order: [
        {
          id: 1,
          date: "04/11/2022",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.recentorder {
  .title {
    display: flex;
    flex-direction: row;
    // gap:50px;
    align-content: space-between;
    width: 100%;
    .all-order {
      width: 30%;
      font-weight: 400;
      font-size: 16px;
      color: var(--text-admin-color);
      text-align: right;
      margin-top: 10px;
    }
    .all-order:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .my-order {
    table {
      tr {
        display: table-row;
      }
      tr:last-child > td {
        border-bottom: none;
      }
      td {
        //padding: 6px 10px;
        .line-info {
          display: flex;
          flex-direction: row;
         // width: 100%;
          gap: 10px;
          .item {
            cursor: pointer;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}
</style>
