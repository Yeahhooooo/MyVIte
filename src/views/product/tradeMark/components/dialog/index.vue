<template>
  <el-dialog v-model="props.show" title="添加品牌" width="30%" center>
    <form class="addBar">
      <div class="inputBar">
        <span style="margin-right: 20px">品牌名称</span>
        <el-input style="width: 300px" v-model="TradeMarkForm.tradeName" placeholder="Please input" clearable />
      </div>
      <div class="inputBar">
        <span style="margin-right: 20px">品牌图标</span>
        <el-upload
            class="avatar-uploader"
            :show-file-list="false"
            :before-upload="handleAvatarSuccess"
            :on-change="handleError"
            :limit="1"
            :auto-upload="false"
        >
          <img v-if="TradeMarkForm.tradeLogo !== ''" :src="TradeMarkForm.tradeLogo" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </div>
    </form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClick">取消</el-button>
        <el-button type="primary" @click="handleClick">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">

import {ref} from "vue";
import type { UploadProps } from 'element-plus'

const props = defineProps(['show'])
const emit = defineEmits(['show'])
const TradeMarkForm = ref({
  tradeName:'',
  tradeLogo:''
})

const handleClick = () => {
  emit('update:show',false)
}

const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
) => {
  TradeMarkForm.value.tradeLogo = URL.createObjectURL(uploadFile.raw!)
  console.log(TradeMarkForm.value)
}

const handleError = () => {
  console.log('error')
}
</script>

<style scoped>
.addBar{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.inputBar{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-bottom: 10px;
}

.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
