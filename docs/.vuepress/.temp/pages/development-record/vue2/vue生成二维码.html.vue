<template><div><h2 id="方式一-使用-qrcodejs2-插件生成" tabindex="-1"><a class="header-anchor" href="#方式一-使用-qrcodejs2-插件生成" aria-hidden="true">#</a> 方式一：使用 qrcodejs2 插件生成</h2>
<ol>
<li>安装：</li>
</ol>
<CodeGroup>
  <CodeGroupItem title="npm" active>
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--save</span> qrcodejs2 
</code></pre></div>  </CodeGroupItem>
  <CodeGroupItem title="pnpm">
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-S</span> qrcodejs2
</code></pre></div>  </CodeGroupItem>
  <CodeGroupItem title="yarn">
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> qrcodejs2
</code></pre></div>  </CodeGroupItem>
</CodeGroup>
<ol start="2">
<li>
<p>引入：<Badge type="tip" text="import QRCode from 'qrcodejs2'" vertical="middle" /></p>
</li>
<li>
<p>使用 ：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>qrcode<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>qrCodeUrl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> qrcode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QRCode</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>qrCodeUrl<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'xxxx'</span><span class="token punctuation">,</span> <span class="token comment">// 需要转换为二维码的内容</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
            <span class="token literal-property property">colorDark</span><span class="token operator">:</span> <span class="token string">'#000000'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">colorLight</span><span class="token operator">:</span> <span class="token string">'#ffffff'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">correctLevel</span><span class="token operator">:</span> QRCode<span class="token punctuation">.</span>CorrectLevel<span class="token punctuation">.</span><span class="token constant">H</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="方式二-使用-vue-qr-插件" tabindex="-1"><a class="header-anchor" href="#方式二-使用-vue-qr-插件" aria-hidden="true">#</a> 方式二：使用 vue-qr 插件</h2>
<ol>
<li>
<p><code v-pre>npm install vue-qr --save</code></p>
</li>
<li>
<p><code v-pre>import vueQr from 'vue-qr'</code></p>
</li>
<li>
<p>使用：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-qr</span> <span class="token attr-name">:logoSrc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>imageUrl<span class="token punctuation">"</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>xxx<span class="token punctuation">"</span></span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-qr</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">imageUrl</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"../assets/logo.png"</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> vueQr <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</div></template>


