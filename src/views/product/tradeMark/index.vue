<template>
  <el-card class="box-card">
    <Dialog v-model:show="centerDialogVisible"/>
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        <el-button type="primary" plain @click="handleAddTradeMark">添加品牌</el-button>
      </div>
    </template>
    <Contents />
    <Pagination />
  </el-card>
</template>

<script setup lang="ts">
import { ref} from 'vue'
import Dialog from './components/dialog/index.vue'
import Pagination from './components/pagination/index.vue'
import Contents from './components/contents/index.vue'

const centerDialogVisible = ref(false)

const handleAddTradeMark = () => {
  centerDialogVisible.value = true
}
</script>

<style scoped lang="scss">
.card-header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.box-card {
  width: 1100px;
}

.addBar{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}



</style>
