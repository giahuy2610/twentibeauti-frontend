<template lang="">
  {{ info }}
</template>
<script>
export default {
  created() {
    this.axios
      .get(this.$API_URL)
      .then((response) => (this.info = response))
      .catch((e) => console.log(e));

    //https://localhost:7101/weatherforecast
  },
  data() {
    return {
      info: null,
    };
  },
};
</script>
<style lang="" scoped></style>
