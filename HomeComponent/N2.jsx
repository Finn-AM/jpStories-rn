import { StyleSheet, Text, ScrollView } from "react-native";
import StoryTitle from '../ReusedComponent/StoryTitle';
import PageChild from '../ReusedComponent/PageChild';


function N2({navigation , alink}) {
  return (
    <ScrollView style={styles.container}>

<PageChild name='N2 - Advance' />

<StoryTitle judulCerita='思い出のカメラ' navigation={navigation} alink='N2_1'/>
<StoryTitle judulCerita='森で迷って'navigation={navigation} alink='N2_2'/>
<StoryTitle judulCerita='貧しさを越えて'navigation={navigation} alink='N2_3'/>
<StoryTitle judulCerita='雨の日の思い出'navigation={navigation} alink='N2_4'/>
<StoryTitle judulCerita='人気者の秘密'navigation={navigation} alink='N2_5'/>

<StoryTitle judulCerita='人気者の秘密・第二章'navigation={navigation} alink='N2_6'/>
<StoryTitle judulCerita='間違えたメッセージ'navigation={navigation} alink='N2_7'/>
<StoryTitle judulCerita='初めてのアルバイト'navigation={navigation} alink='N2_8'/>
<StoryTitle judulCerita='食堂の騒ぎ'navigation={navigation} alink='N2_9'/>
<StoryTitle judulCerita='先輩に恋して'navigation={navigation} alink='N2_10'/>

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


export default N2;