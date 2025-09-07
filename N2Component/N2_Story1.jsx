import { ScrollView, StyleSheet, Text, View } from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N2_Story1({}) {
  const tableData = [

  ["Japan", "Hiragana", "Translation"],
    
  ["思い出", "おもいで", "Memory / Remembrance"],
  ["大学三年", "だいがくさんねん", "Third year of university"],
  ["夏", "なつ", "Summer"],
  ["祖父", "そふ", "Grandfather"],
  ["古い", "ふるい", "Old"],

  ["家", "いえ", "House / Home"],
  ["片付ける", "かたづける", "To tidy up / To clean up"],
  ["田舎", "いなか", "Countryside / Rural area"],
  ["押し入れ", "おしいれ", "Closet (Japanese style)"],
  ["奥", "おく", "Back / Inner part"],

  ["古びた", "ふるびた", "Worn-out / Aged"],
  ["カメラ", "かめら", "Camera"],
  ["埃", "ほこり", "Dust"],
  ["かぶる", "かぶる", "To be covered with"],
  ["十分", "じゅうぶん", "Enough / Sufficient"],

  ["使う", "つかう", "To use"],
  ["瞬間", "しゅんかん", "Moment / Instant"],
  ["声", "こえ", "Voice"],
  ["頭の中", "あたまのなか", "Inside one’s head / In the mind"],
  ["よみがえる", "よみがえる", "To come back / To be revived"],

  ["写真", "しゃしん", "Photo / Photograph"],
  ["記録", "きろく", "Record / Documentation"],
  ["心", "こころ", "Heart / Spirit / Feelings"],
  ["写す", "うつす", "To capture / To photograph"],
  ["子ども", "こども", "Child / Children"],

  ["頃", "ころ", "Time / Period"],
  ["何度も", "なんども", "Many times / Repeatedly"],
  ["聞かされる", "きかされる", "To be told repeatedly"],
  ["試しに", "ためしに", "As a test / For trial"],
  ["庭", "にわ", "Garden / Yard"],
  ["シャッターを切る", "しゃったーをきる", "To press the shutter button"],

  ["かすかな", "かすかな", "Faint / Slight"],
  ["音", "おと", "Sound"],
  ["響く", "ひびく", "To echo / To resound"],
  ["ファインダー", "ふぁいんだー", "Viewfinder"],
  ["越しに", "ごしに", "Through / Across"],
  ["景色", "けしき", "Scenery / View"],
  ["裸眼", "らがん", "Naked eye"],
  ["不思議", "ふしぎ", "Mysterious / Wondrous"],

  ["温かさ", "あたたかさ", "Warmth"],
  ["次の日", "つぎのひ", "The next day"],
  ["川沿い", "かわぞい", "Riverside"],
  ["散歩", "さんぽ", "Walk / Stroll"],
  ["撮る", "とる", "To take (a photo)"],
  ["水面", "みなも", "Water surface"],
  
  ["映る", "うつる", "To reflect / To be projected"],
  ["光", "ひかり", "Light"],
  ["遊ぶ", "あそぶ", "To play"],
  ["笑顔", "えがお", "Smile (face)"],
  ["夕暮れ", "ゆうぐれ", "Dusk / Twilight"],
  ["赤い空", "あかいそら", "Red sky"],

  ["日常", "にちじょう", "Everyday life / Ordinary"],
  ["光景", "こうけい", "Scene / Sight"],
  ["特別", "とくべつ", "Special"],
  ["一瞬", "いっしゅん", "Moment / Instant"],
  ["現像する", "げんぞうする", "To develop (a photo)"],
  ["大切にする", "たいせつにする", "To cherish / To treasure"],
  ["時間", "じかん", "Time"],

  ["輝き", "かがやき", "Radiance / Brilliance"],
  ["映し出す", "うつしだす", "To project / To reflect"],
  ["思わず", "おもわず", "Unintentionally / Spontaneously"],
  ["微笑む", "ほほえむ", "To smile"],
  ["胸の奥", "むねのおく", "Deep inside one’s heart"],
  ["感じる", "かんじる", "To feel / To sense"],
  
  ["決める", "きめる", "To decide"],
  ["大学に戻る", "だいがくにもどる", "To return to university"],
  ["写真サークル", "しゃしんさーくる", "Photography club"],
  ["残す", "のこす", "To leave behind"],
  ["道具", "どうぐ", "Tool / Instrument"],
  ["示す", "しめす", "To show / To indicate"],
  ["鍵", "かぎ", "Key"],
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          思い出のカメラ{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          大学三年の夏、私は祖父の古い家を片付けるために田舎へ帰った。 押し入れの奥から出てきたのは、古びたカメラだった。埃をかぶっていたが、まだ十分に使えそうだった。
          {"\n"}
          {"\n"}
          その瞬間、祖父の声が頭の中によみがえった。 「写真はな、ただの記録じゃない。心を写すんだ。」子どもの頃、何度も聞かされた言葉だった。
          {"\n"}
          {"\n"}
          試しに庭でシャッターを切ると、カメラからかすかな音が響いた。 ファインダー越しに見えた景色は、裸眼で見るよりも不思議な温かさを持っていた。
          {"\n"}
          {"\n"}
          次の日、川沿いを散歩しながら写真を撮った。 水面に映る光、遊ぶ子どもたちの笑顔、そして夕暮れの赤い空。どれも日常の光景なのに、カメラを通すと特別な一瞬に感じられた。
          {"\n"}
          {"\n"}
          写真を現像すると、そこには祖父が大切にしていた「時間の輝き」が映し出されていた。 私は思わず微笑み、胸の奥が熱くなるのを感じた。
          {"\n"}
          {"\n"}
          「このカメラ、ちゃんと使い続けよう。」 そう心に決めた私は、大学に戻ってから写真サークルに入ることにした。
          {"\n"}
          {"\n"}
          祖父が残したカメラは、ただの道具ではなく、私に新しい道を示す“思い出の鍵”だったのだ。
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

export default N2_Story1;