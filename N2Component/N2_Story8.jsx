import { ScrollView, StyleSheet, Text, View } from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N2_Story8({}) {
  const tableData = [

    ["Japan", "Hiragana", "Translation"],

    ["高校二年", "こうこうにねん", "Second year of high school"],
    ["春", "はる", "Spring"],
    ["初めて", "はじめて", "For the first time"],
    ["アルバイト", "あるばいと", "Part-time job"],
    ["近所", "きんじょ", "Neighborhood, nearby"],

    ["小さな", "ちいさな", "Small, little"],
    ["カフェ", "かふぇ", "Cafe"],
    ["友達", "ともだち", "Friend"],
    ["勧める", "すすめる", "To recommend"],
    ["きっかけ", "きっかけ", "Trigger, reason, opportunity"],

    ["初日", "しょにち", "First day"],
    ["緊張", "きんちょう", "Nervousness, tension"],
    ["汗ばむ", "あせばむ", "To become sweaty"],
    ["エプロン", "えぷろん", "Apron"],
    ["紐", "ひも", "String, strap"],

    ["結ぶ", "むすぶ", "To tie, to bind"],
    ["心臓", "しんぞう", "Heart"],
    ["早鐘", "はやがね", "Rapid ringing (like of a bell/heartbeat)"],
    ["鳴る", "なる", "To ring, to sound"],
    ["いらっしゃいませ", "いらっしゃいませ", "Welcome (store greeting)"],

    ["声", "こえ", "Voice"],
    ["小さい", "ちいさい", "Small"],
    ["お客さん", "おきゃくさん", "Customer"],
    ["店長", "てんちょう", "Store manager"],
    ["優しい", "やさしい", "Kind, gentle"],

    ["安心する", "あんしんする", "To feel relieved"],
    ["皿", "さら", "Plate, dish"],
    ["下げる", "さげる", "To clear away, to take down"],
    ["震える", "ふるえる", "To tremble, to shake"],
    ["グラス", "ぐらす", "Glass (drinking)"],

    ["割る", "わる", "To break, to smash"],
    ["オーダー", "おーだー", "Order (at restaurant/cafe)"],
    ["聞き間違える", "ききまちがえる", "To mishear, to mistake in listening"],
    ["先輩", "せんぱい", "Senior, upperclassman"],
    ["助ける", "たすける", "To help, to assist"],
    ["失敗", "しっぱい", "Failure, mistake"],

    ["正直", "しょうじき", "Honestly, frankly"],
    ["やめる", "やめる", "To quit, to stop"],
    ["瞬間", "しゅんかん", "Moment, instant"],
    ["常連", "じょうれん", "Regular customer"],
    ["頑張る", "がんばる", "To do one’s best, to persevere"],

    ["微笑む", "ほほえむ", "To smile (gently)"],
    ["胸の奥", "むねのおく", "Deep inside the chest/heart"],
    ["温かい", "あたたかい", "Warm"],
    ["一言", "ひとこと", "A single word"],
    ["不安", "ふあん", "Anxiety, uneasiness"],

    ["消える", "きえる", "To disappear"],
    ["一週間", "いっしゅうかん", "One week"],
    ["過ぎる", "すぎる", "To pass, to elapse"],
    ["注文", "ちゅうもん", "Order (at a restaurant)"],
    ["覚える", "おぼえる", "To memorize, to remember"],

    ["自然と", "しぜんと", "Naturally"],
    ["大きい", "おおきい", "Big, large"],
    ["成長", "せいちょう", "Growth"],
    ["嬉しい", "うれしい", "Happy, glad"],
    ["自慢する", "じまんする", "To boast, to show off"],

    ["給料日", "きゅうりょうび", "Payday"],
    ["封筒", "ふうとう", "Envelope"],
    ["開ける", "あける", "To open"],
    ["喜び", "よろこび", "Joy, delight"],
    ["忘れる", "わすれる", "To forget"],

    ["額", "がく", "Amount (of money)"],
    ["大きくない", "おおきくない", "Not big"],
    ["働く", "はたらく", "To work"],
    ["特別", "とくべつ", "Special"],
    ["重み", "おもみ", "Weight, significance"],

    ["窓越し", "まどごし", "Through the window"],
    ["夕日", "ゆうひ", "Evening sun, sunset"],
    ["少しずつ", "すこしずつ", "Little by little"],
    ["大人", "おとな", "Adult"],
    ["思う", "おもう", "To think, to feel"],
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          初めてのアルバイト{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          高校二年の春、私は初めてアルバイトを始めた。場所は近所の小さなカフェ。友達が「簡単だよ」と勧めてくれたのがきっかけだった。
          {"\n"}
          {"\n"}
          初日の朝、緊張で手が汗ばみ、エプロンの紐を結ぶだけで心臓が早鐘のように鳴っていた。
          {"\n"}
          {"\n"}
          「いらっしゃいませ！」と声を出すはずが、最初の一言は小さすぎてお客さんに聞こえなかった。店長が優しく「もっと元気にね」と笑ってくれて、少し安心した。
          {"\n"}
          {"\n"}
          皿を下げるときに手が震えて、グラスを割りそうになったり、オーダーを聞き間違えて先輩に助けてもらったり。失敗ばかりで、正直やめたくなった瞬間もあった。
          {"\n"}
          {"\n"}
          でも、常連のお客さんが「ありがとう、頑張ってるね」と微笑んでくれたとき、胸の奥がじんわり温かくなった。たった一言で、疲れも不安も少し消えた気がした。
          {"\n"}
          {"\n"}
          一週間が過ぎる頃には、注文を覚えるのも早くなり、声も自然と大きく出せるようになった。小さな成長が嬉しくて、家に帰ると家族に自慢した。
          {"\n"}
          {"\n"}
          初めての給料日、封筒を開けたときの喜びは忘れられない。額は大きくなかったが、自分で働いたお金には特別な重みがあった。
          {"\n"}
          {"\n"}
          カフェの窓越しに夕日を見ながら、私は思った。「ここから、少しずつ大人になっていくんだな」と。
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

export default N2_Story8;
