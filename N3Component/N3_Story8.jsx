import { ScrollView, StyleSheet, Text, View } from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N3_Story8({}) {

  const tableData = [

  ["Japan", "Hiragana", "Translation"],
  
  ["小さな", "ちいさな", "Small"],
  ["探偵", "たんてい", "Detective"],
  ["町", "まち", "Town"],
  ["本屋", "ほんや", "Bookstore"],
  ["裏", "うら", "Back / Behind"],

  ["探偵事務所", "たんていじむしょ", "Detective agency / office"],
  ["普通", "ふつう", "Normal / Ordinary"],
  ["人", "ひと", "Person"],
  ["小学生", "しょうがくせい", "Elementary school student"],
  ["魔法", "まほう", "Magic"],

  ["使う", "つかう", "To use"],
  ["名前", "なまえ", "Name"],
  ["学校", "がっこう", "School"],
  ["目立たない", "めだたない", "Unnoticeable / Inconspicuous"],
  ["存在", "そんざい", "Existence"],

  ["不思議", "ふしぎ", "Mysterious / Strange"],
  ["事件", "じけん", "Incident / Case"],
  ["頼る", "たよる", "To rely on"],
  ["パン屋", "ぱんや", "Bakery"],
  ["看板猫", "かんばんねこ", "Mascot cat (literally 'signboard cat')"],

  ["突然", "とつぜん", "Suddenly"],
  ["いなくなる", "いなくなる", "To disappear"],
  ["大騒ぎ", "おおさわぎ", "Big fuss / Commotion"],
  ["夜", "よる", "Night"],
  ["眠る", "ねむる", "To sleep"],

  ["習慣", "しゅうかん", "Habit / Custom"],
  ["姿", "すがた", "Figure / Appearance"],
  ["消える", "きえる", "To disappear"],
  ["足跡", "あしあと", "Footprint"],
  ["虫眼鏡", "むしめがね", "Magnifying glass"],

  ["取り出す", "とりだす", "To take out"],
  ["レンズ", "れんず", "Lens"],
  ["浮かび上がる", "うかびあがる", "To emerge / To appear"],
  ["抜ける", "ぬける", "To go through / To pass"],
  ["森", "もり", "Forest"],

  ["奥", "おく", "Inner part / Deep inside"],
  ["古い", "ふるい", "Old"],
  ["井戸", "いど", "Well (water)"],
  ["そば", "そば", "Beside / Near"],
  ["止まる", "とまる", "To stop"],

  ["背中", "せなか", "Back (of the body)"],
  ["黒い", "くろい", "Black"],
  ["影", "かげ", "Shadow"],
  ["まとわりつく", "まとわりつく", "To cling / To stick to"],
  ["やっぱり", "やっぱり", "As expected / After all"],

  ["つぶやく", "つぶやく", "To murmur / To mutter"],
  ["杖", "つえ", "Staff / Cane"],
  ["かざす", "かざす", "To hold up / To raise"],
  ["呪文", "じゅもん", "Spell / Incantation"],
  ["唱える", "となえる", "To chant / To recite"],

  ["煙", "けむり", "Smoke"],
  ["消えていく", "きえていく", "To fade away / To vanish"],
  ["鳴く", "なく", "To meow (for animals)"],
  ["飛びつく", "とびつく", "To jump at / To leap"],
  ["悪戯好き", "いたずらずき", "Mischievous / Fond of pranks"],

  ["精霊", "せいれい", "Spirit / Fairy"],
  ["連れ去る", "つれさる", "To carry away / To abduct"],
  ["無事", "ぶじ", "Safe / Without trouble"],
  ["声をそろえる", "こえをそろえる", "To say in unison"],
  ["照れる", "てれる", "To be shy / To feel embarrassed"],
  
  ["心の中", "こころのなか", "In one’s heart / Mind"],
  ["守る", "まもる", "To protect / To guard"],
  ["人々", "ひとびと", "People"],
  ["呼ぶ", "よぶ", "To call / To name"],
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          小さな探偵{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          町の本屋の裏には、小さな探偵事務所があります。けれども、その探偵は普通の人ではありません。彼はまだ小学生で、しかも魔法を使えるのです。
          {"\n"}
          {"\n"}
          名前は亮（りょう）。学校では目立たない存在ですが、町で起きる不思議な事件は、みんな彼に頼っていました。
          {"\n"}
          {"\n"}
          ある日、パン屋の看板猫が突然いなくなりました。町の人たちは大騒ぎでした。猫は夜になるとお店の前で眠るのが習慣だったのに、その姿が消えたのです。
          {"\n"}
          {"\n"}
          亮は猫の足跡を見つけ、魔法の虫眼鏡を取り出しました。そのレンズをのぞくと、普通の人には見えない光の道が浮かび上がります。
          {"\n"}
          {"\n"}
          足跡は町を抜け、小さな森の中へと続いていました。森の奥に行くと、古い井戸のそばで光が止まりました。
          {"\n"}
          {"\n"}
          井戸をのぞくと、そこに猫がちょこんと座っていました。しかし、その背中には小さな黒い影がまとわりついていたのです。
          {"\n"}
          {"\n"}
          「やっぱり…」亮はつぶやき、杖をかざしました。小さな呪文を唱えると、黒い影は煙のように消えていきました。
          {"\n"}
          {"\n"}
          猫は元気に鳴いて、亮の足元に飛びつきました。どうやら、悪戯好きの精霊が猫を連れ去っていたようです。
          {"\n"}
          {"\n"}
          次の日、猫は無事にパン屋に戻り、町の人たちは大喜びでした。「ありがとう、亮くん！」とみんなが声をそろえました。
          {"\n"}
          {"\n"}
          亮は少し照れながらも、心の中で思いました。「僕はまだ小さいけれど、この町の探偵として、これからもみんなを守っていこう」と。そしてその日から、町の人々は彼を「小さな探偵」と呼ぶようになりました。
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

export default N3_Story8;