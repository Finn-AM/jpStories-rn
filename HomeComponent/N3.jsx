import { StyleSheet, Text, ScrollView } from "react-native";
import StoryTitle from '../ReusedComponent/StoryTitle';
import PageChild from '../ReusedComponent/PageChild';


function N3({navigation , alink}) {
  return (
    <ScrollView style={styles.container}>

<PageChild name='N3 - Intermediate' />

<StoryTitle judulCerita='一緒に使った傘' navigation={navigation} alink='N3_1'/>
<StoryTitle judulCerita='夜のギターの音'navigation={navigation} alink='N3_2'/>
<StoryTitle judulCerita='おばあちゃんの家への旅行'navigation={navigation} alink='N3_3'/>
<StoryTitle judulCerita='雲の上の町'navigation={navigation} alink='N3_4'/>
<StoryTitle judulCerita='初めての仕事の日'navigation={navigation} alink='N3_5'/>

<StoryTitle judulCerita='小さな町の事件'navigation={navigation} alink='N3_6'/>
<StoryTitle judulCerita='学校の新しい友達'navigation={navigation} alink='N4_7'/>
<StoryTitle judulCerita='小さな探偵'navigation={navigation} alink='N3_8'/>
<StoryTitle judulCerita='奇妙な買い物'navigation={navigation} alink='N3_9'/>
<StoryTitle judulCerita='親友を好きになる'navigation={navigation} alink='N3_10'/>

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



export default N3;