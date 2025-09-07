import { ScrollView, StyleSheet, Text, View } from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N5_Story10({}) {
  const tableData = [
    ["Japan", "Romaji", "Translation"],

  ["先週", "せんしゅう", "Last week"],
  ["駅", "えき", "Train station"],
  ["昔", "むかし", "Old times / Long ago"],
  ["友だち", "ともだち", "Friend"],
  ["会いました", "あいました", "Met"],

  ["名前", "なまえ", "Name"],
  ["小学校", "しょうがっこう", "Elementary school"],
  ["時", "とき", "Time / When"],
  ["一緒に", "いっしょに", "Together"],
  ["遊びました", "あそびました", "Played"],

  ["今", "いま", "Now"],
  ["東京", "とうきょう", "Tokyo"],
  ["仕事", "しごと", "Work / Job"],
  ["元気", "げんき", "Healthy / Fine / Energetic"],
  ["聞く", "きく", "To ask / To listen"],
 
  ["笑いました", "わらいました", "Laughed / Smiled"],
  ["近く", "ちかく", "Nearby"],
  ["喫茶店", "きっさてん", "Café / Coffee shop"],
  ["飲みながら", "のみながら", "While drinking"],
  ["話しました", "はなしました", "Talked"],

  ["思い出", "おもいで", "Memory"],
  ["生活", "せいかつ", "Life / Daily living"],
  ["午後", "ごご", "Afternoon"],
  ["最後に", "さいごに", "Lastly / In the end"],
  ["別れました", "わかれました", "Parted / Said goodbye"],

  ["楽しい", "たのしい", "Fun / Enjoyable"],
  ["日", "ひ", "Day"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          友だちと会う{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
先週、わたしは駅で昔の友だちに会いました。
その友だちの名前はケンです。小学校のとき、よくいっしょに遊びました。
          {"\n"}
          {"\n"}
ケンは今、東京で仕事をしています。
「元気ですか？」とわたしが聞くと、ケンは「はい、元気です！」と笑いました。
          {"\n"}
          {"\n"}
わたしたちは近くの喫茶店に行って、コーヒーを飲みながら話しました。
小学校の思い出や、今の生活について、たくさん話しました。
          {"\n"}
          {"\n"}
午後まで話して、さいごに「また会いましょう」と言って別れました。
とても楽しい日でした。
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

export default N5_Story10;
