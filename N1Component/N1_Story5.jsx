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

function N1_Story5({}) {
  const tableData = [
 ["Japan", "Romaji", "Translation"],

  ["古道具屋", "ふるどうぐや", "secondhand shop / antique shop"],
  ["片隅", "かたすみ", "corner / nook"],
  ["帽子", "ぼうし", "hat"],
  ["つば", "つば", "brim (of a hat)"],
  ["値札", "ねふだ", "price tag"],

  ["冗談半分", "じょうだんはんぶん", "half-joking"],
  ["予想以上", "よそういじょう", "more than expected"],
  ["被る", "かぶる", "to put on (a hat)"],
  ["響く", "ひびく", "to echo / to resonate"],
  ["慌てる", "あわてる", "to panic / to be flustered"],

  ["投げ捨てる", "なげすてる", "to throw away / to fling aside"],
  ["契約", "けいやく", "contract"],
  ["成立する", "せいりつする", "to be established / to be concluded"],
  ["弟子", "でし", "disciple / apprentice"],
  ["惨状", "さんじょう", "terrible state / disastrous scene"],

  ["主張する", "しゅちょうする", "to insist / to assert"],
  ["押し込む", "おしこむ", "to stuff into / to cram"],
  ["呪縛", "じゅばく", "curse / spell that binds"],
  ["怪しむ", "あやしむ", "to suspect / to doubt"],
  ["趣味", "しゅみ", "hobby / taste"],

  ["呪文", "じゅもん", "magic spell / incantation"],
  ["唱える", "となえる", "to chant / to recite"],
  ["爆発", "ばくはつ", "explosion"],
  ["隣人", "りんじん", "neighbor"],
  ["苦情", "くじょう", "complaint / grievance"],

  ["清々しい", "すがすがしい", "refreshing / invigorating"],
  ["得意げ", "とくいげ", "proud / triumphant"],
  ["使い方", "つかいかた", "way of using / usage"],
  ["二重生活", "にじゅうせいかつ", "double life"],
  ["振り回される", "ふりまわされる", "to be swayed / to be at the mercy of"],
  
  ["退屈", "たいくつ", "boredom"],
  ["覚える", "おぼえる", "to feel / to come to have (an emotion)"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          魔法使いの帽子 {"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          古道具屋の片隅で、私は一つの大きな帽子を見つけた。つばが広く、先が曲がった黒い帽子。値札には「魔法使い用　本物保証」と書かれていた。冗談半分で購入したが、予想以上に高かった。
          {"\n"}
          {"\n"}
          家に持ち帰り、試しに被ってみると、頭の中に声が響いた。「やっと新しい主人か。百年ぶりだな！」私は慌てて帽子を投げ捨てたが、床の上で帽子が勝手に跳ね、再び私の頭に飛び乗った。
          {"\n"}
          {"\n"}
          「離れろ！」と叫ぶと、帽子はくすくす笑いながら言った。「契約は成立した。これからお前は私の弟子だ」私はただの会社員であり、魔法の弟子になる予定など一切なかった。
          {"\n"}
          {"\n"}
         その日から奇妙な生活が始まった。帽子は毎朝「炎よ、目玉焼きを作れ！」などと叫び、勝手に台所で火を起こす。その結果、卵は焦げ、トーストは炭になり、私の朝食はいつも惨状と化した。
          {"\n"}
          {"\n"}
         会社に出かけようとすると、帽子は「今日は休め！　修行だ！」と主張する。仕方なく鞄に押し込んで出社したが、会議中に勝手に飛び出し「上司の呪縛を解いてやる！」と叫んだ時には本気でクビを覚悟した。
          {"\n"}
          {"\n"}
          だが、不思議なことに周囲にはただの安っぽいコスプレ帽子にしか見えないらしく、誰も怪しまなかった。それどころか同僚たちに「趣味が意外と可愛いですね」と笑われた。
          {"\n"}
          {"\n"}
          夜になると、帽子は窓辺に座り込み「月光の下で呪文を唱えよ」と命じる。私は仕方なく小声で唱えるが、結果はたいてい花火のような爆発か、隣人の苦情で終わる。
          {"\n"}
          {"\n"}
          しかしある日、試しに「眠れない」と呟いたところ、帽子が静かに呪文を唱え、私は人生で一番深く眠った。翌朝、久々に清々しい気分で目を覚ました。
          {"\n"}
          {"\n"}
          「……もしかして役に立つのか？」と聞くと、帽子は得意げに答えた。「当然だ。ただし、使い方次第だ」
          {"\n"}
          {"\n"}
          以来、私は“魔法使いの弟子”と“ただの会社員”の二重生活を送っている。帽子に振り回されつつも、どこか退屈しない日々に、少しずつ楽しさを覚えているのだ。
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

export default N1_Story5;
