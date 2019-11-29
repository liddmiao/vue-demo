import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '@/MainView/MainView'

Vue.use(VueRouter)

//解决点击路由报错但不影响使用的情况
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export const mainRoutes = [
  {
    path: '/',
    name: 'home',
    component: MainView,
    redirect: '/Home',
    meta: { icon: 'el-icon-s-home', title: '首页' },
    children: [
      {
        path: 'Home',
        name: 'home',
        component: () => import('@/views/Home/Home')
      }
    ]
  }
]

export const pageRoutes = [
  {
    path: '/Error',
    name: 'error',
    component: MainView,
    meta: { icon: 'el-icon-s-marketing', title: '测试' },
    children: [
      {
        path: 'Error',
        name: 'errorPage',
        component: () => import('@/views/Error/Error'),
        meta: { title: '测试1' }
      },
      {
        path: 'Home',
        name: 'home',
        component: () => import('@/views/Home/Home'),
        meta: { title: '测试2' }
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/Error/Error'),
    meta: { icon: 'el-icon-error', title: '错误' }
  }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...mainRoutes, ...pageRoutes]
})
