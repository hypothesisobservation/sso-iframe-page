# SSO 内嵌iframe页面（使用webpack import webpack 生成的module ）
https://sso-iframe-page.onrender.com   

setup
```
npm init -y && npm install express html-webpack-plugin webpack webpack-cli -save
```
run
```
npm run build && node index.js
or
npx webpack && node index.js
```
-webpack import webpack es module 

>https://webpack.js.org/configuration/externals/#externalstypemodule  
>https://github.com/webpack/webpack/issues/12465   
>https://github.com/webpack/webpack/issues/8895  
