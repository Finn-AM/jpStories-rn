import { ScrollView, StyleSheet, Text, View } from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N2_Story2({}) {
  const tableData = [

  ["Japan", "Hiragana", "Translation"],

  ["森", "もり", "Forest"],
  ["迷う", "まよう", "To get lost, to be confused"],
  ["春休み", "はるやすみ", "Spring vacation"],
  ["友人", "ゆうじん", "Friend"],
  ["村", "むら", "Village"],

  ["自然", "しぜん", "Nature"],
  ["都会", "とかい", "City, urban area"],
  ["静けさ", "しずけさ", "Silence, stillness"],
  ["昼食", "ちゅうしょく", "Lunch"],
  ["散歩", "さんぽ", "Walk, stroll"],

  ["道", "みち", "Path, road"],
  ["安心", "あんしん", "Relief, peace of mind"],
  ["途中", "とちゅう", "On the way, in the middle of"],
  ["小道", "こみち", "Path, narrow trail"],
  ["好奇心", "こうきしん", "Curiosity"],
  
  ["景色", "けしき", "Scenery, landscape"],
  ["木々", "きぎ", "Trees"],
  ["振り返る", "ふりかえる", "To look back"],
  ["胸", "むね", "Chest, heart (figurative)"],
  ["携帯電話", "けいたいでんわ", "Mobile phone"],

  ["電波", "でんぱ", "Signal, radio wave"],
  ["無情", "むじょう", "Heartless, cruel, merciless"],
  ["冷え込む", "ひえこむ", "To get chilly"],
  ["風", "かぜ", "Wind"],
  ["音", "おと", "Sound"],

  ["気配", "けはい", "Indication, presence, sign"],
  ["視線", "しせん", "Gaze, glance"],
  ["背筋", "せすじ", "Spine, back"],
  ["凍る", "こおる", "To freeze"],
  ["必死", "ひっし", "Frantic, desperate"],

  ["出口", "でぐち", "Exit"],
  ["区別", "くべつ", "Distinction, differentiation"],
  ["疲れ果てる", "つかれはてる", "To be exhausted"],
  ["灯り", "あかり", "Light, lamp"],
  ["小屋", "こや", "Hut, cabin"],

  ["扉", "とびら", "Door"],
  ["半開き", "はんびらき", "Half-open"],
  ["漏れる", "もれる", "To leak, to escape"],
  ["呻き声", "うめきごえ", "Groan, moan"],
  ["不気味", "ぶきみ", "Eerie, creepy"],

  ["後ずさり", "あとずさり", "Step back, recoil"],
  ["脈打つ", "みゃくうつ", "To throb, to pulsate"],
  ["囁く", "ささやく", "To whisper"],
  ["安堵", "あんど", "Relief"],
  ["涙", "なみだ", "Tear(s)"],

  ["駆け寄る", "かけよる", "To run up to"],
  ["姿", "すがた", "Figure, form, appearance"],
  ["闇", "やみ", "Darkness"],
  ["震える", "ふるえる", "To tremble, to shake"],
  
  ["松明", "たいまつ", "Torch"],
  ["助ける", "たすける", "To save, to help"],
  ["影", "かげ", "Shadow, silhouette"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          森で迷って{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          春休みのある日、私は友人たちと山奥の小さな村を訪れた。自然が豊かで、都会では感じられない静けさがそこにはあった。
          {"\n"}
          {"\n"}
          昼食の後、私は一人で近くの森を散歩することにした。道は整備されていて、最初は安心して歩いていた。しかし、途中から細い獣道のような小道が現れ、好奇心に負けてそちらへ足を踏み入れてしまった。
          {"\n"}
          {"\n"}
          気がつくと、周囲はすっかり見知らぬ景色になっていた。木々が高くそびえ立ち、空はほとんど見えない。振り返っても来た道がどこなのか分からなくなり、胸の奥がざわつき始めた。
          {"\n"}
          {"\n"}
          携帯電話を取り出してみたが、電波は届いていなかった。時間だけが無情に過ぎていき、太陽は木々の間に隠れようとしていた。森の奥は急に冷え込み、風の音がやけに大きく聞こえる。
          {"\n"}
          {"\n"}
          ふと耳を澄ますと、誰かの足音のような気配がした。振り返ったが、誰もいない。ただ、木の陰からじっとこちらを見ている視線のようなものを感じて、背筋が凍った。
          {"\n"}
          {"\n"}
          私は必死に走り出した。だが、どこを走っても同じような木々ばかりで、出口は見えなかった。足元の枯れ枝が折れる音さえ、自分の音なのか誰かの音なのか区別できない。
          {"\n"}
          {"\n"}
          疲れ果て、立ち止まったその時、木の間からかすかな灯りが見えた。近づいてみると、それは古びた小屋だった。扉は半開きで、中からは暖かい光が漏れている。
          {"\n"}
          {"\n"}
          「助かった……」と胸をなで下ろし、扉を開けようとした瞬間、中から低い声が聞こえた。言葉ではなく、呻き声のような、不気味な音だった。私は思わず一歩後ずさり、心臓が激しく脈打った。
          {"\n"}
          {"\n"}
          その時、背後から「こっちだよ」と囁く声がした。振り返ると、友人の美咲が立っていた。安堵のあまり涙が出そうになり、私は彼女に駆け寄った。
          {"\n"}
          {"\n"}
          しかし、次の瞬間、彼女の姿は木々の闇に溶けるように消えてしまった。そこには誰もいなかった。私は震える足でその場に座り込み、もう声を上げることすらできなかった。
          {"\n"}
          {"\n"}
          どれほど時間が経ったのか分からない。気づいた時には、村の人たちが松明を持って私を探しに来てくれていた。私は泣きながら助け出されたが、あの森で見た「美咲の影」については、誰にも話さなかった。
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

export default N2_Story2;
