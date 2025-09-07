import { ScrollView, StyleSheet, Text, View } from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N2_Story3({}) {
  const tableData = [

  ["Japan", "Hiragana", "Translation"],
  
  ["貧しさ", "まずしさ", "Poverty"],
  ["越えて", "こえて", "To overcome, to cross"],
  ["子供", "こども", "Child"],
  ["頃", "ころ", "Time, around (when)"],
  ["家", "いえ", "House, home"],

  ["食事", "しょくじ", "Meal"],
  ["余裕", "よゆう", "Leeway, affordability"],
  ["古びた", "ふるびた", "Worn-out, old-fashioned"],
  ["靴", "くつ", "Shoes"],
  ["直す", "なおす", "To repair, to fix"],

  ["通う", "かよう", "To commute, to attend"],
  ["誘う", "さそう", "To invite"],
  ["断る", "ことわる", "To refuse, to decline"],
  ["手伝い", "てつだい", "Help, assistance"],
  ["孤独", "こどく", "Loneliness"],

  ["図書館", "としょかん", "Library"],
  ["借りる", "かりる", "To borrow"],
  ["知識", "ちしき", "Knowledge"],
  ["積み上げる", "つみあげる", "To accumulate"],
  ["努力", "どりょく", "Effort"],

  ["道", "みち", "Way, path"],
  ["開く", "ひらく", "To open, to unfold"],
  ["卒業", "そつぎょう", "Graduation"],
  ["工場", "こうじょう", "Factory"],
  ["専門学校", "せんもんがっこう", "Vocational school"],
  
  ["疲れ切る", "つかれきる", "To be completely exhausted"],
  ["鞭を打つ", "むちをうつ", "To drive oneself, to push oneself hard"],
  ["未来", "みらい", "Future"],
  ["就職", "しゅうしょく", "Employment"],
  ["雑用", "ざつよう", "Miscellaneous tasks, chores"],

  ["出勤", "しゅっきん", "Going to work"],
  ["残る", "のこる", "To remain, to stay"],
  ["学ぶ", "まなぶ", "To learn, to study"],
  ["姿勢", "しせい", "Attitude, posture"],
  ["上司", "じょうし", "Boss, superior"],

  ["営業", "えいぎょう", "Sales, business"],
  ["任される", "まかされる", "To be entrusted with"],
  ["失敗", "しっぱい", "Failure, mistake"],
  ["誠実さ", "せいじつさ", "Sincerity, honesty"],
  ["粘り強さ", "ねばりづよさ", "Perseverance, tenacity"],

  ["成果", "せいか", "Result, achievement"],
  ["顧客", "こきゃく", "Customer, client"],
  ["信頼", "しんらい", "Trust, reliance"],
  ["独立", "どくりつ", "Independence"],
  ["事務所", "じむしょ", "Office"],

  ["会社", "かいしゃ", "Company"],
  ["資金", "しきん", "Funds, capital"],
  ["人脈", "じんみゃく", "Personal connections, network"],
  ["信念", "しんねん", "Belief, conviction"],
  ["成長", "せいちょう", "Growth, development"],

  ["社員", "しゃいん", "Employee"],
  ["地域", "ちいき", "Region, community"],
  ["若者", "わかもの", "Young people"],
  ["支援", "しえん", "Support, assistance"],
  ["活動", "かつどう", "Activity"],

  ["講演", "こうえん", "Lecture, speech"],
  ["成功", "せいこう", "Success"],
  ["地位", "ちい", "Position, status"],
  ["夢", "ゆめ", "Dream"],
  ["過程", "かてい", "Process, course"],
  
  ["財産", "ざいさん", "Property, assets"],
  ["拍手", "はくしゅ", "Applause"],
  ["包まれる", "つつまれる", "To be wrapped, enveloped"],
  ["破れる", "やぶれる", "To be torn"],
  ["繋がる", "つながる", "To be connected, to lead to"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          貧しさを越えて{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          子供の頃、健太の家はとても貧しかった。毎日の食事も十分ではなく、新しい服を買う余裕などまったくなかった。彼はよく古びた靴を直しながら学校へ通っていた。
          {"\n"}
          {"\n"}
          友達が遊びに誘ってくれても、健太はいつも断った。遊ぶお金などなかったし、家の手伝いを優先せざるを得なかったからだ。その孤独な日々は、幼い彼にとって重くのしかかっていた。
          {"\n"}
          {"\n"}
          しかし健太は、本を読むことで心を慰めていた。図書館で借りられるだけの本を読み、知識を少しずつ積み上げていった。その中で「努力は必ず道を開く」という言葉に強く惹かれた。
          {"\n"}
          {"\n"}
          高校を卒業すると同時に、健太は昼間は工場で働き、夜は専門学校に通った。疲れ切った身体に鞭を打ちながらも、未来の自分を信じて勉強を続けた。
          {"\n"}
          {"\n"}
          数年後、彼はようやく小さな会社に就職した。最初は雑用ばかりだったが、誰よりも早く出勤し、最後まで残って学ぶ姿勢が上司に認められた。
          {"\n"}
          {"\n"}
          やがて彼は、営業の仕事を任されるようになった。最初は失敗ばかりだったが、誠実さと粘り強さで少しずつ成果を出し、顧客から信頼を得るようになった。
          {"\n"}
          {"\n"}
          三十歳を迎える頃、健太は独立を決意した。小さな事務所を借り、自分の会社を立ち上げた。資金も人脈も乏しかったが、「諦めない」という信念だけは誰にも負けなかった。
          {"\n"}
          {"\n"}
          十年後、彼の会社は大きく成長し、多くの社員を抱えるまでになった。あの頃の貧しい暮らしは遠い過去となり、今では地域の若者を支援する活動にも力を入れている。
          {"\n"}
          {"\n"}
          ある講演で健太はこう語った。「成功とは、お金や地位だけではありません。どんなに苦しくても夢を捨てず、努力を続けること。その過程こそが、本当の財産です。」
          {"\n"}
          {"\n"}
          会場は大きな拍手に包まれた。その音を聞きながら、健太は静かに昔の自分を思い出した。破れた靴を履いて歩いた道が、今の自分に繋がっているのだと心から感じていた。
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

export default N2_Story3;
