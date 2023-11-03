<template>
  <div class="pagination">
    <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="prev, pager, next, jumper"
        :total="productStore.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";
import {TradeMarkResponseData} from "../../../../../api/product/type";
import {reqTradeMark} from "../../../../../api/product";
import ProductStore from "../../../../../store/modules/product";

const currentPage = ref(1)
const pageSize = ref(3)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

onMounted(() => {
  productStore.getTradeMarks(1,pageSize.value)
})

const productStore = ProductStore()


const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  productStore.getTradeMarks(val, pageSize.value)
}

</script>

<style scoped lang="scss">
.pagination{
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: end;
}
</style>
