<template><div><h1 id="tolocalestring与tostring的区别" tabindex="-1"><a class="header-anchor" href="#tolocalestring与tostring的区别" aria-hidden="true">#</a> toLocaleString与toString的区别</h1>
<ol>
<li>
<h3 id="tolocalestring-返回对象的字符串表示-该字符串与执行环境的地区对应" tabindex="-1"><a class="header-anchor" href="#tolocalestring-返回对象的字符串表示-该字符串与执行环境的地区对应" aria-hidden="true">#</a> toLocaleString( )返回对象的字符串表示，该字符串与执行环境的地区对应；</h3>
</li>
<li>
<h3 id="tostring-返回对象的字符串表示" tabindex="-1"><a class="header-anchor" href="#tostring-返回对象的字符串表示" aria-hidden="true">#</a> toString( )返回对象的字符串表示</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">数字型</span><span class="token template-punctuation string">`</span></span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">6666</span><span class="token punctuation">;</span>
    a<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//"6,666"</span>
    a<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//"6666"</span>
    # 可以看到，当数字是三位以上时，会每三位出现一个分隔号；
    
 <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">字符串</span><span class="token template-punctuation string">`</span></span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">'6666'</span><span class="token punctuation">;</span>
    a<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//"6666"</span>
    a<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//"6666"</span>
    # 返回结果不变
 <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">数组</span><span class="token template-punctuation string">`</span></span>
    <span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//1,2,3</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//1,2,3</span>
	# 返回结果不变
  <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">日期</span><span class="token template-punctuation string">`</span></span>
    <span class="token keyword">var</span> dt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dt<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//2022/12/3 13:25:04</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dt<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//TSat Dec 03 2022 13:25:04 GMT+0800 (中国标准时间)</span>
	# 返回结果不同
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>区别：</strong>  LocaleString() 会根据你机器的本地环境来返回字符串，它和 toString() 返回的值在不同的本地环境下使用的符号可能变化；所以使用toString()是保险的方法，它不会因为本地环境（例如国家）改变而改变；如果是获取时间，建议使用 LocaleString</p>
</li>
</ol>
</div></template>


