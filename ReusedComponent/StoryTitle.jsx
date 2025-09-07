import {
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

function StoryTitle({ teksJudul, judulCerita, navigation , alink }) {
  const movingPage = () => {
    navigation.navigate(alink ?? "StoryContent");
  };

  return (

    <View style={styles.judulCerita}>
      {/* <TouchableOpacity onPress={movingPage}>
        <Text style={styles.teksJudul}>{judulCerita}</Text>
      </TouchableOpacity> */}

          <TouchableOpacity style={styles.card} activeOpacity={0.85} onPress={movingPage} >
      <View style={styles.iconWrapper}>
      </View>
      <Text style={styles.cardText}>{judulCerita}</Text>
    </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({

  judulCerita: {
    // backgroundColor: "gray",
    // height: 40,
    // alignItems:'center',
    justifyContent: "center",
    // marginBottom: 5,
  },
  teksJudul: {
    fontFamily: "sans-serif-condensed",
    fontSize: 15,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1B263B",
    paddingVertical: 14,
    paddingHorizontal: 18,
    // borderRadius: 16,
    marginVertical: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
    width:'100%',
    // borderWidth:2,
    // borderColor:'#4A90E2'
  },
    iconWrapper: {
    backgroundColor: "white",
    padding: 8,
    // borderRadius: 32,
    marginRight: 10,
  },
  cardText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  }
});

export default StoryTitle;
