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
<li>
<p><strong>嵌套分支</strong></p>
<p>在一个分支结构中又完整的嵌套了另个完整的分支结构，里面的分支的结构称为内层分支外面的分支结构称为外层分支。</p>
<p>规范: 不要超过3层 (可读性不好)</p>
<p><strong>基本语法</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>案例练习</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 案例说明: 
 * 参加歌手比赛，如果初赛成绩大于8.0进入决赛，否则提示淘汰。并且根据性别提示
 * 进入男子组或女子组。
 * 输入成绩和性别, 进行判断和输出信息。
 * 提示: double score; char gender;
 * 接收字: char gender = scanner.next().charAt(0)
 * scanner.next().charAt(0); 取字符串的第一个字符
 **/</span>

<span class="token doc-comment comment">/**
 * 思路分析：
 *	1. 创建 scanner 对象，接受用户输入
 *	2. 接收 成绩保存到 double score
 *	3. 使用 if-else 判断 如果初赛成绩大于8.0进入决赛，否则提示淘汰
 *	4. 如果进入到 决赛，再接收 char gender，使用 if-else 输出信息
 **/</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> myScanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"请输入该歌手的成绩"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">double</span> score <span class="token operator">=</span> myScanner<span class="token punctuation">.</span><span class="token function">nextDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span> score <span class="token operator">></span> <span class="token number">8.0</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printIn</span><span class="token punctuation">(</span><span class="token string">"请输入性别"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">char</span> gender <span class="token operator">=</span> myScanner<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span> gender <span class="token operator">==</span> <span class="token char">'男'</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
               <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"进入男子组"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
               <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span> gender <span class="token operator">==</span> <span class="token char">'女'</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"进入女子组"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
               <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"你的性别有误，不能参加决赛~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
               <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"sorry ,你被淘汰了~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>switch</strong> <strong>分支结构</strong></p>
<p><strong>基本语法</strong></p>
<ol>
<li><strong>switch</strong> 关键字，表示 **swtich **分支</li>
<li>表达式 对应一个值</li>
<li><strong>case</strong> 常量1 : 当表达式的值等于常量1，就执行 语句块1</li>
<li><strong>break</strong>：表示退出 <strong>swtich</strong></li>
<li>如果和 case 常量1 匹配，就执行语句块1，如果没有匹配，就继续匹配 <strong>case</strong> 常量2</li>
<li>如果一个都没有匹配上，执行 <strong>default</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">switch</span><span class="token punctuation">(</span>表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">case</span> 常量<span class="token number">1</span><span class="token operator">:</span>
        执行语句<span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> 常量<span class="token number">2</span><span class="token operator">:</span>
        执行语句<span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        执行语句<span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>演示</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 例一</span>
<span class="token keyword">double</span> c1 <span class="token operator">=</span> <span class="token char">'a'</span><span class="token punctuation">;</span>
<span class="token keyword">switch</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">"a"</span><span class="token operator">:</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"今天星期一"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">"b"</span><span class="token operator">:</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"今天星期二"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"今天星期三"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 例二</span>
<span class="token keyword">int</span> c1 <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">switch</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token number">5</span><span class="token operator">:</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"这是春季"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">6</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token number">7</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token number">8</span><span class="token operator">:</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"这是夏季"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"今天星期三"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>switch 注意事项和细节讨论</strong></p>
<ol>
<li>表达式<strong>数据类型</strong>，应和 <strong>case</strong>  后的常量类型<strong>一致</strong>，或者是可以<strong>自动转</strong>成可以相互比较的类型，比如输入的是<strong>字符</strong>，而常量是 <strong>int</strong></li>
<li><strong>switch</strong> (表达式)中表达式的返回值必须是：(<strong>byte</strong>,<strong>short</strong>,<strong>int</strong>,<strong>char</strong>,<strong>enum</strong>（枚举）,<strong>String</strong>)</li>
<li><strong>case</strong> 子句中的值必须是<strong>常量</strong>,而不能是<strong>变量</strong></li>
<li><strong>default</strong> 子句是可选的，当没有匹配的 <strong>case</strong> 时，执行 <strong>default</strong></li>
<li><strong>break</strong> 语句用来在执行完一个 <strong>case</strong> 分支后使程序跳出 <strong>switch</strong> 语句块;如果没有写 <strong>break</strong>，程序会顺序执行到 <strong>switch</strong> 结尾</li>
</ol>
</li>
</ol>
<h2 id="for-循环控制" tabindex="-1"><a class="header-anchor" href="#for-循环控制" aria-hidden="true">#</a> for 循环控制</h2>
<h3 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span>循环变量初始化<span class="token punctuation">;</span> 循环条件<span class="token punctuation">;</span> 循环变量迭代<span class="token punctuation">)</span><span class="token punctuation">{</span>
    循环操作<span class="token punctuation">(</span>语句<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
例如：
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"你好！"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项和细节说明" tabindex="-1"><a class="header-anchor" href="#注意事项和细节说明" aria-hidden="true">#</a> 注意事项和细节说明</h3>
<ol>
<li>
<p>循环条件是返回一个布尔值的表达式</p>
</li>
<li>
<p>for（循环判断条件;)中的初始化和变量迭代可以写到其它地方，但是两边的分号不能省略。</p>
</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span> <span class="token punctuation">;</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"你好"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>
<p>循环初始值可以有多条初始化语句，但要求<strong>类型一样</strong>，并且中间用<strong>逗号隔开</strong>循环变量迭代也可以有多条变量迭代语句，中间用逗号隔开。</p>
</li>
<li>
<p>使用内存分析法，</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> count<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">,</span> j<span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"i="</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">" j="</span> <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
输出：
    i<span class="token operator">=</span><span class="token number">0</span> j<span class="token operator">=</span><span class="token number">0</span>
    i<span class="token operator">=</span><span class="token number">1</span> j<span class="token operator">=</span><span class="token number">2</span>
    i<span class="token operator">=</span><span class="token number">2</span> j<span class="token operator">=</span><span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="练习" tabindex="-1"><a class="header-anchor" href="#练习" aria-hidden="true">#</a> 练习</h3>
<blockquote>
<ol>
<li>
<p>打印1~100之间所有是9的倍数的整数，统计个数 及 总和</p>
</li>
<li>
<p>完成下面的表达式输出</p>
<p>0 + 5 = 5</p>
<p>1 + 4 = 5</p>
<p>2 + 3 = 5</p>
<p>3 + 2 = 5</p>
<p>4 + 1 = 5</p>
<p>5 + 0 = 5</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 练习一</span>
<span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 统计个数的变量</span>
<span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 总和</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">9</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"i="</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        count<span class="token operator">++</span><span class="token punctuation">;</span>
        sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"个数："</span> <span class="token operator">+</span> count <span class="token operator">+</span> <span class="token string">" 总和"</span> <span class="token operator">+</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 练习二</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">"+"</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">-</span> i<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"=5"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</blockquote>
<h2 id="while循环控制" tabindex="-1"><a class="header-anchor" href="#while循环控制" aria-hidden="true">#</a> while循环控制</h2>
<h3 id="基本语法-1" tabindex="-1"><a class="header-anchor" href="#基本语法-1" aria-hidden="true">#</a> 基本语法</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>循环变量初始化<span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>循环条件<span class="token punctuation">)</span><span class="token punctuation">{</span>
    循环体<span class="token punctuation">(</span>语句<span class="token punctuation">)</span><span class="token punctuation">;</span>
    循环变量迭代<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 循环变量初始化</span>
<span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 循环条件</span>
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"你好！"</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 执行语句</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 循环迭代器</span>
<span class="token punctuation">}</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"你好！"</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习-1" tabindex="-1"><a class="header-anchor" href="#练习-1" aria-hidden="true">#</a> 练习</h3>
<blockquote>
<ol>
<li>打印1-100之间所有能被3整除的数（使用while）</li>
<li>打印40-200之间所有的偶数（使用while）</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 练习一</span>
<span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"i="</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 迭代器</span>
<span class="token punctuation">}</span>

<span class="token comment">// 练习二</span>
<span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">;</span>
<span class="token keyword">while</span><span class="token punctuation">(</span>j <span class="token operator">&lt;=</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>j <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"j="</span> <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    j<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h2 id="do-while-循环控制" tabindex="-1"><a class="header-anchor" href="#do-while-循环控制" aria-hidden="true">#</a> do  while 循环控制</h2>
<h3 id="基本语法-2" tabindex="-1"><a class="header-anchor" href="#基本语法-2" aria-hidden="true">#</a> 基本语法</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">do</span><span class="token punctuation">{</span>
    循环体<span class="token punctuation">(</span>语句<span class="token punctuation">)</span><span class="token punctuation">;</span>
    循环变量迭代<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span>循环条件<span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * do while 与 while 的区别
 * do while：先执行，在判断；
 * while：先判断在执行
 **/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="案例-1" tabindex="-1"><a class="header-anchor" href="#案例-1" aria-hidden="true">#</a> 案例</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> i <span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 循环变量初始化</span>
<span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token comment">// 循环执行语句</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"你好！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 循环变量迭代</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习-2" tabindex="-1"><a class="header-anchor" href="#练习-2" aria-hidden="true">#</a> 练习</h3>
<blockquote>
<ol>
<li>
<p>统计1---200之间能被5整除但不能被3整除的 个数</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> i <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"i="</span> <span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</blockquote>
<h2 id="多重循环" tabindex="-1"><a class="header-anchor" href="#多重循环" aria-hidden="true">#</a> 多重循环</h2>
<h3 id="介绍-2" tabindex="-1"><a class="header-anchor" href="#介绍-2" aria-hidden="true">#</a> 介绍</h3>
<p>将一个循环放在另一个循环体内，就形成了嵌套循环。其中，<strong>for ,while ,do...while</strong>均可以作为外层循环和内层循环。</p>
<h3 id="案例-2" tabindex="-1"><a class="header-anchor" href="#案例-2" aria-hidden="true">#</a> 案例</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span> <span class="token number">20</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">30</span><span class="token punctuation">;</span> n<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习-3" tabindex="-1"><a class="header-anchor" href="#练习-3" aria-hidden="true">#</a> 练习</h3>
<blockquote>
<ol>
<li>
<p>统计3个班成绩情况，每个班有5名同学</p>
<p>求出各个班的平均分和所有班级的平均分(学生的成绩从键盘输入)。</p>
<p>统计3个班及格人数，每个班有5名同学。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>scanner</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> forDome<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> myScanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">double</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 累计所有学生的成绩 </span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 累加每个班每个学生的成绩</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> n <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> n<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"请输入第"</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">"个班的第"</span> <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token string">"个学生的成绩"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">double</span> score <span class="token operator">=</span> myScanner<span class="token punctuation">.</span><span class="token function">nextDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                sum <span class="token operator">+=</span> score<span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"成绩为"</span> <span class="token operator">+</span> score<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"总成绩为："</span> <span class="token operator">+</span> score <span class="token operator">+</span> <span class="token string">" 平均分="</span> <span class="token operator">+</span> <span class="token punctuation">(</span>sum <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            total <span class="token operator">+=</span> sum<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"三个班的成绩="</span> <span class="token operator">+</span> total <span class="token operator">+</span> <span class="token string">"平均分="</span> <span class="token operator">+</span> total <span class="token operator">/</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>打印出九九乘法表</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token operator">?</span><span class="token operator">?</span><span class="token operator">?</span><span class="token operator">?</span><span class="token operator">?</span><span class="token operator">?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>使用for循环打印金字塔</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// i 表示层数</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
            <span class="token comment">// 在输出 * 之前，还要输出对应空格 = 总层数 - 当前层</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> k <span class="token operator">&lt;=</span> <span class="token number">5</span> <span class="token operator">-</span> i<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// n 表示没每层打印 * 的个数</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> n <span class="token operator">&lt;=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> n<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 每打印完一层的*后，就换行 println本身会换行  </span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 输出如下金字塔</span>
    <span class="token operator">*</span>
   <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>
  <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>
 <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>
<span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>打印空心金字塔</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// i 表示层数</span>
        <span class="token keyword">int</span> tatol <span class="token operator">=</span> <span class="token number">20</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span>tatol<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
            <span class="token comment">// 在输出 * 之前，还要输出对应空格 = 总层数 - 当前层</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> k <span class="token operator">&lt;=</span> tatol <span class="token operator">-</span> i<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// n 表示没每层打印 * 的个数</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> n <span class="token operator">&lt;=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> n<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
                <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">||</span> n <span class="token operator">==</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> i <span class="token operator">==</span> tatol<span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 每打印完一层的*后，就换行 println本身会换行  </span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 输出效果</span>
    <span class="token operator">*</span>
   <span class="token operator">*</span> <span class="token operator">*</span>
  <span class="token operator">*</span>   <span class="token operator">*</span>
 <span class="token operator">*</span>     <span class="token operator">*</span>
<span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</blockquote>
<h2 id="跳转控制语句-break" tabindex="-1"><a class="header-anchor" href="#跳转控制语句-break" aria-hidden="true">#</a> 跳转控制语句 （break）</h2>
<h3 id="介绍-3" tabindex="-1"><a class="header-anchor" href="#介绍-3" aria-hidden="true">#</a> 介绍</h3>
<p><strong>break</strong> 语句用于终止某个语句块的执行，一般使用在 <strong>switch</strong> 或者循环 <strong>[for，while，do-while]</strong> 中</p>
<h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"ok"</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项及细节说明" tabindex="-1"><a class="header-anchor" href="#注意事项及细节说明" aria-hidden="true">#</a> 注意事项及细节说明：</h3>
<ol>
<li>
<p>break语句出现在多层嵌套的语句块中时，可以通过标签指明要终止的是哪
层语句块</p>
</li>
<li>
<p>标签的基本使用</p>
<ol>
<li>
<p><strong>break</strong> 语句可以指定退出哪层</p>
</li>
<li>
<p><strong>label1</strong> 是标签，由程序员指定</p>
</li>
<li>
<p><strong>break</strong> 后指定到哪个<strong>label</strong> 就退出到哪里</p>
</li>
<li>
<p>在实际的开发中，尽量不要使用标签</p>
</li>
<li>
<p>如果没有指定 <strong>break</strong>，默认退出最近的循环体</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BreakDetail</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        abc1<span class="token operator">:</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//外层for</span>
            abc2<span class="token operator">:</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token punctuation">;</span> i<span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//内层for</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">break</span> <span class="token punctuation">;</span> <span class="token comment">//等价 break abc2</span>
                    <span class="token comment">// break abc1 ;</span>
                    <span class="token comment">// break abc2 ;</span>
                <span class="token punctuation">}</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"i = "</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</li>
</ol>
<h3 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求</h3>
<blockquote>
<p>随机生成1-100的一个数，直到生成了97这个数，看看你一共用了几次?
提示使用(int)(Math.random() * 100) + 1</p>
</blockquote>
</div></template>


