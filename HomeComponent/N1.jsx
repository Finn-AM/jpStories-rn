import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PageChild from '../ReusedComponent/PageChild';
import StoryTitle from '../ReusedComponent/StoryTitle';



function N1({navigation , alink}) {
  return (
    <ScrollView style={styles.container}>

<PageChild name='N1' />
<StoryTitle judulCerita='木の上の家' navigation={navigation} alink='N1_1'/>
<StoryTitle judulCerita='遅すぎた帰宅'navigation={navigation} alink='N1_2'/>
<StoryTitle judulCerita='失敗した休暇'navigation={navigation} alink='N1_3'/>
<StoryTitle judulCerita='偽りの恋人'navigation={navigation} alink='N1_4'/>
<StoryTitle judulCerita='魔法使いの帽子'navigation={navigation} alink='N1_5'/>

<StoryTitle judulCerita='数学試験の失敗'navigation={navigation} alink='N1_6'/>
<StoryTitle judulCerita='怖い新任教師'navigation={navigation} alink='N1_7'/>
<StoryTitle judulCerita='図書館での恋'navigation={navigation} alink='N1_8'/>
<StoryTitle judulCerita='新しい猫'navigation={navigation} alink='N1_9'/>
<StoryTitle judulCerita='レストランでの仕事'navigation={navigation} alink='N1_10'/>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginRight:7,
    backgroundColor: '#4A90E2',
  }
});



export default N1