<template><div><h1 id="进制" tabindex="-1"><a class="header-anchor" href="#进制" aria-hidden="true">#</a> 进制</h1>
<h2 id="进制介绍" tabindex="-1"><a class="header-anchor" href="#进制介绍" aria-hidden="true">#</a> 进制介绍</h2>
<h3 id="对于整数-有四种表示方式" tabindex="-1"><a class="header-anchor" href="#对于整数-有四种表示方式" aria-hidden="true">#</a> 对于整数，有四种表示方式:</h3>
<ol>
<li>二进制: 0,1，满2进1.以0b或OB开头</li>
<li>十进制: 0 -- 9  满  10  进 1。</li>
<li>八进制: 0-7，满 8 进 1，以数字 0 开头表示</li>
<li>十六进制: 0-9 及 A(10) - F(15)，满 16 进 1.以 0x 或 0X 开头表示。此处的A-F不区分大小写。</li>
</ol>
<h3 id="演示" tabindex="-1"><a class="header-anchor" href="#演示" aria-hidden="true">#</a> 演示</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 二进制</span>
<span class="token keyword">int</span> n1 <span class="token operator">=</span> <span class="token number">0b1010</span><span class="token punctuation">;</span>
<span class="token comment">// 10 进制</span>
<span class="token keyword">int</span> n2 <span class="token operator">=</span> <span class="token number">1010</span><span class="token punctuation">;</span>
<span class="token comment">// 8 进制</span>
<span class="token keyword">int</span> n3 <span class="token operator">=</span> <span class="token number">01010</span><span class="token punctuation">;</span>
<span class="token comment">// 16 进制</span>
<span class="token keyword">int</span> n4 <span class="token operator">=</span> <span class="token number">0x10101</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"n1="</span> <span class="token operator">+</span> n1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"n2="</span> <span class="token operator">+</span> n2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"n3="</span> <span class="token operator">+</span> n3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"n4="</span> <span class="token operator">+</span> n4<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="进制的转换" tabindex="-1"><a class="header-anchor" href="#进制的转换" aria-hidden="true">#</a> 进制的转换</h2>
<h3 id="第一组" tabindex="-1"><a class="header-anchor" href="#第一组" aria-hidden="true">#</a> 第一组：</h3>
<ol>
<li>二进制转十进制</li>
</ol>
<div class="custom-container tip"><p class="custom-container-title">规则： 从最低位(右边)开始，将每个位上的数提取出来，乘以2的(位数-1)次方，然后求和。</p>
</div>
<ol start="2">
<li>
<p>八进制转十进制</p>
</li>
<li>
<p>十六进制转十进制</p>
</li>
</ol>
<h3 id="第二组" tabindex="-1"><a class="header-anchor" href="#第二组" aria-hidden="true">#</a> 第二组：</h3>
<ol>
<li>十进制转二进制</li>
<li>十进制转八进制</li>
<li>十进制转十六进制</li>
</ol>
<h3 id="第三组" tabindex="-1"><a class="header-anchor" href="#第三组" aria-hidden="true">#</a> 第三组：</h3>
<ol>
<li>二进制转八进制</li>
<li>二进制转十六进制</li>
</ol>
<h3 id="第四组" tabindex="-1"><a class="header-anchor" href="#第四组" aria-hidden="true">#</a> 第四组：</h3>
<ol>
<li>八进制转二进制</li>
<li>十六进制转二进制</li>
</ol>
<h2 id="原码、反码、补码" tabindex="-1"><a class="header-anchor" href="#原码、反码、补码" aria-hidden="true">#</a> 原码、反码、补码</h2>
<h2 id="位运算" tabindex="-1"><a class="header-anchor" href="#位运算" aria-hidden="true">#</a> 位运算</h2>
</div></template>


