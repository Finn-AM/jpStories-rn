import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N4_Story4({}) {
  
  const tableData = [

  ["Japan", "Hiragana", "Translation"],

  ["木", "き", "Tree"],
  ["後ろ", "うしろ", "Behind / Back"],
  ["影", "かげ", "Shadow"],
  ["夕方", "ゆうがた", "Evening"],
  ["私", "わたし", "I / Me"],

  ["公園", "こうえん", "Park"],
  ["歩いていました", "あるいていました", "Was walking"],
  ["空", "そら", "Sky"],
  ["赤くて", "あかくて", "Red and..."],
  ["風", "かぜ", "Wind"],

  ["少し", "すこし", "A little / Slightly"],
  ["冷たい", "つめたい", "Cold (to the touch / chilly)"],
  ["時", "とき", "Time / Moment"],
  ["大きな", "おおきな", "Big"],
  ["見えました", "みえました", "Was visible / Could be seen"],

  ["足", "あし", "Leg / Foot"],
  ["止めて", "とめて", "To stop"],
  ["見つめました", "みつめました", "Stared at / Gazed at"],
  ["人", "ひと", "Person"],
  ["形", "かたち", "Shape / Form"],

  ["動きません", "うごきません", "Does not move"],
  ["心", "こころ", "Heart / Mind"],
  ["ドキドキ", "どきどき", "Heartbeat / Nervousness"],
  ["誰ですか", "だれですか", "Who is it?"],
  ["小さな", "ちいさな", "Small"],

  ["声", "こえ", "Voice"],
  ["尋ねました", "たずねました", "Asked / Inquired"],
  ["答え", "こたえ", "Answer / Reply"],
  ["ありません", "ありません", "There is not / None"],
  ["微かな", "かすかな", "Faint / Slight"],

  ["足音", "あしおと", "Footsteps"],
  ["一歩", "いっぽ", "One step"],
  ["近づく", "ちかづく", "To approach"],
  ["ゆっくり", "ゆっくり", "Slowly"],
  ["子ども", "こども", "Child"],

  ["出てきました", "でてきました", "Came out / Appeared"],
  ["隠れんぼ", "かくれんぼ", "Hide-and-seek"],
  ["していた", "していた", "Was doing"],
  ["笑いました", "わらいました", "Laughed"],
  ["ほっとして", "ほっとして", "Relieved"],
  
  ["笑い返しました", "わらいかえしました", "Smiled back"],
  ["暗くなり", "くらくなり", "Became dark"],
  ["明かり", "あかり", "Light / Lamp"],
  ["点きました", "つきました", "Turned on / Was lit"],
  ["残っています", "のこっています", "Remains / Is left"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          木のうしろのかげ {"\n"}
          {"\n"}{" "}
        </Text>
        
        <Text style={styles.artikel}>
          夕方、わたしは公園を歩いていました。空は赤くて、風が少し冷たくなっていました。その時、大きな木のうしろに、黒いかげが見えました。
          {"\n"}
          {"\n"}
          わたしは足を止めて、そのかげを見つめました。人の形に見えましたが、動きません。心がドキドキしてきました。
          {"\n"}
          {"\n"}
          「だれですか？」と小さな声でたずねました。しかし、答えはありません。ただ、かすかな足音が聞こえました。
          {"\n"}
          {"\n"}
          わたしが一歩近づくと、かげがゆっくり動きました。そして、木のうしろから、小さな子どもが出てきました。
          {"\n"}
          {"\n"}
          「かくれんぼをしていたんです。」とその子は笑いました。わたしはほっとして、笑い返しました。
          {"\n"}
          {"\n"}
          それから、空はすっかり暗くなり、公園の明かりがつきました。あの時のドキドキは、今でも少し心に残っています。
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

export default N4_Story4;