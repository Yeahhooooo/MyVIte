<template>
  <el-form
    :label-position="labelPosition"
    label-width="100px"
    :model="formLabelAlign"
    :rules="rules"
    ref="loginForm"
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

    <el-form-item>
      <div
        style="
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        "
      >
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'
import { getTime } from '../../../../utils/times.ts'
import router from '../../../../router/index.ts'
import userStore from '../../../../store/modules/user.ts'

const labelPosition = ref('top')

const loginForm = ref()

const useStore = userStore()

const formLabelAlign = reactive({
  username: '',
  password: '',
})

const rules = {
  username: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      min: 6,
      max: 10,
      message: '密码长度为6-10',
      trigger: 'blur',
    },
  ],
}

const onSubmit = async () => {
  await loginForm.value.validate()
  try {
    await useStore.userLogin('login', formLabelAlign)
    await router.push('/')
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: getTime(),
    })
  } catch (error) {
    console.log(error)
    ElNotification({
      type: 'error',
      message: error,
    })
  }
}
</script>

<style scoped lang="scss">
.login_form_input {
  width: 100%;
}
</style>
