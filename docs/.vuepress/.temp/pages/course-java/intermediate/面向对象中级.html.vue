<template><div><h1 id="面向对象中级" tabindex="-1"><a class="header-anchor" href="#面向对象中级" aria-hidden="true">#</a> 面向对象中级</h1>
<h2 id="包" tabindex="-1"><a class="header-anchor" href="#包" aria-hidden="true">#</a> 包</h2>
<h3 id="包的三大作用" tabindex="-1"><a class="header-anchor" href="#包的三大作用" aria-hidden="true">#</a> 包的三大作用</h3>
<ul>
<li><strong>区分相同名字的类</strong></li>
<li><strong>控制访问范围</strong></li>
<li><strong>当类很多时,可以很好的管理类</strong></li>
</ul>
<h3 id="包的基本语法" tabindex="-1"><a class="header-anchor" href="#包的基本语法" aria-hidden="true">#</a> 包的基本语法</h3>
<p><strong>package com.haspedu;</strong></p>
<ol>
<li><strong>package</strong> 关键字， 表示打包</li>
<li><strong>com.hspedu</strong> 表示报名</li>
</ol>
<h3 id="包的本质分析-原理" tabindex="-1"><a class="header-anchor" href="#包的本质分析-原理" aria-hidden="true">#</a> 包的本质分析（原理）</h3>
<p>包的本质 实际上就是创建不同的文件夹来保存类文件</p>
<h3 id="演示" tabindex="-1"><a class="header-anchor" href="#演示" aria-hidden="true">#</a> 演示</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 第一个包文件 包名称为 com.xiaoming</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>xiaoming</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"我是第一个包，类名为 Dog"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 第二个包文件 包名称为 com.xiaohong</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>xiaohong</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"我是第二个包，类名为 Dog"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 第三个包文件 包名称为 com.use</span>
<span class="token comment">// 使用上面两个包</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>xiaoming<span class="token punctuation">.</span></span><span class="token class-name">Dog</span></span><span class="token punctuation">;</span>
<span class="token comment">// import com.xiaoming.*; * 表示导入com.cioaming 包下的所有类</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
<span class="token doc-comment comment">/**
 * 等价于 com.xiaohong.Dog d1 = new com.xiaohong.Dog();
 * 默认省略
 */</span>
   <span class="token class-name">Dog</span> d1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token doc-comment comment">/**
 * com.xiaohong 就是为了区分不同包的相同类名
 */</span>
   <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>xiaohong<span class="token punctuation">.</span></span>Dog</span> d2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>xiaohong<span class="token punctuation">.</span></span>Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="包的命名" tabindex="-1"><a class="header-anchor" href="#包的命名" aria-hidden="true">#</a> 包的命名</h3>
<h4 id="包的命名规则" tabindex="-1"><a class="header-anchor" href="#包的命名规则" aria-hidden="true">#</a> 包的命名规则</h4>
<p><strong>只能包含数字、字母、下划线、小圆点.,但不能用数字开头，不能是关键字或保留字</strong></p>
<h4 id="包的命名规范" tabindex="-1"><a class="header-anchor" href="#包的命名规范" aria-hidden="true">#</a> 包的命名规范</h4>
<ul>
<li><strong>一般是小写字母 + 小圆点一般是</strong></li>
<li><strong>com .公司名 .项目名 .业务模块名</strong></li>
</ul>
<h3 id="java-常用的包" tabindex="-1"><a class="header-anchor" href="#java-常用的包" aria-hidden="true">#</a> Java 常用的包</h3>
<ul>
<li>java.lang  ：lang 包是基本包，默认引入，不需要再引入.</li>
<li>java.util ：util 包，系统提供的工具包，工具类，使用 Scanner</li>
<li>java.net ：网络包，网络开发</li>
<li>java.awt ：是做 java 界面开发，GUI</li>
</ul>
<h3 id="使用系统包-对数组排序" tabindex="-1"><a class="header-anchor" href="#使用系统包-对数组排序" aria-hidden="true">#</a> 使用系统包 对数组排序</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>xiaoming<span class="token punctuation">.</span></span><span class="token class-name">Dog</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
   <span class="token class-name">Dog</span> d1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>xiaohong<span class="token punctuation">.</span></span>Dog</span> d2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>xiaohong<span class="token punctuation">.</span></span>Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 系统包中的方法</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项和使用细节" tabindex="-1"><a class="header-anchor" href="#注意事项和使用细节" aria-hidden="true">#</a> 注意事项和使用细节</h3>
<ol>
<li><strong>package</strong> 的作用是声明当前类所在的包，需要放在类的最上面，一个类中最多只有一句package</li>
<li><strong>import</strong>指令 位置放在<strong>package</strong>的下面，在类定义前面,可以有多句且没有顺序要求。</li>
</ol>
<h2 id="访问修饰符" tabindex="-1"><a class="header-anchor" href="#访问修饰符" aria-hidden="true">#</a> 访问修饰符</h2>
<h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3>
<p>java 提供四种访问控制修饰符号，用于控制方法和属性( 成员变量 ) 的访问权限( 范围 )</p>
<div class="custom-container tip"><p class="custom-container-title">修饰符号：</p>
<ol>
<li><strong>公开级别：</strong> 用 <strong>public</strong> 修饰,对外公开</li>
<li><strong>受保护级别：</strong> 用 <strong>protected</strong> 修饰,对子类和同一个包中的类公开</li>
<li><strong>默认级别：</strong> 没有修饰符号,向同一个包的类公开</li>
<li><strong>私有级别：</strong> 用 <strong>private</strong> 修饰,只有类本身可以访问,不对外公开</li>
</ol>
<p><strong>演示</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> n3 <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">int</span> n1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token keyword">protected</span> <span class="token keyword">int</span> n2 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">int</span> n4 <span class="token operator">=</span><span class="token number">40</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setN1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// 同类中 访问四个属性</span>
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>n1<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>n2<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>n3<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>n4<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="面向对象的三大特征-封装-继承-多态" tabindex="-1"><a class="header-anchor" href="#面向对象的三大特征-封装-继承-多态" aria-hidden="true">#</a> 面向对象的三大特征（封装，继承，多态）</h2>
<h3 id="封装" tabindex="-1"><a class="header-anchor" href="#封装" aria-hidden="true">#</a> 封装</h3>
<h4 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1" aria-hidden="true">#</a> 介绍</h4>
<p>封装 <strong>(encapsulation)</strong> 就是把抽象出的数据 <strong>[属性]</strong> 和对数据的操作 <strong>[方法]</strong> 封装在一起,数据被保护在内部,程序的其它部分只有通过被授权的操作 <strong>[方法]</strong>,才能对数据进行操作。</p>
<h4 id="封装的理解和好处" tabindex="-1"><a class="header-anchor" href="#封装的理解和好处" aria-hidden="true">#</a> 封装的理解和好处</h4>
<ol>
<li>隐藏实现细节： 方法( 连接数据库 ) &lt;-- 调用( 传入参数...)</li>
<li>可以对数据进行验证，保证安全合理</li>
</ol>
<h4 id="封装的实现步骤" tabindex="-1"><a class="header-anchor" href="#封装的实现步骤" aria-hidden="true">#</a> 封装的实现步骤</h4>
<ol>
<li>将属性进行私有化 <strong>private</strong> ( 不能直接修改属性 )</li>
<li>提供一个 set 方法， 用于对属性判断并赋值</li>
<li>提供一个公共的get方法，用于获取属性的值</li>
</ol>
<h4 id="演示-1" tabindex="-1"><a class="header-anchor" href="#演示-1" aria-hidden="true">#</a> 演示</h4>
<div class="custom-container tip"><p class="custom-container-title">不能随便查看人的年龄,工资等隐私并对设置的年龄进行合理的验证。年龄合理就设置，否则给默认,年龄必须在 1-120,年龄，工资不能直接查看， name 的长度在 2-6 之间</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token class-name">Person</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       p1<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"杨胜军"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       p1<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">27</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

       <span class="token doc-comment comment">/** 调用构造器 */</span>
        <span class="token class-name">Person</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"杨胜军"</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** 使用构造器 调用 set 方法 */</span>
    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">setName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setAge</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/** get 方法 */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/** set 方法 */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/** 输出信息 */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"name="</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">"age"</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>快速生成 get 和 set
<img src="@source/course-java/intermediate/images/1.png" alt=""></p>
</div>
<h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3>
<p><strong>提出代码复用的问题</strong></p>
<ul>
<li><strong>问题：</strong> 我们编写了两个类，一个是 Pupil 类，一个是 Graduate 问题 : 两个类的属性和方法有很多是相同的，怎么办?</li>
</ul>
<h4 id="介绍-2" tabindex="-1"><a class="header-anchor" href="#介绍-2" aria-hidden="true">#</a> 介绍</h4>
<blockquote>
<p>继承可以解决代码复用,让我们的编程更加靠近人类思维.当多个类存在相同的属性(变量)和方法时,可以从这些类中抽象出父类,在父类中定义这些相同的属性和方法，所有的子类不需要重新定义这些属性和方法，只需要通过extends来声明继承父类即可。</p>
</blockquote>
<div class="custom-container tip"><p class="custom-container-title">Pupil 类</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Pupil</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">double</span> score<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setScore</span><span class="token punctuation">(</span><span class="token keyword">double</span> score<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">=</span> score<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"小学生"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">"年龄"</span> <span class="token operator">+</span> age <span class="token operator">+</span> <span class="token string">"成绩"</span> <span class="token operator">+</span> score<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<div class="custom-container tip"><p class="custom-container-title">Greaduate 类</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Greaduate</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">double</span> score<span class="token punctuation">;</span>
  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setScore</span><span class="token punctuation">(</span><span class="token keyword">double</span> score<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">=</span> score<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"大学生"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">"年龄"</span> <span class="token operator">+</span> age <span class="token operator">+</span> <span class="token string">"成绩"</span> <span class="token operator">+</span> score<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<div class="custom-container tip"><p class="custom-container-title">Test2 类 中调用 上面两个类</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Pupil</span> pupil <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pupil</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pupil<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"小明"</span><span class="token punctuation">;</span>
        pupil<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        pupil<span class="token punctuation">.</span><span class="token function">setScore</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pupil<span class="token punctuation">.</span><span class="token function">testInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Greaduate</span> greaduate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Greaduate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        greaduate<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"大学生"</span><span class="token punctuation">;</span>
        greaduate<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">22</span><span class="token punctuation">;</span>
        greaduate<span class="token punctuation">.</span><span class="token function">setScore</span><span class="token punctuation">(</span><span class="token number">70</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        greaduate<span class="token punctuation">.</span><span class="token function">testInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<ul>
<li>示意图
<img src="@source/course-java/intermediate/images/2.png" alt=""></li>
</ul>
<h4 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> 子类 <span class="token keyword">extends</span> 父类 <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token number">1.</span> 子类就会自动拥有父类定义的属性和方法
<span class="token number">2.</span> 父类又叫 超类，基类。
<span class="token number">3.</span> 子类又叫派生类。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


