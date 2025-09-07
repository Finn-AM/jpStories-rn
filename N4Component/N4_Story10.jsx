import { ScrollView, StyleSheet, Text, View } from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N4_Story10({}) {

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
          終わりのない図書館{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          雨の日、わたしは学校の帰りに、小さな古い図書館を見つけました。木のドアを開けると、ベルの音がやさしく鳴りました。中は静かで、本のにおいがしました。
          {"\n"}
          {"\n"}
          中に入ると、本棚がずらりと並んでいて、奥が見えませんでした。わたしはゆっくり歩きながら、本の背表紙をながめました。すると、一冊の青い本が目に入りました。
          {"\n"}
          {"\n"}
          その本を手に取ってページを開くと、文字ではなく、美しい絵が広がっていました。森や海、知らない町の景色が続き、ページをめくるたびに、どこかへ吸い込まれるような感覚になりました。
          {"\n"}
          気がつくと、わたしはまた別の本棚の前に立っていました。でも、そこはさっきの場所と少しちがっていて、見たことのない本ばかりが並んでいました。
          {"\n"}
          {"\n"}
          出口を探そうと歩き出しましたが、何度曲がっても本棚が続くだけで、入り口に戻れません。心臓が少し早くなりました。
          {"\n"}
          {"\n"}
          その時、白い服を着た司書の女性が現れました。「迷いましたか？」とやさしく聞きました。わたしがうなずくと、彼女は小さなランプを手渡し、「この光をたどれば帰れますよ。」と言いました。
           {"\n"}
          {"\n"}
          ランプを持って歩くと、不思議なことに本棚が少しずつ開き、やがてあの木のドアが見えました。外に出ると、雨は止み、空には夕日が広がっていました。
              {"\n"}
          {"\n"}
          振り返ると、そこにはもう図書館はなく、ただの古い石の壁があるだけでした。あの本も、司書も、本当に存在したのかはわかりません。でも、あの静かな時間は、今でも忘れられません。       
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

export default N4_Story10;
