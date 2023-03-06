<template><div><h1 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h1>
<div class="custom-container tip"><p class="custom-container-title">运算符介绍</p>
<blockquote>
<p>运算符是一种<strong>特殊的符号</strong>，用以表示数据的运算、赋值和比较等</p>
<ol>
<li><strong>算术运算符</strong></li>
<li><strong>赋值运算符</strong></li>
<li><strong>关系运算符 [比较运算符]</strong></li>
<li><strong>逻辑运算符</strong></li>
<li><strong>位运算符 [需要二进制基础]</strong></li>
<li><strong>三元运算符</strong></li>
</ol>
</blockquote>
</div>
<h2 id="算数运算符" tabindex="-1"><a class="header-anchor" href="#算数运算符" aria-hidden="true">#</a> 算数运算符</h2>
<h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍:</h3>
<p>算术运算符是对数值类型的变量进行运算的，在Java程序中使用的非常多</p>
<h3 id="概览" tabindex="-1"><a class="header-anchor" href="#概览" aria-hidden="true">#</a> 概览</h3>
<p><img src="@source/course-java/primary/image/12.png" alt="image-20230224003002648"></p>
<h3 id="演示" tabindex="-1"><a class="header-anchor" href="#演示" aria-hidden="true">#</a> 演示</h3>
<ol>
<li>
<p>基本使用</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 2</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">10.0</span> <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 2.5</span>
<span class="token keyword">double</span> d <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">// 10/4 = 2 所以 double 型为 2.0 </span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 2.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>取模（取余：%）</p>
</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 公式：a % b = a - a / b * b;
 * 例如：
 * -10 % 3 => -10 - (-10) / 3 * 3 = -10 + 9 = -1
 * 10 % - 3 = 10 - 10 / (-3) = 10 - 9 = 1
 */</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">%</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">10</span> <span class="token operator">%</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">%</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">10</span> <span class="token operator">%</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>++ 的使用（前++，后++）</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
i<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token operator">++</span>i<span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 12</span>
<span class="token doc-comment comment">/**
 * 前++：++i 先自增后赋值
 * 后++：i++ 先赋值后自增
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关系运算符" tabindex="-1"><a class="header-anchor" href="#关系运算符" aria-hidden="true">#</a> 关系运算符</h2>
<h3 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1" aria-hidden="true">#</a> 介绍</h3>
<ol>
<li>关系运算符的结果都是 <strong>boolean</strong> 型，也就是要么是 <strong>true</strong>，要么是 <strong>false</strong></li>
<li>关系表达式 经常用在 if结构的条件中或循环结构的条件中</li>
</ol>
<h3 id="概览-1" tabindex="-1"><a class="header-anchor" href="#概览-1" aria-hidden="true">#</a> 概览</h3>
<p><img src="@source/course-java/primary/image/13.png" alt="image-20230224003002648"></p>
</div></template>


