---
layout: default
title: ホーム
---
<div class="home-intro">
  <h1>行動心理学でわかる、後悔しない婚活サービスの選び方</h1>
  <p>マッチングアプリ・結婚相談所選びで迷ったとき、「なぜこのサービスが自分に合うのか／合わないのか」を行動心理学の視点から解説します。料金やスペックの横並び比較だけでは見えてこない、選び方の軸をお伝えします。</p>
</div>

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
