import {
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N5_Story6({}) {
  const tableData = [
    ["Japan", "Romaji", "Translation"],

  ["昔々", "むかしむかし", "Once upon a time"],
  ["山の中", "やまのなか", "In the mountains"],
  ["巨人", "きょじん", "Giant"],
  ["住んでいました", "すんでいました", "Was living"],
  ["大きい", "おおきい", "Big / Large"],

  ["体", "からだ", "Body"],
  ["背が高くて", "せがたかくて", "Tall (lit. 'having high height')"],
  ["声", "こえ", "Voice"],
  ["友達", "ともだち", "Friend"],
  ["村の人たち", "むらのひとたち", "Villagers"],

  ["怖い", "こわい", "Scary"],
  ["逃げました", "にげました", "Ran away / Escaped"],
  ["悲しかった", "かなしかった", "Was sad"],
  ["ある日", "あるひ", "One day"],
  ["小さい", "ちいさい", "Small"],

  ["猫", "ねこ", "Cat"],
  ["やってきました", "やってきました", "Came (over)"],
  ["怖がりませんでした", "こわがりませんでした", "Was not afraid"],
  ["言いました", "いいました", "Said"],
  ["にゃー", "にゃー", "Meow"],

  ["嬉しくなりました", "うれしくなりました", "Became happy"],
  ["毎日", "まいにち", "Every day"],
  ["遊びました", "あそびました", "Played"],
  ["笑いました", "わらいました", "Laughed"],
  ["楽しそう", "たのしそう", "Looked happy"],
  
  ["悪くない", "わるくない", "Not bad / Not evil"],
  ["少しずつ", "すこしずつ", "Little by little"],
  ["増えました", "ふえました", "Increased / Grew"],
  ["寂しく", "さびしく", "Lonely (adverbial form)"],
  ["仲良し", "なかよし", "Good friends / Close friendship"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          さびしいきょじん{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
むかしむかし、やまのなかに、きょじんがすんでいました。
きょじんは、おおきいからだをもっていました。せがたかくて、こえもおおきいです。
          {"\n"}
          {"\n"}
でも、きょじんはともだちがいませんでした。
むらのひとたちは、「こわい！」といって、にげました。
きょじんは、かなしかったです。
          {"\n"}
          {"\n"}
あるひ、ちいさいねこがやってきました。
ねこは、きょじんをこわがりませんでした。
きょじんは、ねこに「こんにちは」といいました。
ねこは「にゃー」といいました。
          {"\n"}
          {"\n"}
きょじんは、うれしくなりました。
まいにち、きょじんとねこはいっしょにあそびました。
きょじんは、わらいました。ねこも、たのしそうでした。
          {"\n"}
          {"\n"}
むらのひとたちは、それをみていいました。
「きょじんは、わるくないね。」
そして、すこしずつ、ともだちがふえました。
          {"\n"}
          {"\n"}
きょじんは、もうさびしくありません。
みんなとなかよしです。
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

export default N5_Story6;