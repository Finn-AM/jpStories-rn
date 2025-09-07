import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N4_Story3({}) {
  const tableData = [

  ["Japan", "Hiragana", "Translation"],

  ["帰ってきた", "かえってきた", "Came back / Returned"],
  ["私", "わたし", "I / Me"],
  ["小さい", "ちいさい", "Small"],
  ["黒い", "くろい", "Black"],
  ["猫", "ねこ", "Cat"],

  ["飼っています", "かっています", "Keeping / Raising (a pet)"],
  ["名前", "なまえ", "Name"],
  ["ある日", "あるひ", "One day"],
  ["学校", "がっこう", "School"],
  ["帰る", "かえる", "To return"],

  ["家", "いえ", "House / Home"],
  ["中", "なか", "Inside"],
  ["庭", "にわ", "Garden / Yard"],
  ["探しました", "さがしました", "Searched / Looked for"],
  ["どこにも", "どこにも", "Nowhere / Anywhere"],

  ["心配", "しんぱい", "Worry / Concern"],
  ["次の日", "つぎのひ", "The next day"],
  ["毎日", "まいにち", "Every day"],
  ["近所", "きんじょ", "Neighborhood"],
  ["歩く", "あるく", "To walk"],

  ["呼びながら", "よびながら", "While calling"],
  ["町の人", "まちのひと", "Town people"],
  ["聞きました", "ききました", "Asked / Heard"],
  ["見つかりませんでした", "みつかりませんでした", "Was not found"],
  ["三日目", "みっかめ", "The third day"],

  ["夕方", "ゆうがた", "Evening"],
  ["帰り道", "かえりみち", "Way back / Way home"],
  ["声", "こえ", "Voice / Sound"],
  ["方", "ほう", "Direction / Way"],
  ["木", "き", "Tree"],

  ["下", "した", "Under / Below"],
  ["座っていました", "すわっていました", "Was sitting"],
  ["駆け寄って", "かけよって", "Ran up to"],
  ["抱きしめました", "だきしめました", "Hugged tightly"],
  ["埃だらけ", "ほこりだらけ", "Full of dust / Dusty"],

  ["元気そう", "げんきそう", "Seeming healthy / Looking well"],
  ["嬉しくて", "うれしくて", "So happy that..."],
  ["涙", "なみだ", "Tears"],
  ["出ました", "でました", "Came out / Appeared"],
  ["言いました", "いいました", "Said"],
  
  ["そば", "そば", "Beside / Near"],
  ["離れなくなりました", "はなれなくなりました", "Became inseparable"],
  ["夜", "よる", "Night"],
  ["ベッド", "べっど", "Bed"],
  ["上", "うえ", "On / Above"],
  ["寝る", "ねる", "To sleep"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          帰ってきたわたしのねこ {"\n"}
          {"\n"}{" "}
        </Text>
        
        <Text style={styles.artikel}>
          わたしは小さい黒いねこをかっています。名前は「くろ」です。ある日、学校から帰ると、くろがいませんでした。家の中も庭もさがしましたが、どこにもいません。わたしはとても心配になりました。
          {"\n"}
          {"\n"}
          次の日から、わたしは毎日近所を歩いて、くろをさがしました。「くろー！」とよびながら、町の人にも聞きました。でも、見つかりませんでした。
          {"\n"}
          {"\n"}
          三日目の夕方、学校の帰り道で、小さな声が聞こえました。「にゃー」。その声の方を見ると、くろが木の下に座っていました。わたしはすぐにかけよって、だきしめました。
          {"\n"}
          {"\n"}
          くろは少しほこりだらけでしたが、元気そうでした。わたしはうれしくて涙が出ました。「もう、どこにも行かないでね」と言いました。
          {"\n"}
          {"\n"}
          その日から、くろはわたしのそばをはなれなくなりました。夜も、わたしのベッドの上で寝るようになりました。
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

export default N4_Story3;
