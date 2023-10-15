import { defineStore } from 'pinia'
import {reqLogin, reqRegister} from "../../api/user";
import {LoginForm, LoginResponse} from "../../api/user/type";
import type { UserState } from "./types";
import {GET_TOKEN, SET_TOKEN} from "../../utils/token";
import {constantRoutes} from "../../router/routes";

let userStore = defineStore('User',{
    state: (): UserState => {
        return {
            token: GET_TOKEN(),
            routes: constantRoutes,
        }
    },
    actions: {
        async userLogin(type: string,data: LoginForm){
            let result : LoginResponse = type == 'login' ? await reqLogin(data) : await reqRegister(data)
            console.log(result)
            if(result.code === 200){
                this.token = result.data.token as string
                SET_TOKEN(result.data.token as string)
                return 'ok'
            } else {
                return Promise.reject(new Error(result.data.message as string))
            }
        }
    },
    getters:{

    }
})

export default userStore
