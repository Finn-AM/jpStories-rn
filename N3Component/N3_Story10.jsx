import { ScrollView, StyleSheet, Text, View } from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N3_Story10({}) {
  
  const tableData = [

  ["Japan", "Hiragana", "Translation"],

  ["親友", "しんゆう", "Best friend / Close friend"],
  ["高校二年", "こうこうにねん", "Second year of high school (11th grade)"],
  ["春", "はる", "Spring"],
  ["同じ", "おなじ", "Same"],
  ["クラス", "くらす", "Class"],

  ["小学校", "しょうがっこう", "Elementary school"],
  ["頃", "ころ", "Time / Period"],
  ["一緒に", "いっしょに", "Together"],
  ["何でも", "なんでも", "Anything / Everything"],
  ["知る", "しる", "To know"],

  ["休み時間", "やすみじかん", "Break time / Recess"],
  ["机", "つくえ", "Desk"],
  ["笑顔", "えがお", "Smile (face)"],
  ["誘う", "さそう", "To invite"],
  ["胸", "むね", "Chest / Heart"],

  ["熱くなる", "あつくなる", "To become hot / To feel warm (emotionally)"],
  ["気づく", "きづく", "To notice / To realize"],
  ["最初", "さいしょ", "At first"],
  ["特別", "とくべつ", "Special"],
  ["感じる", "かんじる", "To feel"],

  ["男子", "だんし", "Boy / Male student"],
  ["楽しそう", "たのしそう", "Seem happy / Look fun"],
  ["話す", "はなす", "To talk"],
  ["心", "こころ", "Heart / Mind"],
  ["ざわつく", "ざわつく", "To be restless / To feel unsettled"],

  ["ある日", "あるひ", "One day"],
  ["放課後", "ほうかご", "After school"],
  ["急に", "きゅうに", "Suddenly"],
  ["空を見上げる", "そらをみあげる", "To look up at the sky"],
  ["将来", "しょうらい", "Future"],

  ["ずっと", "ずっと", "Always / Continuously"],
  ["一緒にいる", "いっしょにいる", "To be together"],
  ["言葉", "ことば", "Word / Words"],
  ["返事", "へんじ", "Reply / Response"],
  ["うなずく", "うなずく", "To nod"],

  ["家に帰る", "いえにかえる", "To return home"],
  ["頭の中", "あたまのなか", "Inside one’s head / Mind"],
  ["響く", "ひびく", "To echo / To resound"],
  ["願い", "ねがい", "Wish / Desire"],
  ["伝える", "つたえる", "To convey / To tell"],

  ["関係", "かんけい", "Relationship"],
  ["壊れる", "こわれる", "To break / To be ruined"],
  ["体育", "たいいく", "Physical education (PE)"],
  ["授業", "じゅぎょう", "Lesson / Class"],
  ["走る", "はしる", "To run"],

  ["姿", "すがた", "Figure / Appearance"],
  ["心臓", "しんぞう", "Heart (organ)"],
  ["強く", "つよく", "Strongly"],
  ["鳴る", "なる", "To sound / To ring / To beat"],
  ["はっきり", "はっきり", "Clearly / Plainly"],

  ["理解する", "りかいする", "To understand / To realize"],
  ["気持ち", "きもち", "Feeling / Emotion"],
  ["隠す", "かくす", "To hide"],
  ["正直に", "しょうじきに", "Honestly / Frankly"],
  ["伝える日", "つたえるひ", "The day to confess / to tell"],
  
  ["過ごす", "すごす", "To spend (time)"],
  ["大切にする", "たいせつにする", "To cherish / To treasure"],
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          親友を好きになる{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          高校二年の春、私は親友の美咲と同じクラスになった。小学校の頃からずっと一緒にいるので、彼女のことは何でも知っていると思っていた。
          {"\n"}
          {"\n"}
          休み時間になると、美咲は私の机にやってきて、「ねえ、一緒に購買に行こうよ」と笑顔で誘ってくれる。その笑顔を見るたびに、胸が少し熱くなる自分に気づいていた。
          {"\n"}
          {"\n"}
          最初は「きっと親友だから特別に感じるだけだ」と思っていた。でも、彼女が他の男子と楽しそうに話しているのを見ると、どうしようもなく心がざわついた。
          {"\n"}
          {"\n"}
          ある日、放課後に二人で帰っていると、美咲が急に空を見上げて言った。
「ねえ、将来もさ、ずっと一緒にいられたらいいよね。」
{"\n"}
その言葉を聞いた瞬間、私は返事ができず、ただうなずくだけだった。
          {"\n"}
          {"\n"}
          家に帰ってからも、その言葉が頭の中で何度も響いた。「ずっと一緒にいたい」――それは私の願いでもあった。でも、友達以上の気持ちを伝えてしまったら、関係が壊れるかもしれない。
          {"\n"}
          {"\n"}
          次の日、体育の授業で彼女が笑いながら走っている姿を見て、心臓が強く鳴った。そのとき、私ははっきりと理解した。「私は美咲のことが好きなんだ」と。
          {"\n"}
          {"\n"}
          その気持ちを隠しながら、私は今も彼女の隣にいる。いつか正直に伝える日が来るのだろうか。
          {"\n"}
          {"\n"}
          けれども、今はただ、彼女と過ごす時間を大切にしたいと思っている。
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

export default N3_Story10;