import request from '../../utils/request'
import { LoginForm, LoginResponse, UserInfoResponseData } from './type'

enum API {
  REGISTER_URI = 'http://localhost:3000/users/register',
  LOGIN_URI = 'http://localhost:3000/users/login',
  USERINFO_uri = 'http://localhost:3000/users/info',
}

export const reqRegister = (data: LoginForm) =>
  request.post<any, LoginResponse>(API.REGISTER_URI, data)
export const reqLogin = (data: LoginForm) =>
  request.post<any, LoginResponse>(API.LOGIN_URI, data)

export const reqUserInfo = () =>
  request.get<any, UserInfoResponseData>(API.USERINFO_uri)
