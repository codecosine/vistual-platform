# vistual-platform

可视化图表 -- 数字校园
@ version 1.0.0 beta@2
内存溢出问题依然存在。待解决

backend:
	mongo+mongoose+passport-jwt+express
frontend:
	vue 1.0 + vuex +vue-router + echarts 
## Build Setup

``` bash
# install dependencies
cd frontend
npm install

# build for production with minification
npm run build

# install dependencies
cd backend
npm install
cp ../frontend/dist to /public/

