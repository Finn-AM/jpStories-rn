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

function N1_Story3({}) {
  const tableData = [
 ["Japan", "Romaji", "Translation"],

  ["失敗", "しっぱい", "failure / mistake"],
  ["休暇", "きゅうか", "holiday / vacation"],
  ["待ちに待った", "まちにまった", "long-awaited"],
  ["夏休み", "なつやすみ", "summer vacation"],
  ["海辺", "うみべ", "seaside"],

  ["リゾート地", "りぞーとち", "resort area"],
  ["計画", "けいかく", "plan"],
  ["青空", "あおぞら", "blue sky"],
  ["花火大会", "はなびたいかい", "fireworks festival"],
  ["満喫する", "まんきつする", "to fully enjoy"],

  ["出発", "しゅっぱつ", "departure"],
  ["波乱", "はらん", "trouble / disturbance"],
  ["予約", "よやく", "reservation / booking"],
  ["手違い", "てちがい", "mistake / blunder"],
  ["軽トラック", "けいとらっく", "mini truck"],

  ["助手席", "じょしゅせき", "passenger seat"],
  ["荷物", "にもつ", "luggage / baggage"],
  ["積む", "つむ", "to load / to pile up"],
  ["渋滞", "じゅうたい", "traffic jam"],
  ["巻き込まれる", "まきこまれる", "to get caught up in"],

  ["猛暑日", "もうしょび", "extremely hot day"],
  ["熱中症", "ねっちゅうしょう", "heatstroke"],
  ["警報", "けいほう", "warning / alarm"],
  ["蒸し風呂", "むしぶろ", "steam bath / sauna"],
  ["即席", "そくせき", "improvised / instant"],

  ["観光ガイド", "かんこうがいど", "tourist guidebook"],
  ["扇ぐ", "あおぐ", "to fan (oneself)"],
  ["目的地", "もくてきち", "destination"],
  ["宿泊先", "しゅくはくさき", "lodging / accommodation"],
  ["ペンション", "ぺんしょん", "pension / guesthouse"],

  ["故障中", "こしょうちゅう", "out of order / broken"],
  ["海風", "うみかぜ", "sea breeze"],
  ["湿気", "しっけ", "humidity / dampness"],
  ["布団", "ふとん", "futon / bedding"],
  ["雑巾", "ぞうきん", "dust cloth / rag"],

  ["意気込む", "いきごむ", "to be enthusiastic / eager"],
  ["海水浴", "かいすいよく", "swimming in the sea"],
  ["遊泳禁止", "ゆうえいきんし", "swimming prohibited"],
  ["強風", "きょうふう", "strong wind"],
  ["高波", "たかなみ", "high waves"],

  ["監視員", "かんしいん", "lifeguard / supervisor"],
  ["拡声器", "かくせいき", "megaphone"],
  ["立入禁止", "たちいりきんし", "no entry / off limits"],
  ["海の家", "うみのいえ", "beach hut / seaside shop"],
  ["焼きそば", "やきそば", "fried noodles"],

  ["お腹を壊す", "おなかをこわす", "to get a stomachache"],
  ["観光名所", "かんこうめいしょ", "tourist spot"],
  ["山道", "やまみち", "mountain road"],
  ["迷い込む", "まよいこむ", "to lose one’s way into"],
  ["農作業", "のうさぎょう", "farm work"],

  ["体験", "たいけん", "experience"],
  ["麦わら帽子", "むぎわらぼうし", "straw hat"],
  ["畑", "はたけ", "field / farm"],
  ["汗だく", "あせだく", "drenched in sweat"],
  ["収穫する", "しゅうかくする", "to harvest"],

  ["妙に", "みょうに", "strangely / oddly"],
  ["美味しい", "おいしい", "delicious"],
  ["雷雨", "らいう", "thunderstorm"],
  ["中止", "ちゅうし", "cancellation"],
  ["線香花火", "せんこうはなび", "sparklers (Japanese fireworks)"],

  ["火花", "ひばな", "spark"],
  ["計画通り", "けいかくどおり", "according to plan"],
  ["荷台", "にだい", "truck bed"],
  ["夕焼け", "ゆうやけ", "sunset glow"],
  ["逆に", "ぎゃくに", "on the contrary / instead"],
  
  ["忘れられない", "わすれられない", "unforgettable"],
  ["思い出", "おもいで", "memory"],
  ["顔を見合わせる", "かおをみあわせる", "to look at each other"],
  ["大声", "おおごえ", "loud voice"],
  ["笑い声", "わらいごえ", "laughter"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          失敗した休暇 {"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          待ちに待った夏休み、私たち四人組は海辺のリゾート地へ向かった。計画では、青空の下でバーベキューを楽しみ、夜は花火大会を満喫するはずだった。
          {"\n"}
          {"\n"}
          しかし出発直後から波乱が始まった。まず、予約したレンタカーが手違いで軽トラックになってしまった。四人分の荷物を積むと、助手席の足元までスーツケースで埋まり、誰も快適に座れない。
          {"\n"}
          {"\n"}
          高速道路に入ると渋滞に巻き込まれた。ラジオからは延々と「猛暑日、熱中症に注意」という警報が流れるばかりで、車内は蒸し風呂状態。友人の一人は即席うちわ代わりに観光ガイドを扇ぎ始めた。
          {"\n"}
          {"\n"}
          やっと目的地に到着したものの、宿泊先のペンションは思った以上に古く、クーラーは故障中。「海風があるから大丈夫」と宿の主人は言ったが、その夜は湿気で布団がまるで雑巾のように重く感じられた。
          {"\n"}
          {"\n"}
          翌朝、意気込んで海水浴に出かけたが、まさかの遊泳禁止。強風と高波のため、監視員が拡声器で「本日は立入禁止です！」と叫んでいた。私たちは仕方なく海の家で焼きそばを食べ、なぜか全員お腹を壊した。
          {"\n"}
          {"\n"}
          午後は観光名所を巡ろうとしたが、道を間違えて山道に迷い込み、結果的に“地元の農作業体験”に参加することになった。麦わら帽子をかぶせられ、畑で汗だくになりながら収穫したトマトを食べた時だけは、なぜか妙に美味しかった。
          {"\n"}
          {"\n"}
          夜の花火大会も、雷雨のため中止。代わりに近所の子供が持ってきた線香花火を囲み、四人でしょんぼり座り込んでいた。だが小さな火花を見つめていると、妙に楽しくなり、思わず笑い声が漏れた。
          {"\n"}
          {"\n"}
          結局、誰一人「計画通りの休暇」を過ごせなかった。それでも帰り道、軽トラックの荷台で夕焼けを眺めながら、友人の一人が言った。「……これ、逆に一番忘れられない思い出になるんじゃない？」
          {"\n"}
          {"\n"}
         私たちは顔を見合わせ、大声で笑った。確かに“失敗した休暇”だったが、不思議と心に残るのは失敗ばかりの出来事より、その時に共有した笑い声だった。
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

export default N1_Story3;
