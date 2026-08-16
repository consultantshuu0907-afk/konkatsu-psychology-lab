---
layout: default
title: 婚活の悩み・心理
permalink: /category/nayami-shinri/
body_class: cat-nayami-shinri
---
<div class="category-page">
<h1>婚活の悩み・心理</h1>
<p class="category-intro">婚活疲れや焦りなど、婚活中に感じやすい悩みを行動心理学の視点から整理しています。</p>

<ul class="post-list">
{% for post in site.posts %}
  {% if post.categories contains "婚活の悩み・心理" %}
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
