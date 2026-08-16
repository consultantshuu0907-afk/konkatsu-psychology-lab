---
layout: default
title: マッチングアプリ
permalink: /category/matching-app/
body_class: cat-matching-app
---
<div class="category-page">
<h1>マッチングアプリ</h1>
<p class="category-intro">恋活から婚活まで、マッチングアプリの選び方や評判との向き合い方を心理学の視点で解説しています。</p>

<ul class="post-list">
{% for post in site.posts %}
  {% if post.categories contains "マッチングアプリ" %}
  <li>
    {% if post.image %}<a class="thumb" href="{{ post.url | relative_url }}" tabindex="-1" aria-hidden="true"><img src="{{ post.image | relative_url }}" alt="" loading="lazy" width="1200" height="630"></a>{% endif %}
    <div class="post-list-body">
      <a class="title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span class="date">{{ post.date | date: "%Y年%m月%d日" }}</span>
    </div>
  </li>
  {% endif %}
{% endfor %}
</ul>
</div>
