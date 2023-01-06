<template lang="">
  <div class="over" v-if="adsList.length > 0">
    <div class="scroll-wrapper" ref="wrapper">
      <Button
        @click="scrollRight"
        icon="pi pi-angle-left"
        class="btn-right p-button-rounded p-button-success p-button-outlined"
      />
      <Button
        @click="scrollLeft"
        icon="pi pi-angle-right"
        class="btn-left p-button-rounded p-button-success p-button-outlined"
      />
      <div class="pag">
        <div
          v-for="(itemt, index) in adsList"
          class="circle-pag"
          :style="[index + 1 === currentPage ? ' background-color:white ' : '']"
          @click="scrollTo(index + 1)"
        ></div>
      </div>

      <img
        ref="image"
        class="appear"
        v-for="item in adsList"
        :src="item['Path']"
        @click="$router.push({ path: item['Route'] })"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      adsList: [],
      currentPage: 1, //start with 1
      count: 0,
      autoScrollLeft: null,
    };
  },
  methods: {
    scrollLeft: function () {
      if (this.currentPage != this.adsList.length) {
        this.currentPage++;
        console.log(this.currentPage);
        this.$refs.wrapper.scrollLeft =
          window.innerWidth * (this.currentPage - 1);
      } else {
        this.currentPage = 1;
        this.$refs.wrapper.scrollLeft = 0;
      }
    },
    scrollRight: function () {
      if (this.currentPage != 1) {
        this.currentPage--;
        this.$refs.wrapper.scrollLeft = window.innerWidth * this.currentPage;
      } else {
        this.currentPage = this.adsList.length;
        this.$refs.wrapper.scrollLeft = window.innerWidth * this.adsList.length;
      }
      //this.$refs.wrapper.scrollLeft -= (window.innerWidth - this.$refs.image[0].offsetinnerWidth) ;
    },
    scrollTo: function (pageNum) {
      this.$refs.wrapper.scrollLeft =
        (pageNum - this.currentPage) * window.innerWidth;
      this.currentPage = pageNum;
    },
  },
  async mounted() {
    this.autoScrollLeft = setInterval(() => this.scrollLeft(), 3000);

    await this.axios
      .get("/image-slider/available")
      .then((response) => {
        this.adsList = response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  },
  unmounted() {
    clearInterval(this.autoScrollLeft);
  },
};
</script>
<style lang="scss" scoped>
.over {
  position: relative;
  width: 100vw;
}
.scroll-wrapper {
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  .pag {
    position: absolute;
    width: fit-content;
    display: flex;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    gap: 0.5rem;

    .circle-pag {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      border: 1px solid white;
      cursor: pointer;
    }
  }

  .btn-right {
    position: absolute;
    top: 50%;
    z-index: 4;
    transform: translateX(50%);
  }
  .btn-left {
    position: absolute;
    top: 50%;
    z-index: 4;
    right: 0;
    transform: translateX(-50%);
  }

  .appear {
    max-width: 100%;
    display: block;
    animation: fadeIn 0.8s;
    -webkit-animation: fadeIn 0.8s;
    -moz-animation: fadeIn 0.8s;
    -o-animation: fadeIn 0.8s;
    -ms-animation: fadeIn 0.8s;
    cursor: pointer;

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-moz-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-o-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-ms-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
}
</style>
