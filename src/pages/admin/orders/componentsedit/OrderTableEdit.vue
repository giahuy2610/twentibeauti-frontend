<template>
  <div class="product-table-wrapper shadow-2">
    <DataTable
      :value="products"
      class="p-datatable-products"
      :rows="10"
      dataKey="id"
      :rowHover="true"
      v-model:selection="selectedProducts"
      v-model:filters="filters"
      filterDisplay="menu"
      :loading="loading"
      responsiveLayout="scroll"
    >
      <template #header>
        <div class="header">
          <h5 class="m-0">Thông tin sản phẩm</h5>
          <a class="check-stock" href="#check-stock">Kiểm tra tồn kho</a>
        </div>

        <div class="dialog overlay" id="check-stock">
           <a class="overlay-close" href="#"></a>
           <div class="dialog-stock">
            <div class="dialog-header">
              <a class="btn-close" href="#">&times;</a>
              <h4>Kiểm tra tồn kho</h4>
            </div>
            <div class="dialog-body">
              <table style="border: #E8EAEB" >
                <tr >
                  <th   rowspan="2">Mã SKU</th>
                  <th rowspan="2">Tên sản phẩm</th>
                  <th rowspan="2">Số lượng</th>
                  <th colspan="2">Chính sách giá</th>
                  <th colspan="2">Kho</th>
                </tr>
                <tr>
                  <th>Giá bán lẻ</th>
                  <th>Giá bán buôn</th>
                  <th>Tồn kho</th>
                  <th>Có thể bán</th>
                </tr>
                <tr>
                  <td>PVN03</td>
                  <td>Nước hoa</td>
                  <td>1</td>
                  <td>0</td>
                  <td>0</td>
                  <td>96</td>
                  <td>96</td>
                </tr>
              </table>
            </div>
           </div>
         
        </div>
      </template>
      <template #empty> No customers found. </template>
      <template #loading> Loading customers data. Please wait. </template>
      <!-- <Column selectionMode="multiple" headerStyle="width: 1rem"></Column> -->

      <Column field="stt" header="STT" style="min-width: 5rem">
        <template #body="{ data }">
          {{ data.id }}
        </template>
        
      </Column>
      <Column field="img" header="Ảnh" style="min-width: 5rem; cursor:pointer;">
        <template #body="{ data }">
          <img
            :alt="data.images"
            src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
            width="32"
            style="vertical-align: middle"
          />
        </template>
        
      </Column>
      <Column field="name" header="Tên sản phẩm" style="min-width: 10rem">
        <template #body="{ data }">
          <p 
            @click="
              $router.push({
                path: '/admin/products/create',
                query: { sku: data.name },
              })
            "
            class=" namePro cursor-pointer"
          >
            {{ data.name }}
          </p>
        </template>
        
      </Column>
      <Column field="quatity" header="Số lượng" style="min-width: 7rem">
        <template #body="{ data }">
          {{ data.number }}
        </template>
        
      </Column>
      <Column
        field="price"
        header="Đơn giá"
        dataType="numeric"
        style="min-width: 7rem"
      >
        <template #body="{ data }">
          {{ formatCurrency(data.listprice) }}
        </template>
        
      </Column>
      <Column
        field="discount"
        header="Chiết khấu"
        dataType="numeric"
        style="min-width: 7rem"
      >
        <template #body="{ data }">
          {{ formatCurrency(data.salePrice) }}
        </template>
        
      </Column>
      <Column
        field="total"
        header="Thành tiền"
        dataType="numeric"
        style="min-width: 7rem"
      >
        <template #body="{ data }">
          {{ formatCurrency(data.salePrice) }}
        </template>
        
      </Column>
      <template #footer>
        <div class="footer">
          <div class="note">
            <div class="note-title" style="font-weight:600;">Ghi chú đơn hàng</div>
            <div class="text">
              <Textarea
                v-model="value2"
                :autoResize="true"
                rows="3"
                cols="30"
                placeholder="VD: Hàng tặng gói riêng"
              />
            </div>
          </div>
          <div class="info-payment">
            <div class="total">
              <div class="label">Tổng tiền</div>
              <div class="money">300.000</div>
            </div>
            <div class="discount">
              <div class="label">Chiết khấu</div>
              <div class="money">0</div>
            </div>
            <div class="price-ship">
              <div class="label">Phí giao hàng</div>
              <div class="money">0</div>
            </div>
            <div class="voucher">
              <div class="label">Mã giảm giá</div>
              <div class="money">0</div>
            </div>
            <div class="total-of-cus">
              <div class="label">Khách phải trả</div>
              <div class="money">300.000</div>
            </div>
          </div>
        </div>
      </template>
    </DataTable>
  </div>
</template>

<script>
import { FilterMatchMode, FilterOperator } from "primevue/api";

export default {
  data() {
    return {
      products: null,
      selectedProducts: null,
      loading: true,
      products: [
        {
          id: 1000,
          name: "Kem Nền 20g",
          number: 10,
          images: ["abc.png", "bcd.png"],
          listprice: 80000,
          salePrice: 75000,
        },
      ],
    };
  },
  created() {},
  mounted() {
    // this.products.forEach(
    //   (products) => (products.createdOn = new Date(products.createdOn))
    // );
    this.loading = false;
  },
  methods: {
    formatCurrency(value) {
      return value.toLocaleString( {
        style: "currency",
        currency: "VND",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.namePro:hover{
  text-decoration: underline;
  color:var(--text-admin-color);
}
.dialog {
  position: fixed;
  top:0;
  right:0;
  left:0;
  bottom:0;
  z-index: 10;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  
  .overlay-close {
    position: absolute;
    width:100%;
    height:100%;
  }
}
.dialog:target {
  visibility: visible;
}
.dialog-stock {

display:flex;
flex-direction: column;
width: 80%;
  
  position: relative;
 
  background-color: #fff;
 border-radius: 5px;
  display:block;
.dialog-header {
  border-bottom: 1px solid #D3D5D7;
 // padding-bottom: 20px;
//padding-top: 20px;
  //margin-left: 10px;
h4 {
  margin-left:30px;
  font-weight: 500;
  line-height: 20px;
}
  .btn-close {
    position:absolute;
    top:5px;
    right:20px;
    text-decoration: none;
    color:#607d8b;
  }
}
.dialog-body {
  margin:40px;
  text-align: center;
  border-collapse: collapse;
  border-left: #d9d9d9;
  border-bottom: #d9d9d9;
  box-shadow: rgb(232 234 235) 1px 0px;
  line-height: 20px;

  th {

    background-color: #F4F6F8;
    border-right: 1px solid #d9d9d9;
    border-left: 1px solid #d9d9d9;
    border-top: 1px solid #e6e6e6;
    font-size:16px;
    font-weight: 500;
    height:50px;
  }
  td {
  
    border: 1px solid#d9d9d9;
    font-size:14px;
    font-weight: 400;
    height: 50px;
  }

}
}
.overlay {
  background-color: rgba(0,0,0,0.3);
}
.header{
  display:flex;
  flex-direction: row;
  .m-0 {
    font-size:18px;
    font-weight: 500;
    color: #0088FF;
    cursor:pointer;
    width: 85%;
  }
  .check-stock {
    text-decoration: none;
    font-size: 14px;
    color: #0088FF;
    cursor:pointer;
    padding-top: 5px;
  }
  .check-stock:hover{
    font-weight: 700;
  }

}
.footer {
  width: 100%;
  display: flex;
  flex-direction: row;
  .note {
    //width: 50%;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .note-title {
      font-weight: 400;
    }

  }
  .info-payment {
    justify-content: space-between;
    margin-left: 400px;
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 10px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    .total,
    .discount,
    .price-ship,
    .voucher,
    .total-of-cus {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      width: 100%;
      .label {
        width: 80%;
      }
      .money {
        width: 20%;
        text-align: right;
        //float:right;
      }
    }
    .total-of-cus {
      font-weight: 500;
    }
  }
}



::v-deep(.p-progressbar) {
  height: 0.5rem;
  background-color: #d8dadc;

  .p-progressbar-value {
    //background-color: aqua;
    background-color: #607d8b;
  }
}

::v-deep(.p-datepicker) {
  min-width: 25rem;

  td {
    font-weight: 400;
  }
}

::v-deep(.p-datatable.p-datatable-customers) {
  .p-datatable-header {
    padding: 1rem;
    text-align: left;
    font-size: 1.5rem;
  }

  .p-paginator {
    padding: 1rem;
  }

  .p-datatable-thead > tr > th {
    text-align: left;
  }

  .p-datatable-tbody > tr > td {
    cursor: auto;
  }

  .p-dropdown-label:not(.p-placeholder) {
    text-transform: uppercase;
  }
}
</style>
