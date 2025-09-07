import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N3_Story5({}) {

  const tableData = [

  ["Japan", "Hiragana", "Translation"],

  ["初めて", "はじめて", "For the first time"],
  ["仕事", "しごと", "Work / Job"],
  ["朝", "あさ", "Morning"],
  ["目が覚める", "めがさめる", "To wake up"],
  ["会社", "かいしゃ", "Company"],

  ["働く", "はたらく", "To work"],
  ["胸", "むね", "Chest / Heart (feelings)"],
  ["どきどき", "どきどき", "Heartbeat (nervous, excited)"],
  ["眠れない", "ねむれない", "Unable to sleep"],
  ["スーツ", "すーつ", "Suit"],

  ["着替える", "きがえる", "To change clothes"],
  ["鏡", "かがみ", "Mirror"],
  ["ネクタイ", "ねくたい", "Necktie"],
  ["直す", "なおす", "To fix / Adjust"],
  ["緊張", "きんちょう", "Nervousness / Tension"],

  ["震える", "ふるえる", "To tremble / Shiver"],
  ["自分に言い聞かせる", "じぶんにいいきかせる", "To tell oneself / Encourage oneself"],
  ["電車", "でんしゃ", "Train"],
  ["新聞", "しんぶん", "Newspaper"],
  ["社員証", "しゃいんしょう", "Employee ID card"],

  ["受付", "うけつけ", "Reception desk"],
  ["案内", "あんない", "Guidance / Information"],
  ["会議室", "かいぎしつ", "Conference room"],
  ["仲間", "なかま", "Companions / Colleagues"],
  ["自己紹介", "じこしょうかい", "Self-introduction"],

  ["出身地", "しゅっしんち", "Hometown / Place of origin"],
  ["心臓", "しんぞう", "Heart (organ, figurative for heartbeat)"],
  ["跳ねる", "はねる", "To jump / Bounce"],
  ["安心", "あんしん", "Relief / Reassurance"],
  ["先輩", "せんぱい", "Senior / Mentor"],

  ["説明", "せつめい", "Explanation"],
  ["丁寧", "ていねい", "Polite / Careful"],
  ["必死に", "ひっしに", "Desperately"],
  ["メモを取る", "めもをとる", "To take notes"],
  ["部署", "ぶしょ", "Department / Section"],
  ["食堂", "しょくどう", "Cafeteria / Dining hall"],
  
  ["優しい", "やさしい", "Kind / Gentle"],
  ["ほどける", "ほどける", "To loosen / Relax (tension)"],
  ["午後", "ごご", "Afternoon"],
  ["作業", "さぎょう", "Work / Task"],
  ["真っ白", "まっしろ", "Completely white / Blank"],

  ["助ける", "たすける", "To help / Save"],
  ["終える", "おえる", "To finish / Complete"],
  ["充実", "じゅうじつ", "Fulfillment / Enrichment"],
  ["社会人", "しゃかいじん", "Working adult / Member of society"],
  ["実感する", "じっかんする", "To realize / Feel strongly"],

  ["窓", "まど", "Window"],
  ["映る", "うつる", "To reflect / Appear (in a mirror, window)"],
  ["大人びる", "おとなびる", "To look/act grown-up"],
  ["不安", "ふあん", "Anxiety / Uneasiness"],
  ["自信", "じしん", "Confidence"],
  
  ["大切", "たいせつ", "Important / Precious"],
  ["一日", "いちにち", "One day / Whole day"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          初めての仕事の日{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          朝、いつもより早く目が覚めました。今日から新しい会社で働くと思うと、胸がどきどきして眠れなかったのです。
          {"\n"}
          {"\n"}
          スーツに着替え、鏡の前でネクタイを何度も直しました。緊張で手が少し震えていましたが、「よし、大丈夫」と自分に言い聞かせました。
          {"\n"}
          {"\n"}
         電車に乗ると、同じようにスーツを着た人たちが黙って新聞を読んだり、スマートフォンを見たりしていました。その中に混じると、自分も少し大人になった気がしました。
          {"\n"}
          {"\n"}
          会社に着くと、受付で社員証を受け取り、案内の人に会議室まで連れて行かれました。そこには、同じ日に入社した仲間が十人ほど集まっていました。
          {"\n"}
          {"\n"}
          最初は自己紹介から始まりました。名前と出身地を言うだけなのに、心臓が跳ねるように緊張しました。それでも、みんなも同じように緊張しているのを見て、少し安心しました。
          {"\n"}
          {"\n"}
          その後、先輩が会社のルールや仕事の流れを丁寧に説明してくれました。私は必死にメモを取りながら、「早く仕事を覚えなくては」と思いました。
          {"\n"}
          {"\n"}
          昼休みには、同じ部署の先輩が食堂へ連れて行ってくれました。「最初は分からないことばかりだから、気にしないでね」と優しく言ってくれて、緊張が少しほどけました。
          {"\n"}
          {"\n"}
          午後にはパソコンを使って簡単な作業をしました。分からないことが多く、頭が真っ白になりそうでしたが、先輩に助けてもらいながらなんとか終えることができました。
                    {"\n"}
          {"\n"}
          仕事が終わる頃には、体も頭もとても疲れていましたが、不思議と心は充実していました。「今日から自分の社会人生活が始まったんだ」と実感しました。
                              {"\n"}
          {"\n"}
          帰りの電車の窓に映る自分の顔は、少しだけ大人びて見えました。初めての仕事の日は、緊張と不安と、そして小さな自信が混ざった大切な一日になりました。
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

export default N3_Story5;