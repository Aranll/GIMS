import dashboard from "../pages/dashboard.vue";
import NotFoundView from "../components/404.vue";
import menuList from "../pages/sys/menu.vue";
import role from "../pages/sys/role.vue";
import resource from "../pages/sys/resource.vue";
import login from "../pages/login.vue";
import app from "../App.vue";
import sysUser from "../pages/sys/user.vue";
import userAdd from "../pages/sys/userAdd.vue";
import resetPwd from "../pages/resetPwd.vue";
import output from "../pages/manage/output.vue";
import storage from "../pages/manage/storage.vue";
import stockControl from "../pages/manage/stockControl.vue"
// import statistics from "../pages/statistics/statistics.vue"
import supplier from "../pages/supplier/supplier.vue"
// Routes
const routes = [
  {path: '/login', component: login},
  {
    path: '/test', component: app, children: [
    {path: '*', component: NotFoundView}
  ]
  },
  {
    path: '', component: app, children: [
    {path: '/resetPwd', component: resetPwd},
    {path: '/index', component: dashboard},
    {path: '/sys/menuList', component: menuList},
    {path: '/sys/roleList', component: role},
    {path: '/sys/userList', component: sysUser},
    {path: '/sys/userAdd', component: userAdd},
    {path: '/sys/resource', component: resource},
    {path: '/manage/stockControl', component: stockControl},
    {path: '/manage/storage', component: storage},
    {path: '/manage/output', component: output},
    // {path: '/statistics/statistics', component: statistics},
    {path: '/supplier/supplier', component: supplier}
  ]
  },
  {path: '*', component: NotFoundView}
]


export default routes

