import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import(/* webpackChunkName: 'login_home_welcome' */ '../components/Login')
const Home = () => import(/* webpackChunkName: 'login_home_welcome' */ '../components/Home')
const Welcome = () => import(/* webpackChunkName: 'login_home_welcome' */ '../components/Welcome')

const User = () => import(/* webpackChunkName: 'users_rights_roles' */ '../components/User/Users')
const Rights = () => import(/* webpackChunkName: 'users_rights_roles' */ '../components/rights/Rights')
const Roles = () => import(/* webpackChunkName: 'users_rights_roles' */ '../components/roles/Roles')

const Cate = () => import(/* webpackChunkName: 'cate_params' */ '../components/goods/Cate')
const Params = () => import(/* webpackChunkName: 'cate_params' */ '../components/goods/Params')

const GoodsList = () => import(/* webpackChunkName: 'goodslist_add' */ '../components/goods/GoodsList')
const AddGoods = () => import(/* webpackChunkName: 'goodslist_add' */ '../components/goods/Add')

const Orders = () => import(/* webpackChunkName: 'order_report' */ '../components/orders/Orders')
const Reports = () => import(/* webpackChunkName: 'order_report' */ '../components/reports/Reports')
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome },
      { path: '/users', component: User },
      { path: '/rights', component: Rights },
      { path: '/roles', component: Roles },
      { path: '/categories', component: Cate },
      { path: '/params', component: Params },
      { path: '/goods', component: GoodsList },
      { path: '/goods/add', component: AddGoods },
      { path: '/orders', component: Orders },
      { path: '/reports', component: Reports }
    ]
  }
]
const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router
