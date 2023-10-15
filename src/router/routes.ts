export const constantRoutes = [
    {
        path: '/login',
        component: () => import('../views/login/index.vue'),
        name: 'login',
        meta:{
            title:'登录/登出'
        }
    },
    {
        path: '/',
        component: () => import('../views/home/index.vue'),
        name: 'home',
        meta:{
            title:'首页'
        }
    },
    {
        path: '/404',
        component: () => import('../views/404/index.vue'),
        name: '404',
        children:[
            {
                path: '/:pathMatch(.*)*',
                redirect: '/404',
                name: 'Any',
                meta:{
                    title:'错误'
                }
            }
        ],
        meta:{
            title:'错误'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'Any',
        meta:{
            title:'错误'
        }
    }
]
