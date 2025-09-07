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

function N1_Story1({}) {
  const tableData = [
    ["Japan", "Romaji", "Translation"],

  ["木", "き", "tree"],
  ["家", "いえ", "house"],
  ["子供", "こども", "child"],
  ["頃", "ころ", "time / when"],
  ["裏山", "うらやま", "back hill / mountain behind the house"],

  ["大樹", "たいじゅ", "large tree"],
  ["父", "ちち", "father"],
  ["一緒に", "いっしょに", "together with"],
  ["小さな", "ちいさな", "small"],
  ["木造", "もくぞう", "wooden structure"],

  ["枝", "えだ", "branch"],
  ["村", "むら", "village"],
  ["見渡す", "みわたす", "to look over / to overlook"],
  ["夕暮れ", "ゆうぐれ", "dusk / evening"],
  ["山裾", "やますそ", "foot of the mountain"],

  ["灯", "あかり", "light / lamp"],
  ["灯火", "とうか", "light / lamplight"],
  ["瞬く", "またたく", "to twinkle / to flicker"],
  ["秘密基地", "ひみつきち", "secret base"],
  ["避難所", "ひなんじょ", "shelter / refuge"],

  ["心の拠り所", "こころのよりどころ", "emotional support / mental refuge"],
  ["大学進学", "だいがくしんがく", "entering university"],
  ["都会", "とかい", "city / urban area"],
  ["十年以上", "じゅうねんいじょう", "more than ten years"],
  ["訪れる", "おとずれる", "to visit"],

  ["急逝", "きゅうせい", "sudden death"],
  ["遺品整理", "いひんせいり", "sorting a deceased person's belongings"],
  ["懐かしさ", "なつかしさ", "nostalgia"],
  ["誘う", "さそう", "to invite / to lead"],
  ["足を運ぶ", "あしをはこぶ", "to go / to visit"],

  ["根", "ね", "root"],
  ["苔むす", "こけむす", "to be moss-covered"],
  ["梯子", "はしご", "ladder"],
  ["慎重に", "しんちょうに", "carefully / cautiously"],
  ["姿を現す", "すがたをあらわす", "to appear"],

  ["腐朽", "ふきゅう", "decay / rot"],
  ["扉", "とびら", "door"],
  ["埃", "ほこり", "dust"],
  ["湿気", "しっけ", "humidity / dampness"],
  ["朽ちる", "くちる", "to rot / to decay"],

  ["木材", "もくざい", "wood / lumber"],
  ["匂い", "におい", "smell"],
  ["落書き", "らくがき", "graffiti / scribble"],
  ["取り残される", "とりのこされる", "to be left behind"],
  ["日記", "にっき", "diary"],

  ["表紙", "ひょうし", "cover (of a book)"],
  ["擦れる", "すれる", "to wear off / to fade"],
  ["記録", "きろく", "record / note"],
  ["頁", "ページ", "page"],
  ["幼い", "おさない", "childish / young"],

  ["筆跡", "ひっせき", "handwriting"],
  ["背筋", "せすじ", "spine / backbone"],
  ["凍り付く", "こおりつく", "to freeze (with fear)"],
  ["文言", "もんごん", "words / phrases"],
  ["延々と", "えんえんと", "endlessly / continuously"],

  ["赤黒い", "あかぐろい", "dark red / bloodstained"],
  ["滲む", "にじむ", "to smear / to blur"],
  ["風", "かぜ", "wind"],
  ["軋む", "きしむ", "to creak"],
  ["耳を澄ます", "みみをすます", "to listen carefully"],
  ["気配", "けはい", "sign / presence / indication"],

  ["囁き声", "ささやきごえ", "whispering voice"],
  ["恐怖", "きょうふ", "fear / terror"],
  ["駆られる", "かられる", "to be driven by (emotion)"],
  ["慌てる", "あわてる", "to panic / to hurry"],
  ["飛び出す", "とびだす", "to rush out"],

  ["駆け降りる", "かけおりる", "to run down"],
  ["影", "かげ", "shadow"],
  ["無人", "むじん", "uninhabited / unoccupied"],
  ["麓", "ふもと", "foot of a mountain"],
  ["深刻な", "しんこくな", "serious / grave"],
  
  ["寄宿木", "きしゅくぼく", "“parasite tree” / tree that lodges souls (local belief)"],
  ["呼び寄せる", "よびよせる", "to summon / to attract"],
  ["取り込む", "とりこむ", "to take in / to absorb"],
  ["近づく", "ちかづく", "to approach"],
  ["渡る", "わたる", "to cross / to go across"],
  ["待ち続ける", "まちつづける", "to keep waiting"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          木の上の家 {"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          子供の頃、裏山の大樹に父と一緒に小さな木造の家を作った。枝の間からは村全体が見渡せ、夕暮れ時には山裾に灯る家々の灯火がまるで星空の逆映のように瞬いていた。私にとってそこは、秘密基地であり避難所であり、心の拠り所だった。
          {"\n"}
          {"\n"}
          大学進学のため都会に出てからは、十年以上その家を訪れることはなかった。だが母が急逝し、遺品整理のため久方ぶりに実家へ戻った折、ふと懐かしさに誘われて裏山へと足を運んだ。
          {"\n"}
          {"\n"}
          木は以前よりもはるかに巨大になり、根は地面を割るほどに張り巡らされていた。苔むした梯子を慎重に登ると、当時のままの木の家が姿を現した。腐朽は進んでいたが、不思議と形は保たれている。
          {"\n"}
          {"\n"}
          扉を開けると、内部は埃と湿気に満ち、朽ちかけた木材の匂いが鼻をついた。それでも机や椅子、私が子供の頃に書いた落書きまでそのまま残っている。時の流れに取り残された小さな世界。
          {"\n"}
          {"\n"}
          しかし、そこには見覚えのない古びた日記が置かれていた。表紙には擦れた文字で「記録」とだけ記されている。頁をめくると、幼い字で私の名が何度も書き連ねられていた。けれど、その筆跡は私のものではなかった。
          {"\n"}
          {"\n"}
          読むうちに背筋が凍り付いた。そこには「彼は必ず戻ってくる」「夜になると声が聞こえる」「木が呼んでいる」といった文言が延々と繰り返されていた。最終頁には、赤黒く滲んだ文字で「次は私の番だ」と書かれていた。
          た。けれど、その筆跡は私のものではなかった。
          {"\n"}
          {"\n"}
          突然、外から風が吹き込み、家全体が軋んだ。耳を澄ますと、確かに誰かが梯子を登ってくる気配がある。ぎしぎしと木がきしむ音の合間に、かすかな囁き声が混じっていた。「……戻ってきた……」
          {"\n"}
          {"\n"}
          恐怖に駆られた私は慌てて外へ飛び出し、梯子を駆け降りた。振り返ると、窓の中に子供のような影が立ってこちらを見下ろしていた。だが、そこは確かに無人のはずの家だった。
          {"\n"}
          {"\n"}
          麓まで一気に走り抜け、振り返ることなく家に戻った。翌朝、父にその出来事を話すと、父は深刻な顔で言った。「あの木は、この土地で昔から“寄宿木”と呼ばれてきたんだ。人の心を呼び寄せ、取り込むと……」
          {"\n"}
          {"\n"}
          それ以来、私は二度と裏山に近づいていない。だが夜になると、窓の外から木々を渡る囁きが聞こえる気がする。まるで、あの木の上の家が、今も私を待ち続けているかのように。
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

export default N1_Story1;
