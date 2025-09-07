import { ScrollView, StyleSheet, Text, View } from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N4_Story8({}) {
  
  const tableData = [

  ["Japan", "Hiragana", "Translation"],

  ["友だち", "ともだち", "Friend"],
  ["家", "いえ", "House / Home"],
  ["ゲーム", "げーむ", "Game"],
  ["日曜日", "にちようび", "Sunday"],
  ["午後", "ごご", "Afternoon"],

  ["行きました", "いきました", "Went"],
  ["新しい", "あたらしい", "New"],
  ["遊ぼう", "あそぼう", "Let's play"],
  ["電話", "でんわ", "Telephone / Phone call"],
  ["誘ってくれました", "さそってくれました", "Invited me"],

  ["着く", "つく", "To arrive"],
  ["お母さん", "おかあさん", "Mother"],
  ["笑顔", "えがお", "Smiling face"],
  ["迎える", "むかえる", "To welcome / To greet"],
  ["ゆっくりしていってね", "ゆっくりしていってね", "Make yourself at home / Take your time here"],

  ["おじゃまします", "おじゃまします", "Excuse me for disturbing (used when entering someone's home)"],
  ["挨拶", "あいさつ", "Greeting"],
  ["リビング", "りびんぐ", "Living room"],
  ["大きな", "おおきな", "Big"],
  ["テレビ", "てれび", "Television"],

  ["ゲーム機", "げーむき", "Game console"],
  ["嬉しそうに", "うれしそうに", "Happily / Seemingly glad"],
  ["コントローラー", "こんとろーらー", "Controller"],
  ["渡す", "わたす", "To hand over / To give"],
  ["面白い", "おもしろい", "Interesting / Fun"],

  ["始める", "はじめる", "To start / To begin"],
  ["画面", "がめん", "Screen"],
  ["広がる", "ひろがる", "To spread / To expand"],
  ["キャラクター", "きゃらくたー", "Character"],
  ["元気に", "げんきに", "Energetically"],

  ["走り回る", "はしりまわる", "To run around"],
  ["何度も", "なんども", "Many times"],
  ["負けました", "まけました", "Lost (a game)"],
  ["次", "つぎ", "Next"],
  ["勝てる", "かてる", "Can win"],

  ["しばらくして", "しばらくして", "After a while"],
  ["クッキー", "くっきー", "Cookie"],
  ["ジュース", "じゅーす", "Juice"],
  ["持ってきてくれました", "もってきてくれました", "Brought for me"],
  ["一時停止", "いちじていし", "Pause (temporarily stop)"],

  ["二人で", "ふたりで", "With two people / Together (two people)"],
  ["おやつ", "おやつ", "Snack"],
  ["食べながら", "たべながら", "While eating"],
  ["話", "はなし", "Talk / Story"],
  ["盛り上がる", "もりあがる", "To get excited / To liven up"],

  ["夕方", "ゆうがた", "Evening"],
  ["時計", "とけい", "Clock / Watch"],
  ["そろそろ", "そろそろ", "It’s about time to..."],
  ["帰らないと", "かえらないと", "I have to go home"],
  ["また来てね", "またきてね", "Come again"],
  ["手を振る", "てをふる", "To wave (one's hand)"],
  
  ["帰る道", "かえるみち", "The road home"],
  ["楽しい", "たのしい", "Fun / Enjoyable"],
  ["時間", "じかん", "Time"],
  ["思い出す", "おもいだす", "To remember / Recall"],
  ["感じました", "かんじました", "Felt"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          友だちの家でゲームをする{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          日曜日の午後、わたしは友だちのけんじの家へ行きました。けんじは新しいゲームを買ったばかりで、「いっしょに遊ぼう！」と電話でさそってくれました。
          {"\n"}
          {"\n"}
          けんじの家に着くと、おかあさんが笑顔で迎えてくれました。「ゆっくりしていってね。」と言われ、わたしは「おじゃまします」とあいさつしました。
          {"\n"}
          {"\n"}
          リビングには大きなテレビとゲーム機がありました。けんじはうれしそうにコントローラーをわたしに渡し、「このゲームはとてもおもしろいよ」と言いました。
          {"\n"}
          ゲームを始めると、画面にはカラフルな世界が広がり、キャラクターが元気に走り回りました。わたしは何度も負けましたが、そのたびにけんじが笑って「次は勝てるよ」と言ってくれました。
          {"\n"}
          {"\n"}
          しばらくして、おかあさんがクッキーとジュースを持ってきてくれました。ゲームを一時停止して、二人でおやつを食べながら話をしました。学校のこと、好きなアニメのこと、いろいろな話題で盛り上がりました。
          {"\n"}
          {"\n"}
          夕方になり、時計を見るともう六時をすぎていました。「そろそろ帰らないと。」と言うと、けんじは「また来てね！」と手をふってくれました。
          {"\n"}
          {"\n"}
          家に帰る道で、わたしは今日の楽しい時間を思い出しながら歩きました。負けても、友だちといっしょなら、それだけでうれしいと感じました。
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

export default N4_Story8;
