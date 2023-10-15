<template>
  <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="formLabelAlign"
      :rules="rules"
      ref="registerForm"
  >
    <el-form-item label="用户名" prop="username">
      <el-input
          :prefix-icon="User"
          class="login_form_input"
          v-model="formLabelAlign.username"
          placeholder="请输入用户名"
      />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
          :prefix-icon="Lock"
          class="login_form_input"
          v-model="formLabelAlign.password"
          placeholder="请输入密码"
          show-password
      />
    </el-form-item>

    <el-form-item label="确认密码" prop="passwordVerify">
      <el-input
          :prefix-icon="Lock"
          class="login_form_input"
          v-model="formLabelAlign.passwordVerify"
          placeholder="请再次输入密码"
          show-password
      />
    </el-form-item>

    <el-form-item>
      <div style="width: 100%;display: flex;flex-direction: row;justify-content: center; align-items: center">
        <el-button type="primary" @click="onSubmit">注册</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";
import {User,Lock} from "@element-plus/icons-vue";
import router from "../../../../router";
import {ElNotification} from "element-plus";
import {getTime} from "../../../../utils/times";
import userStore from "../../../../store/modules/user";

const labelPosition = ref('top')

const registerForm = ref()

const useStore = userStore()

const formLabelAlign = reactive({
  username: '',
  password: '',
  passwordVerify: '',
})

const verifyPassword = (rule: any, value: any, callback: any) => {
  if(value !== formLabelAlign.password){
    callback(new Error('两次输入的密码不一致'))
  } else {
    callback()
  }
}

const rules = {
  username: [
    {
      required:true,
      message: '用户名不能为空',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      min: 6,
      max: 10,
      message: '密码长度为6-10',
      trigger: 'blur'
    }
  ],
  passwordVerify: [
    {
      required: true,
      validator: verifyPassword,
      trigger: 'blur'
    }
  ]
}

const onSubmit = async () => {
  console.log("Register")

  await registerForm.value.validate()

  try {
    await useStore.userLogin("register",formLabelAlign)
    await router.push('/')
    ElNotification({
      type:'success',
      message:'注册成功',
      title:getTime()
    })
  } catch (error) {
    console.log(error)
    ElNotification({
      type:'error',
      message:error
    })
  }
}
</script>

<style scoped>

</style>
