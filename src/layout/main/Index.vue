<template>
  <router-view v-slot:="{ Component }">
    <transition name="fade" mode="out-in">
      <component v-if="!settingStore.refresh" :is="Component"></component>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import SettingStore from "../../store/modules/setting";
import {watch,nextTick} from "vue";

const settingStore = SettingStore()

watch(() => settingStore.refresh,() => {

  //todo : require data from backend here
  nextTick(() => {
    settingStore.setRefresh(false)
  })
})

</script>

<style scoped>
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}
.fade-enter-active {
  transition: all 0.5s;
}
.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
