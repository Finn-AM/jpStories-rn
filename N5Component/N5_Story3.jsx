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

function N5_Story3({}) {
  const tableData = [
  ["Japan", "Romaji", "Translation"],

  ["リカ", "りか", "Rika (a girl's name)"],
  ["小さい", "ちいさい", "Small"],
  ["村", "むら", "Village"],
  ["住んで", "すんで", "Living (te-form)"],
  ["毎日", "まいにち", "Every day"],

  ["早く", "はやく", "Early / Quickly"],
  ["起きて", "おきて", "Wake up (te-form)"],
  ["母", "はは", "Mother"],
  ["一緒に", "いっしょに", "Together"],
  ["畑", "はたけ", "Field / Farm"],

  ["山", "やま", "Mountain"],
  ["歩いて", "あるいて", "Walking (te-form)"],
  ["道", "みち", "Path / Road"],
  ["扉", "とびら", "Door"],
  ["見つけました", "みつけました", "Found"],

  ["中", "なか", "Inside"],
  ["暗い", "くらい", "Dark"],
  ["トンネル", "とんねる", "Tunnel"],
  ["怖かった", "こわかった", "Was scared"],
  ["思いました", "おもいました", "Thought"],
  
  ["光", "ひかり", "Light"],
  ["森", "もり", "Forest"],
  ["花", "はな", "Flower"],
  ["木", "き", "Tree"],
  ["小鳥", "ことり", "Little bird"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 ,}}>
        <Text style={styles.judul}>
          リカとふしぎなもり - パート１{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          リカ は 小さい むら に すんで います。
          まいにち、リカ は はやく おきて、はは と いっしょに はたけ へ いきます。
          {"\n"}
          {"\n"}
          ある あさ、リカ は 山 の ちかく を あるいて いました。
          すると、みち の よこ に 小さい とびら を みつけました。
          {"\n"}
          {"\n"}
          「これは なに？　こんな ところ に とびら が…」
          リカ は ドア を あけました。
          {"\n"}
          {"\n"}
          中 は くらい トンネル です。リカ は すこし こわかった ですが、「いってみよう！」と おもいました。
          トンネル を あるく と、あかるい ひかり が みえてきました。  
          {"\n"}
          {"\n"}
          その さき に は、大きくて きれいな もり が ありました。
          ふしぎ な 花、うごく 木、そして しゃべる 小鳥 が いました。
          {"\n"}
          {"\n"}
          「こんにちは！　あなた は だれ？」と 小鳥 が いいました。
          リカ は びっくりして、「わたし は リカ。あなた は だれ？」と こたえました。
          {"\n"}
          {"\n"}
          小鳥 は にっこり わらって、「ぼく は ピヨ。ここ は ふしぎ の もり だよ。」と いいました。
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

export default N5_Story3;
