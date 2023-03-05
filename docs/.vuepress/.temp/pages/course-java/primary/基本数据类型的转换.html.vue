<template><div><h1 id="基本数据类型转换" tabindex="-1"><a class="header-anchor" href="#基本数据类型转换" aria-hidden="true">#</a> 基本数据类型转换</h1>
<h2 id="自动类型转换" tabindex="-1"><a class="header-anchor" href="#自动类型转换" aria-hidden="true">#</a> 自动类型转换</h2>
<h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍:</h3>
<p>​      当iava程序在进行赋值或者运算时，精度小的类型自动转换为精度大的数据类型这个就是自动类型转换。</p>
<p>​      数据类型按精度(容量)大小排序为(背，规则)</p>
<p><img src="@source/course-java/primary/image/11.png" alt="image-20230224003002648"></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AutoConvert</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token char">'a'</span><span class="token punctuation">;</span> <span class="token comment">//ok char -> int</span>
        <span class="token keyword">double</span> d1 <span class="token operator">=</span> <span class="token number">80</span><span class="token punctuation">;</span> <span class="token comment">//ok int -> doublre</span>
    	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//97</span>
    	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printIn</span><span class="token punctuation">(</span>d1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//80.0</span>
      <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动类型转换注意和细节" tabindex="-1"><a class="header-anchor" href="#自动类型转换注意和细节" aria-hidden="true">#</a> 自动类型转换注意和细节</h3>
<p>​	1.有多种类型的数据混合运算时，系统首先自动将所有数据转换成容量最大的那种数据类型，然后再进行计算</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>        <span class="token keyword">int</span> n1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">//ok</span>
        
        <span class="token comment">//错误 n1 + 1.1 => 结果类型是 double</span>
        <span class="token keyword">float</span> d1 <span class="token operator">=</span> n1 <span class="token operator">+</span> <span class="token number">1.1</span><span class="token punctuation">;</span> 
        
        <span class="token comment">//对 n1 + 1.1 => 结果类型是 doubledouble</span>
        <span class="token keyword">double</span> d1 <span class="token operator">=</span> n1 <span class="token operator">+</span> <span class="token number">1.1</span><span class="token punctuation">;</span> 
        
        <span class="token comment">//对 n1 + 1.1 => 结果类型是 float</span>
        <span class="token keyword">float</span> d1 <span class="token operator">=</span> n1 <span class="token operator">+</span> <span class="token number">1.1F</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​	2.当我们把精度(容量)大 的数据类型赋值给精度(容量)小 的数据类型时，就会报错，反之就会进行自动类型转换</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>         <span class="token comment">//错误 double -> int</span>
         <span class="token keyword">int</span> n2 <span class="token operator">=</span> <span class="token number">1.1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>​	3.<strong>(byte,short)</strong> 和 <strong>char</strong> 之间不会相互自动转换</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>       <span class="token doc-comment comment">/** 
        * 当把具体数赋给 byte 时，(1)先判断该数是否在byte范围内，如果是就可以
        */</span>
        
        <span class="token comment">//对  -128-127</span>
        <span class="token keyword">byte</span> b1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> 
        
        <span class="token comment">// int n2 = 1; //n2 是int</span>
        <span class="token comment">// byte b2 = n2; //错误，原因 : 如果是变量赋值，判断类型</span>
        
        <span class="token comment">//错误， 原因 byte 不能自动转成 char</span>
         <span class="token keyword">char</span> c1 <span class="token operator">=</span> b1<span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​	4.byte，short，char 他们三者可以计算，在计算时首先转换为 int 类型</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">byte</span> b2 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">byte</span> b3 <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">short</span> s1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">// 错 b2 + s1 => int</span>
<span class="token keyword">short</span> s2 <span class="token operator">=</span> b2 <span class="token operator">+</span> s1 
    
<span class="token comment">// 对 b2 + s1 => int</span>
 <span class="token keyword">int</span> s2 <span class="token operator">=</span> b2 <span class="token operator">+</span> s1<span class="token punctuation">;</span>
<span class="token comment">// 错 b2 + b3 => int</span>
<span class="token keyword">byte</span> b4 <span class="token operator">=</span> b2 <span class="token operator">+</span> b3<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​	5.boolean 不参与转换</p>
<p>​	6.自动提升原则: 表达式结果的类型自动提升为 操作数中最大的类型</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">byte</span> b4 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">short</span> s3 <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">1.1</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> num2 <span class="token operator">=</span> <span class="token number">1.1</span><span class="token punctuation">;</span>

<span class="token keyword">double</span> num3 <span class="token operator">=</span> b4 <span class="token operator">+</span> s3 <span class="token operator">+</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span> <span class="token comment">// 对</span>
<span class="token keyword">float</span> num4 <span class="token operator">=</span> b4 <span class="token operator">+</span> s3 <span class="token operator">+</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span> <span class="token comment">// 对</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="强制类型转换" tabindex="-1"><a class="header-anchor" href="#强制类型转换" aria-hidden="true">#</a> 强制类型转换</h2>
<h4 id="介绍-自动类型转换的逆过程-将容量大的数据类型转换为容量小的数据类型。使用时要加上强制转换符-但可能造成精度降低或溢出-格外要注意。" tabindex="-1"><a class="header-anchor" href="#介绍-自动类型转换的逆过程-将容量大的数据类型转换为容量小的数据类型。使用时要加上强制转换符-但可能造成精度降低或溢出-格外要注意。" aria-hidden="true">#</a> 介绍 ： 自动类型转换的逆过程，将<strong>容量大</strong>的数据类型<strong>转换</strong>为<strong>容量小</strong>的数据类型。使用时要加上强制<strong>转换符()</strong>，但可能造成<strong>精度降低或溢出</strong>,格外要注意。</h4>
</div></template>


