import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N3_Story2({}) {

  const tableData = [

  ["Japan", "Hiragana", "Translation"],

  ["夜", "よる", "Night"],
  ["真夜中", "まよなか", "Midnight"],
  ["窓", "まど", "Window"],
  ["開ける", "あける", "To open"],
  ["本", "ほん", "Book"],

  ["読む", "よむ", "To read"],
  ["練習", "れんしゅう", "Practice"],
  ["不自然", "ふしぜん", "Unnatural"],
  ["不気味", "ぶきみ", "Eerie / Creepy"],
  ["響く", "ひびく", "To echo / To resound"],

  ["毎晩", "まいばん", "Every night"],
  ["午前零時", "ごぜんれいじ", "Midnight (0:00 a.m.)"],
  ["同じ", "おなじ", "Same"],
  ["流れる", "ながれる", "To flow / To stream"],
  ["低く", "ひくく", "Low (sound, tone)"],

  ["重い", "おもい", "Heavy"],
  ["うめき声", "うめきごえ", "Groan / Moan"],
  ["音色", "ねいろ", "Tone / Timbre"],
  ["公園", "こうえん", "Park"],
  ["街灯", "がいとう", "Streetlight"],

  ["風", "かぜ", "Wind"],
  ["止まる", "とまる", "To stop"],
  ["空気", "くうき", "Air"],
  ["感じられました", "かんじられました", "Was felt / Could be felt"],
  ["ベンチ", "べんち", "Bench"],

  ["男", "おとこ", "Man"],
  ["顔", "かお", "Face"],
  ["影", "かげ", "Shadow"],
  ["隠れる", "かくれる", "To hide / To be hidden"],
  ["姿", "すがた", "Figure / Appearance"],

  ["薄暗い", "うすぐらい", "Dim / Gloomy"],
  ["浮かぶ", "うかぶ", "To float / To appear"],
  ["声をかける", "こえをかける", "To call out (to someone)"],
  ["指", "ゆび", "Finger"],
  ["動く", "うごく", "To move"],
  
  ["恐ろしい", "おそろしい", "Terrifying"],
  ["後ずさり", "あとずさり", "To step back / Recoil"],
  ["突然", "とつぜん", "Suddenly"],
  ["向く", "むく", "To turn toward"],
  ["真っ黒", "まっくろ", "Pitch black"],

  ["口元", "くちもと", "Mouth area / Expression around the mouth"],
  ["笑み", "えみ", "Smile (usually gentle, but here eerie)"],
  ["低い声", "ひくいこえ", "Low voice"],
  ["闇", "やみ", "Darkness"],
  ["響きました", "ひびきました", "Echoed / Resounded"],

  ["全力で", "ぜんりょくで", "With full power / At full speed"],
  ["逃げ出す", "にげだす", "To run away / Escape"],
  ["追いかける", "おいかける", "To chase / Pursue"],
  ["必死で", "ひっしで", "Desperately"],
  ["閉める", "しめる", "To close"],

  ["頭の中", "あたまのなか", "Inside one’s head"],
  ["信じる", "しんじる", "To believe"],
  ["幽霊", "ゆうれい", "Ghost"],
  ["出る", "でる", "To appear"],
  ["夢", "ゆめ", "Dream"],
  
  ["十二時", "じゅうにじ", "Twelve o’clock"],
  ["開けない", "あけない", "Do not open"],
  ["時々", "ときどき", "Sometimes"]

  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          夜のギターの音 {"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          真夜中、窓を開けて本を読んでいると、どこからかギターの音が聞こえてきました。最初は誰かが練習しているのだと思いました。けれども、その音はどこか不自然にゆっくりで、不気味に響いていました。
          {"\n"}
          {"\n"}
          毎晩、午前零時になると、同じメロディーが流れてきます。低く、重く、まるで誰かのうめき声のように聞こえる音色でした。
          {"\n"}
          {"\n"}
         ある夜、どうしても気になって、音のする方へ歩いて行きました。音は古い公園の奥から聞こえてきます。街灯も少なく、風が止まり、空気が冷たく感じられました。
          {"\n"}
          {"\n"}
          公園のベンチには、一人の男が座っていました。顔は影に隠れて見えません。ただ、ゆっくりとギターをかき鳴らしている姿だけが、薄暗い光の中に浮かんでいました。
          {"\n"}
          {"\n"}
          私は声をかけようとしましたが、言葉が出ませんでした。なぜなら、その男の指が動いていないのに、音が鳴り続けていたからです。
          {"\n"}
          {"\n"}
          恐ろしくなって後ずさりすると、突然ギターの音が止まり、男がこちらを向きました。目は真っ黒で、口元に不気味な笑みを浮かべていました。
          {"\n"}
          {"\n"}
          「聞こえるのか…？」低い声が闇の中で響きました。その瞬間、私は全力で逃げ出しました。後ろからギターの音が追いかけてくるように響き続けました。
          {"\n"}
          {"\n"}
          自分の部屋に戻り、必死で窓を閉めても、音は耳から離れません。頭の中で、同じメロディーが何度も何度も流れ続けました。
                    {"\n"}
          {"\n"}
          次の日、友達にその話をすると、誰も信じてくれませんでした。ただ一人だけが小さな声で言いました。「その公園には、昔ギターを弾いていた男の幽霊が出るって…」
          {"\n"}
          {"\n"}
          それ以来、私は夜の十二時に窓を開けないようにしています。けれども、ときどき、夢の中であの不気味なギターの音が響いてくるのです。
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

export default N3_Story2;
