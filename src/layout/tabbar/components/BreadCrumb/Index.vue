<template>
  <div class="tabbar_left">
    <el-icon
      color="white"
      size="25px"
      style="margin-right: 20px; cursor: pointer"
      @click="ClickCollapsedHandler"
    >
      <component :is="setting.fold ? Expand : Fold"></component>
    </el-icon>
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item
        v-for="(item, index) in currentRoute.matched"
        :key="index"
        :to="item.path"
      >
        <div style="display: flex;flex-direction: row;cursor: pointer">
          <el-icon color="white">
            <component :is="item.meta.icon"></component>
          </el-icon>
          <p style="color: white">{{ item.meta.title }}</p>
        </div>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight, Expand, Fold } from '@element-plus/icons-vue'
import { ref } from 'vue'
import settingStore from '../../../../store/modules/setting'
import router from '../../../../router'
import { useRoute } from 'vue-router'

const setting = settingStore()

const ClickCollapsedHandler = () => {
  setting.setFold(!setting.fold)
}

const currentRoute = useRoute()
</script>

<style scoped>
.tabbar_left {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
