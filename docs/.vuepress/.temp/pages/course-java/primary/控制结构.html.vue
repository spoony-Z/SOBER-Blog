<template><div><h1 id="程序控制结构" tabindex="-1"><a class="header-anchor" href="#程序控制结构" aria-hidden="true">#</a> 程序控制结构</h1>
<h2 id="顺序控制" tabindex="-1"><a class="header-anchor" href="#顺序控制" aria-hidden="true">#</a> 顺序控制</h2>
<h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3>
<p><strong>程序从上到下逐行的执行，中间没有任何判断和跳转</strong></p>
<h3 id="举例和注意事项" tabindex="-1"><a class="header-anchor" href="#举例和注意事项" aria-hidden="true">#</a> 举例和注意事项</h3>
<p><strong>Java中定义变量时采用合法的前向引用。</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 正确</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Testf</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">12</span><span class="token operator">:</span>
	<span class="token keyword">int</span> num2 <span class="token operator">=</span> num1 <span class="token operator">+</span> <span class="token number">2</span><span class="token operator">:</span>
<span class="token punctuation">}</span>

<span class="token comment">// 错误</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> num2 <span class="token operator">=</span> num1 <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分支控制" tabindex="-1"><a class="header-anchor" href="#分支控制" aria-hidden="true">#</a> 分支控制</h2>
<h3 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1" aria-hidden="true">#</a> 介绍</h3>
<p><strong>让程序有选择的执行，分支控制有三种</strong></p>
<ol>
<li>
<p><strong>单分支</strong></p>
<p>基本语法</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span>条件表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>
    执行代码块；
<span class="token punctuation">}</span>
<span class="token comment">// 说明：当条件表达式为ture 时，就会执行》的代码。如果为false ,就不执行, 如果 {} 中只有一条语句，则可以不用 {},建议写上 {}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>双分支</strong></p>
<p>基本语法</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span>条件表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>
    执行代码块<span class="token number">1</span>；
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
    执行代码块<span class="token number">2</span>；
<span class="token punctuation">}</span>
<span class="token comment">// 说明：当条件表达式成立，即执行代码块1，否则执行代码块2.如果执行代码块 只有一条语句，则{}可以省略，否则，不能省略</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>多分支</strong></p>
<p>基本语法</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span>条件表达式<span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    执行代码块<span class="token number">1</span>；
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>条件表达式<span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    执行代码块<span class="token number">2</span>；
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
    执行代码块<span class="token number">3</span>；
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="循环控制-for-while-dowhile-多重循环" tabindex="-1"><a class="header-anchor" href="#循环控制-for-while-dowhile-多重循环" aria-hidden="true">#</a> 循环控制（for，while，dowhile，多重循环）</h2>
<h2 id="break" tabindex="-1"><a class="header-anchor" href="#break" aria-hidden="true">#</a> break</h2>
<h2 id="continue" tabindex="-1"><a class="header-anchor" href="#continue" aria-hidden="true">#</a> continue</h2>
<h2 id="return" tabindex="-1"><a class="header-anchor" href="#return" aria-hidden="true">#</a> return</h2>
</div></template>


