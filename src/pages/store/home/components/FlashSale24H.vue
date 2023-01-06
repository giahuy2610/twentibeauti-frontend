<template lang="">
  <div class="flash-sale" v-if="collectionFlashSaleID.length > 0">
    <div class="flash-sale__top">
      <img src="@/assets/flashsalelogo.png" alt="Flash Sale 24H" />

      <div v-if="timeLeft === 0" class="time-out-msg">
        Flash Sale đã kết thúc
      </div>

      <div v-else class="count-down">
        <div>
          {{
            timeLeft.days.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })
          }}
          NGÀY
        </div>
        <div class="divider"></div>
        <div>
          {{
            timeLeft.hours.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })
          }}
          GIỜ
        </div>
        <div class="divider"></div>
        <div>
          {{
            timeLeft.minutes.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })
          }}
          PHÚT
        </div>
        <div class="divider"></div>
        <div>
          {{
            timeLeft.seconds.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })
          }}
          GIÂY
        </div>
      </div>
      <div
        class="button-more"
        @click="$router.push({ path: '/collection/' + collectionFlashSaleID })"
      >
        Xem tất cả
      </div>
    </div>
    <HorizontalScroller :products="productList"></HorizontalScroller>
    <div class="flash-sale__bottom">
      <div
        class="button-more--small-screen"
        @click="$router.push({ path: '/collections/flash-sale' })"
      >
        Xem tất cả
      </div>
    </div>
  </div>
</template>
<script>
import HorizontalScroller from "./HorizontalScroller.vue";

export default {
  components: {
    HorizontalScroller,
  },
  props: ["collectionFlashSaleID"],
  data() {
    return {
      timeLeft: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      timeInSeconds: 15227,
      productList: [],
    };
  },
  created() {
    setInterval(() => {
      if (this.timeInSeconds == 0) return;
      else this.timeInSeconds--;
    }, 1000);
  },
  watch: {
    timeInSeconds: {
      handler(newValue, oldValue) {
        this.timeLeft.days = parseInt(newValue / (24 * 60 * 60));
        this.timeLeft.hours = parseInt(
          newValue / (60 * 60) - 24 * this.timeLeft.days
        );
        this.timeLeft.minutes = parseInt(
          newValue / 60 -
            24 * 60 * this.timeLeft.days -
            60 * this.timeLeft.hours
        );
        this.timeLeft.seconds = parseInt(
          newValue -
            24 * 60 * 60 * this.timeLeft.days -
            60 * 60 * this.timeLeft.hours -
            60 * this.timeLeft.minutes
        );
      },
      deep: true,
    },
  },

  async mounted() {
    await this.axios
      .get("/collection/show/" + this.collectionFlashSaleID)
      .then((response) => {
        this.timeInSeconds =
          (new Date(response.data.EndOn) - new Date()) / 1000;
        this.productList = response.data.Products;
        this.productList.length = Math.min(this.productList.length, 10);
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";
.flash-sale {
  width: 100%;
  border-radius: 20px;
  background-color: rgb(227, 113, 113);
  padding: 20px;

  &__top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    img {
      max-width: 100px;
    }

    @include mobile {
      flex-direction: column;
    }

    .button-more {
      padding: 10px;
      border-radius: 10px;
      background-color: #fff;
      text-align: center;
      cursor: pointer;
      font-weight: bold;

      @include mobile {
        display: none;
      }
      @include mini-tablet {
        display: none;
      }
    }

    .count-down {
      padding: 10px;
      border-radius: 10px;
      background-color: #fff;
      text-align: center;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;

      .divider {
        margin: 0 10px;
        height: inherit;
        border: 1px solid gray;
      }
    }
  }
  &__bottom {
    margin-top: 1rem;
    display: none;
    justify-content: center;
    .button-more--small-screen {
      width: 50%;
      padding: 10px;
      border-radius: 10px;
      background-color: #fff;
      text-align: center;
      cursor: pointer;
      font-weight: bold;
    }

    @include mobile {
      display: flex;
    }
    @include mini-tablet {
      display: flex;
    }
  }
}
</style>
