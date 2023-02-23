<template><div><div align=center>
<img src="http://qmplusimg.henrongyi.top/gvalogo.jpg" width="300" height="300" />
</div>
<div align=center>
<img src="https://img.shields.io/badge/golang-1.16-blue"/>
<img src="https://img.shields.io/badge/gin-1.7.0-lightBlue"/>
<img src="https://img.shields.io/badge/vue-3.2.25-brightgreen"/>
<img src="https://img.shields.io/badge/element--plus-2.0.1-green"/>
<img src="https://img.shields.io/badge/gorm-1.22.5-red"/>
</div>
<p><RouterLink to="/vue-template-list/README-en.html">English</RouterLink> | 简体中文</p>
<h2 id="不同版本" tabindex="-1"><a class="header-anchor" href="#不同版本" aria-hidden="true">#</a> 不同版本</h2>
<p>我们会对以下四个版本持续维护，请选择适合自己的版本使用。最新技术栈为组合式api版本，已支持多语言（I18N）</p>
<p><a href="https://github.com/flipped-aurora/gin-vue-admin" target="_blank" rel="noopener noreferrer">组合式API版（主）<ExternalLinkIcon/></a> |
<a href="https://github.com/flipped-aurora/gin-vue-admin/tree/i18n-dev-new" target="_blank" rel="noopener noreferrer">组合式API多语言(i18n)版<ExternalLinkIcon/></a> |
<a href="https://github.com/flipped-aurora/gin-vue-admin/tree/v2.4.x" target="_blank" rel="noopener noreferrer">声明式API版<ExternalLinkIcon/></a> |
<a href="https://github.com/flipped-aurora/gin-vue-admin/tree/i18n-dev" target="_blank" rel="noopener noreferrer">声明式API多语言(i18n)版<ExternalLinkIcon/></a></p>
<h1 id="项目文档" tabindex="-1"><a class="header-anchor" href="#项目文档" aria-hidden="true">#</a> 项目文档</h1>
<p><a href="https://www.gin-vue-admin.com" target="_blank" rel="noopener noreferrer">在线文档<ExternalLinkIcon/></a> : https://www.gin-vue-admin.com</p>
<p><a href="https://www.gin-vue-admin.com/guide/start-quickly/initialization.html" target="_blank" rel="noopener noreferrer">初始化<ExternalLinkIcon/></a></p>
<p><a href="https://www.bilibili.com/video/BV1Rg411u7xH" target="_blank" rel="noopener noreferrer">从环境到部署教学视频<ExternalLinkIcon/></a></p>
<p><a href="https://www.gin-vue-admin.com/guide/start-quickly/env.html" target="_blank" rel="noopener noreferrer">开发教学<ExternalLinkIcon/></a> (贡献者:  <a href="https://github.com/LLemonGreen">LLemonGreen</a> And <a href="https://github.com/fkk0509">Fann</a>)</p>
<p><a href="https://support.qq.com/products/371961" target="_blank" rel="noopener noreferrer">交流社区<ExternalLinkIcon/></a></p>
<p><a href="https://plugin.gin-vue-admin.com/" target="_blank" rel="noopener noreferrer">插件市场<ExternalLinkIcon/></a></p>
<h1 id="重要提示" tabindex="-1"><a class="header-anchor" href="#重要提示" aria-hidden="true">#</a> 重要提示</h1>
<p>1.本项目从起步到开发到部署均有文档和详细视频教程</p>
<p>2.本项目需要您有一定的golang和vue基础</p>
<p>3.您完全可以通过我们的教程和文档完成一切操作，因此我们不再提供免费的技术服务，如需服务请进行<a href="https://www.gin-vue-admin.com/coffee/payment.html" target="_blank" rel="noopener noreferrer">付费支持<ExternalLinkIcon/></a></p>
<p>4.如果您将此项目用于商业用途，请遵守Apache2.0协议并保留作者技术支持声明。您需保留如下版权声明信息，其余信息功能不做任何限制。如需剔除请<a href="https://www.gin-vue-admin.com/empower/index.html" target="_blank" rel="noopener noreferrer">购买授权<ExternalLinkIcon/></a></p>
<img src="https://qmplusimg.henrongyi.top/授权.png" width="1000">
<h2 id="_1-基本介绍" tabindex="-1"><a class="header-anchor" href="#_1-基本介绍" aria-hidden="true">#</a> 1. 基本介绍</h2>
<h3 id="_1-1-项目介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-项目介绍" aria-hidden="true">#</a> 1.1 项目介绍</h3>
<blockquote>
<p>Gin-vue-admin是一个基于 <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">vue<ExternalLinkIcon/></a> 和 <a href="https://gin-gonic.com" target="_blank" rel="noopener noreferrer">gin<ExternalLinkIcon/></a> 开发的全栈前后端分离的开发基础平台，集成jwt鉴权，动态路由，动态菜单，casbin鉴权，表单生成器，代码生成器等功能，提供多种示例文件，让您把更多时间专注在业务开发上。</p>
</blockquote>
<p><a href="http://demo.gin-vue-admin.com" target="_blank" rel="noopener noreferrer">在线预览<ExternalLinkIcon/></a>: http://demo.gin-vue-admin.com</p>
<p>测试用户名：admin</p>
<p>测试密码：123456</p>
<h3 id="_1-2-贡献指南" tabindex="-1"><a class="header-anchor" href="#_1-2-贡献指南" aria-hidden="true">#</a> 1.2 贡献指南</h3>
<p>Hi! 首先感谢你使用 gin-vue-admin。</p>
<p>Gin-vue-admin 是一套为快速研发准备的一整套前后端分离架构式的开源框架，旨在快速搭建中小型项目。</p>
<p>Gin-vue-admin 的成长离不开大家的支持，如果你愿意为 gin-vue-admin 贡献代码或提供建议，请阅读以下内容。</p>
<h4 id="_1-2-1-issue-规范" tabindex="-1"><a class="header-anchor" href="#_1-2-1-issue-规范" aria-hidden="true">#</a> 1.2.1 Issue 规范</h4>
<ul>
<li>
<p>issue 仅用于提交 Bug 或 Feature 以及设计相关的内容，其它内容可能会被直接关闭。如果你在使用时产生了疑问，请到 Slack 或 <a href="https://gitter.im/ElemeFE/element" target="_blank" rel="noopener noreferrer">Gitter<ExternalLinkIcon/></a> 里咨询。</p>
</li>
<li>
<p>在提交 issue 之前，请搜索相关内容是否已被提出。</p>
</li>
</ul>
<h4 id="_1-2-2-pull-request-规范" tabindex="-1"><a class="header-anchor" href="#_1-2-2-pull-request-规范" aria-hidden="true">#</a> 1.2.2 Pull Request 规范</h4>
<ul>
<li>
<p>请先 fork 一份到自己的项目下，不要直接在仓库下建分支。</p>
</li>
<li>
<p>commit 信息要以<code v-pre>[文件名]: 描述信息</code> 的形式填写，例如 <code v-pre>README.md: fix xxx bug</code>。</p>
</li>
<li>
<p>如果是修复 bug，请在 PR 中给出描述信息。</p>
</li>
<li>
<p>合并代码需要两名维护人员参与：一人进行 review 后 approve，另一人再次 review，通过后即可合并。</p>
</li>
</ul>
<h2 id="_2-使用说明" tabindex="-1"><a class="header-anchor" href="#_2-使用说明" aria-hidden="true">#</a> 2. 使用说明</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>- node版本 > v16.8.3
- golang版本 >= v1.16
- IDE推荐：Goland
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-server项目" tabindex="-1"><a class="header-anchor" href="#_2-1-server项目" aria-hidden="true">#</a> 2.1 server项目</h3>
<p>使用 <code v-pre>Goland</code> 等编辑工具，打开server目录，不可以打开 gin-vue-admin 根目录</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>
<span class="token comment"># 克隆项目</span>
<span class="token function">git</span> clone https://github.com/flipped-aurora/gin-vue-admin.git
<span class="token comment"># 进入server文件夹</span>
<span class="token builtin class-name">cd</span> server

<span class="token comment"># 使用 go mod 并安装go依赖包</span>
go generate

<span class="token comment"># 编译 </span>
go build <span class="token parameter variable">-o</span> server main.go <span class="token punctuation">(</span>windows编译命令为go build <span class="token parameter variable">-o</span> server.exe main.go <span class="token punctuation">)</span>

<span class="token comment"># 运行二进制</span>
./server <span class="token punctuation">(</span>windows运行命令为 server.exe<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-web项目" tabindex="-1"><a class="header-anchor" href="#_2-2-web项目" aria-hidden="true">#</a> 2.2 web项目</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 进入web文件夹</span>
<span class="token builtin class-name">cd</span> web

<span class="token comment"># 安装依赖</span>
<span class="token function">npm</span> <span class="token function">install</span>

<span class="token comment"># 启动web项目</span>
<span class="token function">npm</span> run serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-swagger自动化api文档" tabindex="-1"><a class="header-anchor" href="#_2-3-swagger自动化api文档" aria-hidden="true">#</a> 2.3 swagger自动化API文档</h3>
<h4 id="_2-3-1-安装-swagger" tabindex="-1"><a class="header-anchor" href="#_2-3-1-安装-swagger" aria-hidden="true">#</a> 2.3.1 安装 swagger</h4>
<h5 id="_1-可以访问外国网站" tabindex="-1"><a class="header-anchor" href="#_1-可以访问外国网站" aria-hidden="true">#</a> （1）可以访问外国网站</h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>go get -u github.com/swaggo/swag/cmd/swag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_2-无法访问外国网站" tabindex="-1"><a class="header-anchor" href="#_2-无法访问外国网站" aria-hidden="true">#</a> （2）无法访问外国网站</h5>
<p>由于国内没法安装 go.org/x 包下面的东西，推荐使用 <a href="https://goproxy.cn" target="_blank" rel="noopener noreferrer">goproxy.cn<ExternalLinkIcon/></a> 或者 <a href="https://goproxy.io/zh/" target="_blank" rel="noopener noreferrer">goproxy.io<ExternalLinkIcon/></a></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 如果您使用的 Go 版本是 1.13 - 1.15 需要手动设置GO111MODULE=on, 开启方式如下命令, 如果你的 Go 版本 是 1.16 ~ 最新版 可以忽略以下步骤一</span>
<span class="token comment"># 步骤一、启用 Go Modules 功能</span>
go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on 
<span class="token comment"># 步骤二、配置 GOPROXY 环境变量</span>
go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.cn,https://goproxy.io,direct

<span class="token comment"># 如果嫌弃麻烦,可以使用go generate 编译前自动执行代码, 不过这个不能使用 `Goland` 或者 `Vscode` 的 命令行终端</span>
<span class="token builtin class-name">cd</span> server
go generate <span class="token parameter variable">-run</span> <span class="token string">"go env -w .*?"</span>

<span class="token comment"># 使用如下命令下载swag</span>
go get <span class="token parameter variable">-u</span> github.com/swaggo/swag/cmd/swag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-2-生成api文档" tabindex="-1"><a class="header-anchor" href="#_2-3-2-生成api文档" aria-hidden="true">#</a> 2.3.2 生成API文档</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> server
swag init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>执行上面的命令后，server目录下会出现docs文件夹里的 <code v-pre>docs.go</code>, <code v-pre>swagger.json</code>, <code v-pre>swagger.yaml</code> 三个文件更新，启动go服务之后, 在浏览器输入 <a href="http://localhost:8888/swagger/index.html" target="_blank" rel="noopener noreferrer">http://localhost:8888/swagger/index.html<ExternalLinkIcon/></a> 即可查看swagger文档</p>
</blockquote>
<h3 id="_2-4-vscode工作区" tabindex="-1"><a class="header-anchor" href="#_2-4-vscode工作区" aria-hidden="true">#</a> 2.4 VSCode工作区</h3>
<h4 id="_2-4-1-开发" tabindex="-1"><a class="header-anchor" href="#_2-4-1-开发" aria-hidden="true">#</a> 2.4.1 开发</h4>
<p>使用<code v-pre>VSCode</code>打开根目录下的工作区文件<code v-pre>gin-vue-admin.code-workspace</code>，在边栏可以看到三个虚拟目录：<code v-pre>backend</code>、<code v-pre>frontend</code>、<code v-pre>root</code>。</p>
<h4 id="_2-4-2-运行-调试" tabindex="-1"><a class="header-anchor" href="#_2-4-2-运行-调试" aria-hidden="true">#</a> 2.4.2 运行/调试</h4>
<p>在运行和调试中也可以看到三个task：<code v-pre>Backend</code>、<code v-pre>Frontend</code>、<code v-pre>Both (Backend &amp; Frontend)</code>。运行<code v-pre>Both (Backend &amp; Frontend)</code>可以同时启动前后端项目。</p>
<h4 id="_2-4-3-settings" tabindex="-1"><a class="header-anchor" href="#_2-4-3-settings" aria-hidden="true">#</a> 2.4.3 settings</h4>
<p>在工作区配置文件中有<code v-pre>go.toolsEnvVars</code>字段，是用于<code v-pre>VSCode</code>自身的go工具环境变量。此外在多go版本的系统中，可以通过<code v-pre>gopath</code>、<code v-pre>go.goroot</code>指定运行版本。</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>    <span class="token property">"go.gopath"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">"go.goroot"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-技术选型" tabindex="-1"><a class="header-anchor" href="#_3-技术选型" aria-hidden="true">#</a> 3. 技术选型</h2>
<ul>
<li>前端：用基于 <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue<ExternalLinkIcon/></a> 的 <a href="https://github.com/ElemeFE/element" target="_blank" rel="noopener noreferrer">Element<ExternalLinkIcon/></a> 构建基础页面。</li>
<li>后端：用 <a href="https://gin-gonic.com/" target="_blank" rel="noopener noreferrer">Gin<ExternalLinkIcon/></a> 快速搭建基础restful风格API，<a href="https://gin-gonic.com/" target="_blank" rel="noopener noreferrer">Gin<ExternalLinkIcon/></a> 是一个go语言编写的Web框架。</li>
<li>数据库：采用<code v-pre>MySql</code> &gt; (5.7) 版本 数据库引擎 InnoDB，使用 <a href="http://gorm.cn" target="_blank" rel="noopener noreferrer">gorm<ExternalLinkIcon/></a> 实现对数据库的基本操作。</li>
<li>缓存：使用<code v-pre>Redis</code>实现记录当前活跃用户的<code v-pre>jwt</code>令牌并实现多点登录限制。</li>
<li>API文档：使用<code v-pre>Swagger</code>构建自动化文档。</li>
<li>配置文件：使用 <a href="https://github.com/fsnotify/fsnotify" target="_blank" rel="noopener noreferrer">fsnotify<ExternalLinkIcon/></a> 和 <a href="https://github.com/spf13/viper" target="_blank" rel="noopener noreferrer">viper<ExternalLinkIcon/></a> 实现<code v-pre>yaml</code>格式的配置文件。</li>
<li>日志：使用 <a href="https://github.com/uber-go/zap" target="_blank" rel="noopener noreferrer">zap<ExternalLinkIcon/></a> 实现日志记录。</li>
</ul>
<h2 id="_4-项目架构" tabindex="-1"><a class="header-anchor" href="#_4-项目架构" aria-hidden="true">#</a> 4. 项目架构</h2>
<h3 id="_4-1-系统架构图" tabindex="-1"><a class="header-anchor" href="#_4-1-系统架构图" aria-hidden="true">#</a> 4.1 系统架构图</h3>
<p><img src="http://qmplusimg.henrongyi.top/gva/gin-vue-admin.png" alt="系统架构图"></p>
<h3 id="_4-2-前端详细设计图-提供者-baobeisuper" tabindex="-1"><a class="header-anchor" href="#_4-2-前端详细设计图-提供者-baobeisuper" aria-hidden="true">#</a> 4.2 前端详细设计图 （提供者:<a href="https://github.com/baobeisuper">baobeisuper</a>）</h3>
<p><img src="http://qmplusimg.henrongyi.top/naotu.png" alt="前端详细设计图"></p>
<h3 id="_4-3-目录结构" tabindex="-1"><a class="header-anchor" href="#_4-3-目录结构" aria-hidden="true">#</a> 4.3 目录结构</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    ├── server
        ├── api             (api层)
        │   └── v1          (v1版本接口)
        ├── config          (配置包)
        ├── core            (核心文件)
        ├── docs            (swagger文档目录)
        ├── global          (全局对象)                    
        ├── initialize      (初始化)                        
        │   └── internal    (初始化内部函数)                            
        ├── middleware      (中间件层)                        
        ├── model           (模型层)                    
        │   ├── request     (入参结构体)                        
        │   └── response    (出参结构体)                            
        ├── packfile        (静态文件打包)                        
        ├── resource        (静态资源文件夹)                        
        │   ├── excel       (excel导入导出默认路径)                        
        │   ├── page        (表单生成器)                        
        │   └── template    (模板)                            
        ├── router          (路由层)                    
        ├── service         (service层)                    
        ├── source          (source层)                    
        └── utils           (工具包)                    
            ├── timer       (定时器接口封装)                        
            └── upload      (oss接口封装)                        
    
            web
        ├── babel.config.js
        ├── Dockerfile
        ├── favicon.ico
        ├── index.html                 -- 主页面
        ├── limit.js                   -- 助手代码
        ├── package.json               -- 包管理器代码
        ├── src                        -- 源代码
        │   ├── api                    -- api 组
        │   ├── App.vue                -- 主页面
        │   ├── assets                 -- 静态资源
        │   ├── components             -- 全局组件
        │   ├── core                   -- gva 组件包
        │   │   ├── config.js          -- gva网站配置文件
        │   │   ├── gin-vue-admin.js   -- 注册欢迎文件
        │   │   └── global.js          -- 统一导入文件
        │   ├── directive              -- v-auth 注册文件
        │   ├── main.js                -- 主文件
        │   ├── permission.js          -- 路由中间件
        │   ├── pinia                  -- pinia 状态管理器，取代vuex
        │   │   ├── index.js           -- 入口文件
        │   │   └── modules            -- modules
        │   │       ├── dictionary.js
        │   │       ├── router.js
        │   │       └── user.js
        │   ├── router                 -- 路由声明文件
        │   │   └── index.js
        │   ├── style                  -- 全局样式
        │   │   ├── base.scss
        │   │   ├── basics.scss
        │   │   ├── element_visiable.scss  -- 此处可以全局覆盖 element-plus 样式
        │   │   ├── iconfont.css           -- 顶部几个icon的样式文件
        │   │   ├── main.scss
        │   │   ├── mobile.scss
        │   │   └── newLogin.scss
        │   ├── utils                  -- 方法包库
        │   │   ├── asyncRouter.js     -- 动态路由相关
        │   │   ├── btnAuth.js         -- 动态权限按钮相关
        │   │   ├── bus.js             -- 全局mitt声明文件
        │   │   ├── date.js            -- 日期相关
        │   │   ├── dictionary.js      -- 获取字典方法 
        │   │   ├── downloadImg.js     -- 下载图片方法
        │   │   ├── format.js          -- 格式整理相关
        │   │   ├── image.js           -- 图片相关方法
        │   │   ├── page.js            -- 设置页面标题
        │   │   ├── request.js         -- 请求
        │   │   └── stringFun.js       -- 字符串文件
        |   ├── view -- 主要view代码
        |   |   ├── about -- 关于我们
        |   |   ├── dashboard -- 面板
        |   |   ├── error -- 错误
        |   |   ├── example --上传案例
        |   |   ├── iconList -- icon列表
        |   |   ├── init -- 初始化数据  
        |   |   |   ├── index -- 新版本
        |   |   |   ├── init -- 旧版本
        |   |   ├── layout  --  layout约束页面 
        |   |   |   ├── aside 
        |   |   |   ├── bottomInfo     -- bottomInfo
        |   |   |   ├── screenfull     -- 全屏设置
        |   |   |   ├── setting        -- 系统设置
        |   |   |   └── index.vue      -- base 约束
        |   |   ├── login              --登录 
        |   |   ├── person             --个人中心 
        |   |   ├── superAdmin         -- 超级管理员操作
        |   |   ├── system             -- 系统检测页面
        |   |   ├── systemTools        -- 系统配置相关页面
        |   |   └── routerHolder.vue   -- page 入口页面 
        ├── vite.config.js             -- vite 配置文件
        └── yarn.lock

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-主要功能" tabindex="-1"><a class="header-anchor" href="#_5-主要功能" aria-hidden="true">#</a> 5. 主要功能</h2>
<ul>
<li>权限管理：基于<code v-pre>jwt</code>和<code v-pre>casbin</code>实现的权限管理。</li>
<li>文件上传下载：实现基于<code v-pre>七牛云</code>, <code v-pre>阿里云</code>, <code v-pre>腾讯云</code> 的文件上传操作(请开发自己去各个平台的申请对应 <code v-pre>token</code> 或者对应<code v-pre>key</code>)。</li>
<li>分页封装：前端使用 <code v-pre>mixins</code> 封装分页，分页方法调用 <code v-pre>mixins</code> 即可。</li>
<li>用户管理：系统管理员分配用户角色和角色权限。</li>
<li>角色管理：创建权限控制的主要对象，可以给角色分配不同api权限和菜单权限。</li>
<li>菜单管理：实现用户动态菜单配置，实现不同角色不同菜单。</li>
<li>api管理：不同用户可调用的api接口的权限不同。</li>
<li>配置管理：配置文件可前台修改(在线体验站点不开放此功能)。</li>
<li>条件搜索：增加条件搜索示例。</li>
<li>restful示例：可以参考用户管理模块中的示例API。
<ul>
<li>前端文件参考: <a href="https://github.com/flipped-aurora/gin-vue-admin/blob/master/web/src/view/superAdmin/api/api.vue" target="_blank" rel="noopener noreferrer">web/src/view/superAdmin/api/api.vue<ExternalLinkIcon/></a></li>
<li>后台文件参考: <a href="https://github.com/flipped-aurora/gin-vue-admin/blob/master/server/router/sys_api.go" target="_blank" rel="noopener noreferrer">server/router/sys_api.go<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>多点登录限制：需要在<code v-pre>config.yaml</code>中把<code v-pre>system</code>中的<code v-pre>use-multipoint</code>修改为true(需要自行配置Redis和Config中的Redis参数，测试阶段，有bug请及时反馈)。</li>
<li>分片长传：提供文件分片上传和大文件分片上传功能示例。</li>
<li>表单生成器：表单生成器借助 <a href="https://github.com/JakHuang/form-generator" target="_blank" rel="noopener noreferrer">@form-generator<ExternalLinkIcon/></a> 。</li>
<li>代码生成器：后台基础逻辑以及简单curd的代码生成器。</li>
</ul>
<h2 id="_6-知识库" tabindex="-1"><a class="header-anchor" href="#_6-知识库" aria-hidden="true">#</a> 6. 知识库</h2>
<h2 id="_6-1-团队博客" tabindex="-1"><a class="header-anchor" href="#_6-1-团队博客" aria-hidden="true">#</a> 6.1 团队博客</h2>
<blockquote>
<p>https://www.yuque.com/flipped-aurora</p>
<p>内有前端框架教学视频。如果觉得项目对您有所帮助可以添加我的个人微信:shouzi_1994，欢迎您提出宝贵的需求。</p>
</blockquote>
<h2 id="_6-2-教学视频" tabindex="-1"><a class="header-anchor" href="#_6-2-教学视频" aria-hidden="true">#</a> 6.2 教学视频</h2>
<p>（1）手把手教学视频</p>
<blockquote>
<p>https://www.bilibili.com/video/BV1Rg411u7xH/</p>
</blockquote>
<p>（2）后端目录结构调整介绍以及使用方法</p>
<blockquote>
<p>https://www.bilibili.com/video/BV1x44y117TT/</p>
</blockquote>
<p>（3）golang基础教学视频</p>
<blockquote>
<p>bilibili：https://space.bilibili.com/322210472/channel/detail?cid=108884</p>
</blockquote>
<p>（4）gin框架基础教学</p>
<blockquote>
<p>bilibili：https://space.bilibili.com/322210472/channel/detail?cid=126418&amp;ctype=0</p>
</blockquote>
<p>（5）gin-vue-admin 版本更新介绍视频</p>
<blockquote>
<p>bilibili：https://www.bilibili.com/video/BV1kv4y1g7nT</p>
</blockquote>
<h2 id="商用注意事项" tabindex="-1"><a class="header-anchor" href="#商用注意事项" aria-hidden="true">#</a> 商用注意事项</h2>
<p>如果您将此项目用于商业用途，请遵守Apache2.0协议并保留作者技术支持声明。</p>
</div></template>


