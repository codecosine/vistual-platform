/**
 * Created by codecosine on 16-8-17.
 */
import cookie from 'react-cookie';
import { CookieDomain } from '../config.js';
let cookieConfig = {};
if (CookieDomain !== '') {
  cookieConfig = { domain: CookieDomain };
}

export function saveCookie(name,value) {
  cookie.save(name, value, cookieConfig);
}

export function getCookie(name) {
  return cookie.load(name);
}

export function removeCookie(name) {
  cookie.remove(name, cookieConfig);
}

export function signOut() {
  cookie.remove('token', cookieConfig);
}

export function isLogin() {
  return !!cookie.load('token');
}
//判断是否登录，（可以通过接口，Vuex状态 token）
//没有登录走下面逻辑
// let redirect = encodeURIComponent(transition.to.path);
// transition.redirect('/logon?redirect=' + redirect);
//redirect 作为参数，登录之后跳转回来
// return AuthService.isLoggedIn()
