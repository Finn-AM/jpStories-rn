import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N5_Story2({}) {
  const tableData = [
    
  ["Japan", "Romaji", "Translation"],
  
  ["太郎", "たろう", "Tarou (a boy's name)"],
  ["小さな", "ちいさな", "Small"],
  ["村", "むら", "Village"],
  ["住んで", "すんで", "Living (te-form)"],
  ["日", "ひ", "Day"],

  ["山", "やま", "Mountain"],
  ["上", "うえ", "Top / Above"],
  ["大きな", "おおきな", "Big"],
  ["宝", "たから", "Treasure"],
  ["聞きました", "ききました", "Heard"],

  ["冒険", "ぼうけん", "Adventure"],
  ["行きたい", "いきたい", "Want to go"],
  ["思って", "おもって", "Thought (te-form)"],
  ["朝", "あさ", "Morning"],
  ["早く", "はやく", "Early / Quickly"],

  ["家", "いえ", "House / Home"],
  ["出ました", "でました", "Left / Went out"],
  ["犬", "いぬ", "Dog"],
  ["会いました", "あいました", "Met"],
  ["一人", "ひとり", "Alone / One person"],

  ["危ない", "あぶない", "Dangerous"],
  ["一緒に", "いっしょに", "Together"],
  ["歩いて", "あるいて", "Walked (te-form)"],
  ["森", "もり", "Forest"],
  ["川", "かわ", "River"],

  ["渡って", "わたって", "Crossed (te-form)"],
  ["着きました", "つきました", "Arrived"],
  ["花", "はな", "Flower"],
  ["空", "そら", "Sky"],
  ["笑って", "わらって", "Laughed (te-form)"],

  ["友達", "ともだち", "Friend"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 ,}}>
        <Text style={styles.judul}>
          たろう の ぼうけん {"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          たろう は 小さな むら に すんで います。{"\n"}
          ある日、「山 の うえ に 大きな たから が ある」と ききました。
          {"\n"}
          {"\n"}
          たろう は 「ぼうけん に いきたい！」と おもって、あさ はやく 家 を 出ました。
          {"\n"}
          {"\n"}
          山 で たろう は いぬ に あいました。{"\n"}
          いぬ は いいました。「ひとり は あぶない。いっしょ に いこう！」
          {"\n"}
          {"\n"}
          ふたり は 森 を あるいて、川 を わたって、ついに 山 の 上 に つきました。{"\n"}
          そこ に あった の は、たから では なく、きれい な 花 と 空！
          {"\n"}
          {"\n"}
          たろう は わらって いいました。「これは わたし の たから です。」{"\n"}
          いぬ も わらって、「ともだち は たから だ よ」と いいました。
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

export default N5_Story2;
