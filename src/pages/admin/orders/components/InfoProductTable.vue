<template>
  <div class="product-table-wrapper">
    <DataTable
      :value="products"
      class="p-datatable-customers"
      :rows="10"
      dataKey="id"
      :rowHover="true"
      v-model:selection="selectedCustomers"
      v-model:filters="filters"
      filterDisplay="menu"
      :loading="loading"
      
      :globalFilterFields="[
        'name',
        'country.name',
        'representative.name',
        'status',
      ]"
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

      <Column field="name" header="STT" style="min-width: 5rem">
        <template #body="{ data }">
          {{ data.id }}
        </template>
        
      </Column>
      <Column field="name" header="Ảnh" style="min-width: 5rem; cursor:pointer;">
        <template #body="{ data }">
          <img
            :alt="data.category.name"
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
            class="cursor-pointer hover-primary-color"
          >
            {{ data.name }}
          </p>
        </template>
        
      </Column>
      <Column field="name" header="Số lượng" style="min-width: 7rem">
        <template #body="{ data }">
          {{ data.number }}
        </template>
        
      </Column>
      <Column
        field="balance"
        header="Đơn giá"
        dataType="numeric"
        style="min-width: 7rem"
      >
        <template #body="{ data }">
          {{ formatCurrency(data.salePrice) }}
        </template>
        
      </Column>
      <Column
        field="balance"
        header="Chiết khấu"
        dataType="numeric"
        style="min-width: 7rem"
      >
        <template #body="{ data }">
          {{ formatCurrency(data.salePrice) }}
        </template>
        
      </Column>
      <Column
        field="balance"
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
      customers: null,
      selectedCustomers: null,
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: {
          operator: FilterOperator.AND,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
        "country.name": {
          operator: FilterOperator.AND,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        date: {
          operator: FilterOperator.AND,
          constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
        },
        balance: {
          operator: FilterOperator.AND,
          constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
        },
        status: {
          operator: FilterOperator.OR,
          constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
        },
        activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS },
      },
      loading: true,
      representatives: [
        { name: "Amy Elsner", image: "amyelsner.png" },
        { name: "Anna Fali", image: "annafali.png" },
        { name: "Asiya Javayant", image: "asiyajavayant.png" },
        { name: "Bernardo Dominic", image: "bernardodominic.png" },
        { name: "Elwin Sharvill", image: "elwinsharvill.png" },
        { name: "Ioni Bowcher", image: "ionibowcher.png" },
        { name: "Ivan Magalhaes", image: "ivanmagalhaes.png" },
        { name: "Onyama Limba", image: "onyamalimba.png" },
        { name: "Stephen Shaw", image: "stephenshaw.png" },
        { name: "XuXue Feng", image: "xuxuefeng.png" },
      ],
      statuses: [
        "Đang giao dịch",
        "Hoàn thành",
      ],
      products: [
        {
          id: 1000,
          name: "Kem Nền 20g",
          number: 10,
          brand: {
            name: "The Face Shop",
            id: 100,
            path: "/collections/the-face-shop",
            country: "Hàn Quốc",
          },
          
          stock: 20,
          images: ["abc.png", "bcd.png"],
          listprice: 80000,
          salePrice: 75000,
          description:
            "Công dụng chính: Kem nền hiệu chỉnh sắc diện da, giúp làn da rạng rỡ và tỏa sáng.Hiệu ứng: Nâng tông, căng mướt da",
          category: {
            name: "Trang điểm",
            id: "1",
            path: "/categories/trang-diem",
          },
          review: [
            {
              id: 111,
              userId: 1112,
              rating: 4,
              content: "Sản phẩm tốt",
              createdOn: "2015-09-13",
              invoice: { id: 152 },
            },
            {
              id: 115,
              userId: 1113,
              rating: 2,
              content: "Sản phẩm tốt",
              createdOn: "2015-09-14",
              invoice: { id: 165 },
            },
          ],
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
    formatDate(value) {
      return value.toLocaleDateString( {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    },
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

}
.footer {
  width: 100%;
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
