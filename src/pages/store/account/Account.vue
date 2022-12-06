
<template lang="">
  <Wrapper>
    <div class="content">
      <div class="header">
        <ul class="breadcrumb">
          <li><a href="/">Trang chủ</a></li>
          <li>Tài khoản</li>
        </ul>
      </div>
      <div class="right-column">
        <div class="info">
          <h2>Tài khoản</h2>
          <div class="fullname">
            <div class="firstname">
              <form>
                <div class="txtFName">Tên</div>
                <span class="p-fluid">
                  <AutoComplete
                    v-model="v_fname"
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
                <div class="txtLName">Họ <br /> </div>
                <span class="p-fluid">
                <AutoComplete
                  v-model="v_lname"
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
                <AutoComplete
                  v-model="v_email"
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
                <AutoComplete
                  v-model="v_phone"
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
      <div class="left-column">
        <div class="sidebar-account">
          <p><li><a href="#">Tài khoản</a></li></p>
          <p><li><a href="#">Đơn hàng</a></li></p>
          <p><li><a href="#">Địa chỉ giao nhận</a></li></p>
          <p><li><a href="#">Ưu đãi của tôi</a></li></p>
        </div>
      </div>
    </div>
  </Wrapper>
</template>
<script>
import Wrapper from "../../Wrapper.vue";
import axios from 'axios';
import { defineState, defineActions } from "pinia";
export default {
  components: {
    Wrapper,
  },
  data() {
    return {
      
      position: "center",
    };    
  },
  computed: {
    ...defineState
  }

};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";
ul.breadcrumb {
  padding: 10px 16px;
  list-style: none;
 // background-color: #eee;
}

/* Display list items side by side */
ul.breadcrumb li {
  display: inline;
  font-size: 14px;
}

/* Add a slash symbol (/) before/behind each list item */
ul.breadcrumb li+li:before {
  padding: 8px;
  color: #797979;
  content: ">\00a0";
}

/* Add a color to all links inside the list */
ul.breadcrumb li a {
  color: #797979;
  text-decoration: none;
}

/* Add a color on mouse-over */
ul.breadcrumb li a:hover {
  color: #797979 ;
  font-weight: 600;
  text-decoration: underline;
}
.right-column {
  width: 60%;
  min-height: 200px;
  float: right;
  flex-direction: column;
  display: flex;
  .info {
    width:100%;
    h2 {
      font-weight: 700;
    }
    .txtLName,.txtFName,.txtPhone,.txtEmail {
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
      width:50%;
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
    border:none;
    background-color: #94C83D;
    text-align: center;
    display: inline-block;
    font-size:24px;  
    border-radius: 38px;
    margin-top:40px;
    margin-left:75%;
    width:200px;
    height: 50px;
    font-weight: 700;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0-1px 0 rbg(0 0 0/12%);
    box-shadow: 0-2px rbg(0 0 0 /5%);
  
  }
}
}

.left-column {
  width: 40%;
  height: 150px;
  float: left;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  
  .sidebar-account a {
    
    padding:14px;
    text-decoration: none;
    color: #333;
    h4 {
      margin-bottom: 20px;
    }
  }
  .sidebar-account a:hover {
    text-decoration: underline;
    color: #aed56b;
  }
}
::selection {
  background:#94C83D ;
}

</style>
