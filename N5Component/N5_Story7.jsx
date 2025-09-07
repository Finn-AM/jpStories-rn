import { ScrollView, StyleSheet, Text, View } from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N5_Story7({}) {
  const tableData = [
    ["Japan", "Romaji", "Translation"],

  ["家", "いえ / うち", "Home / House"],
  ["白い", "しろい", "White"],
  ["名前", "なまえ", "Name"],
  ["優しい", "やさしい", "Kind / Gentle"],
  ["可愛い", "かわいい", "Cute"],

  ["毎日", "まいにち", "Every day"],
  ["部屋", "へや", "Room"],
  ["寝たり", "ねたり", "Sleep (listing actions)"],
  ["外", "そと", "Outside"],
  ["遊んだり", "あそんだり", "Play (listing actions)"],

  ["ある日", "あるひ", "One day"],
  ["いませんでした", "いませんでした", "Was not there (for animate beings)"],
  ["探しました", "さがしました", "Searched"],
  ["庭", "にわ", "Garden / Yard"],
  ["泣きました", "なきました", "Cried"],

  ["次の日", "つぎのひ", "Next day"],
  ["公園", "こうえん", "Park"],
  ["子ども", "こども", "Child / Children"],
  ["行ってみる", "いってみる", "Try going / Go and see"],
  ["少し", "すこし", "A little"],

  ["疲れていました", "つかれていました", "Was tired"],
  ["元気", "げんき", "Healthy / Energetic"],
  ["会えて", "あえて", "Able to meet"],
  ["よかった", "よかった", "Was good / I'm glad"],
  ["抱いて", "だいて", "To hold / Hug"],
  
  ["帰りました", "かえりました", "Returned / Went home"],
  ["今", "いま", "Now"],
  ["寝ています", "ねています", "Sleeping (currently)"],
  ["とても", "とても", "Very"],
  ["嬉しい", "うれしい", "Happy"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          いなくなったわたしのねこ{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          わたしの家に、白いねこがいました。
          名前は「ミミ」です。ミミはやさしくて、かわいいねこです。
          {"\n"}
          {"\n"}
          毎日、ミミは部屋でねたり、外であそんだりします。
          でも、ある日、ミミがいませんでした。
          {"\n"}
          {"\n"}
          「ミミ！ミミ！」と、わたしはさがしました。
          部屋にも、庭にも、ミミはいません。
          「どこ？どこ？」と、わたしは泣きました。
          {"\n"}
          {"\n"}
          次の日、わたしは公園へ行きました。
          すると、子どもが「ねこがいますよ」と言いました。
          {"\n"}
          {"\n"}
          わたしが行ってみると、そこにミミがいました！
          ミミはすこしつかれていましたが、元気です。
          {"\n"}
          {"\n"}
          「ミミ！会えてよかった！」
          わたしはミミをだいて、いっしょに家に帰りました。
          {"\n"}
          {"\n"}
          今、ミミはまたわたしの部屋でねています。
          わたしは、とてもとてもうれしいです。
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

export default N5_Story7;
