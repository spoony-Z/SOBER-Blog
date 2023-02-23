<template><div><p align="center">
  <a href="https://github.com/rcyj-FED/vue3-composition-admin-docs" target="_blank">
    <img width="180" src="https://github.com/rcyj-FED/vue3-composition-admin-docs/blob/main/docs/.vuepress/public/icons/android-chrome-192x192.png" alt="logo">
  </a>
</p>
<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-3.0-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/element-plus/element-plus">
    <img src="https://img.shields.io/badge/element--plus-1.x-blue" alt="element-plus">
  </a>
  <a href="https://github.com/vuejs/vuex">
    <img src="https://img.shields.io/badge/vuex-4.0-brightgreen" alt="vuex">
  </a>
   <a href="https://github.com/intlify/vue-i18n-next">
    <img src="https://img.shields.io/badge/vue--i18n--next-9.0-brightgreen" alt="vue-i18n-next">
   </a>
   <a href="https://github.com/npm/npm">
    <img src="https://img.shields.io/badge/npm-6.1.8-blue" alt="npm">
   </a>
   <a href="https://gitter.im/vue3Admin/community">
    <img src="https://badges.gitter.im/Join Chat.svg" alt="gitter">
  </a>
</p>
<blockquote>
<p>vue3-composition-admin 是一个管理端模板解决方案，它是基于vue3,ts和element-plus，项目都是以composition api风格编写。</p>
</blockquote>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<p>项目的基础版本出自于源于花裤衩大佬的 vue-element-admin。</p>
<p>版本：</p>
<p>vue2+js版本：<a href="https://github.com/PanJiaChen/vue-element-admin" target="_blank" rel="noopener noreferrer">vue-element-admin<ExternalLinkIcon/></a></p>
<p>vue2+ts版本：<a href="https://github.com/Armour/vue-typescript-admin-template" target="_blank" rel="noopener noreferrer">vue-typescript-admin-template<ExternalLinkIcon/></a></p>
<p>vue3 发布之后，性能增强，速度vue2的倍数，打包体积都在减小（treeshaking），composition api 增加了项目可读性。</p>
<p>项目目的：</p>
<ul>
<li>学习vue3+ts</li>
<li>保持 composition api 风格</li>
</ul>
<p>在线demo演示地址：https://admin-tmpl-test.rencaiyoujia.cn/</p>
<h2 id="相关项目" tabindex="-1"><a class="header-anchor" href="#相关项目" aria-hidden="true">#</a> 相关项目</h2>
<ul>
<li>基于该项目<a href="https://github.com/rcyj-FED/RuoYi-Vue3" target="_blank" rel="noopener noreferrer">RuoYi-Vue3<ExternalLinkIcon/></a> (后端路由案例)</li>
<li>微应用乾坤版本<a href="https://github.com/RainManGO/RuoYi-Vue3-qiankun" target="_blank" rel="noopener noreferrer">RuoYi-Vue3-qinkun<ExternalLinkIcon/></a></li>
<li>国内gitee版本 <a href="https://gitee.com/codeZyZ_admin/vue3-composition-admin" target="_blank" rel="noopener noreferrer">vue3-composition-admin<ExternalLinkIcon/></a></li>
</ul>
<h3 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>- 用户管理
	- 登录（视频背景）
	- 注销
	
- 权限验证
  - 页面权限
  - 指令权限
  - 权限配置
  - 二步登录

- 多环境发布 (对应serve,build)
  - dev
  - test
  - prod
  
- 全局功能
  - iconfont
  - 国际化多语言
  - 多种动态换肤
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - 快捷导航(标签页)
  - 本地/后端 mock 数据
  - Screenfull全屏
  - 自适应收缩侧边栏

- 编辑器
  - 富文本

- Excel
  - 导出excel
  - 导入excel
  - 前端可视化excel
  - 导出zip

- 表格
  - 动态表格
  - 拖拽表格
  - 内联编辑

- 错误页面
  - 401
  - 404

- 組件
  - 头像上传
  - 返回顶部
  - 拖拽Dialog
  - 拖拽Select
  - 拖拽看板
  - 列表拖拽
  - Dropzone
  - Sticky
  - CountTo (to do)

- 综合实例
- 错误日志
- Dashboard
- 引导页
- ECharts 图表
- Clipboard(剪贴复制)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>admin-tmpl
├─ .env.dev.build     # 开发环境
├─ .env.dev.serve     # 开发本地本地
├─ .env.prod.build    # 生产环境
├─ .env.prod.serve    # 生产环境本地
├─ .env.test.build    # 测试环境
├─ .env.test.serve    # 测试环境本地
├─ .eslintrc.js       # eslint
├─ README.md          
├─ dist               # 打包dist
├─ mock               # mock服务
├─ public             # 静态资源
├─ src                # 源码
│  ├─ @types          # ts 声明
│  ├─ apis            # 接口请求
│  ├─ assets          # webpack打包的资源
│  ├─ components      # 公共组件
│  ├─ config          # 全部配置
│  ├─ constant        # 常量
│  ├─ directives      # 全局指令
│  ├─ layout          # 全局Layout
│  ├─ locales         # 国际化
│  ├─ model           # 全部model存放
│  ├─ plugins         # 插件
│  ├─ router          # 路由
│  ├─ store           # 全局store管理
│  ├─ styles          # 全局样式
│  ├─ utils           # 全局公共方法
│  └─ views           # 所有业务页面
├─ tsconfig.json      # ts 编译配置
└─ vue.config.js      # vue-cli 配置

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="highlight" tabindex="-1"><a class="header-anchor" href="#highlight" aria-hidden="true">#</a> HighLight</h2>
<p>项目均已最新技术实现，Vue3配套升级全家桶和涉及的插件组件等</p>
<p>项目采用技术:</p>
<ul>
<li>vue3 + composition api</li>
<li>typescript3.9</li>
<li>sass (dart sass)</li>
<li><a href="https://github.com/apache/echarts" target="_blank" rel="noopener noreferrer">echats5<ExternalLinkIcon/></a></li>
</ul>
<p>vue next 系列:</p>
<ul>
<li><a href="https://github.com/element-plus/element-plus" target="_blank" rel="noopener noreferrer">element-plus<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/vuejs/vue-router-next" target="_blank" rel="noopener noreferrer">vue-router-next<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/vuejs/vuex" target="_blank" rel="noopener noreferrer">vuex-4.0<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/intlify/vue-i18n-next" target="_blank" rel="noopener noreferrer">vue-i18n-next<ExternalLinkIcon/></a></li>
</ul>
<h2 id="document" tabindex="-1"><a class="header-anchor" href="#document" aria-hidden="true">#</a> Document</h2>
<ul>
<li><a href="https://blog.csdn.net/zy_flyway/category_6335128.html" target="_blank" rel="noopener noreferrer">博客文档地址<ExternalLinkIcon/></a></li>
<li><a href="https://rcyj-fed.github.io/vue3-composition-admin-docs/" target="_blank" rel="noopener noreferrer">文档地址<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/rcyj-FED/vue3-composition-admin-docs" target="_blank" rel="noopener noreferrer">文档项目git地址<ExternalLinkIcon/></a></li>
</ul>
<h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h2>
<p>项目主要是前端和mock server（node）</p>
<h3 id="前后端都启动" tabindex="-1"><a class="header-anchor" href="#前后端都启动" aria-hidden="true">#</a> 前后端都启动</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>  <span class="token function">yarn</span>
  <span class="token function">yarn</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单独启动-mock" tabindex="-1"><a class="header-anchor" href="#单独启动-mock" aria-hidden="true">#</a> 单独启动 Mock</h3>
<p>后台模拟服务器和其他版本不同，采用koa2+Faker进行模拟。</p>
<ul>
<li><a href="https://github.com/koajs/koa" target="_blank" rel="noopener noreferrer">Koa2<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/Marak/faker.js" target="_blank" rel="noopener noreferrer">Faker<ExternalLinkIcon/></a></li>
</ul>
<p>启动mock server:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>    <span class="token function">yarn</span> mock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>mock 需要部署到服务器，单独项目地址：https://github.com/rcyj-FED/admin-tmpl-mock
mock在线测试地址：https://admin-tmpl-mock-test.rencaiyoujia.cn/</p>
<h3 id="单独启动-vue-admin" tabindex="-1"><a class="header-anchor" href="#单独启动-vue-admin" aria-hidden="true">#</a> 单独启动 vue admin</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>    <span class="token function">yarn</span>  serve:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>多环境命令查看package.json  script:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>    <span class="token string">"serve:dev"</span><span class="token builtin class-name">:</span> <span class="token string">"cross-env NODE_ENV=development dotenv -e .env.dev.serve vue-cli-service serve"</span>,
    <span class="token string">"build:dev"</span><span class="token builtin class-name">:</span> <span class="token string">"cross-env NODE_ENV=production  dotenv -e .env.dev.build vue-cli-service build"</span>,
    <span class="token string">"serve:test"</span><span class="token builtin class-name">:</span> <span class="token string">"cross-env NODE_ENV=development dotenv -e .env.test.serve vue-cli-service serve"</span>,
    <span class="token string">"build:test"</span><span class="token builtin class-name">:</span> <span class="token string">"cross-env NODE_ENV=production  dotenv -e .env.test.build vue-cli-service build"</span>,
    <span class="token string">"serve:prod"</span><span class="token builtin class-name">:</span> <span class="token string">"cross-env NODE_ENV=development dotenv -e .env.prod.serve vue-cli-service serve"</span>,
    <span class="token string">"build:prod"</span><span class="token builtin class-name">:</span> <span class="token string">"cross-env NODE_ENV=production  dotenv -e .env.prod.build vue-cli-service build"</span>,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> eslint</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>    <span class="token function">yarn</span>  lint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>提交自动检测：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code> <span class="token property">"gitHooks"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"pre-commit"</span><span class="token operator">:</span> <span class="token string">"lint-staged"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"lint-staged"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"*.{js,jsx,vue,ts,tsx}"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"vue-cli-service lint"</span><span class="token punctuation">,</span>
      <span class="token string">"git add"</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="browsers-support" tabindex="-1"><a class="header-anchor" href="#browsers-support" aria-hidden="true">#</a> Browsers support</h2>
<p>Modern browsers and Internet Explorer 10+.</p>
<table>
<thead>
<tr>
<th><a href="https://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" /><ExternalLinkIcon/></a>IE / Edge</th>
<th><a href="https://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" /><ExternalLinkIcon/></a>Firefox</th>
<th><a href="https://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" /><ExternalLinkIcon/></a>Chrome</th>
<th><a href="https://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" /><ExternalLinkIcon/></a>Safari</th>
</tr>
</thead>
<tbody>
<tr>
<td>IE10, IE11, Edge</td>
<td>last 2 versions</td>
<td>last 2 versions</td>
<td>last 2 versions</td>
</tr>
</tbody>
</table>
<h2 id="讨论交流-qq群-584617908" tabindex="-1"><a class="header-anchor" href="#讨论交流-qq群-584617908" aria-hidden="true">#</a> 讨论交流（QQ群：584617908）</h2>
  <p align="left">
  <a  target="_blank">
    <img width="180" src="https://github.com/RainManGO/vue3-composition-admin/blob/main/IMAGE/QQ.JPG" alt="qq">
  </a>
</p>
<h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2>
<p><a href="https://github.com/rcyj-FED/vue3-composition-admin/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">MIT<ExternalLinkIcon/></a></p>
<p>Copyright (c) 2021-present</p>
</div></template>


