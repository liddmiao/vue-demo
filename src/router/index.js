import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '@/MainView/MainView'
import ErrorPage from '@/views/Error/Error'

Vue.use(VueRouter)

export const mainRoutes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView,
    meta: { icon: 'el-icon-s-home', title: '首页' }
  }
]

export const pageRoutes = [
  {
    path: '/test',
    name: '示例网页',
    component: MainView,
    meta: { icon: 'el-icon-s-marketing', title: '测试' },
    children: [
      {
        path: '/test1',
        component: ErrorPage,
        meta: { title: '测试1' }
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: ErrorPage,
    meta: { icon: 'el-icon-error', title: '错误' }
  }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...mainRoutes, ...pageRoutes]
})
