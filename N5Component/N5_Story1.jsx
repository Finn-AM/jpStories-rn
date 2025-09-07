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

function N5_Story1({}) {
  const tableData = [
    
  ["Japan", "Romaji", "Translation"],

  ["王様", "おうさま", "King"],
  ["部屋", "へや", "Room"],
  ["小さな", "ちいさな", "Small"],
  ["猫", "ねこ", "Cat"],
  ["上", "うえ", "On / Above"],

  ["家", "いえ", "House / Home"],
  ["似て", "にて", "To resemble"],
  ["言いました", "いいました", "Said"],
  ["驚きました", "びっくりしました", "Was surprised"],
  ["誰", "だれ", "Who"],

  ["叫びました", "さけびました", "Shouted"],
  ["答えず", "こたえず", "Without answering"],
  ["魚", "さかな", "Fish"],
  ["食べて", "たべて", "Eat (te-form)"],
  ["寝て", "ねて", "Sleep (te-form)"],

  ["王女", "おうじょ", "Princess"],
  ["笑って", "わらって", "Laughed"],
  ["可愛い", "かわいい", "Cute"],
  ["ため息", "ためいき", "Sigh"],
  ["仕方ない", "しかたない", "Can’t be helped"],

  ["毎日", "まいにち", "Every day"],
  ["美味しい", "おいしい", "Delicious"],
  ["ご飯", "ごはん", "Meal / Rice"],
  ["人々", "ひとびと", "People"],
  ["本当", "ほんとう", "True / Real"],
  
  ["国", "くに", "Country"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 ,}}>
        <Text style={styles.judul}>
          ねこ は おうさま {"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          ある日、王さまの へや に 小さな ねこ が 入りました。
          ねこ は ベッド の 上 に のって、「ここ は わたし の いえ に にて います！」と いいました。
          {"\n"}
          {"\n"}
          王さま は びっくり して、「おまえ は だれ だ！」と さけびました。
          でも ねこ は こたえず に、魚 を 食べて ねて しまいました。  
          {"\n"}
          {"\n"}
          おうじょ は わらって、「この ねこ は とても かわいい です。ここ に いて も いい？」
          王さま は ためいき を ついて、「しかたないな…」と いいました。
          {"\n"}
          {"\n"}
          その日 から、ねこ は 王さま の となり で ねむり、毎日 おいしい ごはん を もらいました。
          人々 は いいました。「この 国 の ほんとう の おうさま は… ねこ です！」
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

export default N5_Story1;
