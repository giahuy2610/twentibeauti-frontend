<template lang="">
  <div class="right-column">
    <div class="info">
      <div class="header">Tài khoản</div>
      <div class="fullname">
        <div class="firstname">         
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
          
        </div>
        <div class="lastname">
          
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
          
        </div>
      </div>
      <div class="emailphone">
        <div class="email">
          
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
          
        </div>
        <div class="phone">
          
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
@import "@/scss/mixin";
.right-column {
  width: 60%;
  //min-height: 200px;
  float: right;
  gap:10px;
  flex-direction: column;
  display: flex;
  @include mobile {
    width:100%;
  }
  @include mini-tablet {
    width:100%;
  }
  @include tablet {
    width:100%;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap:15px;
    @include mobile {
      margin-left:0;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;     
      //color:red;
      gap:10px;
    }

    
    .header{
      display: block;
    font-size: 24px;
    margin-bottom: 15px;
    font-weight: 700;
    box-sizing: border-box;
      font-weight: 700;
      @include mobile {
        display: none;
      }
      @include mini-tablet {
        display: none;
      }
      @include tablet {
        display: none;
      }
    }

    .fullname,.emailphone {
      display: flex;
      flex-direction: row;
      gap:10px;
      width:100%;
      @include mobile {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;     
      }
      .lastname,.firstname,.email,.phone {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap:10px;
        @include mobile {
          width: 100%;    
        }
        .txtFName,.txtLName,.txtPhone,.txtEmail {
          font-weight: 600;
        }
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
      @include mobile {
        max-width:100%;
        //margin-left: 38%;
        font-size: 20px;
        max-height:40px;
        max-width:100px;
        margin-top: 10px;
      }
      @include mini-tablet {
        max-width:100%;
        //margin-left: 45%;
        font-size: 20px;
        max-height:40px;
        max-width:100px;
        margin-top: 10px;
      }
      @include tablet {
        max-width:100%;
       // margin-left: 45%;
        font-size: 20px;
        max-height:40px;
        max-width:100px;
        margin-top: 10px;
      }
    }
  }
}
</style>
