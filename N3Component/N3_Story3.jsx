import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N3_Story3({}) {

  const tableData = [

  ["Japan", "Hiragana", "Translation"],

  ["夏休み", "なつやすみ", "Summer vacation"],
  ["家族", "かぞく", "Family"],
  ["一緒に", "いっしょに", "Together"],
  ["おばあちゃん", "おばあちゃん", "Grandmother"],
  ["田舎", "いなか", "Countryside"],

  ["周り", "まわり", "Surroundings"],
  ["山", "やま", "Mountain"],
  ["田んぼ", "たんぼ", "Rice field"],
  ["電車", "でんしゃ", "Train"],
  ["降りる", "おりる", "To get off / To disembark"],

  ["空気", "くうき", "Air"],
  ["都会", "とかい", "City / Urban area"],
  ["違う", "ちがう", "Different"],
  ["澄んでいる", "すんでいる", "Clear / Pure"],
  ["匂い", "におい", "Smell / Scent"],
  ["草", "くさ", "Grass"],

  ["混じる", "まじる", "To mix / To blend"],
  ["深呼吸", "しんこきゅう", "Deep breath"],
  ["感じる", "かんじる", "To feel"],
  ["出迎える", "でむかえる", "To welcome / To greet"],
  ["冷たい", "つめたい", "Cold (to the touch)"],

  ["麦茶", "むぎちゃ", "Barley tea"],
  ["味", "あじ", "Taste"],
  ["特別", "とくべつ", "Special"],
  ["庭", "にわ", "Garden"],
  ["セミ", "せみ", "Cicada"],

  ["鳴く", "なく", "To sing / To chirp (animals, insects)"],
  ["畑", "はたけ", "Field (for crops/vegetables)"],
  ["トマト", "とまと", "Tomato"],
  ["キュウリ", "きゅうり", "Cucumber"],
  ["実る", "みのる", "To bear fruit / To ripen"],
  ["収穫", "しゅうかく", "Harvest"],
  
  ["昼ご飯", "ひるごはん", "Lunch"],
  ["育てる", "そだてる", "To raise / To grow"],
  ["料理", "りょうり", "Dish / Cooking"],
  ["素朴", "そぼく", "Simple / Rustic"],
  ["おいしい", "おいしい", "Delicious"],
  ["川", "かわ", "River"],

  ["透明", "とうめい", "Transparent / Clear"],
  ["足", "あし", "Foot / Leg"],
  ["気持ちいい", "きもちいい", "Feels good"],
  ["石", "いし", "Stone / Rock"],
  ["投げる", "なげる", "To throw"],
  
  ["魚", "さかな", "Fish"],
  ["追いかける", "おいかける", "To chase / Pursue"],
  ["夕方", "ゆうがた", "Evening"],
  ["縁側", "えんがわ", "Veranda / Engawa (traditional Japanese house)"],
  ["スイカ", "すいか", "Watermelon"],
  ["風", "かぜ", "Wind"],

  ["涼しい", "すずしい", "Cool (weather)"],
  ["夕焼け", "ゆうやけ", "Sunset glow"],
  ["染める", "そめる", "To dye / To color"],
  ["昔の話", "むかしのはなし", "Stories of the past"],
  ["夢中で", "むちゅうで", "Absorbed in / Fascinated"],
  ["夜", "よる", "Night"],

  ["星", "ほし", "Star"],
  ["広がる", "ひろがる", "To spread out"],
  ["都会では見えない", "とかいではみえない", "Not visible in the city"],
  ["思わず", "おもわず", "Unintentionally / Without thinking"],
  ["つぶやく", "つぶやく", "To murmur / Whisper"],
  ["布団", "ふとん", "Futon (Japanese bedding)"],
  
  ["安心", "あんしん", "Relief / Peace of mind"],
  ["時間", "じかん", "Time"],
  ["流れる", "ながれる", "To flow / To pass (time)"],
  ["心", "こころ", "Heart / Mind"],
  ["落ち着く", "おちつく", "To calm down / To feel at ease"],
  ["思い出", "おもいで", "Memory"],
  ["大切", "たいせつ", "Important / Precious"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          おばあちゃんの家への旅行 {"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          夏休みのある日、私は家族と一緒におばあちゃんの家へ行きました。おばあちゃんの家は田舎にあり、周りは山と田んぼに囲まれています。
          {"\n"}
          {"\n"}
          電車を降りると、空気が都会とはまったく違いました。澄んでいて、少し草の匂いが混じっていました。私は深呼吸をして、「ああ、夏が来たんだな」と感じました。
          {"\n"}
          {"\n"}
         家に着くと、おばあちゃんが笑顔で出迎えてくれました。「よく来たね、ゆっくりしていきなさい」と言いながら、冷たい麦茶を出してくれました。その味はいつもとても特別に感じます。
          {"\n"}
          {"\n"}
          庭ではセミが鳴いていて、畑にはトマトやキュウリがたくさん実っていました。おばあちゃんは「採ってみる？」と言い、私は一緒に野菜を収穫しました。
          {"\n"}
          {"\n"}
          昼ご飯には、おばあちゃんが育てた野菜を使った料理が並びました。素朴だけれど、とてもおいしくて、家族みんなが笑顔になりました。
          {"\n"}
          {"\n"}
          午後は川に行きました。水は冷たくて透明で、足を入れるだけで気持ちよくなりました。弟と一緒に石を投げて遊んだり、小さな魚を追いかけたりしました。
          {"\n"}
          {"\n"}
          夕方になると、家の縁側に座ってスイカを食べました。風が涼しくなり、夕焼けが山の向こうを赤く染めていました。おばあちゃんが昔の話をしてくれて、私は夢中で聞きました。
          {"\n"}
          {"\n"}
          夜になると、空いっぱいに星が広がっていました。都会では見えない数の星に、私は思わず「きれい…」とつぶやきました。
                    {"\n"}
          {"\n"}
          布団に入ると、どこか安心するような気持ちになりました。おばあちゃんの家は、時間がゆっくり流れているようで、心が落ち着きます。
                              {"\n"}
          {"\n"}
          その日一日を思い出しながら眠りにつきました。おばあちゃんの家での夏休みは、私にとって大切な思い出になりました。
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

export default N3_Story3;