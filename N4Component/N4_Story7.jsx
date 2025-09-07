import { ScrollView, StyleSheet, Text, View } from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N4_Story7({}) {
  
  const tableData = [

  ["Japan", "Hiragana", "Translation"],

  ["学校", "がっこう", "School"],
  ["空き部屋", "あきべや", "Unused room / Empty room"],
  ["昔", "むかし", "Old times / Long ago"],
  ["使われていない", "つかわれていない", "Not used"],
  ["部屋", "へや", "Room"],

  ["三階", "さんがい", "Third floor"],
  ["一番奥", "いちばんおく", "Farthest back / Innermost"],
  ["鍵", "かぎ", "Key / Lock"],
  ["生徒", "せいと", "Student"],
  ["放課後", "ほうかご", "After school"],
  
  ["先生", "せんせい", "Teacher"],
  ["頼まれて", "たのまれて", "To be asked / requested"],
  ["プリント", "ぷりんと", "Printout / Handout"],
  ["職員室", "しょくいんしつ", "Staff room / Teachers’ room"],
  ["廊下", "ろうか", "Hallway / Corridor"],

  ["気づきました", "きづきました", "Noticed"],
  ["覗く", "のぞく", "To peek / look inside"],
  ["埃っぽい", "ほこりっぽい", "Dusty"],
  ["机", "つくえ", "Desk"],
  ["椅子", "いす", "Chair"],

  ["並んでいました", "ならんでいました", "Were lined up"],
  ["カーテン", "かーてん", "Curtain"],
  ["古くて", "ふるくて", "Old (and...)"],
  ["色あせ", "いろあせ", "Faded color"],
  ["窓", "まど", "Window"],

  ["夕日", "ゆうひ", "Evening sun / Sunset"],
  ["差し込んでいました", "さしこんでいました", "Was shining in / streaming in"],
  ["空気", "くうき", "Air"],
  ["冷たい", "つめたい", "Cold"],
  ["机の上", "つくえのうえ", "On the desk"],

  ["一冊", "いっさつ", "One book / One notebook"],
  ["ノート", "のーと", "Notebook"],
  ["表紙", "ひょうし", "Cover (of a book)"],
  ["名前", "なまえ", "Name"],
  ["中", "なか", "Inside"],

  ["字", "じ", "Character / handwriting"],
  ["また来ます", "またきます", "I will come again"],
  ["ページ", "ぺーじ", "Page"],
  ["白紙", "はくし", "Blank page"],
  ["背中", "せなか", "Back (of body)"],

  ["足音", "あしおと", "Footsteps"],
  ["振り向く", "ふりむく", "To turn around"],
  ["誰もいません", "だれもいません", "No one is there"],
  ["心臓", "しんぞう", "Heart (organ)"],
  ["ドキドキ", "どきどき", "Heart pounding"],
  
  ["置きました", "おきました", "Placed / Put down"],
  ["消えていました", "きえていました", "Had disappeared"],
  ["以来", "いらい", "Since then"],
  ["思い出します", "おもいだします", "Remember / Recall"],
  ["二度と", "にどと", "Never again"],
  ["開いている", "あいている", "Open (state)"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          学校の空き部屋{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          わたしの学校には、昔から使われていない部屋があります。三階の一番奥にあり、いつもカギがかかっています。生徒たちは、その部屋のことを「空き部屋」と呼んでいます。
          {"\n"}
          {"\n"}
          ある放課後、わたしは先生に頼まれてプリントを三階の職員室に届けに行きました。廊下を歩いていると、その空き部屋のドアが少し開いているのに気づきました。
          {"\n"}
          {"\n"}
          中をのぞくと、ほこりっぽい机とイスがならんでいました。カーテンは古くて色あせ、窓からはオレンジ色の夕日が差し込んでいました。なぜか、空気が少し冷たく感じました。
          {"\n"}
          机の上には、一冊のノートが置かれていました。表紙には名前がなく、中にはきれいな字で「また来ます」とだけ書かれていました。ページはそれ一枚だけで、ほかは白紙でした。
          {"\n"}
          {"\n"}
          ふと、背中の方から小さな足音が聞こえました。ふり向くと、廊下にはだれもいません。心臓がドキドキしてきて、わたしはノートを机に置き、部屋を出ました。
          {"\n"}
          {"\n"}
          次の日、同じ場所を通ったとき、そのドアはまた閉まっていて、カギがかかっていました。そして、机の上のノートは消えていました。
          {"\n"}
          {"\n"}
          それ以来、わたしはその廊下を通るたびに、あの夕日の中の空き部屋を思い出します。でも、もう二度とドアが開いているところは見ていません。
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

export default N4_Story7;
