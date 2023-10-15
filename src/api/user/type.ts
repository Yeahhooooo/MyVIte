export interface LoginForm {
    username: string,
    password: string
}

interface LoginResponseData {
    token?: string
    message?: string
}

export interface LoginResponse {
    code: number,
    data: LoginResponseData
}

interface UserInfo {
    userId: number,
    avatar: string,
    username: string,
    password: string,
    desc: string,
    roles: string[]
    buttons: string[],
    routes: string[],
    token: string
}

interface User {
    checkUser: UserInfo
}

export interface UserInfoResponseData {
    code: number
    data: User
}
