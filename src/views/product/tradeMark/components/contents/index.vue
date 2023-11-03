<template>
  <div class="contents">
    <el-row>
      <el-col
          v-for="(item, index) in productStore.TradeMarks"
          :key="item.id"
          :span="7"
          :offset="index > 0 ? 1 : 0"
      >
        <el-card :body-style="{ padding: '0px'}">
          <img
              :src="item.logoUrl"
              class="image"
          />
          <div style="padding: 14px">
            <span style="font-size: 20px">{{item.tmName}}</span>
            <div class="bottom">
              <el-button type="warning" :icon="Edit" circle class="button"/>
              <el-button type="danger" :icon="Delete" circle class="button"/>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">

import ProductStore from "../../../../../store/modules/product";

const productStore = ProductStore()

console.log("asd")
console.log(productStore.TradeMarks)
</script>

<style scoped lang="scss">
.contents{
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.bottom {
  width: 100%;
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}

.button {
  position: relative;
  left: 200px;
}

.image {
  width: 100%;
  height: 300px;
  display: block;
}
</style>
