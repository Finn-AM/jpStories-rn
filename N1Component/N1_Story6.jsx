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

function N1_Story6({}) {
  const tableData = [
 ["Japan", "Romaji", "Translation"],

  ["試練", "しれん", "ordeal / trial"],
  ["期末試験", "きまつしけん", "final exam"],
  ["参考書", "さんこうしょ", "reference book / study guide"],
  ["記号", "きごう", "symbol / notation"],
  ["眠気", "ねむけ", "sleepiness / drowsiness"],

  ["突っ伏す", "つっぷす", "to collapse forward (on a desk, etc.)"],
  ["張りつめる", "はりつめる", "to tense up / to strain"],
  ["問題用紙", "もんだいようし", "exam paper"],
  ["叫ぶ", "さけぶ", "to shout / to yell"],
  ["二次関数", "にじかんすう", "quadratic function"],

  ["最大値", "さいだいち", "maximum value"],
  ["思い浮かべる", "おもいうかべる", "to recall / to imagine"],
  ["湯気", "ゆげ", "steam / vapor"],
  ["鉛筆", "えんぴつ", "pencil"],
  ["走る音", "はしるおと", "sound of running (here: pencil moving quickly)"],

  ["子守唄", "こもりうた", "lullaby"],
  ["白紙", "はくし", "blank paper"],
  ["にらみつける", "にらみつける", "to glare at"],
  ["潔く", "いさぎよく", "gracefully / bravely / without regret"],
  ["作戦", "さくせん", "strategy / tactic"],

  ["答え欄", "こたえらん", "answer column (on a test)"],
  ["努力は裏切らない", "どりょくはうらぎらない", "Effort never betrays you (saying)"],
  ["答え合わせ", "こたえあわせ", "checking answers"],
  ["盛り上がる", "もりあがる", "to get excited / to liven up"],
  ["胸を張る", "むねをはる", "to puff out one’s chest / to be proud"],

  ["答案用紙", "とうあんようし", "exam answer sheet"],
  ["赤字", "あかじ", "red mark / correction (also 'deficit')"],
  ["呆然とする", "ぼうぜんとする", "to be stunned / dumbfounded"],
  ["救われる", "すくわれる", "to be saved / to be rescued"],
  ["生存報告", "せいぞんほうこく", "report of being alive"],
  
  ["失敗", "しっぱい", "failure / mistake"],
  ["人生", "じんせい", "life (human life)"],
  ["笑いを取る", "わらいをとる", "to get laughs / to make people laugh"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          数学試験の失敗 {"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          高校三年の夏、私は人生最大の試練に直面していた。それは恋でも就職でもなく――数学の期末試験である。
          {"\n"}
          {"\n"}
          前日になってようやく参考書を開いたが、公式が頭に入るどころか、記号を見ただけで眠気が襲ってきた。気がつけば机に突っ伏して朝を迎えていた。
          {"\n"}
          {"\n"}
          試験本番、教室の空気は張りつめていた。問題用紙を配られた瞬間、私は心の中で叫んだ。「……知らない問題しかない！」。
          {"\n"}
          {"\n"}
         一問目は「二次関数の最大値を求めよ」。私は二次関数のグラフを思い浮かべようとしたが、脳内に現れたのはカーブを描くラーメンの湯気だった。
          {"\n"}
          {"\n"}
         隣の席からは鉛筆が走る音が聞こえる。友人の手は止まることなく動き続け、私はその音を子守唄のように聞きながら白紙をにらみつけていた。
          {"\n"}
          {"\n"}
          五分後、私は潔く作戦を切り替えた。すべての問題の答え欄に「努力は裏切らない」と書いてみたのだ。少なくとも先生の笑いは取れるはずだと信じて。
          {"\n"}
          {"\n"}
          試験終了後、廊下で友人たちが答え合わせをしていた。「答えは√3だよな」「いや2だろ」と盛り上がる中、私は一人だけ「俺の答えは“根性”だった」と胸を張った。
          {"\n"}
          {"\n"}
          結果発表の日、答案用紙には大きな赤字で「0点」そしてその横に小さく「ただしユーモア点＋1」と書かれていた。
          {"\n"}
          {"\n"}
          私は呆然としつつも、どこか救われた気分になった。数学は相変わらず苦手だが、少なくとも先生には私の“生存報告”が伝わったのだ。
          {"\n"}
          {"\n"}
          そして今でも、私は胸を張って言える――「数学では失敗したが、人生では笑いを取れた」と。
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

export default N1_Story6;
