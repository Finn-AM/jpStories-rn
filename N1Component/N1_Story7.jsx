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

function N1_Story7({}) {
  const tableData = [
 ["Japan", "Romaji", "Translation"],

  ["新任教師", "しんにんきょうし", "newly appointed teacher"],
  ["四月", "しがつ", "April"],
  ["担任", "たんにん", "homeroom teacher"],
  ["背筋", "せすじ", "spine / posture"],
  ["ぴんと伸ばす", "ぴんとのばす", "to straighten firmly"],

  ["無表情", "むひょうじょう", "expressionless"],
  ["見渡す", "みわたす", "to look over / survey"],
  ["軍隊", "ぐんたい", "army / military"],
  ["指揮官", "しきかん", "commander"],
  ["私語", "しご", "private talking / whispering"],

  ["禁止", "きんし", "prohibition"],
  ["遅刻", "ちこく", "tardiness / being late"],
  ["凍りつく", "こおりつく", "to freeze (figuratively, with fear)"],
  ["規律", "きりつ", "discipline"],
  ["徹底する", "てっていする", "to enforce thoroughly"],

  ["姿勢", "しせい", "posture"],
  ["即座に", "そくざに", "immediately / on the spot"],
  ["注意する", "ちゅういする", "to caution / warn"],
  ["落書き", "らくがき", "scribble / doodle"],
  ["没収", "ぼっしゅう", "confiscation"],

  ["取り上げる", "とりあげる", "to take away / confiscate"],
  ["妙な", "みょうな", "strange / odd"],
  ["緊張感", "きんちょうかん", "sense of tension"],
  ["漂う", "ただよう", "to drift / waft"],
  ["小声", "こごえ", "low voice / whisper"],

  ["意外な一面", "いがいないちめん", "unexpected side"],
  ["給食", "きゅうしょく", "school lunch"],
  ["牛乳パック", "ぎゅうにゅうぱっく", "milk carton"],
  ["盛大に", "せいだいに", "grandly / spectacularly"],
  ["こぼす", "こぼす", "to spill"],

  ["静まり返る", "しずまりかえる", "to fall completely silent"],
  ["訓練", "くんれん", "training / drill"],
  ["失敗", "しっぱい", "failure / mistake"],
  ["学ぶ", "まなぶ", "to learn"],
  ["逆さ", "さかさ", "upside down"],

  ["チョーク", "ちょーく", "chalk"],
  ["迫力", "はくりょく", "impressiveness / force"],
  ["抜けている", "ぬけている", "to be absent-minded / clumsy"],
  ["噂", "うわさ", "rumor"],
  ["一喝する", "いっかつする", "to scold sharply / give a loud rebuke"],
  
  ["勇気ある", "ゆうきある", "courageous"],
  ["ドジ", "どじ", "blunder / clumsy mistake"],
  ["ふっと笑う", "ふっとわらう", "to smile faintly / suddenly"],
  ["叱る", "しかる", "to scold"],
  ["信頼できる", "しんらいできる", "trustworthy"],
  
  ["学期", "がっき", "school term / semester"],
  ["黒板", "こくばん", "blackboard"],
  ["努力", "どりょく", "effort"],
  ["勝る", "まさる", "to excel / surpass"],
  ["魔法", "まほう", "magic"],
  ["忘れられない", "わすれられない", "unforgettable"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          怖い新任教師{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          四月、新しい担任教師が教室に入ってきた。名前は黒田先生。背筋をぴんと伸ばし、無表情で生徒を見渡す姿は、まるで軍隊の指揮官のようだった。
          {"\n"}
          {"\n"}
          「これから一年間、私がこのクラスを担当する。まず、私語は禁止。遅刻も許さない」――その低い声だけで、クラス全体が一瞬にして凍りついた。
          {"\n"}
          {"\n"}
          最初の授業から規律は徹底していた。姿勢が悪いと即座に注意され、教科書に落書きをしていた男子は「没収だ！」と取り上げられた。休み時間さえも妙な緊張感が漂い、皆は小声でしか話せなくなった。
          {"\n"}
          {"\n"}
         しかし、そんな先生にも意外な一面があった。給食の時間、牛乳パックを開けようとして失敗し、中身を盛大にこぼしてしまったのだ。その瞬間、教室はシーンと静まり返ったが、先生が「……これは訓練だ。失敗から学べ」と真顔で言ったため、全員こらえきれずに笑ってしまった。
          {"\n"}
          {"\n"}
         その後も、先生は時々おかしな失敗を見せた。プリントを逆さに配ったり、チョークを持ったままポケットに入れてスーツを真っ白にしたり。それでも注意するときの迫力は相変わらずで、生徒たちは「怖いけど、どこか抜けてる」と噂し始めた。
          {"\n"}
          {"\n"}
          ある日、クラスで騒ぎすぎて先生に一喝されたとき、勇気ある一人が「先生だってドジしますよね！」と叫んだ。教室は一瞬シーンとなったが、先生はふっと笑い「確かに」とだけ言った。その笑顔を見たのは全員初めてだった。
          {"\n"}
          {"\n"}
          それ以来、先生の厳しさは変わらないが、クラスの空気は少し柔らかくなった。叱られる時は怖いけれど、どこか信頼できる――そんな存在になっていった。
          {"\n"}
          {"\n"}
          学期の終わり、先生は黒板に「努力に勝る魔法なし」と書き残した。誰も口には出さなかったが、その言葉はクラス全員の心に深く残った。
          {"\n"}
          {"\n"}
          ――“怖い新任教師”は、気づけば私たちにとって一番忘れられない先生になっていた。
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

export default N1_Story7;
