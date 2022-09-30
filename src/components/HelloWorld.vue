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
  
  
</template>

<style scoped>
a {
  color: #42b983;
}

</style>
