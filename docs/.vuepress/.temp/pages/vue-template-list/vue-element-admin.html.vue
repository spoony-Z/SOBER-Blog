<template><div><p align="center">
  <img width="320" src="https://wpimg.wallstcn.com/ecc53a42-d79b-42e2-8852-5126b810a4c8.svg">
</p>
<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.6.10-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/ElemeFE/element">
    <img src="https://img.shields.io/badge/element--ui-2.7.0-brightgreen.svg" alt="element-ui">
  </a>
  <a href="https://travis-ci.org/PanJiaChen/vue-element-admin" rel="nofollow">
    <img src="https://travis-ci.org/PanJiaChen/vue-element-admin.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://github.com/PanJiaChen/vue-element-admin/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
  <a href="https://github.com/PanJiaChen/vue-element-admin/releases">
    <img src="https://img.shields.io/github/release/PanJiaChen/vue-element-admin.svg" alt="GitHub release">
  </a>
  <a href="https://gitter.im/vue-element-admin/discuss">
    <img src="https://badges.gitter.im/Join Chat.svg" alt="gitter">
  </a>
  <a href="https://panjiachen.gitee.io/vue-element-admin-site/zh/donate">
    <img src="https://img.shields.io/badge/%24-donate-ff69b4.svg" alt="donate">
  </a>
</p>
<p>简体中文 | <RouterLink to="/vue-template-list/">English</RouterLink> | <RouterLink to="/vue-template-list/README.ja.html">日本語</RouterLink> | <RouterLink to="/vue-template-list/README.es.html">Spanish</RouterLink></p>
<p align="center">
  <b>SPONSORED BY</b>
</p>
<table align="center" cellspacing="0" cellpadding="0">
  <tbody>
    <tr>
      <td align="center" valign="middle">
       <a href="https://www.vform666.com/" title="variantForm" target="_blank" style="padding-right: 20px;">
        <img height="200px" style="padding-right: 20px;" src="https://s3.bmp.ovh/imgs/2022/04/11/3379c1c1cf2e3228.png" title="variantForm">
        </a>
      </td>
    </tr>
  </tbody>
</table>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<p><a href="https://panjiachen.github.io/vue-element-admin" target="_blank" rel="noopener noreferrer">vue-element-admin<ExternalLinkIcon/></a> 是一个后台前端解决方案，它基于 <a href="https://github.com/vuejs/vue" target="_blank" rel="noopener noreferrer">vue<ExternalLinkIcon/></a> 和 <a href="https://github.com/ElemeFE/element" target="_blank" rel="noopener noreferrer">element-ui<ExternalLinkIcon/></a>实现。它使用了最新的前端技术栈，内置了 i18n 国际化解决方案，动态路由，权限验证，提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。相信不管你的需求是什么，本项目都能帮助到你。</p>
<ul>
<li>
<p><a href="https://panjiachen.github.io/vue-element-admin" target="_blank" rel="noopener noreferrer">在线预览<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://panjiachen.github.io/vue-element-admin-site/zh/" target="_blank" rel="noopener noreferrer">使用文档<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://gitter.im/vue-element-admin/discuss" target="_blank" rel="noopener noreferrer">Gitter 讨论组<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://panjiachen.gitee.io/vue-element-admin-site/zh/donate" target="_blank" rel="noopener noreferrer">Donate<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://github.com/PanJiaChen/vue-element-admin/wiki" target="_blank" rel="noopener noreferrer">Wiki<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://panjiachen.gitee.io/vue-element-admin/" target="_blank" rel="noopener noreferrer">Gitee<ExternalLinkIcon/></a> 在线预览（国内用户可访问该地址）</p>
</li>
<li>
<p><a href="https://panjiachen.gitee.io/vue-element-admin-site/zh/" target="_blank" rel="noopener noreferrer">国内访问文档<ExternalLinkIcon/></a> 文档（方便没翻墙的用户查看）</p>
</li>
<li>
<p>基础模板建议使用: <a href="https://github.com/PanJiaChen/vue-admin-template" target="_blank" rel="noopener noreferrer">vue-admin-template<ExternalLinkIcon/></a></p>
</li>
<li>
<p>桌面端: <a href="https://github.com/PanJiaChen/electron-vue-admin" target="_blank" rel="noopener noreferrer">electron-vue-admin<ExternalLinkIcon/></a></p>
</li>
<li>
<p>Typescript 版: <a href="https://github.com/Armour/vue-typescript-admin-template" target="_blank" rel="noopener noreferrer">vue-typescript-admin-template<ExternalLinkIcon/></a> (鸣谢: <a href="https://github.com/Armour" target="_blank" rel="noopener noreferrer">@Armour<ExternalLinkIcon/></a>)</p>
</li>
<li>
<p><a href="https://github.com/PanJiaChen/vue-element-admin/issues/2312" target="_blank" rel="noopener noreferrer">awesome-project<ExternalLinkIcon/></a></p>
</li>
</ul>
<p><strong><code v-pre>v4.1.0+</code>版本之后默认 master 分支将不支持国际化，有需要的请使用<a href="https://github.com/PanJiaChen/vue-element-admin/tree/i18n" target="_blank" rel="noopener noreferrer">i18n<ExternalLinkIcon/></a>分支，它会和 master 保持同步更新</strong></p>
<p><strong>该项目不支持低版本浏览器(如 ie)，有需求请自行添加 polyfill <a href="https://github.com/PanJiaChen/vue-element-admin/wiki#babel-polyfill" target="_blank" rel="noopener noreferrer">详情<ExternalLinkIcon/></a></strong></p>
<p><strong>目前版本为 <code v-pre>v4.0+</code> 基于 <code v-pre>vue-cli</code> 进行构建，若发现问题，欢迎提<a href="https://github.com/PanJiaChen/vue-element-admin/issues/new" target="_blank" rel="noopener noreferrer">issue<ExternalLinkIcon/></a>。若你想使用旧版本，可以切换分支到<a href="https://github.com/PanJiaChen/vue-element-admin/tree/tag/3.11.0" target="_blank" rel="noopener noreferrer">tag/3.11.0<ExternalLinkIcon/></a>，它不依赖 <code v-pre>vue-cli</code></strong></p>
<p>群主 <strong><a href="https://jianshiapp.com/circles/1209" target="_blank" rel="noopener noreferrer">圈子<ExternalLinkIcon/></a></strong> 群主会经常分享一些技术相关的东西，或者加入 <a href="https://github.com/PanJiaChen/vue-element-admin/issues/602" target="_blank" rel="noopener noreferrer">qq 群<ExternalLinkIcon/></a> 或者关注 <a href="https://weibo.com/u/3423485724?is_all=1" target="_blank" rel="noopener noreferrer">微博<ExternalLinkIcon/></a></p>
<h2 id="前序准备" tabindex="-1"><a class="header-anchor" href="#前序准备" aria-hidden="true">#</a> 前序准备</h2>
<p>你需要在本地安装 <a href="http://nodejs.org/" target="_blank" rel="noopener noreferrer">node<ExternalLinkIcon/></a> 和 <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">git<ExternalLinkIcon/></a>。本项目技术栈基于 <a href="http://es6.ruanyifeng.com/" target="_blank" rel="noopener noreferrer">ES2015+<ExternalLinkIcon/></a>、<a href="https://cn.vuejs.org/index.html" target="_blank" rel="noopener noreferrer">vue<ExternalLinkIcon/></a>、<a href="https://vuex.vuejs.org/zh-cn/" target="_blank" rel="noopener noreferrer">vuex<ExternalLinkIcon/></a>、<a href="https://router.vuejs.org/zh-cn/" target="_blank" rel="noopener noreferrer">vue-router<ExternalLinkIcon/></a> 、<a href="https://github.com/vuejs/vue-cli" target="_blank" rel="noopener noreferrer">vue-cli<ExternalLinkIcon/></a> 、<a href="https://github.com/axios/axios" target="_blank" rel="noopener noreferrer">axios<ExternalLinkIcon/></a> 和 <a href="https://github.com/ElemeFE/element" target="_blank" rel="noopener noreferrer">element-ui<ExternalLinkIcon/></a>，所有的请求数据都使用<a href="https://github.com/nuysoft/Mock" target="_blank" rel="noopener noreferrer">Mock.js<ExternalLinkIcon/></a>进行模拟，提前了解和学习这些知识会对使用本项目有很大的帮助。</p>
<p>同时配套了系列教程文章，如何从零构建后一个完整的后台项目，建议大家先看完这些文章再来实践本项目</p>
<ul>
<li><a href="https://juejin.im/post/59097cd7a22b9d0065fb61d2" target="_blank" rel="noopener noreferrer">手摸手，带你用 vue 撸后台 系列一(基础篇)<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.im/post/591aa14f570c35006961acac" target="_blank" rel="noopener noreferrer">手摸手，带你用 vue 撸后台 系列二(登录权限篇)<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.im/post/593121aa0ce4630057f70d35" target="_blank" rel="noopener noreferrer">手摸手，带你用 vue 撸后台 系列三 (实战篇)<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.im/post/595b4d776fb9a06bbe7dba56" target="_blank" rel="noopener noreferrer">手摸手，带你用 vue 撸后台 系列四(vueAdmin 一个极简的后台基础模板)<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.im/post/5c92ff94f265da6128275a85" target="_blank" rel="noopener noreferrer">手摸手，带你用vue撸后台 系列五(v4.0新版本)<ExternalLinkIcon/></a></li>
<li><a href="https://segmentfault.com/a/1190000009090836" target="_blank" rel="noopener noreferrer">手摸手，带你封装一个 vue component<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.im/post/59bb864b5188257e7a427c09" target="_blank" rel="noopener noreferrer">手摸手，带你优雅的使用 icon<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.im/post/5b56909a518825195f499806" target="_blank" rel="noopener noreferrer">手摸手，带你用合理的姿势使用 webpack4（上）<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc" target="_blank" rel="noopener noreferrer">手摸手，带你用合理的姿势使用 webpack4（下）<ExternalLinkIcon/></a></li>
</ul>
<p><strong>如有问题请先看上述使用文档和文章，若不能满足，欢迎 issue 和 pr</strong></p>
<p><a href="https://codesandbox.io/s/github/PanJiaChen/vue-element-admin/tree/CodeSandbox" target="_blank" rel="noopener noreferrer"><img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="Edit on CodeSandbox"><ExternalLinkIcon/></a></p>
<p align="center">
  <img width="900" src="https://wpimg.wallstcn.com/a5894c1b-f6af-456e-82df-1151da0839bf.png">
</p>
<h2 id="sponsors" tabindex="-1"><a class="header-anchor" href="#sponsors" aria-hidden="true">#</a> Sponsors</h2>
<p>Become a sponsor and get your logo on our README on GitHub with a link to your site. <a href="https://www.patreon.com/panjiachen" target="_blank" rel="noopener noreferrer">[Become a sponsor]<ExternalLinkIcon/></a></p>
<h3 id="akveo" tabindex="-1"><a class="header-anchor" href="#akveo" aria-hidden="true">#</a> Akveo</h3>
<p><a href="https://store.akveo.com/products/vue-java-admin-dashboard-spring?utm_campaign=akveo_store-Vue-Vue_demo%2Fgithub&utm_source=vue_admin&utm_medium=referral&utm_content=github_banner"><img width="500px" src="https://raw.githubusercontent.com/PanJiaChen/vue-element-admin-site/master/docs/.vuepress/public/images/vue-java-banner.png" /></a><p>Java 后端整合，可以使用优惠码：SWB0RAZPZR1M，获得20%的价格优化</p></p>
<h3 id="flatlogic" tabindex="-1"><a class="header-anchor" href="#flatlogic" aria-hidden="true">#</a> Flatlogic</h3>
<p><a href="https://flatlogic.com/admin-dashboards?from=vue-element-admin"><img width="150px" src="https://wpimg.wallstcn.com/9c0b719b-5551-4c1e-b776-63994632d94a.png" /></a><p>Admin Dashboard Templates made with Vue, React and Angular.</p></p>
<h2 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>- 登录 / 注销

- 权限验证
  - 页面权限
  - 指令权限
  - 权限配置
  - 二步登录

- 多环境发布
  - dev
  - sit
  - stage
  - prod

- 全局功能
  - 国际化多语言
  - 多种动态换肤
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - 快捷导航(标签页)
  - Svg Sprite 图标
  - 本地/后端 mock 数据
  - Screenfull全屏
  - 自适应收缩侧边栏

- 编辑器
  - 富文本
  - Markdown
  - JSON 等多格式

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
  - SplitPane
  - Dropzone
  - Sticky
  - CountTo

- 综合实例
- 错误日志
- Dashboard
- 引导页
- ECharts 图表
- Clipboard(剪贴复制)
- Markdown2html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开发" tabindex="-1"><a class="header-anchor" href="#开发" aria-hidden="true">#</a> 开发</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 克隆项目</span>
<span class="token function">git</span> clone https://github.com/PanJiaChen/vue-element-admin.git

<span class="token comment"># 进入项目目录</span>
<span class="token builtin class-name">cd</span> vue-element-admin

<span class="token comment"># 安装依赖</span>
<span class="token function">npm</span> <span class="token function">install</span>

<span class="token comment"># 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--registry</span><span class="token operator">=</span>https://registry.npm.taobao.org

<span class="token comment"># 启动服务</span>
<span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>浏览器访问 http://localhost:9527</p>
<h2 id="发布" tabindex="-1"><a class="header-anchor" href="#发布" aria-hidden="true">#</a> 发布</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 构建测试环境</span>
<span class="token function">npm</span> run build:stage

<span class="token comment"># 构建生产环境</span>
<span class="token function">npm</span> run build:prod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其它" tabindex="-1"><a class="header-anchor" href="#其它" aria-hidden="true">#</a> 其它</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 预览发布环境效果</span>
<span class="token function">npm</span> run preview

<span class="token comment"># 预览发布环境效果 + 静态资源分析</span>
<span class="token function">npm</span> run preview -- <span class="token parameter variable">--report</span>

<span class="token comment"># 代码格式检查</span>
<span class="token function">npm</span> run lint

<span class="token comment"># 代码格式检查并自动修复</span>
<span class="token function">npm</span> run lint -- <span class="token parameter variable">--fix</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多信息请参考 <a href="https://panjiachen.github.io/vue-element-admin-site/zh/" target="_blank" rel="noopener noreferrer">使用文档<ExternalLinkIcon/></a></p>
<h2 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog" aria-hidden="true">#</a> Changelog</h2>
<p>Detailed changes for each release are documented in the <a href="https://github.com/PanJiaChen/vue-element-admin/releases" target="_blank" rel="noopener noreferrer">release notes<ExternalLinkIcon/></a>.</p>
<h2 id="online-demo" tabindex="-1"><a class="header-anchor" href="#online-demo" aria-hidden="true">#</a> Online Demo</h2>
<p><a href="https://panjiachen.github.io/vue-element-admin" target="_blank" rel="noopener noreferrer">在线 Demo<ExternalLinkIcon/></a></p>
<h2 id="donate" tabindex="-1"><a class="header-anchor" href="#donate" aria-hidden="true">#</a> Donate</h2>
<p>如果你觉得这个项目帮助到了你，你可以帮作者买一杯果汁表示鼓励 🍹
<img src="https://panjiachen.github.io/donate/donation.png" alt="donate"></p>
<p><a href="https://panjiachen.gitee.io/vue-element-admin-site/zh/donate" target="_blank" rel="noopener noreferrer">更多捐赠方式<ExternalLinkIcon/></a></p>
<p><a href="https://www.paypal.me/panfree23" target="_blank" rel="noopener noreferrer">Paypal Me<ExternalLinkIcon/></a></p>
<p><a href="https://www.buymeacoffee.com/Pan" target="_blank" rel="noopener noreferrer">Buy me a coffee<ExternalLinkIcon/></a></p>
<h2 id="购买贴纸" tabindex="-1"><a class="header-anchor" href="#购买贴纸" aria-hidden="true">#</a> 购买贴纸</h2>
<p>你也可以通过 购买<a href="https://smallsticker.com/product/vue-element-admin" target="_blank" rel="noopener noreferrer">官方授权的贴纸<ExternalLinkIcon/></a> 的方式来支持 vue-element-admin - 每售出一张贴纸，本项目将获得 2 元的捐赠。</p>
<h2 id="browsers-support" tabindex="-1"><a class="header-anchor" href="#browsers-support" aria-hidden="true">#</a> Browsers support</h2>
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
<h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2>
<p><a href="https://github.com/PanJiaChen/vue-element-admin/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">MIT<ExternalLinkIcon/></a></p>
<p>Copyright (c) 2017-present PanJiaChen</p>
</div></template>


