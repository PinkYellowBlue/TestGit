import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/dashboard',
    name: 'Example',
    meta: { title: '用户管理', icon: 'user' },
    children: [
      {
        path: '/table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '用户列表', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '会员列表', icon: 'tree' }
      },
      {
        path: 'cardSet',
        name: 'CardSet',
        component: () => import('@/views/cardSet/index'),
        meta: { title: '会员卡 列表', icon: 'viplist' }
      },
      {
        path: 'cardInform',
        name: 'cardInform',
        component: () => import('@/views/cardInform/index'),
        meta: { title: '会员 通知', icon: 'vipnotice' }
      },
      {
        path: 'userDataails',
        name: 'userDataails',
        component: () =>
          import('@/views/userDataails/index'),
        meta: {
          title: '会员详情',
          icon: 'vipmess'
        }
      }
    ]
  },
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: '数据统计',
      icon: 'datastatistics'
    },
    children: [
     
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '新用户统计',icon: 'newuser' }
      },
      {
        path: 'lose',
        component: () => import('@/views/nested/lose/index'),
        meta: { title: '用户流失统计',icon: 'userloss' }
      }
    ]
  },
  {
    path: '/finance',
    component: Layout,
    // redirect: '/dashboard',
    name: 'finance',
    meta: {
      title: '财务管理',
      icon: 'finance'
    },
    children: [
      {
        path: '/order',
        name: 'order',
        component: () => import('@/views/finance/orderList/index'),
        meta: { title: '订单列表', icon: 'orderlist' }
        // children: [
        //   {
        //     path: 'menu1-2-1',
        //     component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
        //     name: 'Menu1-2-1',
        //     meta: { title: 'menu1-2-1' }
        //   },
        //   {
        //     path: 'menu1-2-2',
        //     component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
        //     name: 'Menu1-2-2',
        //     meta: { title: 'menu1-2-2' }
        //   }
        // ]
      },
      {
        path: 'orderDetails',
        name: 'orderDetails',
        component: () => import('@/views/finance/orderDetails/index'),
        meta: { title: '订单详情', icon: 'ordermess' }
      },
      {
        path: 'check',
        name: 'check',
        component: () => import('@/views/finance/check/index'),
        meta: { title: '财务对账', icon: 'account' }
      }
      // {
      //   path: 'cardSet',
      //   name: 'CardSet',
      //   component: () => import('@/views/cardSet/index'),
      //   meta: { title: '会员卡 设置', icon: 'tree' }
      // },
      // {
      //   path: 'cardInform',
      //   name: 'cardInform',
      //   component: () => import('@/views/cardInform/index'),
      //   meta: { title: '会员 通知', icon: 'tree' }
      // }
    ]
  },
  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'externalLink', icon: 'link' }
  //     }
  //   ]
  // },
  // {
  //   path: '/jurisdiction',
  //   component: Layout,
  //   redirect: '/role',
  //   name: 'jurisdiction',
  //   meta: { title: '权限管理', icon: 'example' },
  //   children: [
  //     {
  //       path: '/role',
  //       name: 'Role',
  //       component: () => import('@/views/jurisdiction/role/index'),
  //       meta: { title: '角色管理', icon: 'table' }
  //       // children: [
  //       //   {
  //       //     path: 'menu1-2-1',
  //       //     component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //       //     name: 'Menu1-2-1',
  //       //     meta: { title: 'menu1-2-1' }
  //       //   },
  //       //   {
  //       //     path: 'menu1-2-2',
  //       //     component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //       //     name: 'Menu1-2-2',
  //       //     meta: { title: 'menu1-2-2' }
  //       //   }
  //       // ]
  //     },
  //     {
  //       path: '/staff',
  //       name: 'Staff',
  //       component: () => import('@/views/jurisdiction/staff/index'),
  //       meta: { title: '员工列表', icon: 'tree' }
  //     }
  //     // {
  //     //   path: 'cardSet',
  //     //   name: 'CardSet',
  //     //   component: () => import('@/views/cardSet/index'),
  //     //   meta: { title: '会员卡 设置', icon: 'tree' }
  //     // }
  //   ]
  // },
  // {
  //   path: '/settings',
  //   component: Layout,
  //   redirect: '/system',
  //   name: 'settings',
  //   meta: { title: '系统设置', icon: 'example' },
  //   children: [
  //     {
  //       path: '/system',
  //       name: 'System',
  //       component: () => import('@/views/settings/system/index'),
  //       meta: { title: '系统设置', icon: 'table' }
  //       // children: [
  //       //   {
  //       //     path: 'menu1-2-1',
  //       //     component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //       //     name: 'Menu1-2-1',
  //       //     meta: { title: 'menu1-2-1' }
  //       //   },
  //       //   {
  //       //     path: 'menu1-2-2',
  //       //     component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //       //     name: 'Menu1-2-2',
  //       //     meta: { title: 'menu1-2-2' }
  //       //   }
  //       // ]
  //     },
  //     {
  //       path: '/clubCard',
  //       name: 'ClubCard',
  //       component: () => import('@/views/settings/clubCard/index'),
  //       meta: { title: '会员卡设置', icon: 'tree' }
  //     }
  //     // {
  //     //   path: 'cardSet',
  //     //   name: 'CardSet',
  //     //   component: () => import('@/views/cardSet/index'),
  //     //   meta: { title: '会员卡 设置', icon: 'tree' }
  //     // }
  //   ]
  // },
  // {
  //   path: '/manage',
  //   component: Layout,
  //   redirect: '/operating',
  //   name: 'manage',
  //   meta: { title: '综合管理', icon: 'example' },
  //   children: [
  //     {
  //       path: '/operating',
  //       name: 'Operating',
  //       component: () => import('@/views/manage/operating/index'),
  //       meta: { title: '后台操作记录', icon: 'table' }
  //       // children: [
  //       //   {
  //       //     path: 'menu1-2-1',
  //       //     component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //       //     name: 'Menu1-2-1',
  //       //     meta: { title: 'menu1-2-1' }
  //       //   },
  //       //   {
  //       //     path: 'menu1-2-2',
  //       //     component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //       //     name: 'Menu1-2-2',
  //       //     meta: { title: 'menu1-2-2' }
  //       //   }
  //       // ]
  //     },
  //     {
  //       path: '/theme',
  //       name: 'Theme',
  //       component: () => import('@/views/manage/theme/index'),
  //       meta: { title: '主题管理', icon: 'tree' }
  //     }
  //     // {
  //     //   path: 'cardSet',
  //     //   name: 'CardSet',
  //     //   component: () => import('@/views/cardSet/index'),
  //     //   meta: { title: '会员卡 设置', icon: 'tree' }
  //     // }
  //   ]
  // },

  // { path: '*', redirect: '/404', hidden: true }
]


export const asyncRouterMap = [
   {
     path: '/jurisdiction',
     component: Layout,
     redirect: '/role',
     name: 'jurisdiction',
     meta: {
       title: '权限管理',
       icon: 'jurisdiction',
       roles: ['admin']
     },
     children: [{
         path: '/role',
         name: 'Role',
         component: () =>
           import('@/views/jurisdiction/role/index'),
         meta: {
           title: '角色管理',
           icon: 'table',
           roles: ['admin']
         }
       },
       {
         path: '/staff',
         name: 'Staff',
         component: () =>
           import('@/views/jurisdiction/staff/index'),
         meta: {
           title: '员工列表',
           icon: 'stafflist',
           roles: ['admin']
         }
       }
     ]
   }, {
     path: '/settings',
     component: Layout,
     redirect: '/system',
     name: 'settings',
     meta: {
       title: '系统设置',
       icon: 'setup',
       roles: ['admin']
     },
     children: [{
         path: '/system',
         name: 'System',
         component: () =>
           import('@/views/settings/system/index'),
         meta: {
           title: '系统设置',
           icon: 'setup',
           roles: ['admin']
         }
        
       },
       {
         path: '/clubCard',
         name: 'ClubCard',
         component: () =>
           import('@/views/settings/clubCard/index'),
         meta: {
           title: '会员卡设置',
           icon: 'vipset',
           roles: ['admin']
         }
       }
     
     ]
   }, {
     path: '/manage',
     component: Layout,
     redirect: '/operating',
     name: 'manage',
     meta: {
       title: '综合管理',
       icon: 'syn',
       roles: ['admin']
     },
     children: [{
         path: '/operating',
         name: 'Operating',
         component: () =>
           import('@/views/manage/operating/index'),
         meta: {
           title: '后台操作记录',
           icon: 'backstage',
           roles: ['admin']
         }
        
       },
       {
         path: '/theme',
         name: 'Theme',
         component: () =>
           import('@/views/manage/theme/index'),
         meta: {
           title: '主题管理',
           icon: 'theme',
           roles: ['admin']
         }
       }
       
     ]
   },

   {
     path: '*',
     redirect: '/404',
     hidden: true
   }

]
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
