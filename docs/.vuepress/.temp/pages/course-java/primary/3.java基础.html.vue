<template><div><h2 id="java-转义符" tabindex="-1"><a class="header-anchor" href="#java-转义符" aria-hidden="true">#</a> java 转义符</h2>
<p>​	1. <Badge type="tip" text="\t " vertical="middle" />：一个制表位，实现对其的功能</p>
<p>​	2. <Badge type="tip" text="\n" vertical="middle" />：换行符</p>
<p>​	3. <Badge type="tip" text="\\" vertical="middle" />：一个\</p>
<p>​	4. <Badge type="tip" text="\“" vertical="middle" />：一个&quot;</p>
<p>​	5. <Badge type="tip" text="\'" vertical="middle" />：一个'</p>
<p>​	6. <Badge type="tip" text="\r" vertical="middle" />：一个回车</p>
<h2 id="java-注释" tabindex="-1"><a class="header-anchor" href="#java-注释" aria-hidden="true">#</a> java 注释</h2>
<h3 id="单行注释" tabindex="-1"><a class="header-anchor" href="#单行注释" aria-hidden="true">#</a> 单行注释  //</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 单行注释</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="多行注释" tabindex="-1"><a class="header-anchor" href="#多行注释" aria-hidden="true">#</a> 多行注释  /*   */</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">/*
 * 多行注释
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文档注释" tabindex="-1"><a class="header-anchor" href="#文档注释" aria-hidden="true">#</a> 文档注释</h3>
<p>注释内容可以被 JDK 提供的工具 javadoc所解析，生成一套以网页文件形式的该程序的说明文档，一般写在类</p>
<p><strong>基本格式</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> SOBER
 * <span class="token keyword">@version</span> 1.0.0
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>  <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"hello,word"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用命令运行该 java 文件</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># javadoc -d 存放网页的文件夹路径 -yyy -xxx java文件.java</span>
<span class="token comment"># 例 </span>
javadoc <span class="token parameter variable">-d</span> D:<span class="token punctuation">\</span><span class="token punctuation">\</span>temp <span class="token parameter variable">-author</span> <span class="token parameter variable">-version</span> Hello.java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常用 javadoc 标签</strong></p>
<table>
<thead>
<tr>
<th>标签</th>
<th>描述</th>
<th>实例</th>
</tr>
</thead>
<tbody>
<tr>
<td>@author</td>
<td>标识一个类的作者</td>
<td>@author description</td>
</tr>
<tr>
<td>@deprecated</td>
<td>指名一个过期的类或成员</td>
<td>@deprecated description</td>
</tr>
<tr>
<td>{@docRoot}</td>
<td>指明当前文档根目录的路径</td>
<td>Directory Path</td>
</tr>
<tr>
<td>@exception</td>
<td>标志一个类抛出的异常</td>
<td>@exception exception-name explanation</td>
</tr>
<tr>
<td>{@inheritDoc}</td>
<td>从直接父类继承的注释</td>
<td>Inherits a comment from the immediate surperclass.</td>
</tr>
<tr>
<td>{@link}</td>
<td>插入一个到另一个主题的链接</td>
<td>{@link name text}</td>
</tr>
<tr>
<td>{@linkplain}</td>
<td>插入一个到另一个主题的链接，但是该链接显示纯文本字体</td>
<td>Inserts an in-line link to another topic.</td>
</tr>
<tr>
<td>@param</td>
<td>说明一个方法的参数</td>
<td>@param parameter-name explanation</td>
</tr>
<tr>
<td>@return</td>
<td>说明返回值类型</td>
<td>@return explanation</td>
</tr>
<tr>
<td>@see</td>
<td>指定一个到另一个主题的链接</td>
<td>@see anchor</td>
</tr>
<tr>
<td>@serial</td>
<td>说明一个序列化属性</td>
<td>@serial description</td>
</tr>
<tr>
<td>@serialData</td>
<td>说明通过writeObject( ) 和 writeExternal( )方法写的数据</td>
<td>@serialData description</td>
</tr>
<tr>
<td>@serialField</td>
<td>说明一个ObjectStreamField组件</td>
<td>@serialField name type description</td>
</tr>
<tr>
<td>@since</td>
<td>标记当引入一个特定的变化时</td>
<td>@since release</td>
</tr>
<tr>
<td>@throws</td>
<td>和 @exception标签一样.</td>
<td>The @throws tag has the same meaning as the @exception tag.</td>
</tr>
<tr>
<td>{@value}</td>
<td>显示常量的值，该常量必须是static属性。</td>
<td>Displays the value of a constant, which must be a static field.</td>
</tr>
<tr>
<td>@version</td>
<td>指定类的版本</td>
<td>@version info</td>
</tr>
</tbody>
</table>
<h2 id="java代码规范" tabindex="-1"><a class="header-anchor" href="#java代码规范" aria-hidden="true">#</a> java代码规范</h2>
<p>​	1.类、方法的注释，要以javadoc的方式来写。</p>
<p>​	2.非Java Doc的注释，往往是给代码的维护者看的，着重告述读者为什么这样写如何修改，注意什么问题等</p>
<p>​	3.使用tab操作，实现缩进,默认整体向右边移动，时候用shift+tab整体向左移	4.运算符和 = 两边习惯性各加一个空格。比如: 2 + 4 * 5 + 345</p>
<p>​	5.源文件使用utf-8编码</p>
<p>​	6.行宽度不要超过80字符</p>
<p>​	7.代码编写次行风格和行尾风格</p>
</div></template>


