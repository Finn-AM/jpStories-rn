import { ScrollView, StyleSheet, Text, View } from "react-native";
import TableComponent from "../ReusedComponent/TableComponent";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

function N3_Story7({}) {

  const tableData = [

  ["Japan", "Hiragana", "Translation"],

  ["学校", "がっこう", "School"],
  ["新しい", "あたらしい", "New"],
  ["友達", "ともだち", "Friend"],
  ["春", "はる", "Spring"],
  ["学期", "がっき", "School term / Semester"],
  
  ["始まる", "はじまる", "To begin"],
  ["クラス替え", "くらすがえ", "Class change / Class reshuffle"],
  ["緊張", "きんちょう", "Nervousness / Tension"],
  ["教室", "きょうしつ", "Classroom"],
  ["見知らぬ", "みしらぬ", "Unfamiliar / Unknown"],

  ["顔", "かお", "Face"],
  ["心配", "しんぱい", "Worry / Concern"],
  ["自己紹介", "じこしょうかい", "Self-introduction"],
  ["隣", "となり", "Next to / Neighbor"],
  ["席", "せき", "Seat"],

  ["転校生", "てんこうせい", "Transfer student"],
  ["恥ずかしそうに", "はずかしそうに", "Shyly / Embarrassedly"],
  ["笑う", "わらう", "To smile / laugh"],
  ["よろしくお願いします", "よろしくおねがいします", "Nice to meet you / Please take care of me"],
  ["小さな声", "ちいさなこえ", "Small voice"],

  ["休み時間", "やすみじかん", "Break time / Recess"],
  ["思い切って", "おもいきって", "Boldly / With courage"],
  ["話しかける", "はなしかける", "To talk to / Start a conversation"],
  ["答える", "こたえる", "To answer"],
  ["方言", "ほうげん", "Dialect"],

  ["新鮮", "しんせん", "Fresh / Novel"],
  ["会話", "かいわ", "Conversation"],
  ["帰り道", "かえりみち", "Way home"],
  ["偶然", "ぐうぜん", "By chance / Coincidence"],
  ["方向", "ほうこう", "Direction"],

  ["音楽", "おんがく", "Music"],
  ["趣味", "しゅみ", "Hobby"],
  ["自然に", "しぜんに", "Naturally"],
  ["行動する", "こうどうする", "To act / To behave"],
  ["給食", "きゅうしょく", "School lunch"],

  ["掃除", "そうじ", "Cleaning"],
  ["隣で", "となりで", "Next to (someone)"],
  ["嬉しい", "うれしい", "Happy / Glad"],
  ["体育", "たいいく", "Physical education"],
  ["授業", "じゅぎょう", "Class / Lesson"],

  ["転ぶ", "ころぶ", "To fall down"],
  ["駆け寄る", "かけよる", "To run up to / Approach quickly"],
  ["大丈夫", "だいじょうぶ", "Are you okay? / All right"],
  ["手を差し伸べる", "てをさしのべる", "To extend one’s hand"],
  ["優しさ", "やさしさ", "Kindness"],

  ["胸", "むね", "Chest / Heart (emotional)"],
  ["温かくなる", "あたたかくなる", "To become warm"],
  ["放課後", "ほうかご", "After school"],
  ["図書室", "としょしつ", "Library (room)"],
  ["宿題", "しゅくだい", "Homework"],

  ["校庭", "こうてい", "Schoolyard / Playground"],
  ["おしゃべり", "おしゃべり", "Chat / Talk"],
  ["あっという間に", "あっというまに", "In an instant / Very quickly"],
  ["少しずつ", "すこしずつ", "Little by little"],
  ["グループ", "ぐるーぷ", "Group"],
  
  ["明るくなる", "あかるくなる", "To become cheerful / brighter"],
  ["春風", "はるかぜ", "Spring breeze"],
  ["素敵", "すてき", "Wonderful / Lovely"],
  ["思い出", "おもいで", "Memory"],
  ["作る", "つくる", "To make / Create"],
  ["これからも", "これからも", "From now on as well / Going forward too"]
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.judul}>
          学校の新しい友達{"\n"}
          {"\n"}{" "}
        </Text>

        <Text style={styles.artikel}>
          春、新しい学期が始まりました。クラス替えがあり、私は少し緊張しながら教室に入りました。見知らぬ顔も多くて、「友達ができるかな」と心配になりました。
          {"\n"}
          {"\n"}
          自己紹介の時間、私の隣の席になったのは、田中さんという転校生でした。彼女は少し恥ずかしそうに笑いながら、「よろしくお願いします」と小さな声で言いました。
          {"\n"}
          {"\n"}
          休み時間、私は思い切って田中さんに話しかけました。「どこから来たの？」と聞くと、「大阪から」と答えてくれました。彼女の方言が少し新鮮で、会話が楽しくなりました。
          {"\n"}
          {"\n"}
          その日の帰り道、偶然にも家の方向が同じだと分かりました。私たちは一緒に歩きながら、好きな音楽や趣味の話をしました。気づけば、緊張はなくなっていました。
          {"\n"}
          {"\n"}
          次の日から、私たちは自然に一緒に行動するようになりました。給食の時間も、掃除の時間も、隣で笑い合えるのがとても嬉しかったです。
          {"\n"}
          {"\n"}
          ある日、体育の授業で私は転んでしまいました。すると田中さんがすぐに駆け寄って、「大丈夫？」と手を差し伸べてくれました。その優しさに胸が温かくなりました。
          {"\n"}
          {"\n"}
          放課後には、図書室で宿題を一緒にしたり、校庭で長いおしゃべりをしたりしました。時間があっという間に過ぎていくのを感じました。
          {"\n"}
          {"\n"}
          クラスのみんなも少しずつ私たちに話しかけてくれるようになり、気づけば小さなグループができていました。田中さんのおかげで、私も明るくなれた気がします。
          {"\n"}
          {"\n"}
          春風の中で歩きながら、私は「新しい友達ができるって、こんなに素敵なんだ」と思いました。
          {"\n"}
          {"\n"}
          これからも田中さんと一緒に、学校生活の思い出をたくさん作っていきたいと思います。
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

export default N3_Story7;