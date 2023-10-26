<template>
  <svg :style="style">
    <use :xlink:href="prefix + name"></use>
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: String,
  style: Object,
})
</script>

<style scoped></style>
