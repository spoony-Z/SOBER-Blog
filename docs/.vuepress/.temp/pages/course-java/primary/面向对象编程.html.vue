<template><div><h1 id="面向对象编程" tabindex="-1"><a class="header-anchor" href="#面向对象编程" aria-hidden="true">#</a> 面向对象编程</h1>
<h2 id="类与对象-oop" tabindex="-1"><a class="header-anchor" href="#类与对象-oop" aria-hidden="true">#</a> 类与对象(OOP)</h2>
<h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h3>
<div class="custom-container tip"><p class="custom-container-title">张老太养了两只猫猫: 一只名字叫小白,今年3岁，白色。还有一只叫小花,今年100岁,花色。请编写一个程序，当用户输入小猫的名字时就显示该猫的名字，年龄，颜色。</p>
<blockquote>
<p>如果用户输入的小猫名 错误.则显示 张老太没有这只猫猫。</p>
</blockquote>
</div>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 定义一个类</span>
<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span> <span class="token comment">// 名字</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span> <span class="token comment">// 年龄</span>
    <span class="token class-name">String</span> color<span class="token punctuation">;</span> <span class="token comment">// 颜色</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用OOP面向对象解决</span>
<span class="token comment">// 实例化一直猫[ 创建一只猫 ]</span>
<span class="token comment">// 1.new Cat() 创建一只猫</span>
<span class="token comment">// 2.Cat cat1 = new Cat(); 把创建的猫赋给 cat1</span>
<span class="token comment">// 3.cat1 就是一个对象</span>
<span class="token comment">// 4.访问 cat1 中的属性 cat1.name</span>
<span class="token class-name">Cat</span> cat1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
cat1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"姓名"</span><span class="token punctuation">;</span>
cat1<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">13</span><span class="token punctuation">;</span>
cat1<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token char">'red'</span><span class="token punctuation">;</span>
<span class="token class-name">Sytem</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>cat1<span class="token punctuation">.</span>nam <span class="token operator">+</span> cat1<span class="token punctuation">.</span>age <span class="token operator">+</span> cat1<span class="token punctuation">.</span>color<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象在内存中的分布示意图" tabindex="-1"><a class="header-anchor" href="#对象在内存中的分布示意图" aria-hidden="true">#</a> 对象在内存中的分布示意图</h3>
<p><img src="@source/course-java/primary/image/18.png" alt="图片"></p>
<h3 id="属性-成员变量" tabindex="-1"><a class="header-anchor" href="#属性-成员变量" aria-hidden="true">#</a> 属性 / 成员变量</h3>
<h4 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h4>
<ol>
<li>
<p>从概念或叫法上看: 成员变量 = 属性 = field (即 成员变量是用来表示属性
的，授课中，统一叫 属性)</p>
</li>
<li>
<p>属性是类的一个组成部分，一般是<strong>基本数据类型</strong>,也可是<strong>引用类型</strong>(对象，数组)
比如我们前面定义猫类 的 int age 就是属性</p>
</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">double</span> price<span class="token punctuation">;</span>
    <span class="token class-name">String</span> color<span class="token punctuation">;</span>
    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> master<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注意事项和细节说明" tabindex="-1"><a class="header-anchor" href="#注意事项和细节说明" aria-hidden="true">#</a> 注意事项和细节说明</h4>
<ol>
<li>属性的定义语法同变量，示例: 访问修饰符 属性类型 属性名：简单介绍访问修饰符:
控制属性的访问范围有四种访问修饰符 public, proctected, 默认, private</li>
<li>属性的定义类型可以为任意类型，包含基本类型或引用类型</li>
<li>属性如果不赋值，有默认值，规则和数组一致</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 1.创建 Person 对象
 * 2.p1 是对象名（对象引用）
 * 3.new Person() 创建对象空间（数据）
 * 对象属性的默认值，遵守规则：int 0, byte 0 ···
 */</span>
 <span class="token class-name">Person</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
   <span class="token keyword">int</span> age<span class="token punctuation">;</span>
   <span class="token class-name">String</span> name<span class="token punctuation">;</span>
   <span class="token keyword">double</span> sal<span class="token punctuation">;</span>
   <span class="token keyword">boolean</span> isPass<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何创建对象" tabindex="-1"><a class="header-anchor" href="#如何创建对象" aria-hidden="true">#</a> 如何创建对象</h3>
<ol>
<li>先声明在创建<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Cat</span> cat<span class="token punctuation">;</span> <span class="token comment">// 声明对象</span>
cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>直接创建<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Cat</span> cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<h3 id="类和对象的分配机制" tabindex="-1"><a class="header-anchor" href="#类和对象的分配机制" aria-hidden="true">#</a> 类和对象的分配机制</h3>
<p><img src="@source/course-java/primary/image/19.png" alt=""></p>
<h3 id="对象的创建过程" tabindex="-1"><a class="header-anchor" href="#对象的创建过程" aria-hidden="true">#</a> 对象的创建过程</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Person</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
p<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"jack"</span><span class="token punctuation">;</span>
p<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>先加载 <strong>Person</strong> 类信息(属性和方法信息,只会加载一次)</li>
<li>在堆中分配空间,进行默认初始化(看规则)</li>
<li>把地址赋给 p，p 就指向对象</li>
<li>进行指定初始化，比如 p.name = &quot;jac&quot; p.age =10</li>
</ol>
<h2 id="成员方法" tabindex="-1"><a class="header-anchor" href="#成员方法" aria-hidden="true">#</a> 成员方法</h2>
<h2 id="成员方法机制" tabindex="-1"><a class="header-anchor" href="#成员方法机制" aria-hidden="true">#</a> 成员方法机制</h2>
<h2 id="重载" tabindex="-1"><a class="header-anchor" href="#重载" aria-hidden="true">#</a> 重载</h2>
<h2 id="可变参数" tabindex="-1"><a class="header-anchor" href="#可变参数" aria-hidden="true">#</a> 可变参数</h2>
<h2 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h2>
<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<h2 id="this" tabindex="-1"><a class="header-anchor" href="#this" aria-hidden="true">#</a> this</h2>
</div></template>


