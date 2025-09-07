import { ScrollView, StyleSheet, Text, View } from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N3_Story9({}) {
  
  const tableData = [

  ["Japan", "Hiragana", "Translation"],  

  ["奇妙", "きみょう", "Strange / Mysterious"],
  ["買い物", "かいもの", "Shopping / Purchase"],
  ["放課後", "ほうかご", "After school"],
  ["帰り道", "かえりみち", "Way home / Way back"],
  ["古道具屋", "ふるどうぐや", "Secondhand shop / Antique shop"],

  ["気づく", "きづく", "To notice / To realize"],
  ["一度も", "いちども", "Not even once"],
  ["店", "みせ", "Shop / Store"],
  ["古い", "ふるい", "Old"],
  ["時計", "とけい", "Clock / Watch"],

  ["壊れかける", "こわれかける", "To be about to break"],
  ["人形", "にんぎょう", "Doll"],
  ["不思議", "ふしぎ", "Mysterious / Strange"],
  ["所狭しと", "ところせましと", "Crowded / Cramped"],
  ["並ぶ", "ならぶ", "To line up / To be arranged"],
  ["薄暗い", "うすぐらい", "Dim / Gloomy"],
  
  ["空気", "くうき", "Air / Atmosphere"],
  ["漂う", "ただよう", "To drift / To waft"],
  ["奥", "おく", "Inner part / Back"],
  ["棚", "たな", "Shelf"],
  ["箱", "はこ", "Box"],

  ["目を止める", "めをとめる", "To notice / To fix one’s eyes on"],
  ["黒い", "くろい", "Black"],
  ["木", "き", "Wood"],
  ["蓋", "ふた", "Lid / Cover"],
  ["模様", "もよう", "Pattern / Design"],
  
  ["刻む", "きざむ", "To carve / To engrave"],
  ["離す", "はなす", "To let go / To take one’s eyes off"],
  ["店主", "てんしゅ", "Shopkeeper"],
  ["突然", "とつぜん", "Suddenly"],
  ["低い", "ひくい", "Low"],

  ["声", "こえ", "Voice"],
  ["痩せた", "やせた", "Thin / Skinny"],
  ["老人", "ろうじん", "Old man"],
  ["尋ねる", "たずねる", "To ask / To inquire"],

  ["笑う", "わらう", "To laugh / To smile"],
  ["願い", "ねがい", "Wish / Desire"],
  ["叶える", "かなえる", "To grant / To fulfill"],
  ["代わり", "かわり", "Substitute / In exchange"],
  ["奪う", "うばう", "To take away / To steal"],

  ["冗談", "じょうだん", "Joke"],
  ["机", "つくえ", "Desk"],
  ["眺める", "ながめる", "To gaze at / To watch"],
  ["眠る", "ねむる", "To sleep"],
  ["開ける", "あける", "To open"],

  ["飛び起きる", "とびおきる", "To jump up / To wake suddenly"],
  ["布団", "ふとん", "Futon / Bedding"],
  ["もぐり込む", "もぐりこむ", "To crawl into / To dive under"],
  ["耳元", "みみもと", "Close to the ear"],
  ["君", "きみ", "You"],

  ["夢", "ゆめ", "Dream"],
  ["手のひら", "てのひら", "Palm of the hand"],
  ["形", "かたち", "Shape / Form"],
  ["道", "みち", "Road / Path"],
  ["探す", "さがす", "To search / To look for"],
  ["見つからない", "みつからない", "Not found / Cannot be found"],
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          奇妙な買い物{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          放課後、私は学校の帰り道で小さな古道具屋を見つけました。今まで何度も通った道なのに、その店に気づいたことは一度もありませんでした。
          {"\n"}
          {"\n"}
          店の中に入ると、古い時計や壊れかけた人形など、不思議なものが所狭しと並んでいました。薄暗くて、どこか冷たい空気が漂っていました。
          {"\n"}
          {"\n"}
          私は奥の棚に置かれた小さな箱に目を止めました。黒い木でできていて、蓋には知らない模様が刻まれています。なぜか、その箱から目を離せませんでした。
          {"\n"}
          {"\n"}
          「それに興味があるのかい？」突然、店主の低い声が聞こえました。痩せた老人がカウンターからこちらを見ていました。
          {"\n"}
          {"\n"}
          「はい…でも、これは何ですか？」と私が尋ねると、老人はゆっくりと笑って言いました。{"\n"}「それは願いを一つだけ叶える箱さ。ただし、代わりに何かを奪うがね。」
          {"\n"}
          {"\n"}
          冗談だと思いながらも、私はなぜかその箱を買ってしまいました。家に帰ると、机の上に置き、じっと眺めました。
          {"\n"}
          {"\n"}
          夜、眠ろうとしたとき、どこからか「開けろ…」という声が聞こえました。私は飛び起きて机を見ました。箱は閉じたままなのに、声は確かにそこから聞こえていたのです。
          {"\n"}
          {"\n"}
          怖くなり、布団にもぐり込みました。しかし耳元でまた声がしました。「君の願いは何だ…？」
          {"\n"}
          {"\n"}
          次の朝、机の上にはもう箱がありませんでした。夢だったのかと思いましたが、手のひらには黒い模様が刻まれていました。まるで、あの箱の蓋と同じ形の模様でした。
          {"\n"}
          {"\n"}
          私はそれ以来、あの道を通ることができなくなりました。古道具屋を探しても、もうどこにも見つからなかったのです。
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

export default N3_Story9;