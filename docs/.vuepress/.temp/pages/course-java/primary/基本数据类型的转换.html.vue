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
<h4 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1" aria-hidden="true">#</a> 介绍 ：</h4>
<h5 id="自动类型转换的逆过程-将容量大的数据类型转换为容量小的数据类型。使用时要加上强制转换符-但可能造成精度降低或溢出-格外要注意。" tabindex="-1"><a class="header-anchor" href="#自动类型转换的逆过程-将容量大的数据类型转换为容量小的数据类型。使用时要加上强制转换符-但可能造成精度降低或溢出-格外要注意。" aria-hidden="true">#</a> 自动类型转换的逆过程，将<strong>容量大</strong>的数据类型<strong>转换</strong>为<strong>容量小</strong>的数据类型。使用时要加上强制<strong>转换符()</strong>，但可能造成<strong>精度降低或溢出</strong>,格外要注意。</h5>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 造成精度损失</span>
<span class="token keyword">int</span> n1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token number">1.9</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"n1="</span> <span class="token operator">+</span> n1<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 造成数据溢出</span>
<span class="token keyword">int</span> n2 <span class="token operator">=</span> <span class="token number">2000</span><span class="token punctuation">;</span>
<span class="token keyword">byte</span> b1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span>n2<span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"b1="</span> <span class="token operator">+</span> b1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="细节说明" tabindex="-1"><a class="header-anchor" href="#细节说明" aria-hidden="true">#</a> 细节说明</h4>
<ol>
<li>
<p>​	当进行数据的大小从  大 ——&gt; 小，就需要使用到强制转换</p>
</li>
<li>
<p>强制转换符号只正对最近的操作符有效，使用小括号提升优先级</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 错误</span>
<span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token number">10</span> <span class="token operator">*</span> <span class="token number">3.5</span> <span class="token operator">+</span> <span class="token number">6</span> <span class="token operator">*</span> <span class="token number">1.5</span>
    
<span class="token comment">// 正确</span>
 <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">*</span> <span class="token number">3.5</span> <span class="token operator">+</span> <span class="token number">6</span> <span class="token operator">*</span> <span class="token number">1.5</span><span class="token punctuation">)</span><span class="token number">10</span> <span class="token operator">*</span> <span class="token number">3.5</span> <span class="token operator">+</span> <span class="token number">6</span> <span class="token operator">*</span> <span class="token number">1.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>char 类型可以保存 int 的常量直值，但不能保存 int 的变量值，需要强制转换</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">char</span> a <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span> 
<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span> <span class="token comment">// 对</span>
<span class="token keyword">char</span> c <span class="token operator">=</span> a<span class="token punctuation">;</span> <span class="token comment">// 错</span>
<span class="token keyword">char</span> m <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span>b<span class="token punctuation">;</span> <span class="token comment">// 对</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>byte 和 short，char 类型在进行运算时，当做 int 类型来处理</p>
</li>
</ol>
<h2 id="基本数据类型的转换练习" tabindex="-1"><a class="header-anchor" href="#基本数据类型的转换练习" aria-hidden="true">#</a> 基本数据类型的转换练习</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">short</span> s <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span> <span class="token comment">// 对</span>
s <span class="token operator">=</span> s <span class="token operator">-</span> <span class="token number">9</span><span class="token punctuation">;</span> <span class="token comment">// 错 int ---> short</span>

<span class="token keyword">byte</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 对</span>
b <span class="token operator">=</span> b <span class="token operator">+</span> <span class="token number">11</span><span class="token punctuation">;</span> <span class="token comment">// 错 int ---> byte</span>
b <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span><span class="token punctuation">(</span>b <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 对 使用强转</span>

<span class="token keyword">char</span> c <span class="token operator">=</span> <span class="token char">'a'</span><span class="token punctuation">;</span> <span class="token comment">// 对</span>
<span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span> <span class="token comment">// 对</span>
<span class="token keyword">float</span> d <span class="token operator">=</span> <span class="token number">.314F</span><span class="token punctuation">;</span> <span class="token comment">// 对</span>
<span class="token keyword">double</span> resule <span class="token operator">=</span> c <span class="token operator">+</span> i <span class="token operator">+</span> d<span class="token punctuation">;</span> <span class="token comment">// 对 float ---> double</span>

<span class="token keyword">byte</span> b <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span> <span class="token comment">// 对</span>
<span class="token keyword">short</span> s <span class="token operator">=</span> <span class="token number">14</span><span class="token punctuation">;</span> <span class="token comment">// 对</span>
<span class="token keyword">short</span> t <span class="token operator">=</span> s <span class="token operator">+</span> b<span class="token punctuation">;</span> <span class="token comment">// 错误 int ---> short</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本数据类型和string-类型的转换" tabindex="-1"><a class="header-anchor" href="#基本数据类型和string-类型的转换" aria-hidden="true">#</a> 基本数据类型和<strong>String</strong> 类型的转换</h2>
<h3 id="介绍-2" tabindex="-1"><a class="header-anchor" href="#介绍-2" aria-hidden="true">#</a> 介绍</h3>
<p>​	在程序开发中，我们经常需要将基本数据类型转成 <strong>String</strong>  类型。或者将<strong>String</strong> 型转成<strong>基本数据类型</strong>。</p>
<h3 id="基本类型转-string-类型" tabindex="-1"><a class="header-anchor" href="#基本类型转-string-类型" aria-hidden="true">#</a> 基本类型转 <strong>String</strong> 类型</h3>
<p><strong>语法：</strong> 将基本类型的值 + &quot;&quot; 即可</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> n1 <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token keyword">float</span> n2 <span class="token operator">=</span> <span class="token number">1.1F</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> n3 <span class="token operator">=</span> <span class="token number">4.5</span><span class="token punctuation">;</span>
<span class="token keyword">boolean</span> n4 <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token comment">// 转换为 String 类型</span>
<span class="token class-name">String</span> s1 <span class="token operator">=</span> n1 <span class="token operator">+</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s2 <span class="token operator">=</span> n2 <span class="token operator">+</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s3 <span class="token operator">=</span> n3 <span class="token operator">+</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s4 <span class="token operator">=</span> n4 <span class="token operator">+</span> <span class="token string">""</span><span class="token punctuation">;</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="string类型转基本数据类型" tabindex="-1"><a class="header-anchor" href="#string类型转基本数据类型" aria-hidden="true">#</a> String类型转基本数据类型</h3>
<p><strong>语法：</strong> 通过基本类型的包装类调用parseXX方法即可</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">"123456"</span><span class="token punctuation">;</span>

<span class="token comment">//转换 str 为其他数据类型</span>
<span class="token keyword">int</span> a1 <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> a2 <span class="token operator">=</span> <span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">parseDouble</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">float</span> a3 <span class="token operator">=</span> <span class="token class-name">Float</span><span class="token punctuation">.</span><span class="token function">parseFloat</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">long</span> a4 <span class="token operator">=</span> <span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token function">parseLong</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">byte</span> a5 <span class="token operator">=</span> <span class="token class-name">Byte</span><span class="token punctuation">.</span><span class="token function">parseByte</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">boolean</span> a6 <span class="token operator">=</span> <span class="token class-name">Boolean</span><span class="token punctuation">.</span><span class="token function">parseBoolean</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">short</span> a7 <span class="token operator">=</span> <span class="token class-name">Short</span><span class="token punctuation">.</span><span class="token function">parseShort</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">char</span> a8 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将字符串第一个转为字符型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项！</h3>
<ol>
<li>在将 <strong>String</strong>  类型转成 基本数据类型时，要确保 <strong>String</strong> 类型能够转成有效的数据，比如 我们可以把“123”，转成一个整数，但是不能把 “hello” 转成一个整数</li>
<li>如果格式不正确，就会<strong>抛出异常</strong>，程序就会<strong>终止</strong>， 这个问题在异常处理章节中，会处理</li>
</ol>
</div></template>


