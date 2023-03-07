import{_ as s,M as l,p as d,q as h,R as e,N as n,V as o,t,a1 as r}from"./framework-204010b2.js";const c={},u=r('<h1 align="center">vue-admin-box</h1><p align="center"><a href="https://github.com/vuejs/vue-next"><img src="https://img.shields.io/badge/vue3-3.0.5-brightgreen.svg" alt="vue"></a><a href="https://github.com/element-plus/element-plus"><img src="https://img.shields.io/badge/elementPlus-1.0.2beta.42-brightgreen.svg" alt="element-plus"></a><a href="https://github.com/vitejs/vite"><img src="https://img.shields.io/badge/vite-2.2.3-brightgreen.svg" alt="vite"></a><a href="https://github.com/microsoft/TypeScript"><img src="https://img.shields.io/badge/typescript-4.1.3-brightgreen.svg" alt="typescript"></a><a href="https://github.com/hsiangleev/element-plus-admin/blob/master/LICENSE"><img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license"></a></p>',2),p=e("h2",{id:"简介",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),t(" 简介")],-1),m=e("li",null,"经过三个多月的迭代，于2021年8月10日，1.0版本正式发布，并附四个基础模板供大家使用",-1),g=e("li",null,"此开源项目为个人开发，不限制任何商业使用和个人研究，使用之前请先点个Star对我进行鼓励",-1),b=e("li",null,"利用此开源项目参与的一切违法、色情相关的活动均与本源码无关，请勿以身示法",-1),v=e("li",null,"QQ交流群：735838842，有问题群里提，可及时解决",-1),_=e("h2",{id:"预览",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#预览","aria-hidden":"true"},"#"),t(" 预览")],-1),x={href:"https://cmdparkour.gitee.io/vue-admin-box/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://cmdparkour.github.io/vue-admin-box/dist/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/cmdparkour/vue-admin-box",target:"_blank",rel:"noopener noreferrer"},w={href:"https://gitee.com/cmdparkour/vue-admin-box",target:"_blank",rel:"noopener noreferrer"},j=e("li",null,"国内推荐使用yarn或者cnpm进行安装，npm安装容易产生问题",-1),Q=e("h2",{id:"基础模板",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#基础模板","aria-hidden":"true"},"#"),t(" 基础模板")],-1),y={href:"https://github.com/cmdparkour/vue-admin-box-template",target:"_blank",rel:"noopener noreferrer"},V={href:"https://gitee.com/cmdparkour/vue-admin-box-template",target:"_blank",rel:"noopener noreferrer"},E={href:"http://vue-admin-box-template.51weblove.com/ts-i18n/",target:"_blank",rel:"noopener noreferrer"},N={href:"http://vue-admin-box-template.51weblove.com/ts",target:"_blank",rel:"noopener noreferrer"},S={href:"http://vue-admin-box-template.51weblove.com/js-i18n",target:"_blank",rel:"noopener noreferrer"},B={href:"http://vue-admin-box-template.51weblove.com/js",target:"_blank",rel:"noopener noreferrer"},I=r(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>vue-admin-box是一个免费并且开源的中后台管理系统模板。使用最新版本的vue3+vite+element-plus开发而成，目的是为了解决通用型的业务中后台系统复杂的配置。</p><h4 id="特色功能" tabindex="-1"><a class="header-anchor" href="#特色功能" aria-hidden="true">#</a> 特色功能</h4><ul><li>适合中后台开发的路由配置、状态管理机制（状态默认支持本地存储）、已封装完善的axios及api管理机制</li><li>极方便扩展的主题配置功能，默认支持三种典型的中后台风格</li><li>简易配置的页面缓存功能，只需配置noCache属性，无需配置其他的任何属性，如组件名称，路由名称等等很多框架需要配置的东西</li><li>典型增删改查的三种业务表格，详情请查看“页面栏目”内的“业务表格”、“分类联动表格”、“树联动表格”</li><li>无路由跳转的刷新功能，支持缓存页面刷新，目前了解的多数框架都不支持缓存页面的刷新</li><li>方便扩展的国际化解决方案，并提供了两套非国际化的基础模板和两套国际化的基础模板（ts版本/js版本）</li><li>手写版本的各类自定义指令</li><li>已经过多个中后台业务检验过的表格公用组件及弹窗公用组件，详情请查看“页面栏目”内的“业务表格”、“分类联动表格”、“树联动表格”</li></ul><h4 id="主要技术栈" tabindex="-1"><a class="header-anchor" href="#主要技术栈" aria-hidden="true">#</a> 主要技术栈</h4><ul><li>MVVM框架：vue v3</li><li>工程化管理：vite v2</li><li>UI框架：element-plus</li><li>路由管理：vue-router v4</li><li>状态管理：vuex v4</li><li>数据请求：axios</li><li>实用工具库：@vueuse/core</li></ul><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><ol><li><p>获取源码资源包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone https://github.com/cmdparkour/vue-admin-box.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装依赖，国内推荐使用cnpm或tyarn，国外推荐使用npm或yarn</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>运行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run dev 或 npm run start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>打包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="partner-project" tabindex="-1"><a class="header-anchor" href="#partner-project" aria-hidden="true">#</a> Partner project</h2>`,9),L={href:"https://github.com/yirius/thinker-admin-box",target:"_blank",rel:"noopener noreferrer"},C={href:"http://h5.dooring.cn",target:"_blank",rel:"noopener noreferrer"},R={href:"https://github.com/lgf196/ant-simple-pro",target:"_blank",rel:"noopener noreferrer"},T={href:"https://github.com/vbenjs/vue-vben-admin",target:"_blank",rel:"noopener noreferrer"},M=r('<h2 id="效果预览" tabindex="-1"><a class="header-anchor" href="#效果预览" aria-hidden="true">#</a> 效果预览</h2><p align="center"><img src="http://blog.51weblove.com/wp-content/uploads/2021/08/QQ截图20210810174824.png"><img src="http://blog.51weblove.com/wp-content/uploads/2021/08/QQ截图20210810174848.png"><img src="http://blog.51weblove.com/wp-content/uploads/2021/08/QQ截图20210810174923.png"><img src="http://blog.51weblove.com/wp-content/uploads/2021/08/QQ截图20210810174940.png"><img src="http://blog.51weblove.com/wp-content/uploads/2021/08/QQ截图20210810175009.png"></p>',2);function A(P,q){const a=l("RouterLink"),i=l("ExternalLinkIcon");return d(),h("div",null,[u,e("p",null,[n(a,{to:"/vue-template-list/"},{default:o(()=>[t("English")]),_:1}),t(" | 简体中文")]),p,e("ul",null,[e("li",null,[n(a,{to:"/vue-template-list/VERSION.html"},{default:o(()=>[t("更新日志")]),_:1})]),m,g,b,v]),_,e("ul",null,[e("li",null,[e("a",x,[t("demo国内"),n(i)])]),e("li",null,[e("a",f,[t("demo外国"),n(i)])]),e("li",null,[e("a",k,[t("github地址"),n(i)])]),e("li",null,[e("a",w,[t("码云地址"),n(i)])]),j]),Q,e("p",null,[t("共四个基础模板，均适合从零研发使用，可在"),e("a",y,[t("github"),n(i)]),t("、"),e("a",V,[t("码云"),n(i)]),t("仓库中直接查看，模板如下所示")]),e("ol",null,[e("li",null,[t("template-ts-i18n 基础模板，内含ts语法+国际化配置 "),e("a",E,[t("demo"),n(i)])]),e("li",null,[t("template-ts 基础模板，只含ts语法，国际化已去除 "),e("a",N,[t("demo"),n(i)])]),e("li",null,[t("template-js-i18n 基础模板，js语法 + 国际化配置 "),e("a",S,[t("demo"),n(i)])]),e("li",null,[t("template-js 基础模板，js语法，国际化已去除 "),e("a",B,[t("demo"),n(i)])])]),I,e("ul",null,[e("li",null,[e("a",L,[t("Thinker-Aamin-Box - vue-admin-box的springboot后台，可使用java代码便捷创建vue界面"),n(i)])]),e("li",null,[e("a",C,[t("H5-dooring - 一款h5端页面可视化编辑器"),n(i)])]),e("li",null,[e("a",R,[t("ant-simple-pro - 一款支持vue3.0，react，angular，typescript等多框架支持的中台前端解决方案"),n(i)])]),e("li",null,[e("a",T,[t("vue-vben-admin - 使用了最新的vue3,vite2,TypeScript等主流技术开发，开箱即用的中后台前端解决方案"),n(i)])])]),M])}const O=s(c,[["render",A],["__file","vue-admin-box.html.vue"]]);export{O as default};