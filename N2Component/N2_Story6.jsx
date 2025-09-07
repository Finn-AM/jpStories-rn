import { ScrollView, StyleSheet, Text, View } from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N2_Story6({}) {

  const tableData = [

  ["Japan", "Hiragana", "Translation"],

  ["様子", "ようす", "Appearance, state, situation"],
  ["注意深く", "ちゅういぶかく", "Carefully, attentively"],
  ["周り", "まわり", "Surroundings, people around"],
  ["裏", "うら", "Behind, reverse side, hidden aspect"],
  ["影", "かげ", "Shadow"],

  ["放課後", "ほうかご", "After school"],
  ["練習", "れんしゅう", "Practice, training"],
  ["参加する", "さんかする", "To participate, to join"],
  ["元気", "げんき", "Energetic, lively"],
  ["声を出す", "こえをだす", "To raise one’s voice, to call out"],

  ["急ぐ", "いそぐ", "To hurry"],
  ["部室", "ぶしつ", "Club room"],
  ["背中", "せなか", "Back (of the body)"],
  ["追いかける", "おいかける", "To chase, to follow"],
  ["駅", "えき", "Station"],

  ["姿", "すがた", "Figure, appearance"],
  ["アルバイト先", "あるばいとさき", "Part-time workplace"],
  ["制服", "せいふく", "Uniform"],
  ["必死に", "ひっしに", "Desperately, with all one’s might"],
  ["レジを打つ", "れじをうつ", "To operate a cash register"],

  ["お客様", "おきゃくさま", "Customer (polite)"],
  ["笑顔", "えがお", "Smiling face"],
  ["疲労", "ひろう", "Fatigue, exhaustion"],
  ["色濃く", "いろこく", "Strongly, distinctly"],
  ["浮かぶ", "うかぶ", "To float, to appear"],

  ["勇気", "ゆうき", "Courage"],
  ["声をかける", "こえをかける", "To address, to speak to"],
  ["沈黙", "ちんもく", "Silence"],
  ["母さん", "かあさん", "Mother (casual)"],
  ["困る", "こまる", "To be troubled, to be in difficulty"],

  ["胸が締めつけられる", "むねがしめつけられる", "Heart feels squeezed, to feel pain in one’s chest (emotionally)"],
  ["現実", "げんじつ", "Reality"],
  ["家族", "かぞく", "Family"],
  ["支える", "ささえる", "To support, to sustain"],
  ["雨の日", "あめのひ", "Rainy day"],

  ["傘", "かさ", "Umbrella"],
  ["濡れる", "ぬれる", "To get wet"],
  ["差し出す", "さしだす", "To offer, to hold out"],
  ["驚く", "おどろく", "To be surprised"],
  ["立ち止まる", "たちどまる", "To stop walking, to come to a halt"],

  ["本音", "ほんね", "True feelings, real intention"],
  ["支えてほしい", "ささえてほしい", "Want someone to support (me)"],
  ["弱い", "よわい", "Weak"],
  ["見せる", "みせる", "To show"],
  ["がっかりする", "がっかりする", "To be disappointed"],
  
  ["握る", "にぎる", "To grip, to hold tightly"],
  ["安心する", "あんしんする", "To feel relieved"],
  ["自然", "しぜん", "Natural"],
  ["温かい", "あたたかい", "Warm"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          人気者の秘密・第二章{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          あの日から、私は翔太の様子を前よりも注意深く見るようになった。周りの友達は彼の明るさしか見ていない。でも、その笑顔の裏にある影を私は知っていた。
          {"\n"}
          {"\n"}
          放課後、彼はサッカー部の練習に参加し、誰よりも元気に声を出していた。しかし、練習が終わると急いで部室を出ていった。その背中を追いかけると、彼が駅へ向かう姿を見つけた。
          {"\n"}
          {"\n"}
          アルバイト先のコンビニで、翔太は制服のまま必死にレジを打っていた。お客様に笑顔を見せながらも、その目には疲労が色濃く浮かんでいた。
          {"\n"}
          {"\n"}
          私は勇気を出して声をかけた。「こんなに頑張らなくてもいいんじゃない？」すると彼は少し沈黙してから答えた。「でも、僕がやらなきゃ母さんが困るんだ。」
          {"\n"}
          {"\n"}
          その言葉を聞いた瞬間、胸が締めつけられた。人気者である前に、一人の息子として必死に家族を支えている。その現実を知ったからこそ、彼の笑顔がますます重く見えた。
          {"\n"}
          {"\n"}
          ある雨の日、私は傘を持たずに彼のバイト先まで迎えに行った。濡れながら出てきた彼に傘を差し出すと、翔太は驚いたように立ち止まり、少しだけ本音をこぼした。
          {"\n"}
          {"\n"}
          「本当は、誰かに支えてほしいって思う時もあるんだ。でも、言えないんだよね。弱い自分を見せたら、みんながっかりするから。」
          {"\n"}
          {"\n"}
          私は傘を握る手を強くした。「翔太が弱くても、がっかりなんてしない。むしろ、そのままの君でいてほしい。」
                    {"\n"}
          {"\n"}
          その言葉に、翔太は初めて安心したように笑った。その笑顔は今まで見たどんな笑顔よりも自然で、温かかった。
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

export default N2_Story6;
