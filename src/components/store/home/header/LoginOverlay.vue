<template lang="">
  <Dialog
    modal="true"
    :dismissableMask="true"
    :visible="visibleLogin"
    :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
    :style="{ width: '50vw' }"
    showHeader="false"
  >
    <h2
      class="text-primary w-full text-center m-0"
      @click="visibleLogin = false"
    >
      Đăng nhập
    </h2>
    <p class="w-full text-center">
      Chưa có tài khoản? Kết nối nhanh chóng với TWENTI chỉ với gmail
    </p>
    <InputText class="w-full" type="text" placeholder="mytwenti@gmail.com" />
    <p>
      <Button
        label="Đăng nhập"
        class="w-full p-button-rounded p-button-primary"
      />
    </p>
    <h5 class="w-full text-center">Hoặc</h5>
    <div class="alterWay w-full flex align-items-center justify-content-center">
      <Button class="google p-0" aria-label="Google" @click="signInWithPopup">
        <i class="pi pi-google px-2 mx-1"></i>
        <span class="px-3">Google</span>
      </Button>
      <Button class="facebook p-0 mx-1" aria-label="Facebook">
        <i class="pi pi-facebook px-2"></i>
        <span class="px-3">Facebook</span>
      </Button>
    </div>
  </Dialog>
</template>
<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { mapWritableState, mapActions } from "pinia";
import { useCartStorePinia } from "@/stores/store/cart.js";
export default {
  methods: {
    signInWithPopup() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider)
        .then((result) => {
          this.getUser = result;
          this.visibleLogin = false;
          this.$router.push("/account");
        })
        .catch((error) => {
          this.visibleLogin = false;
          console.error(error);
        });
    },
    ...mapActions(useCartStorePinia, { login: "login" }),
  },
  computed: {
    ...mapWritableState(useCartStorePinia, {
      visibleLogin: "isVisibleLogin",
      getUser: "user",
    }),
  },
};
</script>
<style lang="scss" scoped>
:deep(.p-dialog-header) {
  padding: 0 !important;
}
.signInBtn {
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: red;
}
.p-button i {
  line-height: 2.25rem;
}
.p-button.google {
  background: linear-gradient(
    to left,
    var(--purple-600) 50%,
    var(--purple-700) 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease-out;
  color: #fff;
  border-color: var(--purple-700);
}
.p-button.google:hover {
  background-position: left bottom;
}
.p-button.google i {
  background-color: var(--purple-700);
}
.p-button.google:focus {
  box-shadow: 0 0 0 1px var(--purple-400);
}
.p-button.facebook {
  background: linear-gradient(
    to left,
    var(--indigo-600) 50%,
    var(--indigo-700) 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease-out;
  color: #fff;
  border-color: var(--indigo-700);
}
.p-button.facebook:hover {
  background-position: left bottom;
}
.p-button.facebook i {
  background-color: var(--indigo-700);
}
.p-button.facebook:focus {
  box-shadow: 0 0 0 1px var(--indigo-400);
}
.p-button.google:enabled:hover {
  background: var(--purple-700);
}
.p-button.facebook:enabled:hover {
  background: var(--indigo-700);
}
</style>
