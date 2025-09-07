import { ScrollView, StyleSheet, Text, View } from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N2_Story5({}) {
  const tableData = [

  ["Japan", "Hiragana", "Translation"],

  ["人気者", "にんきもの", "Popular person"],
  ["秘密", "ひみつ", "Secret"],
  ["学校", "がっこう", "School"],

  ["目立つ", "めだつ", "To stand out"],
  ["存在", "そんざい", "Existence, Presence"],
  ["サッカー部", "さっかーぶ", "Soccer club"],
  ["エース", "えーす", "Ace, Star player"],

  ["成績", "せいせき", "Grades, Academic record"],
  ["上位", "じょうい", "High rank, Top position"],
  ["先生", "せんせい", "Teacher"],
  ["信頼", "しんらい", "Trust"],
  ["厚い", "あつい", "Thick, Deep (relationship/trust)"],

  ["友達", "ともだち", "Friend"],
  ["慕う", "したう", "To adore, To admire"],
  ["主人公", "しゅじんこう", "Protagonist, Main character"],
  ["日々", "ひび", "Days, Everyday life"],
  ["誰にも言えない", "だれにもいえない", "Cannot tell anyone"],

  ["理由", "りゆう", "Reason"],
  ["教室", "きょうしつ", "Classroom"],
  ["アルバイト", "あるばいと", "Part-time job"],
  ["疲れ", "つかれ", "Fatigue, Tiredness"],
  ["隠す", "かくす", "To hide"],

  ["時間", "じかん", "Time"],
  ["裕福", "ゆうふく", "Wealthy"],
  ["母", "はは", "Mother"],
  ["病気がち", "びょうきがち", "Prone to illness"],
  ["働く", "はたらく", "To work"],

  ["生活", "せいかつ", "Life, Livelihood"],
  ["支える", "ささえる", "To support"],
  ["深夜", "しんや", "Late at night, Midnight"],
  ["コンビニ", "こんびに", "Convenience store"],
  ["仮眠", "かみん", "Nap"],

  ["明るく振る舞う", "あかるくふるまう", "To act cheerfully"],
  ["冗談", "じょうだん", "Joke"],
  ["笑いを取る", "わらいをとる", "To get laughs, Make people laugh"],
  ["目の奥", "めのおく", "Back of one's eyes"],
  ["潜む", "ひそむ", "To lurk, To hide"],

  ["偶然", "ぐうぜん", "By chance, Coincidence"],
  ["机", "つくえ", "Desk"],
  ["突っ伏す", "つっぷす", "To lie face down"],
  ["制服", "せいふく", "Uniform"],
  ["袖", "そで", "Sleeve"],

  ["覗く", "のぞく", "To peek, To be visible"],
  ["傷", "きず", "Wound, Scar"],
  ["冷たい", "つめたい", "Cold"],
  ["汗", "あせ", "Sweat"],
  ["濡れる", "ぬれる", "To get wet"],

  ["慌てる", "あわてる", "To panic, To be flustered"],
  ["笑顔", "えがお", "Smiling face"],
  ["壊れそう", "こわれそう", "About to break"],
  ["痛々しい", "いたいたしい", "Painful, Pitiable"],
  ["頼る", "たよる", "To rely on"],

  ["背負う", "せおう", "To carry on one’s back, To shoulder"],
  ["仮面", "かめん", "Mask"],
  ["外す", "はずす", "To take off, To remove"],
  ["華やかさ", "はなやかさ", "Splendor, Glamour"],
  ["裏", "うら", "Reverse side, Behind"],

  ["孤独", "こどく", "Loneliness"],
  ["本物", "ほんもの", "Genuine, Real"],
  ["話す", "はなす", "To speak, To tell"],
  ["支える", "ささえる", "To support, To sustain"],
  ["心に決める", "こころにきめる", "To make up one’s mind"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          人気者の秘密{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          翔太は学校で誰よりも目立つ存在だった。サッカー部のエースで、成績も常に上位。先生からの信頼も厚く、友達からも慕われ、まるで主人公のような日々を送っていた。
          {"\n"}
          {"\n"}
          しかし、そんな彼にも誰にも言えない秘密があった。毎朝一番に登校する理由、それは誰もいない教室でアルバイトの疲れを隠すために眠る時間を確保することだった。
          {"\n"}
          {"\n"}
          実は翔太の家は裕福ではなく、母は病気がちで働けなかった。生活を支えるため、翔太は深夜までコンビニで働き、そのまま仮眠も取らずに学校へ来ていたのだ。
          {"\n"}
          {"\n"}
          皆の前で明るく振る舞い、冗談を飛ばして笑いを取る。だが、彼の目の奥にはいつも深い疲れが潜んでいた。
          {"\n"}
          {"\n"}
          ある日、偶然私が教室に早く来たとき、机に突っ伏して眠る翔太を見つけた。制服の袖から覗く手は、細かい傷と冷たい汗で濡れていた。
          {"\n"}
          {"\n"}
          「大丈夫？」と声をかけると、彼は慌てて笑顔を作り、「ただ寝不足なだけだよ」と答えた。その笑顔は、どこか壊れそうで痛々しかった。
          {"\n"}
          {"\n"}
          その後も私は気づいた。翔太は誰かに頼ることなく、全てを一人で背負っていたのだ。人気者としての仮面を外せる場所は、どこにもなかった。
          {"\n"}
          {"\n"}
          けれど、そんな彼だからこそ人は自然と集まってくるのだと思った。表の華やかさの裏にある強さと孤独が、彼を本物の「人気者」にしていたのだ。
                    {"\n"}
          {"\n"}
          私はその秘密を誰にも話さなかった。ただ、彼が少しでも楽に笑えるよう、隣で静かに支えることを心に決めた。
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

export default N2_Story5;
