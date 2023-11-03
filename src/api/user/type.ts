export interface LoginForm {
  username: string
  password: string
}

export interface ResponseData {
  code: number,
  msg: string,
  ok: boolean
}

export interface LoginResponse extends ResponseData{
  data: string
}

interface UserInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}

export interface UserInfoResponseData extends ResponseData{
  data: UserInfo
}
