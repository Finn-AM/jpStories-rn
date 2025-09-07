import { ScrollView, StyleSheet, Text, View } from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N5_Story9({}) {
  const tableData = [
    ["Japan", "Romaji", "Translation"],

  ["不思議", "ふしぎ", "Mysterious / Strange"],
  ["公園", "こうえん", "Park"],
  ["青い", "あおい", "Blue"],
  ["目", "め", "Eye"],
  ["とても", "とても", "Very"],

  ["綺麗", "きれい", "Beautiful"],
  ["言う", "いう", "To say"],
  ["人間", "にんげん", "Human"],
  ["答えました", "こたえました", "Answered / Replied"],
  ["魔法", "まほう", "Magic"],

  ["驚きました", "おどろきました", "Was surprised"],
  ["空", "そら", "Sky"],
  ["飛びたい", "とびたい", "Want to fly"],
  ["聞きました", "ききました", "Asked / Heard"],
  ["尻尾", "しっぽ", "Tail"],

  ["かけました", "かけました", "Cast (a spell) / Put on"],
  ["体", "からだ", "Body"],
  ["浮きました", "うきました", "Floated"],
  ["町", "まち", "Town"],
  ["山", "やま", "Mountain"],

  ["川", "かわ", "River"],
  ["小さく", "ちいさく", "Small (adverbial form)"],
  ["楽しかった", "たのしかった", "Was fun"],
  ["戻しました", "もどしました", "Returned (something/someone)"],
  ["遊びましょう", "あそびましょう", "Let's play"],
  
  ["光", "ひかり", "Light"],
  ["消えました", "きえました", "Disappeared"],
  ["家", "うち / いえ", "Home / House"],
  ["忘れません", "わすれません", "Will not forget"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          ふしぎなねこ{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          ある日、わたしは公園で白いねこを見ました。
ねこは青い目をしていて、とてもきれいでした。
          {"\n"}
          {"\n"}
わたしが「こんにちは」と言うと、ねこが人間のことばでこたえました。
「こんにちは。わたしはまほうのねこです。」
          {"\n"}
          {"\n"}
わたしはびっくりしました。
ねこは「空をとびたいですか？」と聞きました。
わたしが「はい！」と言うと、ねこはしっぽをふってまほうをかけました。
          {"\n"}
          {"\n"}
わたしの体がふわふわと空にうきました。
町や山や川が小さく見えます。
とても楽しかったです。
          {"\n"}
          {"\n"}
夕方になると、ねこはわたしを公園へもどしました。
「またあそびましょう」と言って、ねこは光になって消えました。
          {"\n"}
          {"\n"}
          夕方、わたしたちは家へ帰りました。みんな少しつかれました。
          でも、心は元気でした。
          {"\n"}
          {"\n"}
わたしはうちへ帰りましたが、あの日のことは今もわすれません。
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

export default N5_Story9;
