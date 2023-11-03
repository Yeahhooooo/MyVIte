import router from "./router";
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import pinia from "./store";
import userStore from "./store/modules/user";

let UserStore = userStore(pinia)

nprogress.configure({ showSpinner:false })

router.beforeEach(async (to: any,from : any, next: any) => {

    nprogress.start()

    let token = UserStore.token

    let userName = UserStore.username

    if(token && token !== ''){
        if(to.path === '/login'){
            next({ path:'/' })
        } else {
            if(userName){
                next()
            } else  {
                try {
                    await UserStore.getUserInfo()
                    next()
                } catch (e) {
                    await UserStore.userLogout()
                    next({ path:'/login' })
                }
            }
        }
    } else {
        if(to.path === '/login'){
            next()
        } else {
            next({ path:'/login' })
        }
    }
})

router.afterEach((to: any,from : any) => {
    nprogress.done()
})
