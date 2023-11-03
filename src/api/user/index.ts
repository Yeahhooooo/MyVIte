import request from '../../utils/request'
import { LoginForm, LoginResponse, UserInfoResponseData } from './type'

enum API {
  REGISTER_URI = '/api/users/register',
  LOGIN_URI = '/api/users/login',
  USERINFO_uri = '/api/users/info',

  LOGOUT_URI = '/api/users/logout'
}

export const reqRegister = (data: LoginForm) =>
  request.post<any, LoginResponse>(API.REGISTER_URI, data)
export const reqLogin = (data: LoginForm) =>
  request.post<any, LoginResponse>(API.LOGIN_URI, data)

export const reqUserInfo = () =>
  request.get<any, UserInfoResponseData>(API.USERINFO_uri)

export const reqLogout = () =>
    request.post<any,any>(API.LOGOUT_URI)
