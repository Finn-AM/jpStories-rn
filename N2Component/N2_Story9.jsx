import { ScrollView, StyleSheet, Text, View } from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N2_Story9({}) {
  const tableData = [

    ["Japan", "Hiragana", "Translation"],

    ["食堂", "しょくどう", "Cafeteria, dining hall"],
    ["騒ぎ", "さわぎ", "Commotion, fuss"],
    ["昼休み", "ひるやすみ", "Lunch break"],
    ["チャイム", "ちゃいむ", "Chime, school bell"],
    ["鳴る", "なる", "To ring, to sound"],

    ["同時に", "どうじに", "At the same time"],
    ["学生", "がくせい", "Student"],
    ["一斉に", "いっせいに", "All at once, simultaneously"],
    ["向かう", "むかう", "To head towards"],
    ["広い", "ひろい", "Spacious, wide"],

    ["空間", "くうかん", "Space"],
    ["たちまち", "たちまち", "Immediately, in an instant"],
    ["あふれかえる", "あふれかえる", "To overflow, to be crowded"],
    ["列", "れつ", "Line, queue"],
    ["並ぶ", "ならぶ", "To line up"],

    ["楽しみ", "たのしみ", "Looking forward to, pleasure"],
    ["匂い", "におい", "Smell, scent"],
    ["いっぱい", "いっぱい", "Full of"],
    ["広がる", "ひろがる", "To spread"],
    ["空腹", "くうふく", "Hunger"],

    ["刺激する", "しげきする", "To stimulate"],
    ["ところが", "ところが", "However, but"],
    ["突然", "とつぜん", "Suddenly"],
    ["大きな", "おおきな", "Big, large"],
    ["声", "こえ", "Voice"],

    ["響く", "ひびく", "To echo, to resound"],
    ["男子", "だんし", "Boy, male student"],
    ["トレイ", "とれい", "Tray"],
    ["ぶつけ合う", "ぶつけあう", "To bump against each other"],
    ["言い争い", "いいあらそい", "Quarrel, argument"],

    ["始める", "はじめる", "To start, to begin"],
    ["周り", "まわり", "Surroundings"],
    ["生徒", "せいと", "Student, pupil"],
    ["振り返る", "ふりかえる", "To turn around, to look back"],
    ["ざわめき", "ざわめき", "Murmur, buzz of voices"],

    ["広がる", "ひろがる", "To spread, to expand"],
    ["お前", "おまえ", "You (casual, rough)"],
    ["わざと", "わざと", "On purpose, intentionally"],
    ["セリフ", "せりふ", "Remark, line (in conversation/play)"],
    ["カレー", "かれー", "Curry"],

    ["ルー", "るー", "Curry roux, stew sauce"],
    ["制服", "せいふく", "School uniform"],
    ["飛ばす", "とばす", "To splash, to scatter"],
    ["ますます", "ますます", "Increasingly, more and more"],
    ["ヒートアップする", "ひーとあっぷする", "To heat up, to get more intense"],

    ["おばさん", "おばさん", "Aunt; middle-aged woman (here: cafeteria lady)"],
    ["慌てる", "あわてる", "To panic, to be flustered"],
    ["止める", "とめる", "To stop, to halt"],
    ["収まる", "おさまる", "To settle down, to calm"],
    ["女子", "じょし", "Girl, female student"],

    ["小さく", "ちいさく", "Small, softly (adverb form)"],
    ["笑う", "わらう", "To laugh, to smile"],
    ["子供", "こども", "Child"],
    ["周囲", "しゅうい", "Surroundings"],
    ["クスクス", "くすくす", "Chuckle, giggle"],

    ["漏れる", "もれる", "To leak, to escape (sound/smell)"],
    ["赤くなる", "あかくなる", "To turn red, to blush"],
    ["気まずい", "きまずい", "Awkward, uncomfortable"],
    ["視線", "しせん", "Gaze, line of sight"],
    ["逸らす", "そらす", "To turn away, to avert"],

    ["結局", "けっきょく", "After all, in the end"],
    ["先生", "せんせい", "Teacher"],
    ["駆けつける", "かけつける", "To rush over"],
    ["黙り込む", "だまりこむ", "To fall silent"],
    ["片付け", "かたづけ", "Tidying up, cleaning"],

    ["手伝う", "てつだう", "To help, to assist"],
    ["再び", "ふたたび", "Again, once more"],
    ["平和", "へいわ", "Peace"],
    ["戻る", "もどる", "To return, to go back"],
    ["スパイス", "すぱいす", "Spice"],

    ["苦笑する", "くしょうする", "To give a wry smile"],
    ["熱々", "あつあつ", "Piping hot"],
    ["口に運ぶ", "くちにはこぶ", "To put (food) into one’s mouth"],
    ["確かに", "たしかに", "Indeed, certainly"],
    ["騒がしい", "さわがしい", "Noisy, boisterous"],

    ["日常", "にちじょう", "Everyday life"],
    ["悪くない", "わるくない", "Not bad, pretty good"],
    ["思える", "おもえる", "To seem, to appear, to feel like"],
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          食堂の騒ぎ{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          昼休みのチャイムが鳴ると同時に、学生たちは一斉に食堂へと向かった。広いはずの空間も、たちまち人であふれかえる。
          {"\n"}
          {"\n"}
          私は友達と列に並び、今日のランチを楽しみにしていた。カレーの匂いが食堂いっぱいに広がり、空腹を刺激する。
          {"\n"}
          {"\n"}
          ところが、前の方から突然大きな声が響いた。二人の男子がトレイをぶつけ合い、言い争いを始めたのだ。周りの生徒たちは一斉に振り返り、ざわめきが広がった。
          {"\n"}
          {"\n"}
          「お前、わざとだろ！」
          {"\n"}
          「いや、こっちのセリフだ！」
          {"\n"}
          {"\n"}
          二人ともカレーのルーを制服に飛ばし、ますますヒートアップしていく。食堂のおばさんが慌てて止めに入ったが、場は収まりそうになかった。
          {"\n"}
          {"\n"}
          そのとき、後ろに並んでいた女子が小さく笑った。「子供みたいだね。」その声に、周囲からもクスクスと笑いが漏れた。
          {"\n"}
          {"\n"}
          男子たちは赤くなり、気まずそうに視線を逸らした。結局、先生が駆けつける前に二人は黙り込み、片付けを手伝うことになった。
          {"\n"}
          {"\n"}
          その後、食堂には再び平和なざわめきが戻った。友達が笑いながら言った。「まあ、これも昼休みのスパイスだね。」
          {"\n"}
          {"\n"}
          私は苦笑しつつ、熱々のカレーを口に運んだ。確かに少し騒がしかったけれど、こんな日常も悪くないと思えた。
        </Text>

        <View>
          <TableComponent data={tableData} />
        </View>
      </ScrollView>
            <AppBannerAd/> 
    </View>
  );
}

const styles = StyleSheet.create({
  judul: {
    // backgroundColor:'aqua',
    paddingTop: 50,
    fontFamily: "sans-serif-condensed",
    fontSize: 20,
    height: 90,
    fontWeight: "bold",
    textAlign: "center",
  },
  artikel: {
    fontSize: 17,
    padding: 20,
    paddingBottom: 30,
    // backgroundColor:'#FAFAFA'
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  header: {
    backgroundColor: "#eee",
  },
  cell: {
    flex: 1,
    padding: 10,
    borderRightWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
  },
});

export default N2_Story9;
