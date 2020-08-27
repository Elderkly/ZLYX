# ZLYX


## 如何运行

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

##  注意事项
### 针对扫码进入页面的场景
url需要携带`?code=xxxx`参数 例如`http://192.168.2.219:8080/#/?code=1200992` 页面加载时检测到`code`参数会自动调起弹窗

### 主题化
关于全局颜色定义的文件放在`src/color.scss`

### 项目相关配置信息(关于我们的内容)
相关信息放在`src/config.js`

### 各个页面的位置
参考`src/router/indexjs`中的注释
