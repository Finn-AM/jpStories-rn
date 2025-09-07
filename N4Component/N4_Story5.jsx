import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N4_Story5({}) {
  const tableData = [

  ["Japan", "Hiragana", "Translation"],

  ["名前", "なまえ", "Name"],
  ["手紙", "てがみ", "Letter"],
  ["朝", "あさ", "Morning"],
  ["机", "つくえ", "Desk"],
  ["上", "うえ", "On / Above"],

  ["小さな", "ちいさな", "Small"],
  ["白い", "しろい", "White"],
  ["封筒", "ふうとう", "Envelope"],
  ["見たことのない", "みたことのない", "Never seen before"],
  ["字", "じ", "Characters / Handwriting"],

  ["書いてありました", "かいてありました", "Was written"],
  ["送り主", "おくりぬし", "Sender"],
  ["ありませんでした", "ありませんでした", "There was not / Did not exist"],
  ["少し", "すこし", "A little / Slightly"],
  ["ドキドキ", "どきどき", "Heartbeat / Nervousness"],

  ["開けました", "あけました", "Opened"],
  ["中", "なか", "Inside"],
  ["短い", "みじかい", "Short"],
  ["入っていました", "はいっていました", "Was inside / Contained"],
  ["そこには", "そこには", "There was / In it"],

  ["いつも", "いつも", "Always"],
  ["ありがとう", "ありがとう", "Thank you"],
  ["あなた", "あなた", "You"],
  ["笑顔", "えがお", "Smiling face"],
  ["好きです", "すきです", "Like / Love"],

  ["すぐに", "すぐに", "Immediately"],
  ["考えました", "かんがえました", "Thought"],
  ["クラス", "くらす", "Class"],
  ["友だち", "ともだち", "Friend"],
  ["部活", "ぶかつ", "Club activities"],

  ["仲間", "なかま", "Companion / Mate"],
  ["思い当たる", "おもいあたる", "Come to mind / Recall"],
  ["人", "ひと", "Person"],
  ["いません", "いません", "Not present / Absent"],
  ["日", "ひ", "Day"],

  ["学校", "がっこう", "School"],
  ["まわり", "まわり", "Around / Surroundings"],
  ["行動", "こうどう", "Actions / Behavior"],
  ["見るようになりました", "みるようになりました", "Started to observe / watch"],
  ["休み時間", "やすみじかん", "Break time / Recess"],

  ["となり", "となり", "Next to / Neighbor"],
  ["席", "せき", "Seat"],
  ["子", "こ", "Child / Person"],
  ["ちらっと", "ちらっと", "Glance / Peek"],
  ["目をそらす", "めをそらす", "Avert one’s eyes"],

  ["一週間後", "いっしゅうかんご", "One week later"],
  ["同じような", "おなじような", "Similar"],
  ["置かれていました", "おかれていました", "Was placed"],
  ["やはり", "やはり", "As expected / Still"],
  ["文字", "もじ", "Characters / Writing"],

  ["優しい", "やさしい", "Kind / Gentle"],
  ["暖かい", "あたたかい", "Warm"],
  ["気持ち", "きもち", "Feeling / Emotion"],
  ["伝わってきました", "つたわってきました", "Was conveyed / Came through"],
  ["まだ", "まだ", "Still / Yet"],
  
  ["知りません", "しりません", "Do not know"],
  ["見ると", "みると", "When (I) see"],
  ["心", "こころ", "Heart / Mind"],
  ["探す", "さがす", "To search / Look for"],
  ["時間", "じかん", "Time"],
  ["楽しい", "たのしい", "Fun / Enjoyable"],
  ["思う", "おもう", "To think"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          名前のない手紙{"\n"}
          {"\n"}{" "}
        </Text>
        
        <Text style={styles.artikel}>
ある朝、わたしの机の上に、小さな白い封筒がありました。見たことのない字で、わたしの名前が書いてありました。でも、送り主の名前はありませんでした。
          {"\n"}
          {"\n"}
わたしは少しドキドキしながら封筒を開けました。中には短い手紙が入っていました。そこには、「いつもありがとう。あなたの笑顔が好きです。」と書かれていました。
          {"\n"}
          {"\n"}
わたしはすぐに、だれが書いたのか考えました。クラスの友だち？部活の仲間？でも、思い当たる人がいません。
          {"\n"}
          {"\n"}
その日から、わたしは学校でまわりの人の行動をよく見るようになりました。すると、休み時間に、となりの席の子がわたしをちらっと見て、すぐに目をそらすことがありました。
          {"\n"}
          {"\n"}
一週間後、また同じような手紙が机の上に置かれていました。やはり、名前はありません。でも、その文字はやさしく、あたたかい気もちが伝わってきました。
          {"\n"}
          {"\n"}
わたしはまだ、だれが書いているのか知りません。でも、その手紙を見ると、心があたたかくなります。そして、送り主をさがすこの時間も、少し楽しいと思うようになりました。
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

export default N4_Story5;