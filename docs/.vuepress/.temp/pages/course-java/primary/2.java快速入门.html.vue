<template><div><h1 id="jav快速入门" tabindex="-1"><a class="header-anchor" href="#jav快速入门" aria-hidden="true">#</a> Jav快速入门</h1>
<h2 id="_1-案例" tabindex="-1"><a class="header-anchor" href="#_1-案例" aria-hidden="true">#</a> 1. 案例</h2>
<h3 id="需求说明" tabindex="-1"><a class="header-anchor" href="#需求说明" aria-hidden="true">#</a> 需求说明：</h3>
<p>​	要求开发一个Hello.java 程序，可以输出 &quot;hello，world！&quot;</p>
<h3 id="开发步骤" tabindex="-1"><a class="header-anchor" href="#开发步骤" aria-hidden="true">#</a> 开发步骤</h3>
<p>​	1.将 Java 代码编写到扩展名为 Hello.java 的文件中</p>
<p>​	 2.通过javac 命令对该 java 文件进行编译，生成 .class文件。</p>
<p>​	 3.通过java 命令对生成的 class 文件进行运行</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">/*
* 这是java的快速入门，演示java的开发步骤
* 1. public class Hello 表示 Hello 是一个类， 是一个 public 公共类
* 2. Hello{} 表示一个类的开始和结束
* 3. public static void main(String[] args) 表示一个主方法，即程序的入口
* 4. main(){} 表示方法的开始和结束
*/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token punctuation">{</span>
    <span class="token comment">// 编写一个main方法</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>  <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"hello,word"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
* 可以将main方法写在非public类中，然后指定运行非 public 类，这样入口方法就是非public 的main方法
*/</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span> 
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello, 狗狗"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Pig</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello, 猪猪"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
* 一个源文件中最多只能有一个public类，其他类的个数不限
* Dog 和 Pig 都是一个类
* 编译后，每一个类对应一个 .class
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习" tabindex="-1"><a class="header-anchor" href="#练习" aria-hidden="true">#</a> 练习</h3>
<p><img src="@source/course-java/primary/image/3.png" alt="image-20230224003002648"></p>
<h2 id="_2-java-执行流程分析" tabindex="-1"><a class="header-anchor" href="#_2-java-执行流程分析" aria-hidden="true">#</a> 2. java 执行流程分析</h2>
<p><img src="@source/course-java/primary/image/4.png" alt="image-20230224003002648"></p>
<h3 id="什么是编译" tabindex="-1"><a class="header-anchor" href="#什么是编译" aria-hidden="true">#</a> 什么是编译？</h3>
<p><img src="@source/course-java/primary/image/5.png" alt="image-20230224003002648"></p>
<h3 id="什么是运行" tabindex="-1"><a class="header-anchor" href="#什么是运行" aria-hidden="true">#</a> 什么是运行？</h3>
<p>​	1.有了可执行的java程序(Hello.class字节码文件)
​	 2.通过运行工具java.exe对字节码文件进行执行,本质就是.class装载到jivm 机执行</p>
<h3 id="java程序开发注意事项" tabindex="-1"><a class="header-anchor" href="#java程序开发注意事项" aria-hidden="true">#</a> java程序开发注意事项！</h3>
<p>对修改后的Hello.java源文件需要重新编译，生成新的class文件后，再进行执行,才能生效</p>
<h3 id="java开发细节说明" tabindex="-1"><a class="header-anchor" href="#java开发细节说明" aria-hidden="true">#</a> Java开发细节说明</h3>
<p><img src="@source/course-java/primary/image/6.png" alt="image-20230224003002648"></p>
</div></template>


