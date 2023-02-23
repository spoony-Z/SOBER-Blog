<template><div><h1 id="激活函数" tabindex="-1"><a class="header-anchor" href="#激活函数" aria-hidden="true">#</a> 激活函数</h1>
<p>为了增强网络的表示能力和学习能力，<strong>激活函数</strong>（activation function）需要具备以下性质：</p>
<ul>
<li>
<p>连续且可导（允许少数点上不可导）的非线性函数</p>
<ul>
<li>可导的激活函数可以直接利用数值优化的方法来学习网络参数</li>
<li>使用线性激活函数或不使用激活函数都跟标准逻辑回归没有区别，无论神经网络有多少层，输出都是输入的线性组合</li>
</ul>
</li>
<li>
<p>激活函数及其导函数要尽量简单，以提高网络计算效率</p>
</li>
<li>
<p>激活函数的导函数的值域要在一个合适的区间内，否则会影响训练的效率和稳定性</p>
</li>
</ul>
<h2 id="sigmoid" tabindex="-1"><a class="header-anchor" href="#sigmoid" aria-hidden="true">#</a> Sigmoid</h2>
<p>sigmoid 函数及其导函数公式：</p>
<p>$$
\sigma (x) = \frac{1}{1 + e^{-x}}
$$</p>
<p>$$
\sigma' (x) = - \frac{- e^{-x}}{(1 + e^{-x})^2} = - \frac{1 - (1 + e^{-x})}{(1 + e^{-x})^2} = \frac{1}{1 + e^{-x}} (1 - \frac{1}{1 + e^{-x}}) = \sigma (x) (1 - \sigma (x))
$$</p>
<p>函数图像：</p>
<p><img src="@source/guide/JS-native/img/sigmoid.jpeg" alt="sigmoid"></p>
<p>sigmoid 激活函数会把一个实数域的值压入 $(0,1)$ 的范围内。但可以看到 sigmoid 函数在其大部分定义域内的导数的梯度（即函数的斜率）都趋近于 0，导致梯度下降的速度变慢。</p>
<h2 id="tanh" tabindex="-1"><a class="header-anchor" href="#tanh" aria-hidden="true">#</a> Tanh</h2>
<p>tanh 函数及其导函数公式（<a href="https://blog.csdn.net/qq_35200479/article/details/84502844" target="_blank" rel="noopener noreferrer">求导过程<ExternalLinkIcon/></a>）：</p>
<p>$$
\text{tanh}(x) = \frac{e^z - e^{-z}}{e^z + e^{-z}}
$$</p>
<p>$$
\text{tanh}' (x) = 1 - \text{tanh}(x)^2
$$</p>
<p>函数图像：</p>
<p><img src="@source/guide/JS-native/img/tanh.png" alt="tanh"></p>
<p>tanh（Hyperbolic Tangent，双曲正切）函数可以被看做是向下平移和放大后的 sigmoid 函数，值域是 $(-1,1)$。它的输出是<strong>零中心化</strong>（zero-centered）的，所以它的效果一般都会优于 sigmoid 函数。因为 sigmoid 函数的输出恒大于 0，非零中心化的输出会使得后一层神经元的输入发生<strong>偏置偏移</strong>（bias shift)，从而使得梯度下降的收敛速度变慢。</p>
<p>但 tanh 跟 sigmoid 一样都存在大部分定义域内的导数梯度都趋近于 0 的问题。</p>
<h2 id="relu" tabindex="-1"><a class="header-anchor" href="#relu" aria-hidden="true">#</a> ReLU</h2>
<p>ReLU（Rectified Linear Unit，修正线性单元）函数及其导函数公式：</p>
<p>$$
\text{ReLU}(x) = \max (0, x) =</p>
<p>\begin{cases}
x &amp;x \ge 0 \
0 &amp;x &lt; 0
\end{cases}
$$</p>
<p>$$
\text{ReLU}' (x) =</p>
<p>\begin{cases}
1 &amp;x \ge 0 \
0 &amp;x &lt; 0
\end{cases}
$$</p>
<p>函数图像：</p>
<p><img src="@source/guide/JS-native/img/relu.png" alt="relu"></p>
<p>ReLU 函数在 $x &gt; 0$ 时导数为 1，在一定程度上缓解了梯度消失问题，加速了梯度下降的收敛速度。</p>
<p>缺点：</p>
<ul>
<li>
<p>输出是非零中心化的，会给后一层的神经网络引入偏置偏移，影响梯度下降的效率</p>
</li>
<li>
<p><strong>死亡 ReLU 问题（dying ReLU problem）</strong>：如果梯度太大或学习率太大，可能会在反向传播的时候让偏置 $b$ 被更新成一个很小的负数，从而导致对于接下来所有的训练样本，神经元的净激活值都小于 0（<a href="https://liam.page/2018/11/30/vanishing-gradient-of-ReLU-due-to-unusual-input/" target="_blank" rel="noopener noreferrer">解释<ExternalLinkIcon/></a>）。而当输入小于 0 时，ReLU 函数的梯度一直为 0，导致该神经元的参数永远无法更新（<a href="https://www.zhihu.com/question/67151971" target="_blank" rel="noopener noreferrer">解释<ExternalLinkIcon/></a>）。</p>
<ul>
<li><a href="https://cs231n.github.io/neural-networks-1/#actfun" target="_blank" rel="noopener noreferrer">cs231n<ExternalLinkIcon/></a> 上说有 40% 的概率死掉</li>
<li><a href="https://www.quora.com/What-is-the-dying-ReLU-problem-in-neural-networks" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a>似乎说还能复活...</li>
</ul>
</li>
</ul>
<h2 id="leaky-relu" tabindex="-1"><a class="header-anchor" href="#leaky-relu" aria-hidden="true">#</a> Leaky ReLU</h2>
<p>Leaky ReLU（带泄露的 ReLU）在输入 $x &lt; 0$ 时，保持了一个很小的梯度 $\gamma$，这样保证了有一个非零的梯度可以更新参数：</p>
<p>$$
\text{Leaky ReLU}(x) = \max (0, x) + \gamma \min (0, x) =</p>
<p>\begin{cases}
x &amp;x \ge 0 \
\gamma x &amp;x &lt; 0
\end{cases}
$$</p>
<p>$$
\text{Leaky ReLU}'(x) =</p>
<p>\begin{cases}
1 &amp;x \ge 0 \
\gamma &amp;x &lt; 0
\end{cases}
$$</p>
<p>其中 $\gamma$ 是一个很小的常数，如 0.01。</p>
</div></template>


