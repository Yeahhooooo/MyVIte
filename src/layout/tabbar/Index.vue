<template>
  <div class="tabbar">
    <Breadcrumb />
    <Settings />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Breadcrumb from './components/BreadCrumb/Index.vue'
import Settings from './components/Settings/Index.vue'
</script>

<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
