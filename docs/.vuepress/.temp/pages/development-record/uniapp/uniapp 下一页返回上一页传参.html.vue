<template><div><h2 id="uniapp-下一页返回上一页传参" tabindex="-1"><a class="header-anchor" href="#uniapp-下一页返回上一页传参" aria-hidden="true">#</a> uniapp 下一页返回上一页传参</h2>
<p>作者：<Badge type="tip" text="滋泼泼" vertical="middle" /></p>
<ol>
<li>
<p>B 页面</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>onBackPress() {
   let pages = getCurrentPages();
   if (pages.length >= 2) {
    let curPage = pages[pages.length - 1]; // 当前页面
    let prePage = pages[pages.length - 2]; // 上一页面
    prePage.$vm.参数名 = 参数值;
   }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>A 页面</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>let pages = getCurrentPages();
let curPage = pages[pages.length - 1];
curPage.$vm.参数名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</div></template>


