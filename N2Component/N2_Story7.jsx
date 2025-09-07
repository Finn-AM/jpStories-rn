import { ScrollView, StyleSheet, Text, View } from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N2_Story7({}) {
  const tableData = [

  ["Japan", "Hiragana", "Translation"],

  ["夜遅く", "よるおそく", "Late at night"],
  ["親友", "しんゆう", "Best friend"],
  ["送る", "おくる", "To send"],
  ["つもり", "つもり", "Intention, plan"],
  ["先生", "せんせい", "Teacher"],

  ["当てられる", "あてられる", "To be called on (by teacher)"],
  ["最悪", "さいあく", "The worst"],
  ["隣", "となり", "Next to, neighbor"],
  ["無罪", "むざい", "Innocence, not guilty"],
  ["送信", "そうしん", "Transmission, sending (a message)"],

  ["後悔する", "こうかいする", "To regret"],
  ["送り先", "おくりさき", "Recipient (of a message)"],
  ["本人", "ほんにん", "The person himself/herself"],
  ["画面", "がめん", "Screen"],
  ["見つめる", "みつめる", "To stare, to gaze at"],

  ["血の気が引く", "ちのけがひく", "To turn pale (from shock/fear)"],
  ["既読", "きどく", "Read receipt (in chat apps)"],
  ["数秒後", "すうびょうご", "A few seconds later"],
  ["返事", "へんじ", "Reply, response"],
  ["バレる", "ばれる", "To be found out, exposed"],

  ["完全に", "かんぜんに", "Completely"],
  ["怒られる", "おこられる", "To be scolded"],
  ["ありがとな", "ありがとな", "Thanks (casual, masculine)"],
  ["意外", "いがい", "Unexpected, surprising"],
  ["軽い調子", "かるいちょうし", "Light tone, casual manner"],

  ["拍子抜けする", "ひょうしぬけする", "To be let down, feel anticlimactic"],
  ["謝る", "あやまる", "To apologize"],
  ["タイミングを逃す", "たいみんぐをのがす", "To miss the timing/opportunity"],
  ["結局", "けっきょく", "In the end, after all"],
  ["宿題", "しゅくだい", "Homework"],

  ["昼休み", "ひるやすみ", "Lunch break"],
  ["くだらない", "くだらない", "Trivial, silly"],
  ["冗談", "じょうだん", "Joke"],
  ["気づく", "きづく", "To notice, to realize"],
  ["深夜", "しんや", "Late at night, midnight"],

  ["握る", "にぎる", "To hold, to grip"],
  ["次の日", "つぎのひ", "The next day"],
  ["教室", "きょうしつ", "Classroom"],
  ["目が合う", "めがあう", "To make eye contact"],
  ["わざとらしい", "わざとらしい", "Pretentious, unnatural, deliberate (acting)"],

  ["小声", "こごえ", "Whisper, low voice"],
  ["おかげ", "おかげ", "Thanks to (someone/something)"],
  ["にやりと笑う", "にやりとわらう", "To grin, to smirk"],
  ["普段", "ふだん", "Usually, ordinarily"],
  ["無口", "むくち", "Silent, reserved"],
  
  ["近寄りがたい", "ちかよりがたい", "Hard to approach"],
  ["表情", "ひょうじょう", "Facial expression"],
  ["瞬間", "しゅんかん", "Moment, instant"],
  ["間違い", "まちがい", "Mistake"],
  ["正しい", "ただしい", "Correct, right"],
  ["始まり", "はじまり", "Beginning, start"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          間違えたメッセージ{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          夜遅く、私は親友に送るつもりでこう打ち込んだ。
          「今日また先生に当てられて最悪。しかも隣の佐々木、ずっと寝てたくせに無罪とか何なの。」
          {"\n"}
          {"\n"}
          ……送信。 すぐに後悔した。送り先は──その本人、佐々木悠斗。
          {"\n"}
          {"\n"}
          画面を見つめながら血の気が引いた。既読がつく。 数秒後、返事が来た。
          「……バレてた？」
          {"\n"}
          {"\n"}
          さらに続けて、
          「でも君が助けてくれなかったら完全に怒られてた。ありがとな。」
          {"\n"}
          {"\n"}
          意外にも軽い調子で返ってきたメッセージに、私は拍子抜けした。謝るタイミングを逃し、結局そのまま会話が続いた。宿題のこと、昼休みに食べていたパンの話、くだらない冗談。気づけば深夜までスマホを握っていた。
          {"\n"}
          {"\n"}
          次の日、教室で彼と目が合った。彼はわざとらしく小声で言った。
          「先生の前で寝てたの、君のおかげでバレなかったんだよな。」
          そう言ってにやりと笑う。普段無口で近寄りがたいと思っていた彼が、こんな表情をするなんて。
          {"\n"}
          {"\n"}
          その瞬間、私は気づいた。
          “間違い”のはずが、もしかしたら一番正しい始まりだったのかもしれない。
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

export default N2_Story7;
