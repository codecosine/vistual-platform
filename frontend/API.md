# datavistual
## 前端路由过程
const routes = [
  { path: '/', component: Welcome }, //首页
  { path: '/session', component: SignIn }, //独立的登录注册页
  { path: '/app',
    component: Application,
    //图表列表（有办法获得缩略图嘛？）
    children: [
      {
        path: 'exhibition',
        // 最终展示页面,包括有整个的图表

      },
      {
        path: 'editor',
        // 编辑页面，编辑当前的图表
        // 包括有数据（数据生成块），以及图表生成参数
      },
      {
        path: 'create'
        // 新建
      },
      {
        path: 'setting'
        // 数据以及原配置
      }
    ],
  },
];

## vuex
modules: {
  application,
  operation,
  auth,
  storage,
}
### 权限auth
- mutations
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
export const SIGNIN_REQUEST_FINISH = 'SIGNIN_REQUEST_FINISH';

## 后端接口
