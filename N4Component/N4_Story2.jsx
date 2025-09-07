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

function N4_Story2({}) {
  const tableData = [

  ["Japan", "Hiragana", "Translation"],
      
  ["同じ", "おなじ", "Same"],
  ["クラス", "くらす", "Class"],
  ["女の子", "おんなのこ", "Girl"],
  ["明るくて", "あかるくて", "Cheerful (te-form)"],
  ["友だち", "ともだち", "Friend"],

  ["多く", "おおく", "Many / Much"],
  ["人気者", "にんきもの", "Popular person"],
  ["話す", "はなす", "To talk / Speak"],
  ["後ろ", "うしろ", "Back / Behind"],
  ["席", "せき", "Seat"],
  
  ["美術", "びじゅつ", "Art (subject)"],
  ["時間", "じかん", "Time / Period"],
  ["絵", "え", "Picture / Painting"],
  ["描く / かく", "かく", "To draw / paint"],
  ["くじ", "くじ", "Lottery / Drawing lots"],

  ["決めた", "きめた", "Decided"],
  ["心の中", "こころのなか", "In the heart / Mind"],
  ["ドキドキしました", "どきどきしました", "Heart pounding / Nervous excitement"],
  ["色", "いろ", "Color"],
  ["使い方", "つかいかた", "Way of using"],

  ["顔", "かお", "Face"],
  ["赤くなりました", "あかくなりました", "Became red / Blushed"],
  ["休み時間", "やすみじかん", "Break time / Recess"],
  ["少しずつ", "すこしずつ", "Little by little"],
  ["小説", "しょうせつ", "Novel"],

  ["きっかけ", "きっかけ", "Trigger / Starting point"],
  ["放課後", "ほうかご", "After school"],
  ["図書室", "としょしつ", "Library (in a school)"],
  ["過ごす", "すごす", "To spend (time)"],
  ["夕方", "ゆうがた", "Evening"],

  ["窓", "まど", "Window"],
  ["夕焼け", "ゆうやけ", "Sunset glow"],
  ["笑って", "わらって", "Smiled / Laughed (te-form)"],
  ["答えて", "こたえて", "Answered (te-form)"],
  ["胸", "むね", "Chest / Heart (emotion)"],
  
  ["温かく", "あたたかく", "Warm (adverbial form)"],
  ["気持ち", "きもち", "Feeling"],
  ["はっきり", "はっきり", "Clearly"],
  ["大切に", "たいせつに", "Treasure / Value (adverbially)"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          クラスメートへの気もち {"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          わたしには、同じクラスにさくらさんという女の子がいます。さくらさんはいつも明るくて、友だちが多く、クラスの人気者です。わたしはあまり話すことがなく、いつも後ろの席から彼女を見ていました。
          {"\n"}
          {"\n"}
          ある日、美術の時間にペアで絵をかくことになりました。くじで決めたパートナーは、なんとさくらさんでした。わたしは心の中でドキドキしました。
          {"\n"}
          {"\n"}
          絵をかいている間、さくらさんはやさしく話しかけてくれました。「あなたの色の使い方、とてもきれいですね。」と言われて、わたしは顔が赤くなりました。
          {"\n"}
          {"\n"}
          それから、休み時間にも少しずつ話すようになりました。さくらさんは本を読むのが好きで、わたしと同じ小説を読んでいることがわかりました。それがきっかけで、放課後に図書室で一緒にすごす日がふえました。
          {"\n"}
          {"\n"}
          ある夕方、窓から見える夕焼けを見ながら、わたしは「さくらさんといると、とても楽しいです。」と言いました。さくらさんは少し笑って、「わたしもです。」と答えてくれました。
          {"\n"}
          {"\n"}
          その時、胸の中があたたかくなりました。これは、ただの友だちではない気もちだと気づきました。
          {"\n"}
          {"\n"}
          わたしはまだ、はっきり「好きです」とは言っていません。でも、これから少しずつ、さくらさんとの時間を大切にしようと思っています。
          {"\n"}
          {"\n"}
          それからも、わたしは時々その石を使って、異世界へ遊びに行きます。でも、必ず夜になる前に帰ってきます。
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

export default N4_Story2;
