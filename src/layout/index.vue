<template>
  <div class="common-layout">
    <el-container style="width: 100%; height: 100%">
      <el-aside class="aside" :class="{ fold: settingStore.fold }">
        <div class="navHead">
          <SvgIcon name="logo" :style="style" />
          <h1 v-if="!settingStore.fold" style="color: white">后台管理系统</h1>
        </div>
        <div class="col" style="width: 100%">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            text-color="#fff"
            style="width: 100%; height: 100%; overflow: hidden"
            :default-active="currentRoute"
            :collapse="settingStore.fold"
          >
            <NaviList :menu-list="menuList" />
          </el-menu>
        </div>
      </el-aside>
      <el-container>
        <el-header class="header">
          <TabBar />
        </el-header>
        <el-main class="mainContent">
          <Main />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import userStore from '../store/modules/user'
import NaviList from './menu/Index.vue'
import SvgIcon from '../components/SvgIcon/SvgIcon.vue'
import TabBar from './tabbar/Index.vue'
import Main from './main/Index.vue'
import router from '../router'
import SettingStore from '../store/modules/setting'

const useStore = userStore()
const menuList = useStore.routes

const style = {
  width: '50px',
  height: '50px',
}

const currentRoute = router.currentRoute.value.path

const settingStore = SettingStore()
</script>

<style scoped lang="scss">
* {
  transition: 0.6s;
}
.common-layout {
  width: 100%;
  height: 100vh;
  background-color: #e1e1e1;
}

.aside {
  height: 100%;
  background-color: #545c64;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &.fold {
    width: 80px;
  }
}

aside::-webkit-scrollbar {
  width: 2px;
}

aside::-webkit-scrollbar-track {
  background: #545c64;
  border-radius: 2px;
}

aside::-webkit-scrollbar-thumb {
  background: #40a0ff49;
  border-radius: 10px;
}

.header {
  width: 100%;
  height: 80px;
  background-color: #013e7a;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}

.mainContent {
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.navHead {
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 100px;
}
</style>
