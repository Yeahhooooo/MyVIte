<template>
  <div class="login_container">
    <div class="login_form">
      <el-tabs
        v-model="activeName"
        class="demo-tabs"
        style="width: 60%; height: 80%"
      >
        <el-tab-pane label="登录" name="first">
          <LoginForm />
        </el-tab-pane>
        <el-tab-pane label="注册" name="second">
          <RegisterForm />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LoginForm from './components/loginForm/LoginForm.vue'
import RegisterForm from './components/registerForm/RegisterForm.vue'

const activeName = ref('first')
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background-color: #2365a8;
}

.login_form {
  width: 500px;
  height: 400px;
  position: relative;
  top: 150px;
  left: 800px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
