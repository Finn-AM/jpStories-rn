import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { Alert } from "react-native";

function HomeChild({ message, name , navigation }) {
  const handlePress = () => {
    // Alert.alert(message);
    navigation.navigate(name)
  };
  return (
    <View style={styles.container}>

      <View style={styles.underlinedWrapper}>
      <Text style={styles.name}>{name}</Text>
        <View style={styles.underline} />
    </View>

      <Text style={styles.title}>Req : </Text>
      <Text>- Hiragana & Katakana</Text>
      <Text>- Kanji Min. 200</Text>
      <Text>- Vocabulary Min. 1000</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>


      <TouchableOpacity onPress={handlePress}>
      <Text
      style={styles.enter}>
    
        Enter</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "45%",
    height: 240,
    marginRight: 7,
    marginBottom: 18,
    backgroundColor: "skyblue",
    borderRadius: 10, // Opsional: untuk sudut melengkung
    borderWidth: 4, // Opsional: menambahkan border
    borderColor: "black",
    justifyContent:'space-between'
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    // color: "",
    textAlign: "center",
  },
  underlinedWrapper: {
  width: '100%',
  marginBottom: 8,
  // backgroundColor:'brown',
},
underline: {
  height: 2,
  backgroundColor: 'chocolate',
  width: '100%',
  marginTop: 2,
},
  enter: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf:'',
    textAlign: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    // textAlign: 'center',
    // marginBottom: 20,
    // textDecorationLine: 'underline', // jika ingin ada garis bawah
  },
});

export default HomeChild;
