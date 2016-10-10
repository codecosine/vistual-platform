/**
 * Created by codecosine on 16-10-3.
 */
import Vue from 'vue';

const TOKEN_KEY = 'TOKEN_KEY';

function isLoggedIn(token) {
  return new Promise((resolve, reject) => {
    // Vue.http.post('/token', { token: token })
    //   .then((res) => resolve(true)
    //   , (error) => resolve(false));
    console.log(token);
    setTimeout(resolve, 100, true);
  });
}
function login(user) {
  return Vue.http.post('/login', user);
}
function register(user) {
  return Vue.http.post('/register ', user);
}
function saveToken(token) {
  window.localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
}
function getToken() {
  return window.localStorage.getItem(TOKEN_KEY);
}
export default {
  login,
  isLoggedIn,
  getToken,
  saveToken,
};
