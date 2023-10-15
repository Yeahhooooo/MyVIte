<template>
    <div class="col">
      <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          style="width: 100%;height: 100%"
      >
        <template v-for="(item,index) in menuList" :key="item.path">
          <el-menu-item v-if="!item.children" :index="item.path">
            <template #title>
              <span>{{item.meta.title}}</span>
            </template>
          </el-menu-item>
          <el-sub-menu v-else :index="item.path">
            <template #title>
              <span>{{item.meta.title}}</span>
            </template>
            <NaviList :menu-list="item.children"/>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
</template>

<script setup>
const props = defineProps(["menuList"])

const menuList = props.menuList

</script>

<style scoped>

.col{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
