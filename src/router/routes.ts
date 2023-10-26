export const constantRoutes = [
  {
    path: '/login',
    component: () => import('../views/login/index.vue'),
    name: 'login',
    meta: {
      title: '登录/登出',
      hidden: false,
      icon: 'User',
    },
  },
  {
    path: '/',
    component: () => import('../layout/index.vue'),
    name: 'layout',
    redirect: '/home',
    meta: {
      title: '首页',
      hidden: false,
      icon: 'CirclePlus',
    },
    children: [
      {
        path: '/home',
        component: () => import('../views/home/index.vue'),
        name: 'home',
        meta: {
          title: '首页',
          hidden: false,
          icon: 'House',
        },
      },
    ],
  },
  {
    path: '/screen',
    component: () => import('../views/screen/index.vue'),
    name: 'screen',
    meta: {
      title: '数据大屏',
      hidden: false,
      icon: 'Grid',
    },
  },
  {
    path: '/acl',
    component: () => import('../layout/index.vue'),
    name: 'acl',
    redirect: '/acl/user',
    meta: {
      title: '权限管理',
      hidden: false,
      icon: 'Tools',
    },
    children: [
      {
        path: '/acl/user',
        component: () => import('../views/acl/user/index.vue'),
        name: 'user',
        meta: {
          title: '用户权限',
          hidden: false,
          icon: 'Avatar',
        },
      },
      {
        path: '/acl/admin',
        component: () => import('../views/acl/admin/index.vue'),
        name: 'admin',
        meta: {
          title: '管理员权限',
          hidden: false,
          icon: 'HelpFilled',
        },
      },
      {
        path: '/acl/permission',
        component: () => import('../views/acl/permission/index.vue'),
        name: 'permission',
        meta: {
          title: '菜单管理',
          hidden: false,
          icon: 'Operation',
        },
      },
    ],
  },
  {
    path: '/product',
    component: () => import('../layout/index.vue'),
    name: 'product',
    redirect: '/product/tradeMark',
    meta: {
      title: '商品管理',
      hidden: false,
      icon: 'Discount',
    },
    children: [
      {
        path: '/product/tradeMark',
        component: () => import('../views/product/tradeMark/index.vue'),
        name: 'tradeMark',
        meta: {
          title: '品牌管理',
          hidden: false,
          icon: 'ShoppingBag',
        },
      },
      {
        path: '/product/attr',
        component: () => import('../views/product/attr/index.vue'),
        name: 'attr',
        meta: {
          title: '属性管理',
          hidden: false,
          icon: 'ShoppingTrolley',
        },
      },
      {
        path: '/product/sku',
        component: () => import('../views/product/sku/index.vue'),
        name: 'sku',
        meta: {
          title: 'SKU管理',
          hidden: false,
          icon: 'TakeawayBox',
        },
      },
      {
        path: '/product/spu',
        component: () => import('../views/product/spu/index.vue'),
        name: 'spu',
        meta: {
          title: 'SPU管理',
          hidden: false,
          icon: 'TakeawayBox',
        },
      },
    ],
  },
  {
    path: '/404',
    component: () => import('../views/404/index.vue'),
    name: '404',
    meta: {
      title: '错误',
      hidden: true,
      icon: 'Hide',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '错误',
      hidden: true,
      icon: 'Hide',
    },
  },
]
