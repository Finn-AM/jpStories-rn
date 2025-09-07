import { StyleSheet, Text, View } from "react-native";

function PageChild({ name, judulCerita }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name} Story</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4A90E2",
  },
  name: {
    fontSize: 25,
    marginTop:6,
    marginBottom:4,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
});

export default PageChild;
