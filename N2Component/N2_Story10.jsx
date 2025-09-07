import { ScrollView, StyleSheet, Text, View } from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N2_Story10({}) {
  

  const tableData = [


  ["Japan", "Hiragana", "Translation"],

  ["入学する", "にゅうがくする", "to enroll (in school/university)"],
  ["間もない", "まもない", "soon after / just after"],
  ["頃", "ころ", "time / period"],
  ["図書室", "としょしつ", "library (reading room)"],
  ["偶然", "ぐうぜん", "by chance / accidentally"],

  ["先輩", "せんぱい", "senior / upperclassman"],
  ["窓際", "まどぎわ", "by the window / windowside"],
  ["席", "せき", "seat"],
  ["真剣", "しんけん", "serious"],
  ["表情", "ひょうじょう", "facial expression"],

  ["姿", "すがた", "figure / appearance"],
  ["落ち着く", "おちつく", "to be calm / settle down"],
  ["大人びる", "おとなびる", "to look/act mature"],
  ["気づく", "きづく", "to notice"],
  ["目で追う", "めでおう", "to follow with one’s eyes"],

  ["廊下", "ろうか", "corridor / hallway"],
  ["すれ違う", "すれちがう", "to pass by each other"],
  ["胸が高鳴る", "むねがたかなる", "heart pounds / races"],
  ["名前", "なまえ", "name"],
  ["呼ぶ", "よぶ", "to call (a name)"],

  ["声", "こえ", "voice"],
  ["裏返る", "うらがえる", "to flip over / (voice) to crack"],
  ["優しい", "やさしい", "kind / gentle"],
  ["後輩", "こうはい", "junior / underclassman"],
  ["問題", "もんだい", "problem / question"],
  
  ["丁寧", "ていねい", "polite / careful"],
  ["教える", "おしえる", "to teach / instruct"],
  ["笑顔", "えがお", "smile"],
  ["特別", "とくべつ", "special"],
  ["切ない", "せつない", "painful / bittersweet"],
  
  ["思い切る", "おもいきる", "to make up one’s mind / take the plunge"],
  ["参考書", "さんこうしょ", "reference book"],
  ["借りる", "かりる", "to borrow"],
  ["ふり", "ふり", "pretend"],
  ["話しかける", "はなしかける", "to talk to / start a conversation"],

  ["教えていただけますか", "おしえていただけますか", "Could you please teach me?"],
  ["震える", "ふるえる", "to tremble / shake"],
  ["必死", "ひっし", "desperate / frantic"],
  ["抑える", "おさえる", "to suppress / hold back"],
  ["微笑む", "ほほえむ", "to smile gently"],

  ["ノート", "のーと", "notebook"],
  ["解き方", "ときかた", "solution method / way of solving"],
  ["隣", "となり", "beside / next to"],
  ["鉛筆", "えんぴつ", "pencil"],
  ["音", "おと", "sound"],

  ["静か", "しずか", "quiet / calm"],
  ["空気", "くうき", "air / atmosphere"],
  ["特別", "とくべつ", "special"],
  ["宝物", "たからもの", "treasure"],
  ["帰り際", "かえりぎわ", "at the time of leaving"],

  ["ふと", "ふと", "suddenly / unexpectedly"],
  ["勉強", "べんきょう", "study"],
  ["頑張る", "がんばる", "to do one’s best"],
  ["一言", "ひとこと", "a single word / brief remark"],
  ["心", "こころ", "heart / mind"],

  ["跳ねる", "はねる", "to jump / leap"],
  ["嬉しい", "うれしい", "happy / glad"],
  ["笑顔", "えがお", "smile"],
  ["頷く", "うなずく", "to nod"],
  ["胸の奥", "むねのおく", "deep in one’s heart"],
  
  ["密かに", "ひそかに", "secretly / quietly"],
  ["願う", "ねがう", "to wish / hope"],
  ["伝える", "つたえる", "to convey / express"],
  ["気持ち", "きもち", "feeling / emotion"],
  ["日", "ひ", "day"],
  ["来る", "くる", "to come"]

  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          先輩に恋して{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          入学して間もない頃、私は図書室で偶然一人の先輩を見かけた。窓際の席に座り、真剣な表情で本を読んでいる姿は、とても落ち着いていて大人びて見えた。
          {"\n"}
          {"\n"}
          その日から、私は気づけば先輩を目で追うようになった。廊下ですれ違うだけで胸が高鳴り、名前を呼ばれると声が裏返りそうになる。
          {"\n"}
          {"\n"}
          先輩は誰にでも優しく、後輩に分からない問題を丁寧に教えてくれる。けれどその笑顔を見られるたびに、「特別なのは私だけじゃない」と少し切なくなった。
          {"\n"}
          {"\n"}
          ある日、思い切って参考書を借りるふりをして先輩に話しかけた。「この問題、教えていただけますか？」震える声を必死に抑えながら。
          {"\n"}
          {"\n"}
          先輩は微笑んで、ノートに分かりやすく解き方を書いてくれた。隣で感じた鉛筆の音と、静かな図書室の空気。その小さな時間さえ、私には特別な宝物のように思えた。
          {"\n"}
          {"\n"}
          帰り際、先輩はふとこんなことを言った。「君、よく図書室にいるよね。勉強、頑張ってるんだな。」
          {"\n"}
          {"\n"}
          それだけの一言で、心が跳ねるように嬉しくなった。私は笑顔で頷きながら、胸の奥で密かに願った。——いつか、この気持ちを伝えられる日が来ますように。
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

export default N2_Story10;
