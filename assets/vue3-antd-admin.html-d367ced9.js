import{_ as l,M as r,p as o,q as d,R as e,t as n,N as t,V as c,a1 as i}from"./framework-204010b2.js";const h={},u=e("h1",{id:"vue3-antd-admin",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue3-antd-admin","aria-hidden":"true"},"#"),n(" vue3-antd-admin")],-1),g=e("blockquote",null,[e("p",null,"基于 vue-cli5.x 重构整个前后端项目，完善后端权限控制细粒度，封装更多场景化组件...正在完善中")],-1),p=e("p",null,"基于 vue-cli5.x / vite2.x + vue3.x + antd-design-vue3.x + typescript4.x 的后台管理系统模板",-1),v=e("li",null,"账号：rootadmin，密码：123456",-1),b={href:"http://buqiyuan.gitee.io/vue3-antd-admin/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://vue3-antd-admin.vercel.app/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://nest-api.buqiyuan.site/swagger-api/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/buqiyuan/nest-admin",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/buqiyuan/react-antd-admin",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/buqiyuan/vite-vue3-admin",target:"_blank",rel:"noopener noreferrer"},y={href:"https://gitee.com/buqiyuan/vue3-antd-admin",target:"_blank",rel:"noopener noreferrer"},q={href:"http://json2ts.com/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/vbenjs/vue-vben-admin",target:"_blank",rel:"noopener noreferrer"},w=i(`<h2 id="安装使用" tabindex="-1"><a class="header-anchor" href="#安装使用" aria-hidden="true">#</a> 安装使用</h2><ul><li>获取项目代码</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/buqiyuan/vue3-antd-admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>安装依赖</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> vue3-antd-admin

<span class="token function">yarn</span> <span class="token function">install</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>运行</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>打包</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="vscode-配置" tabindex="-1"><a class="header-anchor" href="#vscode-配置" aria-hidden="true">#</a> vscode 配置</h2>`,10),I={href:"https://cn.vuejs.org/guide/typescript/overview.html#volar-takeover-mode",target:"_blank",rel:"noopener noreferrer"},N={href:"https://vueuse.org/functions.html",target:"_blank",rel:"noopener noreferrer"},V=i('<h2 id="项目简要说明" tabindex="-1"><a class="header-anchor" href="#项目简要说明" aria-hidden="true">#</a> 项目简要说明</h2><p><code>rootadmin</code> 默认开放多点登录，其他新建的账号默认都是单点登录。建议自己拉后端代码到本地跑，避免多人同时操作时产生冲突和误解。</p><h3 id="todolist" tabindex="-1"><a class="header-anchor" href="#todolist" aria-hidden="true">#</a> todolist</h3><ul><li>[x] 动态表格(完善中)</li><li>[x] 动态表单(完善中)</li><li>[ ] 电商 SKU 功能演示</li><li>[ ] 纯前端导出 PDF 自动分页</li><li>[ ] 其他...</li></ul><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志" aria-hidden="true">#</a> 更新日志</h2>',5),A=e("h2",{id:"git-贡献提交规范",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git-贡献提交规范","aria-hidden":"true"},"#"),n(" Git 贡献提交规范")],-1),O={href:"https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular",target:"_blank",rel:"noopener noreferrer"},C=i("<ul><li><code>feat</code> 增加新功能</li><li><code>fix</code> 修复问题/BUG</li><li><code>style</code> 代码风格相关无影响运行结果的</li><li><code>perf</code> 优化/性能提升</li><li><code>refactor</code> 重构</li><li><code>revert</code> 撤销修改</li><li><code>test</code> 测试相关</li><li><code>docs</code> 文档/注释</li><li><code>chore</code> 依赖更新/脚手架配置修改等</li><li><code>workflow</code> 工作流改进</li><li><code>ci</code> 持续集成</li><li><code>types</code> 类型定义文件更改</li><li><code>wip</code> 开发中</li></ul>",1),E=e("h3",{id:"qq-交流群-2022-3-8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#qq-交流群-2022-3-8","aria-hidden":"true"},"#"),n(" QQ 交流群（2022-3-8）")],-1),G={href:"https://qm.qq.com/cgi-bin/qm/qr?k=ID-KcAOdPUPWVgAnsPLF3gRdHLc8GURO&jump_from=webapi",target:"_blank",rel:"noopener noreferrer"},H=e("img",{src:"https://img.shields.io/badge/570108996-blue.svg",alt:"加入QQ群"},null,-1),M=i('<div><img src="https://cdn.jsdelivr.net/gh/buqiyuan/MyImageHosting/imgs/vue3-antdv-admin/qq_group.jpg" height="280"></div><h2 id="赞赏" tabindex="-1"><a class="header-anchor" href="#赞赏" aria-hidden="true">#</a> 赞赏</h2><p>如果你觉得这个项目对你有帮助，你可以帮作者买一杯咖啡表示支持!</p><table><thead><tr><th style="text-align:center;">微信</th><th style="text-align:center;">支付宝</th></tr></thead><tbody><tr><td style="text-align:center;"><img src="https://cdn.jsdelivr.net/gh/buqiyuan/MyImageHosting/imgs/vue3-antdv-admin/weixin.jpg" height="220"></td><td style="text-align:center;"><img src="https://cdn.jsdelivr.net/gh/buqiyuan/MyImageHosting/imgs/vue3-antdv-admin/zhifubao.jpg" height="220"></td></tr></tbody></table><h2 id="感谢-jetbrains-免费的开源授权" tabindex="-1"><a class="header-anchor" href="#感谢-jetbrains-免费的开源授权" aria-hidden="true">#</a> 感谢 JetBrains 免费的开源授权</h2><a href="https://www.jetbrains.com/?from=Mybatis-PageHelper" target="_blank"><img src="https://user-images.githubusercontent.com/1787798/69898077-4f4e3d00-138f-11ea-81f9-96fb7c49da89.png" height="200"></a>',6);function P(B,R){const a=r("ExternalLinkIcon"),s=r("RouterLink");return o(),d("div",null,[u,g,p,e("ul",null,[v,e("li",null,[n("在线预览（ "),e("a",b,[n("gitee"),t(a)]),n(" / "),e("a",m,[n("vercel"),t(a)]),n(" ）")]),e("li",null,[e("a",_,[n("swagger 文档"),t(a)])]),e("li",null,[e("a",f,[n("后台地址"),t(a)])]),e("li",null,[e("a",x,[n("react 版 coding"),t(a)])]),e("li",null,[e("a",k,[n("vite 版"),t(a)])]),e("li",null,[e("a",y,[n("gitee 地址"),t(a)])]),e("li",null,[n("根据 JSON 生成 typescript 的工具："),e("a",q,[n("http://json2ts.com/"),t(a)])])]),e("p",null,[n("部分设计参考了 "),e("a",j,[n("vue-vben-admin"),t(a)])]),w,e("p",null,[n("安装项目根目录.vscode 推荐的插件，再安装 Volar，并禁用 Vetur，重启 vscode 即可，更多详细的 vue3 IDE 配置点"),e("a",I,[n("这里"),t(a)]),n("。")]),e("blockquote",null,[e("p",null,[n("使用了 Vue3.x 全家桶、ant-design-vue3.x 和 typescript4.x，实践 vue3.x 的新特性以及玩法，不得不说 vue3.x 的 Composition API 相比于 vue2.x 的 Options API 灵活很多，让我们可以灵活地组合组件逻辑，我们可以很轻松的使用 hooks 的形式去代替以前 mixins 等的写法。更多 hooks 可以参考"),e("a",N,[n("vueuse"),t(a)])])]),V,e("p",null,[t(s,{to:"/vue-template-list/CHANGELOG.html"},{default:c(()=>[n("CHANGELOG")]),_:1})]),A,e("ul",null,[e("li",null,[e("p",null,[n("参考 "),e("a",O,[n("vue"),t(a)]),n(" 规范 ("),e("a",L,[n("Angular"),t(a)]),n(")")]),C])]),E,e("p",null,[e("a",G,[H,t(a)])]),M])}const U=l(h,[["render",P],["__file","vue3-antd-admin.html.vue"]]);export{U as default};
