---
layout: default
title: 結婚相談所
permalink: /category/kekkon-sodanjo/
body_class: cat-kekkon-sodanjo
---
<div class="category-page">
<h1>結婚相談所</h1>
<p class="category-intro">結婚相談所選びの料金・サポート体制・口コミとの向き合い方を、心理学の視点も交えて整理しています。</p>

<ul class="post-list">
{% for post in site.posts %}
  {% if post.categories contains "結婚相談所" %}
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
