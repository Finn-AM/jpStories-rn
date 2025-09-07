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

function N1_Story10({}) {
  const tableData = [
 ["Japan", "Romaji", "Translation"],

  ["大学", "だいがく", "university"],
  ["入学する", "にゅうがくする", "to enroll (in school/university)"],
  ["生活費", "せいかつひ", "living expenses"],
  ["稼ぐ", "かせぐ", "to earn"],
  ["近所", "きんじょ", "neighborhood"],

  ["レストラン", "れすとらん", "restaurant"],
  ["アルバイト", "あるばいと", "part-time job"],
  ["洋食", "ようしょく", "Western food"],
  ["和食", "わしょく", "Japanese food"],
  ["不思議", "ふしぎ", "strange / mysterious"],

  ["昼", "ひる", "daytime / noon"],
  ["サラリーマン", "さらりーまん", "salaryman / office worker"],
  ["夜", "よる", "night"],
  ["家族連れ", "かぞくづれ", "families (with children)"],
  ["賑わう", "にぎわう", "to be crowded / lively"],

  ["初日", "しょにち", "first day"],
  ["緊張", "きんちょう", "nervousness"],
  ["震える", "ふるえる", "to tremble / shake"],
  ["精一杯", "せいいっぱい", "with all one's effort"],
  ["案の定", "あんのじょう", "as expected"],

  ["グラス", "ぐらす", "glass"],
  ["ひっくり返す", "ひっくりかえす", "to overturn / knock over"],
  ["床", "ゆか", "floor"],
  ["びしょ濡れ", "びしょぬれ", "soaking wet"],
  ["店長", "てんちょう", "store manager"],

  ["皮肉", "ひにく", "sarcasm / irony"],
  ["合格", "ごうかく", "passing / success"],
  ["忙しい", "いそがしい", "busy"],
  ["時間帯", "じかんたい", "time slot / period of time"],
  ["注文", "ちゅうもん", "order"],

  ["聞き間違える", "ききまちがえる", "to mishear"],
  ["料理", "りょうり", "dish / cuisine"],
  ["逆", "ぎゃく", "reverse / opposite"],
  ["強面", "こわもて", "stern-faced / tough-looking"],
  ["場", "ば", "situation / scene"],

  ["凍りつく", "こおりつく", "to freeze (figuratively / atmosphere)"],
  ["意外", "いがい", "unexpected"],
  ["旗", "はた", "flag"],
  ["懐かしい", "なつかしい", "nostalgic"],
  ["厨房", "ちゅうぼう", "kitchen"],

  ["ベテラン", "べてらん", "veteran"],
  ["料理人", "りょうりにん", "cook / chef"],
  ["厳しい", "きびしい", "strict"],
  ["優しい", "やさしい", "kind"],
  ["指導する", "しどうする", "to instruct / guide"],
  ["皿", "さら", "plate"],

  ["重ねる", "かさねる", "to pile up / stack"],
  ["運ぶ", "はこぶ", "to carry / transport"],
  ["コツ", "こつ", "knack / trick"],
  ["注ぐ", "そそぐ", "to pour"],
  ["角度", "かくど", "angle"],

  ["技術", "ぎじゅつ", "skill / technique"],
  ["身につく", "みにつく", "to acquire (knowledge/skill)"],
  ["満席", "まんせき", "full house / no vacancy"],
  ["大混乱", "だいこんらん", "great confusion / chaos"],
  ["半泣き", "はんなき", "half-crying"],

  ["走り回る", "はしりまわる", "to run around"],
  ["常連", "じょうれん", "regular customer"],
  ["声をかける", "こえをかける", "to speak to / call out"],
  ["疲れ", "つかれ", "fatigue"],
  ["軽くなる", "かるくなる", "to become lighter / eased"],

  ["失敗", "しっぱい", "failure / mistake"],
  ["笑い話", "わらいばなし", "funny story / anecdote"],
  ["カレー", "かれー", "curry"],
  ["途中", "とちゅう", "on the way / in the middle"],
  ["くしゃみ", "くしゃみ", "sneeze"],

  ["鼻", "はな", "nose"],
  ["ルー", "るー", "roux / curry sauce"],
  ["飛ばす", "とばす", "to splash / send flying"],
  ["誤って", "あやまって", "by mistake / accidentally"],
  ["フォーク", "ふぉーく", "fork"],

  ["ポケット", "ぽけっと", "pocket"],
  ["帰宅する", "きたくする", "to return home"],
  ["からかう", "からかう", "to tease / make fun of"],
  ["始末", "しまつ", "end result / outcome (often negative nuance)"],
  ["三か月", "さんかげつ", "three months"],

  ["過ぎる", "すぎる", "to pass / elapse"],
  ["覚える", "おぼえる", "to remember / recognize"],
  ["運んでくれる", "はこんでくれる", "to bring (to me/us)"],
  ["価値", "かち", "value"],
  
  ["給料", "きゅうりょう", "salary / wages"],
  ["社会", "しゃかい", "society"],
  ["一員", "いちいん", "member"],
  ["成長する", "せいちょうする", "to grow / mature"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          レストランでの仕事 {"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          大学に入学してすぐ、私は生活費を稼ぐために近所のレストランでアルバイトを始めた。店は洋食と和食の両方を出す少し不思議な店で、昼はサラリーマン、夜は家族連れで賑わっていた。
          {"\n"}
          {"\n"}
          初日は緊張で手が震え、水を運ぶだけで精一杯だった。案の定、グラスをひっくり返して床をびしょ濡れにし、店長に「笑顔だけは合格だな」と皮肉を言われた。
          {"\n"}
          {"\n"}
          忙しい時間帯になると、注文を聞き間違えたり、料理を逆のテーブルに運んでしまったりする。ある日、子供用のお子様ランチを間違えて強面のサラリーマンに出してしまい、場が一瞬凍りついた。しかし彼は意外にも嬉しそうに「旗が付いてるのか。懐かしいな」と笑った。
          {"\n"}
          {"\n"}
         厨房ではベテランの料理人が厳しくも優しく指導してくれた。皿を重ねて運ぶコツ、スープをこぼさずに注ぐ角度――小さな技術が少しずつ身についていくのを感じた。
          {"\n"}
          {"\n"}
         ある夜、店が満席で大混乱になった。私は半泣きで走り回ったが、常連のおばあさんが「あなた、頑張ってるね」と声をかけてくれた。その一言で不思議と疲れが軽くなった。
          {"\n"}
          {"\n"}
          失敗も多かったが、その分笑い話も増えていった。カレーを運んでいる途中にくしゃみをして鼻にルーを飛ばしたり、誤ってフォークをポケットに入れたまま帰宅したり。家族に「レストランより面白い」とからかわれる始末だった。
          {"\n"}
          {"\n"}
          三か月が過ぎた頃には、常連客が顔を覚えてくれ、「今日は君が運んでくれるのか、ラッキーだ」と言ってくれるようになった。あの時の喜びは、給料以上の価値があった。
          {"\n"}
          {"\n"}
          ――レストランの仕事は決して楽ではない。だが、失敗も汗も笑いに変わる場所で、私は社会の一員として少しだけ成長できた気がした。
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

export default N1_Story10;
