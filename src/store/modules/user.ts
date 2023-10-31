import { defineStore } from 'pinia'
import {reqLogin, reqRegister, reqUserInfo} from '../../api/user'
import { LoginForm, LoginResponse } from '../../api/user/type'
import type { UserState } from './types/user'
import { GET_TOKEN, SET_TOKEN } from '../../utils/token'
import { constantRoutes } from '../../router/routes'
import router from "../../router";

let userStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      routes: constantRoutes,
      username:'',
      avatar:''
    }
  },
  actions: {
    async userLogin(type: string, data: LoginForm) {
      console.log(type)
      let result: LoginResponse =
        type == 'login' ? await reqLogin(data) : await reqRegister(data)
      console.log(result.data.token)
      if (result.code === 200) {
        this.token = result.data.token as string
        SET_TOKEN(result.data.token as string)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message as string))
      }
    },
    async getUserInfo(){
      let result = await reqUserInfo()
      if(result.data){
        this.username = result.data.username
        this.avatar = result.data.avatar
        return 'ok'
      } else {
        return Promise.reject('Invalid User Info')
      }
    },
    userLogout(){
      this.token = ''
      this.username = ''
      this.avatar = ''
      localStorage.removeItem('TOKEN')
    }
  },
  getters: {},
})

export default userStore
