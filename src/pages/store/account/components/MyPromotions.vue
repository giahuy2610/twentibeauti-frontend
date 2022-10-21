<template lang="">
  <Form v-if="modal">
    <template v-slot:header>
      <div class="btn-close">
        <i class="pi pi-times" @click="modal = false"></i>
      </div>
    </template>
  </Form>
  <div class="right-column">
    <div class="header">
      Ưu đãi của tôi
    </div>
    <div class="promotion">
      <div class="voucher" v-for="item in 4">
        <div class="name">
          <div class="icon">
            <i class="pi pi-ticket"></i>
          </div>
          <div class="text">THANGYEUTHUONG</div>
        </div>
        <div class="conditions">
          <button class="btn" @click="modal = true">Điều kiện</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Form from "./FormPromotions.vue";
export default {
  components: {
    Form,
  },
  data() {
    return {
      modal: false,
      position: "center",
      isLoaded: false,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";
.btn-close {
   // background-color: #94c83d;
    .pi {
        //color:red;
        margin-left: 29.5rem;
        cursor:pointer;
        margin-top: 7px;
       // background-color: #94c83d;
    }
}
.right-column {
  width: 60%;
  //min-height: 200px;
  float: right;
  gap: 10px;
  flex-direction: column;
  display: flex;
  @include mobile {
    width: 100%;
  }
  @include mini-tablet {
    width: 100%;
  }
  @include tablet {
    width: 100%;
  }
  .header {
    display: block;
    font-size: 24px;
    margin-bottom: 15px;
    font-weight: 700;
    box-sizing: border-box;

       @include mobile {
    display:none;
  
  @include mini-tablet {
    display:none;
  }
  @include tablet {
    display:none;
  }
    }
  }
  .promotion {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    gap: 10px;
    //background-color: pink;
    .voucher {
      //background-color: aqua;
      //width:100%;
      padding: 13px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      border: 1px solid #d3d7d3;
      border-radius: 5px;
      font-weight: 600;
      font-size: 14px;
      line-height: 1.575;
      @include tablet {

      }
      @include mini-tablet {
        max-width: 100%;
      }
      @include mobile {
        width: 100%;
        height: 80px;
      }
      .name {
        display: flex;
        flex-direction: row;
        gap: 10px;
      }
      .conditions {
        button {
          border: none;
          background-color: #fff;
          font-weight: 600;
          text-decoration: underline !important;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
