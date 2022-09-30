<template lang="">
  <div class="wrapper">
    <div class="wrapper__header">
      <span>TWENTI</span>
    </div>
    <div class="wrapper__body">
      <Accordion :activeIndex="0">
        <AccordionTab header="Header I"> </AccordionTab>
        <AccordionTab header="Header II"> </AccordionTab>
        <AccordionTab header="Header III"> </AccordionTab>
      </Accordion>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sideItems: [
        {
          name: "Tổng quan",
          icon: "pi-home",
          children: [],
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  background-color: #162818;
  border-right: 2px solid gray;

  &__header {
    width: 100%;
    height: 100px;
    border-bottom: 1px solid gray;
    font-size: 2rem;
    font-weight: bolder;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__body {
  }
}
</style>
