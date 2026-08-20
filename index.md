---
layout: default
main_class: home-main
description: "マッチングアプリ・結婚相談所の選び方を行動心理学で解説する婚活情報サイト。無料の婚活タイプ診断で、自分に合った婚活方法がわかります。"
---
<section class="hero">
  <div class="hero-bg" style="--hero-image: url('{{ '/assets/img/hero/hero-bg.jpg' | relative_url }}');"></div>
  <div class="hero-inner">
    <p class="hero-eyebrow">科学 × 心理学 × 婚活</p>
    <h1>行動心理学でわかる、<span class="accent">後悔しない</span>婚活サービスの選び方</h1>
    <div class="hero-divider"></div>
    <p class="lead">マッチングアプリ・結婚相談所選びで迷ったとき、「なぜこのサービスが自分に合うのか／合わないのか」を行動心理学の視点から解説します。料金やスペックの横並び比較だけでは見えてこない、選び方の軸をお伝えします。</p>
    <a class="hero-cta" href="#latest-articles">記事を読んでみる ↓</a>

    <div class="hero-badges">
      <div class="hero-badge"><span class="icon">🧠</span><span>行動心理学の視点で本質を見抜く</span></div>
      <div class="hero-badge"><span class="icon">📊</span><span>データと実例でサービスを比較</span></div>
      <div class="hero-badge"><span class="icon">🤝</span><span>中立・公平な立場で選び方をサポート</span></div>
    </div>
  </div>
</section>

<section class="shindan-banner">
  <div class="wrap-wide shindan-banner-inner">
    <div class="shindan-banner-text">
      <p class="shindan-banner-eyebrow">無料 ・ 約30秒</p>
      <p class="shindan-banner-title">あなたに合う婚活サービスは？<br class="sp-only">行動心理学タイプ診断でチェック</p>
    </div>
    <a class="shindan-banner-btn" href="{{ '/shindan/' | relative_url }}">無料で診断してみる →</a>
  </div>
</section>

<nav class="quick-nav" aria-label="カテゴリーから探す">
  <div class="wrap-wide">
    <p class="section-heading">カテゴリーから探す</p>
    <div class="quick-nav-grid">
      <a class="quick-nav-card" data-cat="マッチングアプリ" href="{{ '/category/matching-app/' | relative_url }}">
        <span class="dot">📱</span>
        <span class="name">マッチングアプリ</span>
        <span class="desc">選び方・評判との向き合い方</span>
      </a>
      <a class="quick-nav-card" data-cat="結婚相談所" href="{{ '/category/kekkon-sodanjo/' | relative_url }}">
        <span class="dot">🏛️</span>
        <span class="name">結婚相談所</span>
        <span class="desc">相談所選びの心理的な軸</span>
      </a>
      <a class="quick-nav-card" data-cat="属性特化型婚活" href="{{ '/category/zokusei-tokka/' | relative_url }}">
        <span class="dot">🎯</span>
        <span class="name">属性特化型婚活</span>
        <span class="desc">タイプ別に合うサービス</span>
      </a>
      <a class="quick-nav-card" data-cat="悩み・心理" href="{{ '/category/nayami-shinri/' | relative_url }}">
        <span class="dot">💭</span>
        <span class="name">婚活の悩み・心理</span>
        <span class="desc">つまずきの理由を整理する</span>
      </a>
    </div>
  </div>
</nav>

<div class="section-block" id="latest-articles">
  <div class="wrap-wide">
    <p class="section-heading">新着記事</p>
    <ul class="post-list">
    {% for post in site.posts %}
      <li>
        {% if post.image %}<a class="thumb" href="{{ post.url | relative_url }}" tabindex="-1" aria-hidden="true"><img src="{{ post.image | relative_url }}" alt="" loading="lazy" width="1200" height="630"></a>{% endif %}
        <div class="post-list-body">
          {% for cat in post.categories %}<span class="tag" data-cat="{{ cat }}">{{ cat }}</span>{% endfor %}
          <a class="title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
          <span class="date">{{ post.date | date: "%Y年%m月%d日" }}</span>
        </div>
      </li>
    {% endfor %}
    </ul>
  </div>
</div>

<section class="lifestyle-section">
  <div class="wrap-wide">
    <div class="lifestyle-grid">
      <img src="{{ '/assets/img/hero/lifestyle.jpg' | relative_url }}" alt="婚活のその先にある、二人の日常のイメージ" loading="lazy" width="1672" height="941">
      <div class="lifestyle-copy">
        <p class="section-heading">婚活のその先にある日常</p>
        <h2>選ぶ基準が変われば、その先の日常も変わっていきます。</h2>
        <p>旅行の好み、暮らし方、価値観の合わせ方——婚活で見るべきなのは、スペックの一致だけではありません。行動心理学の視点は、「なんとなく合わない」の正体を言語化する手がかりになります。</p>
        <p><a href="{{ '/about/' | relative_url }}">運営者情報・サイトの考え方はこちら →</a></p>
      </div>
    </div>
  </div>
</section>

<section class="closing-cta">
  <div class="hero-bg" style="--hero-image: url('{{ '/assets/img/hero/cta-path.jpg' | relative_url }}');"></div>
  <div class="wrap">
    <h2>あなたに合った婚活の選び方を、<br class="sp-only">心理学の視点から。</h2>
    <p>気になるカテゴリーの記事から、じっくり読んでみてください。</p>
    <a class="hero-cta" href="{{ '/category/nayami-shinri/' | relative_url }}">婚活の悩み・心理を見る</a>
  </div>
</section>
