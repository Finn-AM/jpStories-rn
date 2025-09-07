import { StyleSheet, Text, ScrollView } from "react-native";
import StoryTitle from '../ReusedComponent/StoryTitle';
import PageChild from '../ReusedComponent/PageChild';


function N5({navigation , alink}) {
  return (
    <ScrollView style={styles.container}>

<PageChild name='N5 - Super Easy' />

<StoryTitle judulCerita='おうのねこ' navigation={navigation} alink='N5_1'/>
<StoryTitle judulCerita='たろう の ぼうけん'navigation={navigation} alink='N5_2'/>
<StoryTitle judulCerita='リカとふしぎなもり - パート１'navigation={navigation} alink='N5_3'/>
<StoryTitle judulCerita='リカとふしぎなもり - パート2'navigation={navigation} alink='N5_4'/>
<StoryTitle judulCerita='リカとふしぎなもり - パート3 (End)'navigation={navigation} alink='N5_5'/>

<StoryTitle judulCerita='さびしいきょじん'navigation={navigation} alink='N5_6'/>
<StoryTitle judulCerita='いなくなったわたしのねこ'navigation={navigation} alink='N5_7'/>

<StoryTitle judulCerita='わたしの楽しい休み'navigation={navigation} alink='N5_8'/>
<StoryTitle judulCerita='ふしぎなねこ'navigation={navigation} alink='N5_9'/>
<StoryTitle judulCerita='友だちと会う'navigation={navigation} alink='N5_10'/>



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




export default N5;