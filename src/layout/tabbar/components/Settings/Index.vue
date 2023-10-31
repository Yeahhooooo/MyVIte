<template>
  <div class="tabbar_right">
    <el-button :icon="Refresh" circle @click="handleRefresh"/>
    <el-button :icon="FullScreen" circle @click="handleFullScreen"/>
    <el-button :icon="Setting" circle />
    <el-avatar :size="30" :src="userStore.avatar" style="margin-left: 10px" />
    <el-dropdown style="margin-left: 10px">
      <el-button type="primary" size="small" plain>
        {{ userStore.username }}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowDown,
  FullScreen,
  Refresh,
  Setting,
} from '@element-plus/icons-vue'
import { ref } from 'vue'
import SettingStore from "../../../../store/modules/setting"
import UserStore from "../../../../store/modules/user"
import router from "../../../../router";


const userStore = UserStore()

const settingStore = SettingStore()

const handleRefresh = () => {
  settingStore.setRefresh(!settingStore.refresh)
}


const handleFullScreen = () => {
  let full = document.fullscreenElement
  if(!full){
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

const handleLogout = () => {
  userStore.userLogout()
  router.push("/login")
}
</script>

<style scoped>
.tabbar_right {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
