import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N3_Story4({}) {

  const tableData = [

  ["Japan", "Hiragana", "Translation"],

  ["雲", "くも", "Cloud"],
  ["町", "まち", "Town"],
  ["ある日", "あるひ", "One day"],
  ["山", "やま", "Mountain"],
  ["奥", "おく", "Deep inside / Interior"],
  
  ["不思議", "ふしぎ", "Mysterious / Strange"],
  ["階段", "かいだん", "Stairs"],
  ["続く", "つづく", "To continue"],
  ["登る", "のぼる", "To climb"],
  ["息を切らす", "いきをきらす", "To be out of breath"],

  ["包まれる", "つつまれる", "To be wrapped / enveloped"],
  ["光", "ひかり", "Light"],
  ["現れる", "あらわれる", "To appear"],
  ["浮かぶ", "うかぶ", "To float"],
  ["家々", "いえいえ", "Houses"],

  ["石", "いし", "Stone"],
  ["屋根", "やね", "Roof"],
  ["透き通る", "すきとおる", "To be transparent / clear"],
  ["道", "みち", "Road / Path"],
  ["両側", "りょうがわ", "Both sides"],

  ["咲く", "さく", "To bloom"],
  ["鳥", "とり", "Bird"],
  ["虹色", "にじいろ", "Rainbow-colored"],
  ["羽", "はね", "Wings / Feathers"],
  ["歩く", "あるく", "To walk"],

  ["人々", "ひとびと", "People"],
  ["近づく", "ちかづく", "To approach"],
  ["背中", "せなか", "Back (of body)"],
  ["沈む", "しずむ", "To sink"],
  ["ようこそ", "ようこそ", "Welcome"],

  ["少女", "しょうじょ", "Girl"],
  ["声", "こえ", "Voice"],
  ["鈴", "すず", "Bell"],
  ["澄む", "すむ", "To be clear / pure"],
  ["心", "こころ", "Heart / Mind"],

  ["落ち着く", "おちつく", "To calm down"],
  ["水", "みず", "Water"],
  ["流れ落ちる", "ながれおちる", "To flow down"],
  ["飲む", "のむ", "To drink"],
  ["甘い", "あまい", "Sweet"],

  ["畑", "はたけ", "Field / Farm"],
  ["果物", "くだもの", "Fruit"],
  ["実る", "みのる", "To bear fruit / to ripen"],
  ["体", "からだ", "Body"],
  ["軽くなる", "かるくなる", "To become light"],

  ["夜", "よる", "Night"],
  ["星空", "ほしぞら", "Starry sky"],
  ["広がる", "ひろがる", "To spread / expand"],
  ["言葉", "ことば", "Word / Language"],
  ["失う", "うしなう", "To lose"],

  ["地上", "ちじょう", "The ground / Earth"],
  ["帰る", "かえる", "To return"],
  ["静かに", "しずかに", "Quietly"],
  ["寂しい", "さびしい", "Lonely / Sad"],
  ["家族", "かぞく", "Family"],

  ["思い出す", "おもいだす", "To remember / Recall"],
  ["微笑む", "ほほえむ", "To smile"],
  ["送る", "おくる", "To send / escort"],
  ["ふもと", "ふもと", "Foot (of a mountain)"],
  
  ["広がっている", "ひろがっている", "Is spreading / extending"],
  ["存在する", "そんざいする", "To exist"],
  ["夢", "ゆめ", "Dream"],
  ["確かに", "たしかに", "Surely / Certainly"],
  ["残る", "のこる", "To remain / stay"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          雲の上の町 {"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          ある日、私は山の奥で不思議な階段を見つけました。その階段は雲の中へと続いていて、どこまで登っても終わりが見えませんでした。
          {"\n"}
          {"\n"}
          息を切らしながら登り続けると、突然、白い光に包まれました。そして目の前に現れたのは、雲の上に浮かぶ大きな町でした。
          {"\n"}
          {"\n"}
         町の家々はすべて白い石でできていて、屋根はガラスのように透き通っていました。道の両側には光る花が咲き、空を渡る鳥たちは虹色の羽を持っていました。
          {"\n"}
          {"\n"}
          私は驚きながら歩いていると、町の人々が近づいてきました。彼らは人間のように見えましたが、背中には小さな羽があり、足は雲の上でも沈みませんでした。
          {"\n"}
          {"\n"}
          「ようこそ、雲の町へ」と一人の少女が言いました。声は鈴のように澄んでいて、聞くだけで心が落ち着きました。
          {"\n"}
          {"\n"}
          町では、不思議なことがたくさんありました。水は空から直接流れ落ち、飲むと甘い味がしました。畑には光る果物が実り、それを食べると体が軽くなりました。
          {"\n"}
          {"\n"}
          夜になると、雲が消え、町の下に星空が広がりました。まるで自分が空の中にいるようで、私は言葉を失いました。
          {"\n"}
          {"\n"}
          「ここに長くいると、地上に帰れなくなるよ」と少女は静かに言いました。その目はどこか寂しそうでした。
                    {"\n"}
          {"\n"}
          私は迷いましたが、やはり家族の顔を思い出し、地上へ戻ることを決めました。少女は微笑んで「また会えるといいね」と言い、光る羽で私を雲の階段まで送ってくれました。
                              {"\n"}
          {"\n"}
          目を開けると、私は再び山のふもとに立っていました。空にはただ白い雲が広がっているだけで、町の姿はもうありませんでした。
          {"\n"}
          {"\n"}
          それでも、あの夜見た星空と、少女の言葉は今でも心に残っています。雲の上の町は、夢ではなく、確かに存在していたのです。
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

export default N3_Story4;