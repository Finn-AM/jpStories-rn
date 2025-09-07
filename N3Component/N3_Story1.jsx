import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N3_Story1({}) {

  const tableData = [

  ["Japan", "Hiragana", "Translation"],

  ["一緒に", "いっしょに", "Together"],
  ["傘", "かさ", "Umbrella"],
  ["梅雨", "つゆ", "Rainy season"],
  ["学校", "がっこう", "School"],
  ["終わる", "おわる", "To end / To finish"],

  ["外", "そと", "Outside"],
  ["強い", "つよい", "Strong"],
  ["雨", "あめ", "Rain"],
  ["降る", "ふる", "To fall (rain/snow)"],
  ["持っていなかった", "もっていなかった", "Did not have"],

  ["玄関", "げんかん", "Entrance / Front door"],
  ["立ち尽くす", "たちつくす", "To stand still / To freeze standing"],
  ["その時", "そのとき", "At that moment"],
  ["後ろ", "うしろ", "Behind / Back"],
  ["忘れる", "わすれる", "To forget"],
  
  ["声をかける", "こえをかける", "To call out / To speak to"],
  ["振り向く", "ふりむく", "To turn around"],
  ["同じ", "おなじ", "Same"],
  ["クラス", "くらす", "Class"],
  ["立っていました", "たっていました", "Was standing"],

  ["恥ずかしそうに", "はずかしそうに", "Seemingly embarrassed"],
  ["笑う", "わらう", "To smile / To laugh"],
  ["入る", "はいる", "To enter"],
  ["帰る", "かえる", "To return / To go home"],
  ["驚く", "おどろく", "To be surprised"],

  ["いいの？", "いいの？", "Is it okay?"],
  ["頷く", "うなずく", "To nod"],
  ["道", "みち", "Road / Path"],
  ["狭い", "せまい", "Narrow"],
  ["自然に", "しぜんに", "Naturally"],

  ["距離", "きょり", "Distance"],
  ["近くなる", "ちかくなる", "To become close"],
  ["肩", "かた", "Shoulder"],
  ["触れる", "ふれる", "To touch"],
  ["心臓", "しんぞう", "Heart"],

  ["早くなる", "はやくなる", "To become faster"],
  ["何気ない", "なにげない", "Casual / Unintentional"],
  ["返事", "へんじ", "Reply / Response"],
  ["横顔", "よこがお", "Side profile (of a face)"],
  ["雨の音", "あめのおと", "Sound of rain"],

  ["低い声", "ひくいこえ", "Low voice"],
  ["耳に残る", "みみにのこる", "To remain in the ear / linger in memory"],
  ["途中で", "とちゅうで", "On the way / In the middle"],
  ["傾ける", "かたむける", "To tilt / To incline"],
  ["濡れる", "ぬれる", "To get wet"],

  ["胸", "むね", "Chest / Heart (emotion)"],
  ["温かい", "あたたかい", "Warm"],
  ["家の前", "いえのまえ", "In front of the house"],
  ["また明日", "またあした", "See you tomorrow"],
  ["手を振る", "てをふる", "To wave (hand)"],

  ["ありがとう", "ありがとう", "Thank you"],
  ["必死で", "ひっしで", "Desperately"],
  ["隠す", "かくす", "To hide"],
  ["夜", "よる", "Night"],
  ["窓", "まど", "Window"],

  ["机", "つくえ", "Desk"],
  ["思い出す", "おもいだす", "To remember / Recall"],
  ["頬", "ほお / ほっぺ", "Cheek"],
  ["熱くなる", "あつくなる", "To become hot / To blush"],
  ["天気", "てんき", "Weather"],
  
  ["心の中", "こころのなか", "In one’s heart / In one’s mind"],
  ["楽しみ", "たのしみ", "Looking forward to / Enjoyment"],
  ["並んで歩く", "ならんであるく", "To walk side by side"],
  ["時間", "じかん", "Time"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          一緒に使った傘 {"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          梅雨のある日、学校が終わる頃には外は強い雨が降っていました。傘を持っていなかった私は、玄関で立ち尽くしていました。
          {"\n"}
          {"\n"}
          その時、後ろから「傘、忘れたの？」と声をかけられました。振り向くと、同じクラスの佐藤くんが立っていました。彼は傘を持っていて、少し恥ずかしそうに笑っています。
          {"\n"}
          {"\n"}
         「一緒に入って帰ろうか？」と彼が言いました。私は驚きながらも、「いいの？」と聞くと、彼はうなずきました。
          {"\n"}
          {"\n"}
          道は狭く、二人で傘を持つと自然に距離が近くなります。肩が少し触れるたび、心臓が早くなっていくのが分かりました。
          {"\n"}
          {"\n"}
          彼は何気ない話をしてくれましたが、私はほとんど返事ができず、ただ横顔を見ていました。雨の音と、彼の低い声が心地よく耳に残ります。
          {"\n"}
          {"\n"}
          途中で、彼が少し傘をこちらに傾けました。私の髪が濡れないようにしてくれているのだと気づき、胸が温かくなりました。
          {"\n"}
          {"\n"}
          家の前に着くと、彼は「じゃあ、また明日」と笑って手を振りました。私は「ありがとう」と言いながら、もっと一緒にいたい気持ちを必死で隠しました。
          {"\n"}
          {"\n"}
          その夜、窓の外ではまだ雨が降っていました。私は机の上で今日のことを思い出し、頬が少し熱くなるのを感じました。
                    {"\n"}
          {"\n"}
          次の日、天気は晴れでしたが、私は心の中で「今日は雨が降ればいいのに」と思ってしまいました。
                              {"\n"}
          {"\n"}
          それから梅雨の間、雨の日が楽しみになりました。あの傘の下で、彼と並んで歩く時間が、私の一番好きな時間になったのです。
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

export default N3_Story1;
