import router from "./router";
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import pinia from "./store";
import userStore from "./store/modules/user";

let UserStore = userStore(pinia)

router.beforeEach((to: any,from : any, next: any) => {

    nprogress.start()

    let token = UserStore.token

    let userName = UserStore.username

    next()

    if(token && token !== ''){
        if(to.path === '/login'){
            next({ path:'/' })
        } else {
            if(userName){
                next()
            } else  {
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
