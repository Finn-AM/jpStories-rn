import { ScrollView, StyleSheet, Text, View } from "react-native";
import StoryTitle from '../ReusedComponent/StoryTitle';
import PageChild from '../ReusedComponent/PageChild';


function N4({navigation , alink}) {
  return (
    <ScrollView style={styles.container}>

<PageChild name='N4 - Easy' />

<StoryTitle judulCerita='異世界の一日' navigation={navigation} alink='N4_1'/>
<StoryTitle judulCerita='クラスメートへの気もち'navigation={navigation} alink='N4_2'/>
<StoryTitle judulCerita='帰ってきたわたしのねこ'navigation={navigation} alink='N4_3'/>
<StoryTitle judulCerita='木のうしろのかげ'navigation={navigation} alink='N4_4'/>
<StoryTitle judulCerita='名前のない手紙'navigation={navigation} alink='N4_5'/>

<StoryTitle judulCerita='帰らない客'navigation={navigation} alink='N4_6'/>
<StoryTitle judulCerita='学校の空き部屋'navigation={navigation} alink='N4_7'/>
<StoryTitle judulCerita='友だちの家でゲームをする'navigation={navigation} alink='N4_8'/>
<StoryTitle judulCerita='学校大会の少女'navigation={navigation} alink='N4_9'/>
<StoryTitle judulCerita='終わりのない図書館'navigation={navigation} alink='N4_10'/>



    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginRight:7,
    backgroundColor: '#4A90E2',
  }
});



export default N4;