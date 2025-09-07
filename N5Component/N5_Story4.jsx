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

function N5_Story4({}) {
  const tableData = [
    ["Japan", "Romaji", "Translation"],
  ["挨拶", "あいさつ", "Greeting"],
  ["大きな", "おおきな", "Big"],
  ["キノコ", "きのこ", "Mushroom"],
  ["座る", "すわる", "To sit"],
  ["ネコ", "ねこ", "Cat"],

  ["水", "みず", "Water"],
  ["上", "うえ", "Above / On"],
  ["飛ぶ", "とぶ", "To fly"],
  ["カエル", "かえる", "Frog"],
  ["虹色", "にじいろ", "Rainbow-colored"],

  ["羽", "はね", "Wings"],
  ["チョウチョ", "ちょうちょ", "Butterfly"],
  ["全て", "すべて", "Everything / All"],
  ["不思議", "ふしぎ", "Mysterious / Strange"],
  ["綺麗", "きれい", "Beautiful / Pretty"],
  
  ["今日", "きょう", "Today"],
  ["大切", "たいせつ", "Important"],
  ["日", "ひ", "Day"],
  ["森のハート", "もりのはーと", "Forest’s Heart"],
  ["聞きました", "ききました", "Asked / Heard"],

  ["頷きます", "うなずきます", "Nods"],
  ["真ん中", "まんなか", "Center"],
  ["小さな", "ちいさな", "Small"],
  ["木", "き", "Tree"],
  ["形", "かたち", "Shape"],

  ["赤い", "あかい", "Red"],
  ["光", "ひかり", "Light"],
  ["呟きました", "つぶやきました", "Muttered / Whispered"],
  ["隅", "すみ", "Corner"],
  ["黒い", "くろい", "Black"],

  ["影", "かげ", "Shadow"],
  ["少しずつ", "すこしずつ", "Little by little"],
  ["近づいて", "ちかづいて", "Approaching"],
  ["気をつけて", "きをつけて", "Be careful"],
  ["叫びました", "さけびました", "Shouted"],
  
  ["続く", "つづく", "To be continued"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          リカとふしぎなもり - パート2{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          リカ は ピヨ と いっしょ に もり の 中 を あるきました。 もり の
          いきもの たち が 「こんにちは！」と あいさつ します。
          {"\n"}
          {"\n"}
          大きな キノコ に すわる ネコ、 みず の 上 を とぶ カエル、 にじいろ の
          はね を もつ チョウチョ――
          {"\n"}
          {"\n"}
          すべて が ふしぎ で、きれい でした。
          {"\n"}
          {"\n"}
          ピヨ は いいました。 「リカ、きょう は 大切 な ひ なんだ。もり の
          ハート が ひかる ひだよ。」
          {"\n"}
          {"\n"}
          「もり の ハート？」リカ は ききました。
          {"\n"}
          {"\n"}
          ピヨ は うなずきます。 「もり の まんなか に 小さな 木 が ある。その
          木 に は ハート が あるんだ。」
          {"\n"}
          {"\n"}
          リカ と ピヨ は もり の おく に すすみました。 すると、まえ に 大きな
          木 が たちました。
          {"\n"}
          {"\n"}
          その 木 の 中 に、ほんとう に ハート の かたち を した あかい ひかり
          が ありました。
          {"\n"}
          {"\n"}
          「きれい…」リカ は 小さく つぶやきました。
          {"\n"}
          {"\n"}
          でも――
          {"\n"}
          もり の すみ から、黒い かげ が すこしずつ ちかづいて きました…
          {"\n"}
          {"\n"}
          「リカ、きをつけて！」ピヨ が さけびました。
          {"\n"}
          つづく――
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

export default N5_Story4;
