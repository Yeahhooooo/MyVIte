<template>
  <div>asddsad</div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import userStore from "../../store/modules/user";

const UserStore = userStore()

onMounted(() => {
  UserStore.getUserInfo()
})
</script>

<style scoped></style>
