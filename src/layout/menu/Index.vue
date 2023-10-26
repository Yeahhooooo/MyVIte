<template>
  <template v-for="(item, index) in menuList" :key="item.path">
    <el-menu-item
      v-if="!item.children && !item.meta.hidden"
      :index="item.path"
      @click="Jump"
    >
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
    </el-menu-item>
    <el-sub-menu v-else-if="item.children" :index="item.path">
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <Index :menu-list="item.children" style="padding-left: 30px" />
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
import { string } from 'fast-glob/out/utils/index.js'
import router from '../../router'

const props = defineProps(['menuList'])

const menuList = props.menuList

const Jump = (target) => {
  console.log(target.index)
  router.push(target.index)
}
</script>

<style scoped lang="scss">
.col {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
