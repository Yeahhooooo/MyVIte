<template>
  <svg style="width: 30px;height: 30px;">
    <use :xlink:href="prefix + name"></use>
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  prefix: {
    type: String,
    default: '#icon-'
  },
  name: String
})

const url = props.prefix + props.name

console.log(url)


</script>

<style scoped>

</style>
