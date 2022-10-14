<template lang="">
  <div class="right-column">
    <div class="info">
      <h2>Tài khoản</h2>
      <div class="fullname">
        <div class="firstname">
          <form>
            <div class="txtFName">Tên</div>
            <span class="p-fluid">
              <InputText
                v-model="fName"
                :suggestions="filterFName"
                @complete="searchFName($event)"
                optionLabel="text"
                placeholder="Nhập Tên"
              />
            </span>
          </form>
        </div>
        <div class="lastname">
          <form>
            <div class="txtLName">Họ <br /></div>
            <span class="p-fluid">
              <InputText
                v-model="lName"
                :suggestions="filterLName"
                @complete="searchLName($event)"
                optionLabel="text"
                placeholder="Nhập Họ"
              />
            </span>
          </form>
        </div>
      </div>
      <div class="emailphone">
        <div class="email">
          <form>
            <div class="txtEmail">Email <br /></div>
            <span class="p-fluid">
              <InputText
                v-model="email"
                :suggestions="filterEmail"
                @complete="searchEmail($event)"
                optionLabel="mail"
                placeholder="Nhập Email"
              />
            </span>
          </form>
        </div>
        <div class="phone">
          <form>
            <div class="txtPhone">Số điện thoại <br /></div>
            <span class="p-fluid">
              <InputText
                v-model="phone"
                :suggestions="filterPhone"
                @complete="searchPhone($event)"
                optionLabel="phone"
                placeholder="Nhập Số Điện Thoại"
              />
            </span>
          </form>
        </div>
      </div>
      <div class="button">
        <button type="button">Lưu</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fName:null,
      lName:null,
      email:null,
     phone:null,

    };
  },
};
</script>
<style lang="scss" scoped>
.right-column {
  width: 60%;
  min-height: 200px;
  float: right;
  flex-direction: column;
  display: flex;
  .info {
    width: 100%;
    h2 {
      font-weight: 700;
    }
    .txtLName,
    .txtFName,
    .txtPhone,
    .txtEmail {
      margin-bottom: 15px;
    }
    .fullname {
      display: flex;
      flex-direction: row;
      .lastname {
        width: 50%;
        margin-left: 10px;
        //margin-top:10px;
      }
      .firstname {
        width: 50%;
        //margin: 50%;
        margin-right: 5px;
        //margin-top: 10px;
      }
    }
    .emailphone {
      display: flex;
      flex-direction: row;
      margin-top: 60px;
      width: 100%;
      .email {
        margin-right: 10px;
        width: 50%;
      }
      .phone {
        //margin-right: 10px;
        width: 50%;
      }
    }
    button {
      border: none;
      background-color: #94c83d;
      text-align: center;
      display: inline-block;
      font-size: 24px;
      border-radius: 38px;
      margin-top: 40px;
      margin-left: 75%;
      width: 150px;
      height: 50px;
      font-weight: 700;
      box-sizing: border-box;
      color: #fff;
      text-shadow: 0-1px 0 rbg(0 0 0/12%);
      box-shadow: 0-2px rbg(0 0 0 /5%);
      cursor:pointer;
    }
  }
}
</style>
