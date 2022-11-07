<template lang="">
  <AdminBlankPage>
    <template v-slot:header>
      <div class="header-wrapper">
        <div class="header-wrapper__left">Quản lí giao diện</div>
        <div class="header-wrapper__right">
          <Button
            label="Thoát"
            class="p-button-outlined p-button-danger"
            @click="getCurrentColor"
          />
        </div>
      </div>
    </template>
    <template v-slot:main>
      <div class="main-wrapper">
        <Card>
          <template #title>Màu chủ đề</template>
          <template #content>
            <div class="product-table">
              {{ primaryColor }}

              <ColorPicker v-model="primaryColor" />
            </div>
          </template>
        </Card>

      </div>
    </template>
  </AdminBlankPage>
</template>
<script>
import AdminBlankPage from "../AdminBlankPage.vue";
import Theme from "@/scss/test.module.scss";
export default {
  components: {
    AdminBlankPage,
  },
  data() {
    return {
      primaryColor: null,
    };
  },
  methods: {
    getCurrentColor() {
      console.log(Theme.mobileWidth);
    },
  },
  watch: {
    primaryColor: {
      handler(newValue, oldValue) {
        console.log(newValue);
        document.documentElement.style.setProperty(
          "--primary-color",
          "#" + newValue
        );
      },
      deep: true,
    },
  },
  mounted() {
    //this.primaryColor = document.documentElement.style.getPropertyValue('--primary-color');
    //document.documentElement.style.setProperty('--primary-color', '#fff');
    let __protocol = document.location.protocol;
    let __baseUrl = __protocol + "//livechat.fpt.ai/v35/src";

    let prefixNameLiveChat = "twenti";
    let objPreDefineLiveChat = {
        appCode: "871880b5f6606337b170c0132e4a0d9f",
        themes: "",
        appName: prefixNameLiveChat ? prefixNameLiveChat : "Live support",
        thumb: "",
        icon_bot: "",
      },
      appCodeHash = window.location.hash.substr(1);
    if (appCodeHash.length == 32) {
      objPreDefineLiveChat.appCode = appCodeHash;
    }

    let fpt_ai_livechat_script = document.createElement("script");
    fpt_ai_livechat_script.id = "fpt_ai_livechat_script";
    fpt_ai_livechat_script.src = __baseUrl + "/static/fptai-livechat.js";
    document.body.appendChild(fpt_ai_livechat_script);

    let fpt_ai_livechat_stylesheet = document.createElement("link");
    fpt_ai_livechat_stylesheet.id = "fpt_ai_livechat_script";
    fpt_ai_livechat_stylesheet.rel = "stylesheet";
    fpt_ai_livechat_stylesheet.href = __baseUrl + "/static/fptai-livechat.css";
    document.body.appendChild(fpt_ai_livechat_stylesheet);

    fpt_ai_livechat_script.onload = function () {
      fpt_ai_render_chatbox(
        objPreDefineLiveChat,
        __baseUrl,
        "livechat.fpt.ai:443"
      );
    };
  },
};
</script>
<style lang="scss" scoped>
.header-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__left {
  }

  &__right {
  }
}
.main-wrapper {
  .product-table {
    width: 100%;
  }
}

::v-deep(.p-card) {
  border-radius: 10px;
}
</style>
