---
layout: default
title: 属性特化型婚活
permalink: /category/zokusei-tokka/
body_class: cat-zokusei-tokka
---
<div class="category-page">
<h1>属性特化型婚活</h1>
<p class="category-intro">オタク婚活・ペット好き婚活・お酒好き婚活など、属性に特化した結婚相談所を紹介しています。</p>

<ul class="post-list">
{% for post in site.posts %}
  {% if post.categories contains "属性特化型婚活" %}
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
