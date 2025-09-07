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

function N5_Story5({}) {
  const tableData = [
    ["Japan", "Romaji", "Translation"],

  ["黒い", "くろい", "Black"],
  ["影", "かげ", "Shadow"],
  ["だんだん", "だんだん", "Gradually"],
  ["大きく", "おおきく", "Big (adverbial form)"],
  ["魔法", "まほう", "Magic"],

  ["使う", "つかう", "To use"],
  ["狼 / オオカミ", "おおかみ", "Wolf"],
  ["私のもの", "わたしのもの", "Mine / My possession"],
  ["叫びました", "さけびました", "Shouted"],
  ["前", "まえ", "Front / Before"],

  ["魂", "たましい", "Soul"],
  ["怖い", "こわい", "Scary"],
  ["目", "め", "Eyes"],
  ["閉じて", "とじて", "To close (te-form)"],
  ["深呼吸", "しんこきゅう", "Deep breath"],

  ["力", "ちから", "Power / Strength"],
  ["優しい", "やさしい", "Gentle / Kind"],
  ["包む", "つつむ", "To wrap / Embrace"],
  ["静かに", "しずかに", "Quietly"],
  ["止まりました", "とまりました", "Stopped"],

  ["腰をおとす", "こしをおとす", "To kneel / To sit down"],
  ["寂しい", "さびしい", "Lonely"],
  ["近づき", "ちかづき", "Approached (stem form)"],
  ["握りました", "にぎりました", "Held / Grasped"],
  ["守る", "まもる", "To protect"],

  ["小さく", "ちいさく", "Small (adverbial form)"],
  ["頷きました", "うなずきました", "Nodded"],
  ["集まって", "あつまって", "Gathered"],
  ["笑いました", "わらいました", "Laughed"],
  ["微笑む", "にっこり", "To smile"],

  ["君", "きみ", "You (casual)"],
  ["救った", "すくった", "Saved"],
  ["村", "むら", "Village"],
  ["帰りました", "かえりました", "Returned"],
  ["心の中", "こころのなか", "In the heart / In one’s mind"],
  
  ["暖かい", "あたたかい", "Warm"],
  ["思い出", "おもいで", "Memory"],
  ["残っていました", "のこっていました", "Remained / Was left"],
  ["終わり", "おわり", "The end"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          リカとふしぎなもり - パート2{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          黒い かげ は、だんだん 大きく なりました。
          それ は、くろい まほう を つかう オオカミ でした。
          {"\n"}
          {"\n"}
「この ハート は、わたし の ものだ！」と オオカミ が さけびました。
ピヨ は リカ の まえ に たちました。
          {"\n"}
          {"\n"}
「ダメ！ ハート は もり の たましい！ あげない！」
          {"\n"}
          {"\n"}
リカ は こわかった ですが、しっかり と ハート の まえ に たちました。
そして、目 を とじて、しんこきゅう を しました。
          {"\n"}
          {"\n"}
「もりさん、わたし に ちから を ください…」
          {"\n"}
          {"\n"}
その とき――
          {"\n"}
          {"\n"}
リカ の 手 から やさしい ひかり が 出てきました。
その ひかり は オオカミ を つつみ、しずか に なりました。
          {"\n"}
          {"\n"}
オオカミ は とまりました。
そして、こし を おとして いいました。
          {"\n"}
          {"\n"}
「…すまない。わたし は、さびしかった だけだ。」
          {"\n"}
          {"\n"}
リカ は ゆっくり ちかづき、オオカミ の 手 を にぎりました。
          {"\n"}
「いっしょ に、もり を まもろう？」
オオカミ は 小さく うなずきました。
          {"\n"}
          {"\n"}
ハート の ひかり は、もっと つよく なりました。
もり の いきもの たち が あつまって、みんな で わらいました。
          {"\n"}
          {"\n"}
          ピヨ は にっこり して いいました。
「リカ、ありがとう。きみ の やさしさ が もり を すくったんだ。」
          {"\n"}
          {"\n"}
その よる、リカ は また トンネル を とおって、むら に かえりました。
でも、こころ の 中 には、あたたかい もり の おもいで が のこって いました。
          {"\n"}
          {"\n"}
――おわり。
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

export default N5_Story5;
