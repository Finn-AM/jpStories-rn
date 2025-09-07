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

function N1_Story8({}) {
  const tableData = [
 ["Japan", "Romaji", "Translation"],

  ["図書館", "としょかん", "library"],
  ["避難所", "ひなんじょ", "refuge / shelter"],
  ["課題", "かだい", "assignment / task"],
  ["言い訳", "いいわけ", "excuse"],
  ["空調", "くうちょう", "air conditioning"],

  ["日課", "にっか", "daily routine"],
  ["先客", "せんきゃく", "previous occupant / earlier visitor"],
  ["束ねる", "たばねる", "to tie / to bind together"],
  ["真剣な眼差し", "しんけんなまなざし", "serious gaze"],

  ["視線", "しせん", "line of sight / gaze"],
  ["吸い寄せられる", "すいよせられる", "to be drawn (to) / attracted"],
  ["手元", "てもと", "at hand / nearby"],
  ["びっしり", "びっしり", "densely / tightly packed"],
  ["注釈", "ちゅうしゃく", "annotation / note"],

  ["横目で見る", "よこめでみる", "to glance sideways at"],
  ["偶然を装う", "ぐうぜんをよそおう", "to pretend coincidence"],
  ["参考書", "さんこうしょ", "reference book"],
  ["微笑む", "ほほえむ", "to smile"],
  ["心臓が跳ねる", "しんぞうがはねる", "heart leaps"],

  ["言葉を交わす", "ことばをかわす", "to exchange words"],
  ["愚痴", "ぐち", "complaint / grumble"],
  ["作家", "さっか", "writer / author"],
  ["ささやか", "ささやか", "modest / small"],
  ["十分", "じゅうぶん", "enough / sufficient"],

  ["思い切って", "おもいきって", "boldly / with courage"],
  ["差し出す", "さしだす", "to offer / to hand out"],
  ["冗談", "じょうだん", "joke"],
  ["形見", "かたみ", "keepsake / memento"],
  ["確信する", "かくしんする", "to be convinced / confident"],

  ["完全に", "かんぜんに", "completely"],
  ["恋に落ちる", "こいにおちる", "to fall in love"],
  ["試験前", "しけんまえ", "before the exam"],
  ["眠気", "ねむけ", "sleepiness"],
  ["格闘する", "かくとうする", "to wrestle / to struggle with"],
  
  ["胸の高鳴り", "むねのたかなり", "heart pounding / excitement"],
  ["落ち着く", "おちつく", "to calm down / to feel settled"],
  ["口実", "こうじつ", "pretext / excuse"],
  ["真っ赤になる", "まっかになる", "to blush deeply"],
  ["読書", "どくしょ", "reading (books)"],
  ["誘う", "さそう", "to invite"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          図書館での恋 {"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          大学の図書館は、私にとって静かな避難所だった。課題をさぼる言い訳として通い、涼しい空調の中で昼寝をするのが日課になっていた。
          {"\n"}
          {"\n"}
          ある日、いつもの席に行くと、そこには先客がいた。長い髪を後ろで束ねた学生が、分厚い本に真剣な眼差しを注いでいた。仕方なく別の席に座ったが、どうしても視線がそちらに吸い寄せられた。
          {"\n"}
          {"\n"}
          翌日も、その人は同じ席にいた。手元のノートにはびっしりと数式や注釈が並んでいて、私は自分の白紙のノートを閉じたまま、ただ横目で観察していた。
          {"\n"}
          {"\n"}
         やがて、偶然を装って声をかける機会が訪れた。参考書を取ろうとして手がぶつかり、「すみません」と同時に謝った瞬間、相手が微笑んだ。心臓が跳ねる音が聞こえそうだった。
          {"\n"}
          {"\n"}
         その後、少しずつ言葉を交わすようになった。課題の愚痴や好きな作家の話など、ささやかな会話でも図書館の空気を温めるには十分だった。
          {"\n"}
          {"\n"}
          ある日、彼女がペンを忘れたと言って困っていたので、私は思い切って自分のペンを差し出した。「返さなくていいよ」と冗談を言うと、彼女は小さく笑って「じゃあ形見にしますね」と答えた。
          {"\n"}
          {"\n"}
          その瞬間、私は確信した。――もう完全に恋に落ちている、と。
          {"\n"}
          {"\n"}
          試験前の最後の夜、彼女が突然「一緒に勉強しますか」と誘ってくれた。眠気と戦いながら隣に座り、必死に数式と格闘したあの時間は、勉強よりも胸の高鳴りの方が強烈だった。
          {"\n"}
          {"\n"}
          試験が終わった後、図書館の前で再び会った時、彼女は私にあのペンを返しながら言った。「やっぱり持っていても落ち着きませんでした。だから、今度は直接あなたに会う口実が欲しいんです」
          {"\n"}
          {"\n"}
          私は顔を真っ赤にしながらもう一度ペンを受け取り、そして彼女に「じゃあ今度はカフェで一緒に本を読みませんか」と言った。
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

export default N1_Story8;
