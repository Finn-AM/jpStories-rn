import { ScrollView, StyleSheet, Text, View } from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N3_Story6({}) {
  const tableData = [

  ["Japan", "Hiragana", "Translation"],

  ["小さな", "ちいさな", "Small"],
  ["町", "まち", "Town"],
  ["事件", "じけん", "Incident / Case"],
  ["静か", "しずか", "Quiet / Calm"],
  ["お互い", "おたがい", "Each other"],

  ["顔", "かお", "Face"],
  ["知っている", "しっている", "To know"],
  ["大きな", "おおきな", "Big / Large"],
  ["一度も", "いちども", "Not even once"],
  ["奇妙", "きみょう", "Strange / Odd"],

  ["出来事", "できごと", "Event / Happening"],
  ["広場", "ひろば", "Square / Plaza"],
  ["古い", "ふるい", "Old"],
  ["時計台", "とけいだい", "Clock tower"],
  ["鐘", "かね", "Bell"],

  ["重い", "おもい", "Heavy"],
  ["大人", "おとな", "Adult"],
  ["数人", "すうにん", "Several people"],
  ["動かす", "うごかす", "To move"],
  ["人々", "ひとびと", "People"],

  ["驚く", "おどろく", "To be surprised"],
  ["誰", "だれ", "Who"],
  ["口々に", "くちぐちに", "All at once / In chorus"],
  ["警察", "けいさつ", "Police"],
  ["調べる", "しらべる", "To investigate / Examine"],

  ["手がかり", "てがかり", "Clue / Lead"],
  ["見つかる", "みつかる", "To be found"],
  ["興味", "きょうみ", "Interest"],
  ["学校", "がっこう", "School"],
  ["帰り", "かえり", "Return / Way back"],

  ["塔", "とう", "Tower"],
  ["泥", "どろ", "Mud"],
  ["足跡", "あしあと", "Footprint"],
  ["残る", "のこる", "To remain / To be left"],
  ["子ども", "こども", "Child"],

  ["盗む", "ぬすむ", "To steal"],
  ["町外れ", "まちはずれ", "Outskirts of town"],
  ["倉庫", "そうこ", "Warehouse"],
  ["扉", "とびら", "Door"],
  ["金属", "きんぞく", "Metal"],

  ["息を殺す", "いきをころす", "To hold one’s breath"],
  ["覗く", "のぞく", "To peek / To look into"],
  ["有名", "ゆうめい", "Famous"],
  ["修理屋", "しゅうりや", "Repairman"],
  ["分解する", "ぶんかいする", "To dismantle / To take apart"],

  ["磨く", "みがく", "To polish / To shine"],
  ["思わず", "おもわず", "Unintentionally / Involuntarily"],
  ["内緒", "ないしょ", "Secret"],
  ["ひび", "ひび", "Crack"],
  ["こっそり", "こっそり", "Secretly / Stealthily"],

  ["翌日", "よくじつ", "The next day"],
  ["再び", "ふたたび", "Again / Once more"],
  ["大喜び", "おおよろこび", "Great joy"],
  ["真実", "しんじつ", "Truth"],
  ["見た目", "みため", "Appearance / Look"],
  
  ["謎", "なぞ", "Mystery / Riddle"],
  ["経験", "けいけん", "Experience"],
  ["忘れられない", "わすれられない", "Unforgettable"],
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          小さな町の事件{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          私が住んでいる町は、とても小さくて静かな町です。みんながお互いの顔を知っていて、大きな事件なんて一度もありませんでした。
          {"\n"}
          {"\n"}
          しかし、ある朝、その町に奇妙な出来事が起こりました。町の広場にある古い時計台の鐘がなくなっていたのです。鐘はとても重く、大人でも数人いなければ動かせないはずでした。
          {"\n"}
          {"\n"}
          町の人々はみんな驚きました。「誰がこんなことを？」と口々に話し合いました。警察も調べ始めましたが、手がかりはまったく見つかりません。
          {"\n"}
          {"\n"}
          私は興味があって、学校の帰りに時計台を見に行きました。すると、塔の近くに泥のついた足跡が残っているのを見つけました。それは子どもの足跡のように小さかったのです。
          {"\n"}
          {"\n"}
          「子どもが鐘を盗めるわけがない」と思いましたが、なぜか気になって、その足跡をたどってみました。足跡は町外れの古い倉庫へ続いていました。
          {"\n"}
          {"\n"}
          倉庫の扉は少しだけ開いていて、中から金属の音が聞こえました。私は息を殺してのぞきました。そこには、町で有名な修理屋のおじいさんがいました。
          {"\n"}
          {"\n"}
          おじいさんは鐘を分解し、磨いていました。私は思わず声を出してしまいました。「どうして鐘を持ち出したんですか？」
          {"\n"}
          {"\n"}
          おじいさんは驚いた顔をしましたが、すぐに笑って言いました。「町の人には内緒にしたかったんだよ。鐘が古くてひびが入っていたから、夜中にこっそり修理していたんだ。」
          {"\n"}
          {"\n"}
          次の日、修理された鐘は再び時計台に戻され、町の人々は大喜びしました。誰もが事件だと思っていたことは、実はただの秘密の修理だったのです。
          {"\n"}
          {"\n"}
          それ以来、私は「真実は見た目と違うこともある」と学びました。小さな町に起きた小さな謎は、私にとって忘れられない経験になりました。
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

export default N3_Story6;
