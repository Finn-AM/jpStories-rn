import {
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N1_Story4({}) {
  const tableData = [
 ["Japan", "Romaji", "Translation"],

  ["偽り", "いつわり", "falsehood / lie"],
  ["恋人", "こいびと", "lover / partner"],
  ["同僚", "どうりょう", "colleague / coworker"],
  ["冷やかす", "ひやかす", "to tease / to make fun of"],
  ["耐え切れない", "たえきれない", "cannot endure / cannot stand"],

  ["咄嗟に", "とっさに", "instantly / on the spur of the moment"],
  ["口走る", "くちばしる", "to blurt out"],
  ["紹介する", "しょうかいする", "to introduce"],
  ["焦る", "あせる", "to panic / to be flustered"],
  ["泣きつく", "なきつく", "to beg / to plead"],
  
  ["頼み込む", "たのみこむ", "to implore / to make an earnest request"],
  ["呆れる", "あきれる", "to be amazed / dumbfounded"],
  ["承諾する", "しょうだくする", "to consent / to agree"],
  ["飲み会", "のみかい", "drinking party / get-together"],
  ["一変する", "いっぺんする", "to change completely"],

  ["歓声", "かんせい", "cheer / shout of joy"],
  ["勝者", "しょうしゃ", "winner / victor"],
  ["酔っ払う", "よっぱらう", "to get drunk"],
  ["疑惑", "ぎわく", "suspicion / doubt"],
  ["信用", "しんよう", "trust / credibility"],

  ["瞬時に", "しゅんじに", "instantly / in a moment"],
  ["崩壊する", "ほうかいする", "to collapse / to fall apart"],
  ["初デート", "はつでーと", "first date"],
  ["記念日", "きねんび", "anniversary / commemorative day"],
  ["無茶ぶり", "むちゃぶり", "absurd demand / unreasonable request"],

  ["しどろもどろ", "しどろもどろ", "incoherent / confused"],
  ["余興", "よきょう", "entertainment / sideshow"],
  ["肩を落とす", "かたをおとす", "to be dejected / to be disappointed"],
  ["ケラケラ笑う", "けらけらわらう", "to giggle / to laugh loudly"],
  ["意外と", "いがいと", "unexpectedly / surprisingly"],

  ["嘘を合わせる", "うそをあわせる", "to coordinate lies"],
  ["スパイごっこ", "すぱいごっこ", "pretend spy play"],
  ["真剣に", "しんけんに", "seriously"],
  ["いたずらっぽい", "いたずらっぽい", "mischievous / playful"],
  ["微笑む", "ほほえむ", "to smile"],
  
  ["囁く", "ささやく", "to whisper"],
  ["比較する", "ひかくする", "to compare"],
  ["返す言葉を失う", "かえすことばをうしなう", "to be at a loss for words"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          偽りの恋人 {"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          同僚たちから「そろそろ結婚は？」と毎週のように冷やかされ、私はついに耐え切れなくなった。咄嗟に「彼女がいる」と口走ってしまったのだ。当然、次の質問は「いつ紹介するんだ？」である。
          {"\n"}
          {"\n"}
          焦った私は大学時代からの友人、真理子に泣きついた。「一日だけ俺の恋人のふりをしてくれ！」と頼み込むと、彼女は呆れ顔をしながらも「面白そうだからいいよ」と承諾してくれた。
          {"\n"}
          {"\n"}
          翌週末、私たちは同僚たちと飲み会に参加した。真理子は普段のラフな格好とは一変し、ドレス姿で現れ、皆を驚かせた。「本当に彼女がいたのか！」という歓声とともに、私は一瞬だけ本物の勝者になった気がした。
          {"\n"}
          {"\n"}
          しかし問題はその後だ。同僚の一人が酔っぱらいながら「二人はどうやって知り合ったんだ？」と聞いてきた。私は「大学のゼミで」と答えたが、真理子は同時に「サークルの合宿で」と言ってしまい、場は一気に疑惑の空気に包まれた。
          {"\n"}
          {"\n"}
          さらに「付き合い始めたのはいつ？」という質問に、私は「三年前」と答え、真理子は「半年前」と答えてしまった。周囲は大爆笑、私の信用は瞬時に崩壊した。
          {"\n"}
          {"\n"}
          その後も「初デートはどこ？」とか「記念日は？」など無茶ぶりが続き、私と真理子はしどろもどろになりながら必死に答えた。気が付けば、すっかり場の余興のネタ扱いである。
          {"\n"}
          {"\n"}
          飲み会の帰り道、私は肩を落としていた。だが真理子はケラケラ笑いながら「意外と楽しかったね。みんなの前で嘘を合わせるのって、ちょっとスパイごっこみたいで」と言った。
          {"\n"}
          {"\n"}
          「もう二度と頼まない！」と私は真剣に言ったが、彼女はいたずらっぽく微笑みながら「でも次に“本当の彼女”を紹介する時、私は比較されるんだろうね」と囁いた。
          {"\n"}
          {"\n"}
          その言葉に返す言葉を失った私は、ふと考えた。――もしかして、本当に彼女でも悪くないんじゃないか、と。
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

export default N1_Story4;
