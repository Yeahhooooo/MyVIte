<template>
  <div class="common-layout">
    <el-container style="width: 100%; height: 100%">
      <el-aside width="250px" class="aside">
        <NaviList :menu-list="menuList"/>
      </el-aside>
      <el-container>
        <el-header class="header">Header</el-header>
        <el-main class="mainContent">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import NaviList from "./components/NaviList.vue";
import userStore from "../../store/modules/user.ts";

const useStore = userStore()
const menuList = useStore.routes

</script>

<style scoped>
.common-layout{
  width: 100%;
  height: 100vh;
  background-color: #9a9191;
}

.aside{
  height: 100%;
  background-color: rgba(54, 97, 145, 0.5);
}

.header{
  width: 100%;
  height: 100px;
  background-color: #013e7a;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}

.mainContent{
  width: 100%;
  height: 500px;
  background-color: #2365a8;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

</style>
