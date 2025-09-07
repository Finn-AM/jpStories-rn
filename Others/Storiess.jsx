// stories.js
export const stories = [
  // Library
  {
    id: "story_library",
    title: "図書館で友達と会う",
    scenes: [
      {
        id: 1,
        text: "あなたは大学の図書館に入りました。静かな雰囲気の中、本を探しています。すると、友達のさくらが声をかけてきました：「やあ！久しぶりだね！」",
        choices: [
          { option: "久しぶり！元気？", nextScene: 2 },
          { option: "犬が好きです。", nextScene: "end_wrong_dog" },
          { option: "おはようございます！先生！", nextScene: "end_wrong_teacher" }
        ]
      },
      {
        id: 2,
        text: "さくらは笑って答えました：「元気だよ！今日は何を探しているの？」",
        choices: [
          { option: "日本の歴史の本を探しているんだ。", nextScene: 3 },
          { option: "本じゃなくて寿司を探しているよ。", nextScene: "end_wrong_sushi" }
        ]
      },
      {
        id: 3,
        text: "さくら：「へえ、歴史か。私は文学の本を読みに来たんだ。」\n二人は一緒に本棚へ向かいました。さくらが質問します：「歴史のどの時代が好き？」",
        choices: [
          { option: "戦国時代が好きだよ。", nextScene: 4 },
          { option: "未来が好き。", nextScene: "end_wrong_future" }
        ]
      },
      {
        id: 4,
        text: "さくら：「戦国時代！面白いよね。織田信長とか知ってる？」",
        choices: [
          { option: "もちろん！とても有名だよ。", nextScene: 5 },
          { option: "知らない。犬ですか？", nextScene: "end_wrong_dog2" }
        ]
      },
      {
        id: 5,
        text: "さくらはうなずいて笑いました：「そうだね、有名だね。」\n本を選んだあと、さくらが聞きます：「ねえ、この後どうする？」",
        choices: [
          { option: "一緒にカフェに行こう！", nextScene: 6 },
          { option: "勉強したくないから帰る。", nextScene: "end_wrong_lazy" }
        ]
      },
      {
        id: 6,
        text: "さくら：「いいね！カフェでゆっくり話そう！」\n二人は図書館を出て、楽しい時間を過ごしました。📚☕️",
        choices: []
      },

      // --- ENDINGS (wrong choices) ---
      {
        id: "end_wrong_dog",
        text: "さくら：「え？犬？ここは図書館だよ…」 あなたは変な顔をされました。GAME OVER。",
        choices: []
      },
      {
        id: "end_wrong_teacher",
        text: "さくら：「先生じゃないよ！友達でしょ！」 恥ずかしい雰囲気になりました。GAME OVER。",
        choices: []
      },
      {
        id: "end_wrong_sushi",
        text: "さくら：「えっ…寿司？図書館に寿司はないよ！」 周りの人がクスクス笑いました。GAME OVER。",
        choices: []
      },
      {
        id: "end_wrong_future",
        text: "さくら：「未来！？図書館には未来の本はないよ！」 さくらは笑って首を振りました。GAME OVER。",
        choices: []
      },
      {
        id: "end_wrong_dog2",
        text: "さくら：「犬！？織田信長は人間だよ！」 さくらはあきれてしまいました。GAME OVER。",
        choices: []
      },
      {
        id: "end_wrong_lazy",
        text: "さくら：「えー、せっかく会えたのに！」 ちょっと残念な気持ちで別れました。GAME OVER。",
        choices: []
      }
    ]
  },

  // Rain
    {
    id: "story_rain",
    title: "放課後、雨の日",
    scenes: [
      {
        id: 1,
        text: "放課後、学校が終わった。外を見ると大雨が降っている。あなたは傘を持っていない。どうする？",
        choices: [
          { option: "友達に声をかける。", nextScene: 2 },
          { option: "雨の中を走って帰る。", nextScene: "end_wet" },
          { option: "学校に戻って宿題をする。", nextScene: 3 }
        ]
      },
      {
        id: 2,
        text: "ちょうどそこへクラスメートのゆきが現れた。ゆきは傘を持っている。「あ、傘忘れたの？」",
        choices: [
          { option: "はい、一緒に帰ってもいい？", nextScene: 4 },
          { option: "大丈夫！走って帰るよ。", nextScene: "end_wet_friend" }
        ]
      },
      {
        id: 3,
        text: "教室に戻って宿題をしていると、ゆきが入ってきた。「まだいたの？一緒に帰らない？」",
        choices: [
          { option: "うん、待ってたんだ。一緒に帰ろう。", nextScene: 4 },
          { option: "いや、もう少し宿題する。", nextScene: "end_alone" }
        ]
      },
      {
        id: 4,
        text: "二人は一つの傘に入り、校門を出た。道は水たまりだらけ。ゆきが笑いながら言う：「靴、濡れちゃいそうだね。」",
        choices: [
          { option: "大丈夫、気にしないよ。", nextScene: 5 },
          { option: "ゆきの靴は大丈夫？", nextScene: 6 }
        ]
      },
      {
        id: 5,
        text: "あなたは気にせず歩いた。すると、車が通りかかって水をはねた！二人ともびしょびしょに…💦",
        choices: [
          { option: "笑ってごまかす。", nextScene: 7 },
          { option: "怒って文句を言う。", nextScene: "end_angry" }
        ]
      },
      {
        id: 6,
        text: "あなたが気遣うと、ゆきは少し赤くなって笑った。「ありがとう、優しいね。」",
        choices: [
          { option: "照れて話題を変える。", nextScene: 7 },
          { option: "さらに冗談を言う。", nextScene: 8 }
        ]
      },
      {
        id: 7,
        text: "二人は笑いながら歩き続けた。雨音が心地よく聞こえる。ゆき：「雨の日って、少し特別な気分になるね。」",
        choices: [
          { option: "そうだね、落ち着くよね。", nextScene: 9 },
          { option: "いや、嫌いだな。", nextScene: "end_negative" }
        ]
      },
      {
        id: 8,
        text: "あなたの冗談にゆきは吹き出した。「本当に面白いね！」二人は楽しい気分になった。",
        choices: [
          { option: "そのまま話を続ける。", nextScene: 9 }
        ]
      },
      {
        id: 9,
        text: "やがて駅に着いた。雨はまだ止まない。ゆき：「ねえ、少しカフェで雨宿りしない？」",
        choices: [
          { option: "いいね！寄って行こう。", nextScene: 10 },
          { option: "いや、今日は帰る。", nextScene: "end_boring" }
        ]
      },
      {
        id: 10,
        text: "二人はカフェに入り、窓の外の雨を眺めながらホットチョコを飲んだ。ゆきは微笑みながら言った。「一緒に帰れてよかった。」☕️🌧️",
        choices: []
      },

      // --- BAD ENDINGS ---
      {
        id: "end_wet",
        text: "あなたは全力で走ったが、全身びしょびしょになった。風邪をひいてしまった…🤧 GAME OVER。",
        choices: []
      },
      {
        id: "end_wet_friend",
        text: "あなたが走って帰ると言うと、ゆきは寂しそうな顔をした。結局びしょ濡れになった。GAME OVER。",
        choices: []
      },
      {
        id: "end_alone",
        text: "一人で宿題を続けた。外の雨音だけが響く。少し孤独な夜になった。GAME OVER。",
        choices: []
      },
      {
        id: "end_angry",
        text: "あなたが怒鳴ると、ゆきは困った顔をした。気まずい空気のまま別れた。GAME OVER。",
        choices: []
      },
      {
        id: "end_negative",
        text: "「雨が嫌い？」とゆきは少し残念そうな顔をした。そのまま会話が途切れてしまった。GAME OVER。",
        choices: []
      },
      {
        id: "end_boring",
        text: "あなたは帰ることにした。ゆきは少しがっかりした様子だった。普通の帰り道になった。GAME OVER。",
        choices: []
      }
    ]
  }, 

// Restaurant
    {
    id: "story_restaurant",
    title: "放課後、レストランで",
    scenes: [
      {
        id: 1,
        text: "放課後、お腹が空いたあなたは駅前のレストランに入った。すると、偶然クラスメートのケンタが一人で座っていた。「あれ？君も来たの？」",
        choices: [
          { option: "一緒に座ってもいい？", nextScene: 2 },
          { option: "軽く挨拶して一人で座る。", nextScene: 3 },
          { option: "恥ずかしいから店を出る。", nextScene: "end_leave" }
        ]
      },
      {
        id: 2,
        text: "ケンタは嬉しそうに笑った。「もちろん！一緒に食べよう。」ウェイターがメニューを持ってきた。",
        choices: [
          { option: "パスタを注文する。", nextScene: 4 },
          { option: "ハンバーグを注文する。", nextScene: 5 },
          { option: "ケンタにおすすめを聞く。", nextScene: 6 }
        ]
      },
      {
        id: 3,
        text: "あなたは一人で席に座った。料理を待っている間、ケンタがこちらをちらちら見ている。",
        choices: [
          { option: "やっぱり隣に移動する。", nextScene: 2 },
          { option: "スマホを見て無視する。", nextScene: "end_lonely" }
        ]
      },
      {
        id: 4,
        text: "パスタが運ばれてきた。ケンタが笑いながら言った。「それ、僕も好きなんだ！」",
        choices: [
          { option: "嬉しそうに食べる。", nextScene: 7 },
          { option: "少し分けてあげる。", nextScene: 8 }
        ]
      },
      {
        id: 5,
        text: "ジューシーなハンバーグが運ばれてきた。ケンタが羨ましそうに見ている。",
        choices: [
          { option: "一口あげる。", nextScene: 8 },
          { option: "わざと自慢する。", nextScene: "end_pride" }
        ]
      },
      {
        id: 6,
        text: "ケンタはメニューを指さした。「この店のオムライスは最高だよ！」",
        choices: [
          { option: "おすすめを信じてオムライスを注文する。", nextScene: 9 },
          { option: "やっぱり自分の好きな物にする。", nextScene: 4 }
        ]
      },
      {
        id: 7,
        text: "二人で同じ料理を楽しみながら、自然と会話が盛り上がった。ケンタ：「こうやって食べるの、楽しいね。」",
        choices: [
          { option: "うん、また来たいね。", nextScene: 10 },
          { option: "え、別に普通だよ。", nextScene: "end_cold" }
        ]
      },
      {
        id: 8,
        text: "あなたが料理を分けると、ケンタは驚きつつも嬉しそうに受け取った。「ありがとう！めっちゃ美味しい！」",
        choices: [
          { option: "冗談で『もっと欲しい？』と聞く。", nextScene: 11 },
          { option: "『今度は僕が奢るよ』と提案する。", nextScene: 12 }
        ]
      },
      {
        id: 9,
        text: "オムライスが出てきた。ふわふわ卵にケチャップのハートマーク。ケンタが照れくさそうに笑った。「あ、なんか…いいね。」",
        choices: [
          { option: "一緒に写真を撮る。", nextScene: 13 },
          { option: "すぐに食べ始める。", nextScene: 7 }
        ]
      },
      {
        id: 10,
        text: "食事の後、二人はお店を出た。ケンタは少し照れながら言った。「また一緒にご飯しようね。」🌸 GOOD END",
        choices: []
      },
      {
        id: 11,
        text: "『もっと欲しい？』と冗談を言うと、ケンタは笑いながら『もちろん！』と答えた。二人は楽しく食事を続けた。🍴 GOOD END",
        choices: []
      },
      {
        id: 12,
        text: "『今度は僕が奢るよ』と言うと、ケンタは笑顔で頷いた。新しい約束ができた。🤝 GOOD END",
        choices: []
      },
      {
        id: 13,
        text: "二人で料理の写真を撮った。SNSにあげると、友達から『お似合い！』とコメントがついた。📸 GOOD END",
        choices: []
      },
      // --- BAD ENDINGS ---
      {
        id: "end_leave",
        text: "あなたは恥ずかしくて店を出てしまった。お腹は空いたまま…😓 GAME OVER",
        choices: []
      },
      {
        id: "end_lonely",
        text: "スマホばかり見ていたら、結局一人でご飯を食べて寂しく帰った。😔 GAME OVER",
        choices: []
      },
      {
        id: "end_pride",
        text: "わざと自慢すると、ケンタは不機嫌そうに黙り込んだ。気まずい空気に…。😞 GAME OVER",
        choices: []
      },
      {
        id: "end_cold",
        text: "冷たい返事にケンタは少し黙り込んだ。せっかくの食事が台無しになった。🥲 GAME OVER",
        choices: []
      }
    ]
  },

    {
    id: "story_arubaito",
    title: "アルバイト初日",
    scenes: [
      {
        id: 1,
        text: "今日は新しいカフェでのアルバイト初日。制服に着替えて店に入ると、先輩のアヤさんが笑顔で迎えてくれた。「はじめまして！今日からよろしくね。」",
        choices: [
          { option: "「はい！頑張ります！」と元気に答える。", nextScene: 2 },
          { option: "緊張して小さな声で挨拶する。", nextScene: 3 },
          { option: "黙って軽く会釈だけする。", nextScene: "end_shy" }
        ]
      },
      {
        id: 2,
        text: "アヤさんは嬉しそうに頷いた。「元気があっていいね。まずはホールを手伝ってくれる？」",
        choices: [
          { option: "笑顔で『はい！』と答える。", nextScene: 4 },
          { option: "不安なのでキッチンをお願いする。", nextScene: 5 }
        ]
      },
      {
        id: 3,
        text: "アヤさんは少し心配そうに見つめた。「大丈夫？緊張してる？」",
        choices: [
          { option: "「はい、でも頑張ります！」と正直に答える。", nextScene: 2 },
          { option: "「いえ、大丈夫です。」と笑顔を作る。", nextScene: 4 }
        ]
      },
      {
        id: 4,
        text: "お客さんが来店した。あなたはお水を運び、注文を聞くことになった。",
        choices: [
          { option: "元気に『いらっしゃいませ！』と声をかける。", nextScene: 6 },
          { option: "小声で挨拶し、ぎこちなくメモを取る。", nextScene: 7 }
        ]
      },
      {
        id: 5,
        text: "キッチンに入ると料理長が声をかけた。「新人か？まずはサラダの盛り付けからな。」",
        choices: [
          { option: "「はい！」と素直に作業を始める。", nextScene: 8 },
          { option: "ちょっと戸惑って手が止まる。", nextScene: "end_mistake" }
        ]
      },
      {
        id: 6,
        text: "お客さんは笑顔で注文を伝えた。アヤさんが小声で「いい感じだよ」と褒めてくれる。",
        choices: [
          { option: "嬉しくてさらに頑張る。", nextScene: 9 },
          { option: "照れて黙ってしまう。", nextScene: 7 }
        ]
      },
      {
        id: 7,
        text: "お客さんは少し困った顔をしたが、アヤさんがフォローしてくれた。「大丈夫、少しずつ慣れようね。」",
        choices: [
          { option: "素直に『ありがとうございます』と答える。", nextScene: 9 },
          { option: "申し訳なくて謝り続ける。", nextScene: "end_apology" }
        ]
      },
      {
        id: 8,
        text: "サラダを綺麗に盛り付けると、料理長が感心して『センスあるな！』と褒めてくれた。",
        choices: [
          { option: "「ありがとうございます！」と笑顔で答える。", nextScene: 9 },
          { option: "恥ずかしくて黙ってしまう。", nextScene: "end_shy" }
        ]
      },
      {
        id: 9,
        text: "一日のシフトが終わった。アヤさんが微笑んで「今日はよく頑張ったね！」と声をかけてくれた。",
        choices: [
          { option: "「ありがとうございます！これからも頑張ります！」", nextScene: "end_good" },
          { option: "「疲れました…」と本音を言う。", nextScene: "end_normal" }
        ]
      },
      // GOOD ENDINGS
      {
        id: "end_good",
        text: "アヤさんに認められ、初日から良い印象を残せた。これからのバイトが楽しみになった！🌸 GOOD END",
        choices: []
      },
      {
        id: "end_normal",
        text: "少し疲れたけど、なんとか初日を乗り切った。明日はもっと上手くできるはず。🙂 NORMAL END",
        choices: []
      },
      // BAD ENDINGS
      {
        id: "end_shy",
        text: "声を出せずに黙ってしまい、先輩やお客さんに不安を与えてしまった…。😔 GAME OVER",
        choices: []
      },
      {
        id: "end_mistake",
        text: "手が止まってしまい、キッチンで怒られてしまった…。まだまだ修行が必要。😓 GAME OVER",
        choices: []
      },
      {
        id: "end_apology",
        text: "何度も謝り続けてしまい、雰囲気がぎこちなくなった…。😞 GAME OVER",
        choices: []
      }
    ]
  }, 
    {
    id: "story_forest",
    title: "森で迷子",
    scenes: [
      {
        id: 1,
        text: "学校の帰り道、友達と別れて一人で森の小道を歩いていた。気づけば道に迷ってしまった…。辺りはどんどん暗くなっていく。",
        choices: [
          { option: "落ち着いて深呼吸する。", nextScene: 2 },
          { option: "慌てて走り出す。", nextScene: 3 },
          { option: "その場に座り込む。", nextScene: "end_panic" }
        ]
      },
      {
        id: 2,
        text: "少し落ち着きを取り戻した。遠くから小川の音が聞こえてくる。",
        choices: [
          { option: "小川の方へ進む。", nextScene: 4 },
          { option: "そのまま道を探し続ける。", nextScene: 5 }
        ]
      },
      {
        id: 3,
        text: "闇の中を走っていると足を滑らせて転んでしまった…。膝に擦り傷ができた。",
        choices: [
          { option: "痛いけど立ち上がる。", nextScene: 5 },
          { option: "泣きながら動けなくなる。", nextScene: "end_injury" }
        ]
      },
      {
        id: 4,
        text: "小川の近くで古い橋を見つけた。渡るかどうか迷う。",
        choices: [
          { option: "橋を渡る。", nextScene: 6 },
          { option: "危ないので川沿いに歩く。", nextScene: 7 }
        ]
      },
      {
        id: 5,
        text: "森の奥へ進むと、フクロウの声が響いた。少し怖いけど道の先に灯りが見える。",
        choices: [
          { option: "灯りの方へ向かう。", nextScene: 7 },
          { option: "怖くて引き返す。", nextScene: "end_lost" }
        ]
      },
      {
        id: 6,
        text: "橋を渡ると足元がギシギシと鳴った。だが無事に向こう岸へたどり着いた。",
        choices: [
          { option: "先へ進む。", nextScene: 8 },
          { option: "少し休憩する。", nextScene: 9 }
        ]
      },
      {
        id: 7,
        text: "川沿いを歩いていると、小さな山小屋を見つけた。窓から明かりが漏れている。",
        choices: [
          { option: "小屋に近づいて助けを求める。", nextScene: 10 },
          { option: "怪しいので避けて通る。", nextScene: 11 }
        ]
      },
      {
        id: 8,
        text: "森の出口らしき場所に着いた！遠くに街の明かりが見える。",
        choices: [
          { option: "街へ向かって歩く。", nextScene: "end_good" },
          { option: "もう少し森を探検する。", nextScene: "end_curiosity" }
        ]
      },
      {
        id: 9,
        text: "休憩していると眠気が襲ってきた…。",
        choices: [
          { option: "眠らずに立ち上がる。", nextScene: 8 },
          { option: "うっかり眠ってしまう。", nextScene: "end_sleep" }
        ]
      },
      {
        id: 10,
        text: "小屋の中から優しそうなおじいさんが出てきた。「迷子かい？街まで送ってあげよう。」",
        choices: [
          { option: "素直にお願いする。", nextScene: "end_rescued" },
          { option: "知らない人は怖いので断る。", nextScene: 11 }
        ]
      },
      {
        id: 11,
        text: "小屋を避けて歩き続けると、夜が更けて道が全く見えなくなった。",
        choices: [
          { option: "必死に歩き続ける。", nextScene: "end_exhausted" },
          { option: "立ち止まり助けを待つ。", nextScene: "end_wait" }
        ]
      },
      // GOOD ENDINGS
      {
        id: "end_good",
        text: "あなたは無事に森を抜けて街へ戻ることができた！✨ GOOD END",
        choices: []
      },
      {
        id: "end_rescued",
        text: "親切なおじいさんのおかげで街まで送り届けてもらえた。人の優しさに感謝！🌸 HAPPY END",
        choices: []
      },
      // NORMAL / CURIOUS END
      {
        id: "end_curiosity",
        text: "街へ行かずに森を探検し続けた。冒険は続く…。🔮 CURIOUS END",
        choices: []
      },
      {
        id: "end_wait",
        text: "その場で待っていると、やがて友達と先生が探しに来てくれた。🙂 NORMAL END",
        choices: []
      },
      // BAD ENDINGS
      {
        id: "end_panic",
        text: "パニックになって座り込んでしまい、寒さで動けなくなった…。😢 GAME OVER",
        choices: []
      },
      {
        id: "end_injury",
        text: "ケガの痛みで動けず、夜が更けていった…。😞 GAME OVER",
        choices: []
      },
      {
        id: "end_lost",
        text: "引き返そうとしたが道を見失い、さらに森の奥へ…。😔 GAME OVER",
        choices: []
      },
      {
        id: "end_sleep",
        text: "眠ってしまい、気づけば真っ暗な夜。危険な森に取り残された…。🌙 GAME OVER",
        choices: []
      },
      {
        id: "end_exhausted",
        text: "歩き続けて力尽き、倒れてしまった…。💤 GAME OVER",
        choices: []
      }
    ]
  }


];
