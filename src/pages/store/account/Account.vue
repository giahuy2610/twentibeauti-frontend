<template lang="">
  <Wrapper>
    <div class="content">


    </div>
  </Wrapper>
</template>
<script>
import Wrapper from "../../Wrapper.vue";
export default {
  components: {
    Wrapper,
  },
  data() {
    return {
      position: "center",
    };
  },
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
ul.breadcrumb li + li:before {
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
  color: #797979;
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
      width: 200px;
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
    padding: 14px;
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
  background: #94c83d;
}
</style>
