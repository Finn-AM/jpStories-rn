import { ScrollView, StyleSheet, Text, View } from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N4_Story9({}) {

  const tableData = [

  ["Japan", "Hiragana", "Translation"],    

  ["春", "はる", "Spring"],
  ["終わり", "おわり", "End"],
  ["学校", "がっこう", "School"],
  ["スポーツ大会", "すぽーつたいかい", "Sports festival / Sports meet"],
  ["毎年", "まいとし", "Every year"],

  ["市内", "しない", "Within the city"],
  ["集まって", "あつまって", "Gathered"],
  ["大きな", "おおきな", "Big / Large"],
  ["試合", "しあい", "Match / Game"],
  ["競争", "きょうそう", "Competition / Race"],

  ["出る", "でる", "To participate / To enter"],
  ["朝", "あさ", "Morning"],
  ["練習", "れんしゅう", "Practice"],
  ["向こう", "むこう", "Over there / Opposite side"],
  ["見知らぬ", "みしらぬ", "Unfamiliar / Unknown"],

  ["女の子", "おんなのこ", "Girl"],
  ["黒い", "くろい", "Black"],
  ["髪", "かみ", "Hair"],
  ["ポニーテール", "ぽにーてーる", "Ponytail"],
  ["笑顔", "えがお", "Smiling face"],
  ["きれい", "きれい", "Beautiful / Pretty"],

  ["隣町", "となりまち", "Neighboring town"],
  ["中学校", "ちゅうがっこう", "Junior high school"],
  ["生徒", "せいと", "Student"],
  ["百メートル走", "ひゃくめーとるそう", "100-meter run"],
  ["スタートライン", "すたーとらいん", "Starting line"],

  ["立つ", "たつ", "To stand"],
  ["真剣な", "しんけんな", "Serious / Earnest"],
  ["笛", "ふえ", "Whistle"],
  ["音", "おと", "Sound"],
  ["同時に", "どうじに", "At the same time"],
  
  ["一気に", "いっきに", "All at once / In one go"],
  ["走り出す", "はしりだす", "To start running"],
  ["風", "かぜ", "Wind"],
  ["速い", "はやい", "Fast"],
  ["あっという間に", "あっというまに", "In an instant"],
  
  ["ゴール", "ごーる", "Goal / Finish line"],
  ["勇気", "ゆうき", "Courage"],
  ["声をかける", "こえをかける", "To speak to / To call out"],
  ["速かった", "はやかった", "Was fast"],
  ["少し", "すこし", "A little"],
  ["はにかむ", "はにかむ", "To be shy / To blush slightly"],

  ["ありがとう", "ありがとう", "Thank you"],
  ["がんばってね", "がんばってね", "Do your best / Good luck"],
  ["午後", "ごご", "Afternoon"],
  ["全力で", "ぜんりょくで", "With full effort"],
  ["走る", "はしる", "To run"],
  
  ["観客席", "かんきゃくせき", "Spectator seats / Stands"],
  ["向かって", "むかって", "Toward / Facing"],
  ["手を振る", "てをふる", "To wave (one’s hand)"],
  ["胸", "むね", "Chest / Heart (emotion)"],
  ["熱くなる", "あつくなる", "To become warm / To feel emotional"],

  ["仲間", "なかま", "Companions / Friends"],
  ["バス", "ばす", "Bus"],
  ["乗る", "のる", "To ride / To get on"],
  ["帰る", "かえる", "To return / To go back"],
  ["名前", "なまえ", "Name"],
  ["聞く", "きく", "To ask / To hear"],
  ["心に残る", "こころにのこる", "To remain in the heart / To be memorable"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          学校大会の少女{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          春の終わり、わたしの学校でスポーツ大会がありました。毎年、市内のいくつかの学校があつまって、大きな試合や競争をします。
          {"\n"}
          {"\n"}
          わたしはリレーに出るため、朝からグラウンドで練習していました。その時、向こうのチームに見知らぬ女の子がいるのに気づきました。黒い髪をポニーテールにして、笑顔がとてもきれいでした。
          {"\n"}
          {"\n"}
          彼女はとなり町の中学校の生徒で、百メートル走に出るそうです。スタートラインに立った彼女は真剣な顔になり、笛の音と同時に一気に走り出しました。風のように速くて、あっという間にゴールしました。
          {"\n"}
          試合が終わったあと、わたしは勇気を出して声をかけました。「すごく速かったですね。」すると、彼女は少しはにかんで、「ありがとう。リレーもがんばってね。」と言ってくれました。
          {"\n"}
          {"\n"}
          午後のリレーで、わたしは全力で走りました。ゴールしたあと、観客席を見ると、彼女がこちらに向かって手をふっていました。その笑顔を見て、胸が少し熱くなりました。
          {"\n"}
          {"\n"}
          大会が終わり、彼女は自分の学校の仲間とバスに乗って帰っていきました。名前も聞けなかったけれど、その日のことは、今でも心に残っています。
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

export default N4_Story9;
