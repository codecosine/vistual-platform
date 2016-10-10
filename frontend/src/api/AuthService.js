/**
 * Created by codecosine on 16-10-3.
 */
import Vue from 'vue';
const TOKEN_KEY = 'TOKEN_KEY';
function isLoggedIn(token) {
  console.log(token);
  return new Promise((resolve) => {
    Vue.http.post('/token', { token })
     .then(
       (res) => {
         if (res.data) {
           resolve(true);
         }
       }, () => {
         console.log('token false');
         resolve(false);
       }
    );
  });
}

function login(user) {
  // fade login
  return new Promise((resolve) => {
    const res = {
      token: 'TEST_TOKEN_COSINE',
      info: user,
    };
    resolve(res);
  });
  // return Vue.http.post('/login', user);
}
function register(user) {
  return Vue.http.post('/register ', user);
}
function saveToken(token) {
  return window.localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
}
function fetchToken() {
  return new Promise((resolve, reject) => {
    const token = window.localStorage.getItem(TOKEN_KEY);
    if (token) {
      resolve(token);
    }
    reject();
  });
}
export default {
  login,
  isLoggedIn,
  fetchToken,
  saveToken,
  register,
};
