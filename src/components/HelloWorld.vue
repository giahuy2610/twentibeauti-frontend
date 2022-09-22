<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
const selectedCity = null
const			cities = [
				{name: 'London', code: 'LND'},
				{name: 'Paris', code: 'PRS'},
				{name: 'Rome', code: 'RM'}
			]
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    |
    <a href="https://www.primefaces.org/primevue" target="_blank">PrimeVue Documentation</a>
  </p>

  <Button @click="count++" label="Count" class="change" sty></Button>
  <SelectButton v-model="selectedCity" :options="cities" optionLabel="name" style="background-color:red" />
  <h5>{{ count }}</h5>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

  <Button label="Danger" class="p-button-danger" />
</template>

<style scoped>
a {
  color: #42b983;
}

</style>
