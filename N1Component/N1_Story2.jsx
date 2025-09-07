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

function N1_Story2({}) {
  const tableData = [
    ["Japan", "Romaji", "Translation"],

  ["遅すぎた", "おそすぎた", "too late"],
  ["帰宅", "きたく", "returning home"],
  ["終電", "しゅうでん", "last train"],
  ["逃す", "のがす", "to miss (a train, chance)"],
  ["仕方なく", "しかたなく", "unavoidably / reluctantly"],

  ["徒歩", "とほ", "walking / on foot"],
  ["帰路", "きろ", "the way home"],
  ["真夜中", "まよなか", "midnight"],
  ["静まり返る", "しずまりかえる", "to become completely silent"],
  ["街灯", "がいとう", "streetlight"],

  ["円形", "えんけい", "circular"],
  ["裏道", "うらみち", "back street / side road"],
  ["路地", "ろじ", "alley"],
  ["商店街", "しょうてんがい", "shopping street"],
  ["閉ざす", "とざす", "to shut / to close"],
  
  ["シャッター", "しゃったー", "shutter"],
  ["張り紙", "はりがみ", "posted paper / notice"],
  ["日付", "ひづけ", "date"],
  ["数十年", "すうじゅうねん", "several decades"],
  ["足音", "あしおと", "footsteps"],

  ["響く", "ひびく", "to echo / to resound"],
  ["気配", "けはい", "sign / presence / indication"],
  ["振り返る", "ふりかえる", "to look back / to turn around"],
  ["闇", "やみ", "darkness"],
  ["角", "かど", "corner"],

  ["違和感", "いわかん", "sense of discomfort / something feels wrong"],
  ["剥がれる", "はがれる", "to peel off"],
  ["窓枠", "まどわく", "window frame"],
  ["錆び付く", "さびつく", "to become rusty"],
  ["荒廃", "こうはい", "ruin / devastation"],

  ["心臓", "しんぞう", "heart"],
  ["早鐘", "はやがね", "fast ringing of a bell"],
  ["恐る恐る", "おそるおそる", "fearfully / timidly"],
  ["玄関", "げんかん", "entrance / front door"],
  ["郵便受け", "ゆうびんうけ", "mailbox"],

  ["新聞", "しんぶん", "newspaper"],
  ["昭和六十三年", "しょうわろくじゅうさんねん", "Showa 63 (1988)"],
  ["鍵", "かぎ", "key"],
  ["差し込む", "さしこむ", "to insert"],
  ["滑らかに", "なめらかに", "smoothly"],

  ["扉", "とびら", "door"],
  ["音もなく", "おともなく", "silently / without a sound"],
  ["埃", "ほこり", "dust"],
  ["家具", "かぐ", "furniture"],
  ["原型", "げんけい", "original form"],

  ["朽ちる", "くちる", "to decay / to rot"],
  ["壁", "かべ", "wall"],
  ["黄ばむ", "きばむ", "to turn yellow"],
  ["家族写真", "かぞくしゃしん", "family photo"],
  ["写る", "うつる", "to be photographed / to appear in a photo"],

  ["幼い", "おさない", "childish / very young"],
  ["背後", "はいご", "behind / rear"],
  ["囁く", "ささやく", "to whisper"],
  ["叫び声", "さけびごえ", "scream / shout"],
  ["階段", "かいだん", "stairs"],

  ["駆け上がる", "かけあがる", "to run up (stairs)"],
  ["廊下", "ろうか", "corridor / hallway"],
  ["終わりがない", "おわりがない", "endless / never-ending"],
  ["並ぶ", "ならぶ", "to line up / to be arranged"],
  ["迷宮", "めいきゅう", "labyrinth / maze"],

  ["彷徨う", "さまよう", "to wander / to stray"],
  ["以来", "いらい", "since (then)"],
  ["言葉", "ことば", "word / phrase"],
  ["胸", "むね", "chest / heart"],
  ["締めつける", "しめつける", "to tighten / to squeeze"],
  
  ["確信", "かくしん", "conviction / certainty"],
  ["持てない", "もてない", "cannot have / cannot hold"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          遅すぎた帰宅 {"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          終電を逃した私は、仕方なく徒歩で帰路についた。真夜中の街は異様なほど静まり返り、街灯の下だけが小さな円形の世界を照らしていた。
          {"\n"}
          {"\n"}
          裏道を抜けると、見慣れぬ路地に迷い込んでいた。昼間なら人通りの多いはずの商店街が、今はどの店も閉ざされ、シャッターには古びた張り紙が貼られている。だが奇妙なことに、その張り紙の日付は数十年前のものだった。
          {"\n"}
          {"\n"}
          足音がやけに響く。誰もいないはずなのに、背後で同じリズムの足音がついてくる気配がある。振り返っても、そこには闇が広がるばかりだった。
          {"\n"}
          {"\n"}
          やがて、角を曲がった先に自分のアパートが見えた。だが違和感があった。建物は確かに同じだが、壁の色が剥がれ落ち、窓枠は錆び付き、まるで数十年放置されたような荒廃した姿をしていた。
          {"\n"}
          {"\n"}
          心臓が早鐘のように打ち始める。恐る恐る玄関に近づくと、郵便受けには大量の新聞が詰め込まれていた。その最上部の日付を確認すると――「昭和六十三年」。
          {"\n"}
          {"\n"}
          「そんなはずはない」私は声に出した。けれど鍵を差し込むと、驚くほど滑らかに回り、扉は音もなく開いた。
          {"\n"}
          {"\n"}
          中は埃にまみれ、家具は原型をとどめないほど朽ちていた。壁には黄ばんだ家族写真が飾られていたが、その中には確かに“私”が写っていた。だが、写真の私は幼い子供の姿をしていた。
          {"\n"}
          {"\n"}
          背後で、ふいに扉が閉まる音がした。振り向くと、闇の中から低い声が囁いた。「……やっと帰ってきたな」
          {"\n"}
          {"\n"}
          私は叫び声をあげ、階段を駆け上がった。しかし二階の廊下は終わりがなく、扉がいくつも並び、どれも同じように古びていた。足音が次第に近づいてくる。
          {"\n"}
          {"\n"}
          どの扉を開けても、同じ玄関に戻ってしまう。まるで出口のない迷宮の中を彷徨っているかのようだった。
                    {"\n"}
          {"\n"}
          ――あの夜以来、私は“帰宅”という言葉を聞くたび、胸が締めつけられる。果たして本当に家へ戻れたのか、それとも今もあの廊下を歩き続けているのか、確信は持てない。
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

export default N1_Story2;
