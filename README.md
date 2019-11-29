# web 使用文档

参考地址： [Vue-cli 官方文档](https://cli.vuejs.org/zh/guide/)

## 准备环境

1. 下载[NodeJs](https://nodejs.org/en/)

2. 使用一个合适的编辑器，这里推荐[VSCode](https://code.visualstudio.com/)

> 由于本项目使用了`ESLint + Prettier`编码规范(其他编译器安装相对应的插件)

- 安装插件 `ESLint Prettier`

- 配置`文件->首选项->设置`

```json
// settings.json
{
  //.vue文件template格式化支持，并使用js-beautify-html插件
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  //js-beautify-html格式化配置，属性强制换行
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "force-aligned"
    }
  },
  //根据文件后缀名定义vue文件类型
  "files.associations": {
    "*.vue": "vue"
  },
  //配置 ESLint 检查的文件类型
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    "vue",
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  //保存时eslint自动修复错误
  "eslint.autoFixOnSave": true,
  //保存自动格式化
  "editor.formatOnSave": true,
  //开启 eslint 支持
  "prettier.eslintIntegration": true,
  //使用单引号
  "prettier.singleQuote": true,
  //结尾不加分号
  "prettier.semi": false,
  //函数前加空格
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  //没有下边这个 上边不生效
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "eslint.options": {
    "plugins": ["html"]
  }
}
```

- 推荐`Vetur`插件。高亮 Vue 代码及代码提示。

3. 运行项目

- 在 web 项目下打开 cmd（或者使用 VSCode 打开终端）

1. `npm install` 下载包（如果慢可以使用淘宝镜像 `npm install -g cnpm --registry=https://registry.npm.taobao.org` 再使用`cnpm install`代替）

2. `npm run serve` 打开 localhost:8000

3. `npm run build` 打包项目

## 编写代码

### 代码规范

- 遵循 ESLint + Prettier

- [风格指南](https://cn.vuejs.org/v2/style-guide/index.html)

### 项目结构

├── src # 源代码
│ ├── api # 所有请求
│ ├── assets # 主题 字体等静态资源
│ ├── components # 全局公用组件(页面的组件放在页面文件中，不要放入公共组件来)
│ ├── MainView # 全局布局
│ ├── router # 路由
│ ├── store # 全局 store 管理
│ ├── styles # 全局样式
│ │ ├── element-ui.scss # 全局修改 elementUI 组件样式
│ │ ├── element-variables.scss # 全局定义 elementUI 主题
│ │ ├── index.scss # 全局公共样式
│ ├── utils # 全局公用方法
│ │ ├── request.js # 请求
│ │ ├── theme.js # 主题
│ │ └── validate.js # 表单验证
│ ├── views # views 所有页面
│ ├── App.vue # 入口页面
│ └──main.js # 入口文件 加载组件 初始化等

### 新增页面

- 可以参考项目中的 views 和 router

1. 在`@router/index.js`中的`asyncRoutes`添加路由信息

2. 在`@view/`中添加 Vue 页面

## 调试

vue-devtools 在对应浏览器安装对应 vue-devtools 插件，方便调试。
