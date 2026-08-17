---
layout: default
title: 婚活タイプ診断
permalink: /shindan/
body_class: page-shindan
main_class: shindan-main
description: "5つの質問に答えるだけで、あなたの婚活スタイルに合うサービスの傾向がわかる無料診断。行動心理学の視点から、後悔しないサービス選びをサポートします。"
---

{% assign p_partner = site.posts | where_exp: "post", "post.path contains 'partner-agent-kuchikomi-hyouban'" | first %}
{% assign p_marrish = site.posts | where_exp: "post", "post.path contains 'marrish-hyouban-kuchikomi'" | first %}
{% assign p_otaku = site.posts | where_exp: "post", "post.path contains 'otaku-konkatsu-osusume'" | first %}
{% assign p_pet = site.posts | where_exp: "post", "post.path contains 'pet-konkatsu-kekkonsodanjo'" | first %}
{% assign p_osake = site.posts | where_exp: "post", "post.path contains 'osake-zuki-konkatsu'" | first %}
{% assign p_inaka = site.posts | where_exp: "post", "post.path contains 'chihou-ijuu-konkatsu'" | first %}
{% assign p_pocha = site.posts | where_exp: "post", "post.path contains 'pocha-konkatsu-osusume'" | first %}
{% assign p_r35 = site.posts | where_exp: "post", "post.path contains '35sai-ijou-konkatsu'" | first %}
{% assign p_otona = site.posts | where_exp: "post", "post.path contains 'otona-no-konkatsu-party-kuchikomi'" | first %}
{% assign p_hikaku = site.posts | where_exp: "post", "post.path contains 'kekkonsodanjo-shiryoseikyu-hikaku'" | first %}
{% assign p_compare = site.posts | where_exp: "post", "post.path contains 'matching-app-vs-kekkonsodanjo'" | first %}
{% assign p_40dai = site.posts | where_exp: "post", "post.path contains '40dai-konkatsu-kekkonsodanjo'" | first %}
{% assign p_shinri = site.posts | where_exp: "post", "post.path contains 'konkatsu-umakuikanai-shinri'" | first %}

<section class="shindan-hero">
  <div class="hero-bg" style="--hero-image: url('{{ '/assets/img/hero/consultation-1.jpg' | relative_url }}');"></div>
  <div class="wrap shindan-hero-inner">
    <p class="hero-eyebrow">無料 ・ 約30秒</p>
    <h1>あなたに合う婚活サービス<span class="accent">診断</span></h1>
    <p class="shindan-hero-lead">5つの質問に答えるだけで、行動心理学の視点からあなたの婚活スタイルの傾向と、相性が良いとされるサービスの方向性がわかります。</p>
  </div>
</section>

<div class="wrap shindan-wrap">
  <div class="shindan-card" id="shindan-app" aria-live="polite">
    <!-- JS が中身を描画します -->
    <noscript>
      <p>診断のご利用にはJavaScriptを有効にしてください。気になる方は、まず下記の記事から探すこともできます。</p>
      <ul class="post-list">
        <li><div class="post-list-body"><a class="title" href="{{ p_compare.url | relative_url }}">{{ p_compare.title }}</a></div></li>
      </ul>
    </noscript>
  </div>
</div>

<style>
.shindan-hero { position: relative; overflow: hidden; padding: 0; color: #fdf8ec; background: var(--navy-800); }
.shindan-hero .hero-bg { opacity: 0.32; background-position: center 30%; }
.shindan-hero::after {
  content: "";
  position: absolute; inset: 0;
  background: linear-gradient(160deg, rgba(10,17,32,0.92), rgba(15,27,45,0.78));
}
.shindan-hero-inner { position: relative; z-index: 1; padding: 56px 20px 44px; text-align: center; }
.shindan-hero-inner .hero-eyebrow { color: var(--gold-300); font-size: 12.5px; letter-spacing: 0.12em; font-weight: 700; margin: 0 0 12px; }
.shindan-hero-inner h1 { font-size: clamp(24px, 4.4vw, 34px); line-height: 1.4; margin: 0 0 16px; }
.shindan-hero-inner h1 .accent { color: var(--gold-400); }
.shindan-hero-lead { max-width: 560px; margin: 0 auto; font-size: 14px; line-height: 1.9; color: rgba(253,248,236,0.82); }

.shindan-wrap { max-width: 640px; margin-top: -30px; position: relative; z-index: 2; padding-bottom: 60px; }
.shindan-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: 32px 26px;
  min-height: 320px;
}

/* --- intro --- */
.shindan-intro { text-align: center; }
.shindan-intro h2 { font-size: 19px; margin: 0 0 12px; }
.shindan-intro p { color: var(--color-sub); font-size: 13.5px; line-height: 1.9; margin: 0 0 24px; }
.shindan-start-btn {
  display: inline-flex; align-items: center; gap: 8px;
  background: linear-gradient(135deg, var(--gold-400), var(--gold-500));
  color: var(--navy-900); font-weight: 700; font-size: 15px;
  padding: 14px 32px; border-radius: 999px; border: none; cursor: pointer;
  box-shadow: var(--shadow-gold); transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.shindan-start-btn:hover { transform: translateY(-2px); box-shadow: 0 14px 34px rgba(201,162,39,0.32); }
.shindan-note { margin-top: 18px; font-size: 11.5px; color: var(--color-sub); }

/* --- progress --- */
.shindan-progress { display: flex; align-items: center; gap: 10px; margin-bottom: 22px; }
.shindan-progress-track { flex: 1; height: 6px; background: var(--color-tag-bg); border-radius: 999px; overflow: hidden; }
.shindan-progress-bar { height: 100%; background: linear-gradient(90deg, var(--gold-500), var(--gold-300)); border-radius: 999px; transition: width 0.35s ease; }
.shindan-progress-label { font-size: 11.5px; color: var(--color-sub); font-weight: 700; white-space: nowrap; }

/* --- question --- */
.shindan-question h2 { font-size: 17px; line-height: 1.6; margin: 0 0 20px; color: var(--color-text); }
.shindan-options { display: grid; gap: 10px; }
.shindan-option {
  display: block; width: 100%; text-align: left;
  background: var(--color-bg); border: 1.5px solid var(--color-border);
  border-radius: 12px; padding: 14px 16px; font-size: 13.5px; color: var(--color-text);
  cursor: pointer; transition: border-color 0.15s ease, background 0.15s ease, transform 0.1s ease;
  font-family: inherit;
}
.shindan-option:hover { border-color: var(--gold-400); background: var(--gold-tint); }
.shindan-option.is-selected { border-color: var(--gold-500); background: var(--gold-tint); transform: scale(0.99); }
.shindan-back-btn {
  margin-top: 18px; background: none; border: none; color: var(--color-sub);
  font-size: 12.5px; cursor: pointer; padding: 4px 0; font-family: inherit;
}
.shindan-back-btn:hover { color: var(--navy-700); text-decoration: underline; }

/* --- result --- */
.shindan-result-badge {
  display: inline-block; background: var(--navy-800); color: var(--gold-300);
  font-size: 11.5px; font-weight: 700; letter-spacing: 0.06em;
  padding: 6px 14px; border-radius: 999px; margin-bottom: 14px;
}
.shindan-result h2 { font-size: 21px; margin: 0 0 12px; line-height: 1.5; }
.shindan-result-desc { font-size: 13.5px; line-height: 1.9; color: var(--color-sub); margin: 0 0 26px; }

.shindan-reco { border: 1.5px solid var(--color-border); border-radius: 14px; padding: 18px 18px 20px; margin-bottom: 14px; background: var(--color-bg); }
.shindan-reco.is-primary { border-color: var(--gold-400); background: var(--gold-tint); box-shadow: var(--shadow-sm); }
.shindan-reco-label { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; color: var(--gold-500); margin: 0 0 6px; text-transform: uppercase; }
.shindan-reco.is-primary .shindan-reco-label { color: var(--navy-700); }
.shindan-reco-title { font-size: 15px; font-weight: 700; margin: 0 0 8px; color: var(--color-text); }
.shindan-reco-desc { font-size: 12.5px; color: var(--color-sub); line-height: 1.8; margin: 0 0 14px; }
.shindan-reco-btn {
  display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700;
  padding: 10px 20px; border-radius: 999px; background: var(--navy-800); color: #fdf8ec;
  transition: background 0.2s ease;
}
.shindan-reco-btn:hover { background: var(--navy-700); text-decoration: none; }
.shindan-reco.is-primary .shindan-reco-btn { background: linear-gradient(135deg, var(--gold-400), var(--gold-500)); color: var(--navy-900); }

.shindan-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px; }
.shindan-share-btn, .shindan-retry-btn {
  flex: 1; min-width: 140px; text-align: center; font-size: 12.5px; font-weight: 700;
  padding: 11px 16px; border-radius: 999px; cursor: pointer; border: 1.5px solid var(--color-border);
  background: var(--color-surface); color: var(--color-text); font-family: inherit;
}
.shindan-share-btn:hover, .shindan-retry-btn:hover { border-color: var(--gold-400); background: var(--gold-tint); }

.shindan-disclaimer { margin-top: 22px; font-size: 10.5px; color: var(--color-sub); line-height: 1.8; border-top: 1px dashed var(--color-border); padding-top: 14px; }

@media (max-width: 640px) {
  .shindan-card { padding: 24px 18px; border-radius: 16px; }
  .shindan-wrap { margin-top: -22px; }
}
</style>

<script>
(function () {
  var LINKS = {
    partner: "{{ p_partner.url | relative_url }}",
    marrish: "{{ p_marrish.url | relative_url }}",
    otaku: "{{ p_otaku.url | relative_url }}",
    pet: "{{ p_pet.url | relative_url }}",
    osake: "{{ p_osake.url | relative_url }}",
    inaka: "{{ p_inaka.url | relative_url }}",
    pocha: "{{ p_pocha.url | relative_url }}",
    r35: "{{ p_r35.url | relative_url }}",
    otona: "{{ p_otona.url | relative_url }}",
    hikaku: "{{ p_hikaku.url | relative_url }}",
    compare: "{{ p_compare.url | relative_url }}",
    dai40: "{{ p_40dai.url | relative_url }}",
    shinri: "{{ p_shinri.url | relative_url }}"
  };

  var QUESTIONS = [
    {
      text: "婚活で譲れない条件やライフスタイルは？",
      options: [
        { label: "アニメ・ゲームなど趣味を共有できる相手がいい", scores: { otaku: 4 } },
        { label: "ペットと暮らす将来を考えている", scores: { pet: 4 } },
        { label: "お酒を一緒に楽しめる相手がいい", scores: { osake: 4 } },
        { label: "地方・田舎暮らしも視野に入れている", scores: { inaka: 4 } },
        { label: "年齢的にスピード感を重視したい", scores: { r35: 4 } },
        { label: "体型など気にせず自然体でいたい", scores: { pocha: 4 } },
        { label: "特にこだわりはない", scores: {} }
      ]
    },
    {
      text: "婚活で一番ストレスに感じそうなのは？",
      options: [
        { label: "選択肢が多すぎて決められないこと", scores: { partner: 2, hikaku: 1 } },
        { label: "自分のペースを乱されること", scores: { marrish: 2 } },
        { label: "出会うきっかけ・後押しが足りないこと", scores: { otona: 2 } },
        { label: "何から比較すればいいか分からないこと", scores: { hikaku: 2 } }
      ]
    },
    {
      text: "婚活にかけられる本気度・予算は？",
      options: [
        { label: "まずは無料で気軽に試したい", scores: { marrish: 1, hikaku: 1 } },
        { label: "結果が出るなら費用は惜しまない", scores: { partner: 2 } },
        { label: "ちょうどいいバランスで始めたい", scores: { marrish: 1 } }
      ]
    },
    {
      text: "年齢層は？",
      options: [
        { label: "20代", scores: { marrish: 1 } },
        { label: "30代前半", scores: { marrish: 1, otona: 1 } },
        { label: "30代後半〜40代", scores: { partner: 2 } },
        { label: "40代以上", scores: { partner: 2, hikaku: 1 } }
      ]
    },
    {
      text: "求めるサポートのスタイルは？",
      options: [
        { label: "プロに二人三脚で伴走してほしい", scores: { partner: 3 } },
        { label: "自分のペースで気軽に探したい", scores: { marrish: 2 } },
        { label: "直接会えるリアルな出会いがいい", scores: { otona: 3 } },
        { label: "まず情報収集・比較から始めたい", scores: { hikaku: 3 } }
      ]
    }
  ];

  var RESULTS = {
    otaku: { title: "価値観共有・類似性重視タイプ", principle: "類似性の法則",
      desc: "心理学の「類似性の法則」では、価値観や趣味が近い相手ほど好意を持ちやすいとされています。共通の話題を自然に持てる相手を軸に探せるサービスとの相性が良い傾向があります。",
      link: "otaku", reco: "オタク趣味に理解のある相手と出会いやすいとされるサービス" },
    pet: { title: "ペット共生・ライフスタイル重視タイプ", principle: "類似性の法則",
      desc: "将来の暮らし方まで価値観が一致している相手ほど、関係が長続きしやすいとされています。ペットとの暮らしを前提に相手を探せるサービスとの相性が良い傾向があります。",
      link: "pet", reco: "動物好きに強いとされる結婚相談所" },
    osake: { title: "お酒を楽しむ相性重視タイプ", principle: "類似性の法則",
      desc: "一緒に過ごす時間の「心地よさ」を左右するのは、条件よりも生活の中の小さな相性であることが多いとされています。お酒を楽しめる相手を軸に探せるサービスとの相性が良い傾向があります。",
      link: "osake", reco: "お酒好きに理解のある相手と出会いやすいとされるサービス" },
    inaka: { title: "暮らし方・エリア重視タイプ", principle: "決定回避の法則",
      desc: "選択肢を絞り込むほど意思決定は進みやすいとされています。エリアや暮らし方という軸で早めに絞り込めるサービスとの相性が良い傾向があります。",
      link: "inaka", reco: "地方・田舎暮らし志向に対応しているとされるサービス" },
    r35: { title: "年齢軸・現実的スピード重視タイプ", principle: "希少性・アンカリング",
      desc: "「今から動く」という決断そのものに価値があるとされています。同年代の会員層が多いとされるサービスの方が、比較のストレスなく検討を進めやすい傾向があります。",
      link: "r35", reco: "同年代の会員層に強いとされる結婚相談所" },
    pocha: { title: "自然体・安心感重視タイプ", principle: "心理的安全性",
      desc: "「ありのままで受け入れられる」という心理的安全性は、婚活の継続率に大きく影響するとされています。体型などを気にせず活動しやすいとされるサービスとの相性が良い傾向があります。",
      link: "pocha", reco: "自然体で活動しやすいとされるサービス" },
    partner: { title: "伴走型・本気で結果を出したいタイプ", principle: "決定回避の法則",
      desc: "選択肢が多いほど決断が先延ばしになりやすい「決定回避の法則」が働きやすいタイプです。プロのカウンセラーが伴走してくれるサービスの方が、比較疲れせず前に進みやすい傾向があります。",
      link: "partner", reco: "専任カウンセラーが伴走するとされる結婚相談所" },
    marrish: { title: "マイペース探索タイプ", principle: "一貫性の原理",
      desc: "無理のないペースで少しずつ行動を積み重ねる方が、婚活を継続しやすいとされています（一貫性の原理）。自分の好きなタイミングで探せるサービスとの相性が良い傾向があります。",
      link: "marrish", reco: "自分のペースで探しやすいとされるマッチングサービス" },
    otona: { title: "一歩踏み出すきっかけ重視タイプ", principle: "社会的証明",
      desc: "「同じように行動している人がいる」という場に身を置くこと自体が、行動の後押しになるとされています（社会的証明）。イベント型のサービスとの相性が良い傾向があります。",
      link: "otona", reco: "直接出会えるイベント型のサービス" },
    hikaku: { title: "情報収集・比較検討タイプ", principle: "アンカリング",
      desc: "最初に見た情報が基準点になってしまう「アンカリング」を避けるには、複数の情報を横断的に比較することが有効とされています。まず資料や情報を比較できるサービスとの相性が良い傾向があります。",
      link: "hikaku", reco: "資料請求・一括比較から始められるサービス" }
  };

  var state = { step: -1, answers: [], totals: {} };
  var app = document.getElementById("shindan-app");
  if (!app) return;

  function render() {
    if (state.step === -1) return renderIntro();
    if (state.step < QUESTIONS.length) return renderQuestion(state.step);
    return renderResult();
  }

  function renderIntro() {
    app.innerHTML =
      '<div class="shindan-intro">' +
      '<h2>まずは5つの質問に答えてください</h2>' +
      '<p>正解・不正解はありません。今の気持ちに近いものを直感で選んでください。所要時間は約30秒です。</p>' +
      '<button type="button" class="shindan-start-btn" id="shindan-start">診断をはじめる →</button>' +
      '<p class="shindan-note">※ 診断結果は心理学的な傾向の目安であり、婚活の成功を保証するものではありません。</p>' +
      '</div>';
    document.getElementById("shindan-start").addEventListener("click", function () {
      state.step = 0;
      render();
    });
  }

  function renderQuestion(i) {
    var q = QUESTIONS[i];
    var pct = Math.round((i / QUESTIONS.length) * 100);
    var html =
      '<div class="shindan-progress">' +
      '<div class="shindan-progress-track"><div class="shindan-progress-bar" style="width:' + pct + '%"></div></div>' +
      '<div class="shindan-progress-label">' + (i + 1) + ' / ' + QUESTIONS.length + '</div>' +
      '</div>' +
      '<div class="shindan-question"><h2>' + q.text + '</h2>' +
      '<div class="shindan-options">';
    q.options.forEach(function (opt, idx) {
      html += '<button type="button" class="shindan-option" data-idx="' + idx + '">' + opt.label + '</button>';
    });
    html += '</div></div>';
    if (i > 0) html += '<button type="button" class="shindan-back-btn" id="shindan-back">← ひとつ前の質問に戻る</button>';
    app.innerHTML = html;

    Array.prototype.forEach.call(app.querySelectorAll(".shindan-option"), function (btn) {
      btn.addEventListener("click", function () {
        Array.prototype.forEach.call(app.querySelectorAll(".shindan-option"), function (b) { b.classList.remove("is-selected"); });
        btn.classList.add("is-selected");
        var opt = q.options[parseInt(btn.getAttribute("data-idx"), 10)];
        state.answers[i] = opt;
        Object.keys(opt.scores || {}).forEach(function (k) {
          state.totals[k] = (state.totals[k] || 0) + opt.scores[k];
        });
        setTimeout(function () {
          state.step = i + 1;
          render();
        }, 260);
      });
    });

    var backBtn = document.getElementById("shindan-back");
    if (backBtn) {
      backBtn.addEventListener("click", function () {
        // ロールバックしてから戻る
        var prevAnswer = state.answers[i - 1];
        if (prevAnswer) {
          Object.keys(prevAnswer.scores || {}).forEach(function (k) {
            state.totals[k] = (state.totals[k] || 0) - prevAnswer.scores[k];
          });
        }
        state.step = i - 1;
        render();
      });
    }
  }

  function topKeys() {
    var keys = Object.keys(state.totals).filter(function (k) { return state.totals[k] > 0; });
    keys.sort(function (a, b) { return state.totals[b] - state.totals[a]; });
    return keys;
  }

  function renderResult() {
    var keys = topKeys();
    var primaryKey = keys[0] || "hikaku";
    var secondaryKey = keys[1];
    var primary = RESULTS[primaryKey];
    var secondary = secondaryKey ? RESULTS[secondaryKey] : null;

    var html =
      '<div class="shindan-result">' +
      '<p class="shindan-result-badge">診断結果</p>' +
      '<h2>' + primary.title + '</h2>' +
      '<p class="shindan-result-desc">' + primary.desc + '</p>' +

      '<div class="shindan-reco is-primary">' +
      '<p class="shindan-reco-label">おすすめの傾向 ①</p>' +
      '<p class="shindan-reco-title">' + primary.reco + '</p>' +
      '<p class="shindan-reco-desc">心理学キーワード：' + primary.principle + '</p>' +
      '<a class="shindan-reco-btn" href="' + LINKS[primary.link] + '">詳しく見る →</a>' +
      '</div>';

    if (secondary) {
      html +=
        '<div class="shindan-reco">' +
        '<p class="shindan-reco-label">おすすめの傾向 ②</p>' +
        '<p class="shindan-reco-title">' + secondary.reco + '</p>' +
        '<p class="shindan-reco-desc">心理学キーワード：' + secondary.principle + '</p>' +
        '<a class="shindan-reco-btn" href="' + LINKS[secondary.link] + '">詳しく見る →</a>' +
        '</div>';
    } else {
      html +=
        '<div class="shindan-reco">' +
        '<p class="shindan-reco-label">あわせて読みたい</p>' +
        '<p class="shindan-reco-title">婚活がうまくいかない本当の理由</p>' +
        '<p class="shindan-reco-desc">選び方の盲点を行動心理学の視点から整理した記事です。</p>' +
        '<a class="shindan-reco-btn" href="' + LINKS.shinri + '">詳しく見る →</a>' +
        '</div>';
    }

    html +=
      '<div class="shindan-actions">' +
      '<button type="button" class="shindan-share-btn" id="shindan-share">Xで結果をシェア</button>' +
      '<button type="button" class="shindan-retry-btn" id="shindan-retry">もう一度診断する</button>' +
      '</div>' +
      '<p class="shindan-disclaimer">※本診断は行動心理学の一般的な考え方をもとにした簡易的な傾向診断であり、婚活の成功や相性を保証するものではありません。各サービスの詳細・料金は必ず公式サイトでご確認ください。当サイトはアフィリエイトプログラムによる収益を得る場合があります。</p>' +
      '</div>';

    app.innerHTML = html;

    document.getElementById("shindan-retry").addEventListener("click", function () {
      state = { step: -1, answers: [], totals: {} };
      render();
    });
    document.getElementById("shindan-share").addEventListener("click", function () {
      var text = "私の婚活タイプは「" + primary.title + "」でした🧠\n行動心理学でわかる婚活タイプ診断はこちら→";
      var url = window.location.href;
      var shareUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text) + "&url=" + encodeURIComponent(url);
      window.open(shareUrl, "_blank", "noopener");
    });
  }

  render();
})();
</script>
