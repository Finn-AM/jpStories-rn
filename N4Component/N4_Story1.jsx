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

function N4_Story1({}) {
  const tableData = [

  ["Japan", "Hiragana", "Translation"],
      
  ["学校", "がっこう", "School"],
  ["帰り道", "かえりみち", "Way home"],
  ["古い", "ふるい", "Old"],
  ["神社", "じんじゃ", "Shinto shrine"],
  ["中", "なか", "Inside"],

  ["大きな", "おおきな", "Big"],
  ["木", "き", "Tree"],
  ["立っていました", "たっていました", "Was standing"],
  ["下", "した", "Below / Under"],
  ["小さな", "ちいさな", "Small"],

  ["光る", "ひかる", "To shine / Glow"],
  ["石", "いし", "Stone"],
  ["手に取る", "てにとる", "To take in hand"],
  ["景色", "けしき", "Scenery / View"],
  ["急に", "きゅうに", "Suddenly"],

  ["変わりました", "かわりました", "Changed"],
  ["気がつく", "きがつく", "To notice / Realize"],
  ["知らない", "しらない", "Unknown / Don’t know"],
  ["町", "まち", "Town"],
  ["紫色", "むらさきいろ", "Purple color"],

  ["動物", "どうぶつ", "Animal"],
  ["歩いていました", "あるいていました", "Was walking"],
  ["人たち", "ひとたち", "People"],
  ["顔", "かお", "Face"],
  ["おばあさん", "おばあさん", "Old woman / Grandma"],

  ["優しい", "やさしい", "Kind / Gentle"],
  ["声をかける", "こえをかける", "To call out to / Speak to"],
  ["異世界", "いせかい", "Another world"],
  ["言いました", "いいました", "Said"],
  ["驚きました", "おどろきました", "Was surprised"],

  ["わくわくしました", "わくわくしました", "Got excited"],
  ["招く", "まねく", "To invite"],
  ["パン", "ぱん", "Bread"],
  ["温かい", "あたたかい", "Warm"],
  ["スープ", "すーぷ", "Soup"],

  ["広場", "ひろば", "Public square / Plaza"],
  ["お祭り", "おまつり", "Festival"],
  ["色とりどり", "いろとりどり", "Colorful / Various colors"],
  ["飾り", "かざり", "Decoration"],
  ["音楽", "おんがく", "Music"],

  ["流れていました", "ながれていました", "Was flowing / Playing"],
  ["踊り", "おどり", "Dance"],
  ["混ざる", "まざる", "To join / To mix"],
  ["友だち", "ともだち", "Friend"],
  ["時計", "とけい", "Clock / Watch"],

  ["不安", "ふあん", "Anxiety / Uneasiness"],
  ["返す", "かえす", "To return (something)"],
  ["握る", "にぎる", "To grasp / Hold tightly"],
  ["元の世界", "もとのせかい", "Original world"],
  ["心の中", "こころのなか", "In one’s heart / Mind"],

  ["帰れます", "かえれます", "Can return"],
  ["笑顔", "えがお", "Smiling face"],
  ["深く", "ふかく", "Deeply"],
  ["お礼", "おれい", "Thanks / Gratitude"],
  ["瞬間", "しゅんかん", "Moment / Instant"],

  ["暗い", "くらい", "Dark"],
  ["星", "ほし", "Star"],
  ["夢", "ゆめ", "Dream"],
  ["一日", "いちにち", "One day"],
  ["時々", "ときどき", "Sometimes"],
  
  ["遊びに行く", "あそびにいく", "To go play / Visit for fun"],
  ["必ず", "かならず", "Always / Without fail"],
  ["夜", "よる", "Night"],
  ["前", "まえ", "Before"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          異世界の一日 {"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          ある日、わたしは学校からの帰り道で、古い神社の前を通りました。神社の中に、大きな木が立っていました。その木の下に、小さな光る石がありました。わたしがその石を手に取ると、まわりの景色が急に変わりました。
          {"\n"}
          {"\n"}
          気がつくと、そこは知らない町でした。空は紫色で、見たことのない動物が歩いていました。町の人たちは、わたしを見るとびっくりした顔をしました。でも、あるおばあさんがやさしく声をかけてくれました。
          {"\n"}
          {"\n"}
          「ここは異世界ですよ。」とおばあさんは言いました。わたしはとてもおどろきましたが、少しわくわくしました。おばあさんは家に招いてくれて、パンとあたたかいスープを出してくれました。
          {"\n"}
          {"\n"}
          その後、町の広場で大きなお祭りがありました。色とりどりのかざりと、楽しい音楽が流れていました。わたしは踊りにまざり、町の人と友だちになりました。
          {"\n"}
          {"\n"}
          しかし、ふと時計を見ると、もう夕方になっていました。わたしは帰り道がわからなくて、少し不安になりました。すると、おばあさんがあの光る石をわたしに返してくれました。
          {"\n"}
          {"\n"}
          「その石をにぎって、『もとの世界』と心の中で言えば、帰れますよ。」おばあさんは笑顔で言いました。わたしは深くお礼を言って、石を強くにぎりました。
          {"\n"}
          {"\n"}
          次の瞬間、目の前の景色がまた変わり、わたしは神社の木の下に立っていました。空はもう暗く、星が光っていました。まるで夢のような一日でした
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

export default N4_Story1;
