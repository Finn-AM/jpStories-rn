import { ScrollView, StyleSheet, Text, View } from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N2_Story4({}) {
  
  const tableData = [

  ["Japan", "Hiragana", "Translation"],

  ["雨", "あめ", "Rain"],
  ["思い出", "おもいで", "Memory"],
  ["子供", "こども", "Child"],
  ["町", "まち", "Town"],
  ["夏", "なつ", "Summer"],

  ["突然", "とつぜん", "Suddenly"],
  ["激しい", "はげしい", "Intense, Strong"],
  ["雷", "かみなり", "Thunder"],
  ["響く", "ひびく", "To echo, To resound"],
  ["友達", "ともだち", "Friend"],

  ["胸を躍らせる", "むねをおどらせる", "To be excited"],
  ["降り出す", "ふりだす", "To begin to rain/snow"],
  ["迷わず", "まよわず", "Without hesitation"],
  ["裸足", "はだし", "Barefoot"],
  ["水たまり", "みずたまり", "Puddle"],

  ["泥", "どろ", "Mud"],
  ["屋根", "やね", "Roof"],
  ["流れる", "ながれる", "To flow"],
  ["濡れる", "ぬれる", "To get wet"],
  ["笑う", "わらう", "To laugh"],

  ["雨粒", "あまつぶ", "Raindrop"],
  ["頬", "ほほ／ほお", "Cheek"],
  ["感覚", "かんかく", "Sensation, Feeling"],
  ["縁側", "えんがわ", "Veranda"],
  ["風邪をひく", "かぜをひく", "To catch a cold"],

  ["道路", "どうろ", "Road"],
  ["川", "かわ", "River"],
  ["葉っぱ", "はっぱ", "Leaf"],
  ["枝", "えだ", "Branch"],
  ["船", "ふね", "Boat"],

  ["競争", "きょうそう", "Competition, Race"],
  ["失敗", "しっぱい", "Failure"],
  ["沈む", "しずむ", "To sink"],
  ["夕方", "ゆうがた", "Evening"],
  ["虹", "にじ", "Rainbow"],

  ["光景", "こうけい", "Scenery, Scene"],
  ["自由", "じゆう", "Freedom"],
  ["輝く", "かがやく", "To shine, To sparkle"],
  ["濡れた服", "ぬれたふく", "Wet clothes"],
  ["冷たさ", "つめたさ", "Coldness"],

  ["叱る", "しかる", "To scold"],
  ["懐かしい", "なつかしい", "Nostalgic"],
  ["大人", "おとな", "Adult"],
  ["音", "おと", "Sound"],
  ["胸の奥", "むねのおく", "Deep in the heart"],
  
  ["笑い声", "わらいごえ", "Laughter"],
  ["心", "こころ", "Heart, Mind"],
  ["温かい", "あたたかい", "Warm"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          雨の日の思い出{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          子供の頃、私の町では夏になると突然激しい雨が降ることがよくあった。空が暗くなり、雷の音が遠くから響くと、私と友達はむしろ胸を躍らせた。
          {"\n"}
          {"\n"}
          雨が降り出すと、私たちは迷わず外へ飛び出した。裸足になって水たまりを走り回り、泥だらけになっても誰も気にしなかった。
          {"\n"}
          {"\n"}
          屋根から流れる雨水の下に立ち、頭からびしょ濡れになりながら大声で笑った。雨粒が頬に当たる感覚さえ、当時の私たちにとっては最高の遊びだった。
          {"\n"}
          {"\n"}
          時々、母が家の縁側から心配そうに顔を出し、「風邪をひくよ！」と叫んでいた。しかし、その声さえ遊びの一部のように聞こえて、私たちはやめようとしなかった。
          {"\n"}
          {"\n"}
          道路に小さな川ができると、私たちは葉っぱや木の枝を船に見立てて流した。どの船が遠くまで行くか競争し、失敗して沈んでも大笑いした。
          {"\n"}
          {"\n"}
          夕方になると、雨は静かにやみ、空には大きな虹がかかることがあった。びしょ濡れのまま立ち尽くし、その光景を友達と一緒に見上げた。
          {"\n"}
          {"\n"}
          今思えば、あの頃の時間はとても短く、しかし何よりも自由で輝いていた。濡れた服の冷たさも、帰ってから叱られたことも、すべてが懐かしい記憶となっている
          {"\n"}
          {"\n"}
          大人になった今でも、雨の音を聞くと胸の奥にあの日の笑い声がよみがえり、少しだけ心が温かくなるのだ。
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

export default N2_Story4;
