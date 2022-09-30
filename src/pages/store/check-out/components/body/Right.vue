<template lang="">
  <div class="right shadow-6" >
    <div class="h2">
      <b>Đơn hàng</b>
    </div>
    <br />
    <div class="cart">
      <div class="giohang">
        <div class="left">
          <img
            src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.15752-9/304828676_529058492554304_1256913194660052362_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=4oWy57Sa9ScAX-QGGDv&_nc_ht=scontent.fsgn13-2.fna&oh=03_AVJevcEs0QQ5_zJJ0qnd5oxk4EBG_SZ3UfHkLkoCpE4efw&oe=635A92F7"
          />
        </div>
        <div class="rightpro">
          <div class="nameslotpro">
            <div class="name"> Trịnh Gia Huy</div>
            <div class="masp">MSP:1234</div>
            <div class="count">
              <input class="minus is-form" type="button" value="-" />
              <input
                aria-label="quantity"
                class="input-qty"
                max="100"
                min="1"
                name=""
                type="number"
                value=""
              />
              <input class="plus is-form" type="button" value="+" />
            </div>
          </div>
          <div class="deletemoney">
            <div class="delete">
              <input class="node" type="button" value="-" />
            </div>
            <div class="money">330.000đ</div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <hr width="80%" align="center" />
    <div class="summoney">
      <div class="contenttotal">
        <div class="valuecard">Tổng giá trị đơn hàng</div>
        <div class="discount">
          <p>Giảm giá</p>
          <div class="code">CODEGIAMGIA</div>
        </div>
        <p>Tiền ship</p>
      </div>
      <div class="count">
        <div class="valuemoney">12000000đ</div>
        <div class="discount">
          <p>0đ</p>
        </div>
        <br />
        <p>0đ</p>
      </div>
    </div>
    <hr width="80%" align="center" />
    <div class="sum">
      <div class="contentsum">Tổng (đã bao gồm VAT)</div>
      <div class="money">120000000đ</div>
    </div>
    <hr width="80%" align="center" />
    <br>
    <div class="order">
      <span class="p-fluid">
        <Button label="Đặt hàng" class="p-button-rounded" />
      </span>
    </div>
   
    
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.right {
  -moz-box-flex: 1;
  -webkit-box-flex: 1;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid white;
  border-radius: 10px;

  .h2 {
    font-size: 20px;
    width: 100%;
  }
  .cart {
    width: 100%;
    border: 1px solid black;
    border-radius: 10px;

    .giohang {
      width: 100%;
      //margin-left: 10px;
      display: flex;
      flex-direction: row;

      overflow: hidden;
      width: 100%;

      .left {
        width: 30%;

        img {
          width: 100%;
          object-fit: contain;
          padding-bottom: 0pc;
        }
      }
      .rightpro {
        display: flex;
        flex-direction: row;
        width: 70%;
        .nameslotpro {
          width: 70%;
          display: flex;
          flex-direction: column;
        }
        .deletemoney {
          width: 30%;
          display: flex;
          flex-direction: column;
          .delete {
            padding-right: 0px;
            margin: 10px 20px 20px 40px;
            text-align: right;
            .node {
              border: 1px solid black;
              border-radius: 100px;
            }
          }
        }
      }
    }
  }
  .summoney {
    width: 100%;
    display: flex;
    flex-direction: row;
    .contenttotal {
      width: 70%;
      display: flex;
      flex-direction: column;
      .discount {
        .code {
          border: 1px solid black;
          border-radius: 100px;
        }
      }
    }
    .count {
      text-align: right;
    }
  }
  .sum {
    width: 100%;
    display: flex;
    flex-direction: row;
    .contentsum {
      width: 70%;
      text-align: left;
    }
    .money {
      width: 30%;
      text-align: right;
    }
  }
  .order{
    width: 100%;
  }
}
</style>
