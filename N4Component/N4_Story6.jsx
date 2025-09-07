import { ScrollView, StyleSheet, Text, View } from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N4_Story6({}) {
  
  const tableData = [
  ["Japan", "Hiragana", "Translation"],

  ["帰らない", "かえらない", "Not return / Not go back"],
  ["客", "きゃく", "Guest / Visitor"],
  ["雨", "あめ", "Rain"],
  ["夜", "よる", "Night"],
  ["一人", "ひとり", "Alone / One person"],

  ["家", "いえ", "House / Home"],
  ["ドア", "どあ", "Door"],
  ["ノック", "のっく", "Knock"],
  ["音", "おと", "Sound"],
  ["時計", "とけい", "Clock / Watch"],

  ["九時", "くじ", "Nine o'clock"],
  ["過ぎていました", "すぎていました", "Had passed"],
  ["時間", "じかん", "Time"],
  ["誰だろう", "だれだろう", "I wonder who"],
  ["開けました", "あけました", "Opened"],

  ["黒い", "くろい", "Black"],
  ["コート", "こーと", "Coat"],
  ["着た", "きた", "Wore / Put on"],
  ["男の人", "おとこのひと", "Man"],
  ["立っていました", "たっていました", "Was standing"],

  ["顔", "かお", "Face"],
  ["見えませんでした", "みえませんでした", "Could not be seen"],
  ["すみません", "すみません", "Excuse me / Sorry"],
  ["少し", "すこし", "A little / Slightly"],
  ["避ける", "よける", "To avoid / Take shelter from"],
  ["低い", "ひくい", "Low"],

  ["声", "こえ", "Voice"],
  ["言いました", "いいました", "Said"],
  ["怖かった", "こわかった", "Was scared"],
  ["強く", "つよく", "Strongly"],
  ["びしょぬれ", "びしょぬれ", "Soaking wet"],

  ["帰らせる", "かえらせる", "To send back"],
  ["かわいそう", "かわいそう", "Pitiful / Poor thing"],
  ["入れました", "いれました", "Let in / Put in"],
  ["ありがとうございます", "ありがとうございます", "Thank you"],
  ["玄関", "げんかん", "Entrance / Foyer"],
  ["動きませんでした", "うごきませんでした", "Did not move"],

  ["中", "なか", "Inside"],
  ["うなずく", "うなずく", "To nod"],
  ["しばらくして", "しばらくして", "After a while"],
  ["そろそろ", "そろそろ", "Soon / It's about time"],
  ["気配", "けはい", "Sign / Indication / Presence"],
  ["外", "そと", "Outside"],
  ["止む", "やむ", "To stop (raining)"],

  ["どころか", "どころか", "Far from / On the contrary"],
  ["一時間", "いちじかん", "One hour"],
  ["二時間", "にじかん", "Two hours"],
  ["時がすぎました", "ときがすぎました", "Time passed"],
  ["椅子", "いす", "Chair"],
  ["じっと", "じっと", "Intently / Fixedly"],

  ["窓", "まど", "Window"],
  ["外を見ていました", "そとをみていました", "Was looking outside"],
  ["話しかけても", "はなしかけても", "Even if (I) talked to..."],
  ["短く", "みじかく", "Shortly / Briefly"],
  ["答える", "こたえる", "To answer / Reply"],
  ["夜中", "よなか", "Midnight"],

  ["一時", "いちじ", "One o'clock"],
  ["指す", "さす", "To point to / Indicate"],
  ["眠くなり", "ねむくなり", "Became sleepy"],
  ["休ませてください", "やすませてください", "Please let me rest"],
  ["立ち上がり", "たちあがり", "To stand up"],
  ["おやすみなさい", "おやすみなさい", "Good night"],
  
  ["姿", "すがた", "Figure / Form / Appearance"],
  ["床", "ゆか", "Floor"],
  ["濡れた", "ぬれた", "Wet"],
  ["足あと", "あしあと", "Footprint"],
  ["奥", "おく", "Inner part / Deep inside"],
  ["続く", "つづく", "To continue"],
  ["感じる", "かんじる", "To feel"],
  ["開けない", "あけない", "Do not open"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          帰らない客{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          ある雨の夜、わたしは一人で家にいました。ドアをノックする音がしました。時計を見ると、もう九時をすぎていました。こんな時間にだれだろうと思いながら、ドアを開けました。
          {"\n"}
          {"\n"}
          そこには、黒いコートを着た男の人が立っていました。顔はよく見えませんでした。「すみません、少し雨をよけさせてもらえませんか？」と低い声で言いました。
          {"\n"}
          {"\n"}
          わたしは少しこわかったですが、雨は強く、びしょぬれの男の人をそのまま帰らせるのもかわいそうだと思い、家の中に入れました。男の人は「ありがとうございます」と言い、玄関に立ったまま動きませんでした。
          {"\n"}
          「どうぞ、中へ。」とわたしが言っても、男の人はただうなずくだけでした。しばらくして、「そろそろ…」と帰る気配を見せましたが、外を見ると雨はやむどころか、もっと強くなっていました。
          {"\n"}
          {"\n"}
          そのまま一時間、二時間と時がすぎました。男の人は椅子に座って、じっと窓の外を見ていました。わたしが何を話しかけても、短く答えるだけでした。
          {"\n"}
          {"\n"}
          気がつくと、時計は夜中の一時をさしていました。わたしは眠くなり、「もう休ませてください」と言いました。男の人はゆっくり立ち上がり、「おやすみなさい」とだけ言って、また椅子に座りました。
          {"\n"}
          {"\n"}
          朝になって目を覚ますと、玄関は開いていて、男の人の姿はありませんでした。ただ、床には雨でぬれた足あとが、ドアの外から部屋の奥までつづいていました。
          {"\n"}
          {"\n"}
          その後も、雨の夜になると、ドアの前でだれかの気配を感じることがあります。でも、もうドアは開けないことにしています。
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

export default N4_Story6;
