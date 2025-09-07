import { ScrollView, StyleSheet, Text, View } from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N5_Story8({}) {
  const tableData = [
    ["Japan", "Romaji", "Translation"],

  ["先月", "せんげつ", "Last month"],
  ["家族", "かぞく", "Family"],
  ["海", "うみ", "Sea"],
  ["夏休み", "なつやすみ", "Summer vacation"],
  ["天気", "てんき", "Weather"],

  ["朝", "あさ", "Morning"],
  ["車", "くるま", "Car"],
  ["出ました", "でました", "Left / Departed"],
  ["父", "ちち", "Father"],
  ["運転しました", "うんてんしました", "Drove"],

  ["母", "はは", "Mother"],
  ["妹", "いもうと", "Younger sister"],
  ["楽しそう", "たのしそう", "Looks fun / Seemed happy"],
  ["ワクワクしました", "わくわくしました", "Got excited"],
  ["着いた", "ついた", "Arrived"],

  ["青い", "あおい", "Blue"],
  ["空", "そら", "Sky"],
  ["水", "みず", "Water"],
  ["見えました", "みえました", "Could see / Was visible"],
  ["魚", "さかな", "Fish"],

  ["昼ごはん", "ひるごはん", "Lunch"],
  ["おにぎり", "おにぎり", "Rice ball"],
  ["果物", "くだもの", "Fruit"],
  ["美味しかった", "おいしかった", "Was delicious"],
  ["午後", "ごご", "Afternoon"],

  ["泳ぎました", "およぎました", "Swam"],
  ["砂", "すな", "Sand"],
  ["城", "しろ", "Castle"],
  ["作りました", "つくりました", "Made / Built"],
  ["夕方", "ゆうがた", "Evening"],
  ["帰りました", "かえりました", "Returned"],

  
  ["少し", "すこし", "A little"],
  ["心", "こころ", "Heart / Mind"],
  ["休み", "やすみ", "Holiday / Break"],
  ["楽しかった", "たのしかった", "Was fun"],
  ["また", "また", "Again"],
  ["行きたい", "いきたい", "Want to go"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          わたしの楽しい休み{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          先月、わたしは家族と海へ行きました。
          夏休みです。天気はとてもよかったです。
          {"\n"}
          {"\n"}
          朝、車で家を出ました。父が車を運転しました。
          母と妹はたのしそうでした。わたしもワクワクしました。
          {"\n"}
          {"\n"}
          海についたとき、青い空ときれいな水が見えました。
          わたしは水であそんだり、さかなを見たりしました。
          {"\n"}
          {"\n"}
          昼ごはんはおにぎりとくだものです。とてもおいしかったです。
          {"\n"}
          {"\n"}
          午後、父といっしょにうみでおよぎました。
          妹はすなで**城（しろ）**をつくりました。たのしかったです。
          {"\n"}
          {"\n"}
          夕方、わたしたちは家へ帰りました。みんな少しつかれました。
          でも、心は元気でした。
          {"\n"}
          {"\n"}
          この休みはとても楽しかったです。 また行きたいです！
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

export default N5_Story8;
