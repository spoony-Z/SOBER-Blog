import{_ as i,M as s,p as l,q as d,R as e,t as a,N as r,a1 as t}from"./framework-204010b2.js";const c={},u=e("h2",{id:"uniapp-下一页返回上一页传参",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#uniapp-下一页返回上一页传参","aria-hidden":"true"},"#"),a(" uniapp 下一页返回上一页传参")],-1),v=t(`<ol><li><p>B 页面</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>onBackPress() {
   let pages = getCurrentPages();
   if (pages.length &gt;= 2) {
    let curPage = pages[pages.length - 1]; // 当前页面
    let prePage = pages[pages.length - 2]; // 上一页面
    prePage.$vm.参数名 = 参数值;
   }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>A 页面</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>let pages = getCurrentPages();
let curPage = pages[pages.length - 1];
curPage.$vm.参数名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,1);function p(o,g){const n=s("Badge");return l(),d("div",null,[u,e("p",null,[a("作者："),r(n,{type:"tip",text:"滋泼泼",vertical:"middle"})]),v])}const m=i(c,[["render",p],["__file","uniapp 下一页返回上一页传参.html.vue"]]);export{m as default};
