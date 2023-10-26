<template>
  <div class="tabbar_right">
    <el-button :icon="Refresh" circle />
    <el-button :icon="FullScreen" circle />
    <el-button :icon="Setting" circle />
    <el-avatar :size="30" :src="UserImg" style="margin-left: 10px" />
    <el-dropdown style="margin-left: 10px">
      <el-button type="primary" size="small" plain>
        Admin
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
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

const UserImg = ref(
  'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
)
</script>

<style scoped>
.tabbar_right {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
