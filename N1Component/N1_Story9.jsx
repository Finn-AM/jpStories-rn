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

function N1_Story9({}) {
  const tableData = [
 ["Japan", "Romaji", "Translation"],

  ["猫", "ねこ", "cat"],
  ["母", "はは", "mother"],
  ["突然", "とつぜん", "suddenly"],
  ["家族", "かぞく", "family"],
  ["段ボール箱", "だんぼーるばこ", "cardboard box"],

  ["抱える", "かかえる", "to carry / hold"],
  ["瞳", "ひとみ", "pupil / eye"],
  ["ちょこんと座る", "ちょこんとすわる", "to sit quietly / cutely"],
  ["大喜び", "おおよろこび", "great joy / delight"],
  ["迎える", "むかえる", "to welcome"],

  ["駆け回る", "かけまわる", "to run around"],
  ["飛びつく", "とびつく", "to jump at / pounce"],
  ["ぶら下がる", "ぶらさがる", "to hang from"],
  ["雑誌", "ざっし", "magazine"],
  ["容赦なく", "ようしゃなく", "mercilessly / relentlessly"],

  ["引き裂く", "ひきさく", "to tear apart"],
  ["落ち着け", "おちつけ", "calm down!"],
  ["追いかける", "おいかける", "to chase"],
  ["信じられない", "しんじられない", "unbelievable"],
  ["潜り込む", "もぐりこむ", "to slip under / crawl into"],

  ["勝ち誇る", "かちほこる", "to look triumphant"],
  ["尻尾", "しっぽ", "tail"],
  ["振る", "ふる", "to shake / wag"],
  ["名前", "なまえ", "name"],
  ["決める", "きめる", "to decide"],

  ["話し合う", "はなしあう", "to discuss"],
  ["主張する", "しゅちょうする", "to insist / assert"],
  ["譲らない", "ゆずらない", "to not give in / yield"],
  ["宿題", "しゅくだい", "homework"],
  ["追われる", "おわれる", "to be pressed / chased (by tasks)"],

  ["飛び乗る", "とびのる", "to jump onto"],
  ["どっかりと座る", "どっかりとすわる", "to plop down heavily"],
  ["思わず", "おもわず", "unintentionally / spontaneously"],
  ["邪魔", "じゃま", "hindrance / obstacle"],
  ["鳴く", "なく", "to meow / cry (animal sound)"],

  ["気まぐれ", "きまぐれ", "whimsical / capricious"],
  ["食事", "しょくじ", "meal"],
  ["テーブルの下", "てーぶるのした", "under the table"],
  ["スタンバイする", "すたんばいする", "to be on standby / ready"],
  ["当然", "とうぜん", "natural / obvious"],

  ["権利", "けんり", "right (entitlement)"],
  ["主張する", "しゅちょうする", "to assert / claim"],
  ["ソファ", "そふぁ", "sofa"],
  ["うたた寝", "うたたね", "nap / doze"],
  ["見下ろす", "みおろす", "to look down on"],

  ["丸まる", "まるまる", "to curl up"],
  ["いびき", "いびき", "snore"],
  ["喉を鳴らす", "のどをならす", "to purr / make throat sound"],
  ["光景", "こうけい", "scene / sight"],
  ["写真を撮る", "しゃしんをとる", "to take a picture"],

  ["待ち受け画面", "まちうけがめん", "wallpaper / standby screen"],
  ["騒がしい", "さわがしい", "noisy"],
  ["新入り", "しんいり", "newcomer"],
  ["気がつけば", "きがつけば", "before realizing it / before one knows"],
  ["中心", "ちゅうしん", "center / core"],
  
  ["生活", "せいかつ", "life / daily living"],
  ["変えてしまう", "かえてしまう", "to completely change"],
  ["不思議", "ふしぎ", "mysterious / strange"],
  ["温かい", "あたたかい", "warm"],
  ["笑える", "わらえる", "laughable / funny"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          新しい猫 {"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          ある日、母が突然「今日からこの子が家族よ」と言って、小さな段ボール箱を抱えて帰ってきた。箱の中には、黄緑色の瞳をした子猫がちょこんと座っていた。
          {"\n"}
          {"\n"}
          私たちは大喜びで迎えたが、問題はすぐに起きた。子猫は家中を駆け回り、カーテンに飛びついてはぶら下がり、父のお気に入りの雑誌を容赦なく引き裂いた。
          {"\n"}
          {"\n"}
          「落ち着け！」と父が追いかけるが、子猫は信じられない速さで机の下に潜り込み、勝ち誇った顔をして尻尾を振った。その様子に、家族全員が笑わずにはいられなかった。
          {"\n"}
          {"\n"}
         名前を決めようと話し合ったが、母は「ミルク」、妹は「プリン」、父は「トラ」と主張して譲らない。結局、子猫はどの呼び名にも反応しないまま、一週間が過ぎた。
          {"\n"}
          {"\n"}
         ある晩、私が宿題に追われていると、子猫が机に飛び乗り、ノートの真ん中にどっかりと座った。思わず「ジャマ！」と叫ぶと、なぜか子猫は嬉しそうに鳴いた。それ以来、家族は自然とその子を「ジャマ」と呼ぶようになった。
          {"\n"}
          {"\n"}
          ジャマは気まぐれで、呼んでも来ないことが多い。それなのに食事の時だけは、誰よりも早くテーブルの下にスタンバイしている。まるで家族の一員として当然の権利を主張しているかのようだった。
          {"\n"}
          {"\n"}
          ある日、父がソファでうたた寝していると、ジャマが胸の上に乗り、じっと見下ろしていた。やがて小さく丸まり、父のいびきに合わせて喉を鳴らし始めた。その光景に母が写真を撮り、家族全員の待ち受け画面になった。
          {"\n"}
          {"\n"}
          最初はただの“騒がしい新入り”だったのに、気がつけば家の中心にはいつもジャマがいる。
          {"\n"}
          {"\n"}
          ――新しい猫は、家族の生活をすっかり変えてしまった。でもその変化は、不思議と温かくて、ちょっと笑えるものだった。
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

export default N1_Story9;
