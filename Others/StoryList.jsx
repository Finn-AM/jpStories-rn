// StoryList.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { stories } from "./Storiess"; // data cerita
import { Ionicons } from "@expo/vector-icons";

export default function StoryList({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>📚 ストーリーを選んでください</Text>

      <View style={styles.grid}>
        {stories.map((story) => (
          <TouchableOpacity
            key={story.id}
            style={styles.card}
            activeOpacity={0.85}
            onPress={() => navigation.navigate("StoryGame", { storyId: story.id })}
          >
            <View style={styles.iconWrapper}>
              <Ionicons name="book-outline" size={28} color="#2C3E50" />
            </View>
            <Text style={styles.cardText}>{story.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8F9FB", // lebih bersih
  },
  title: {
    fontSize: 22,
    marginBottom: 16,
    fontWeight: "700",
    color: "#2C3E50",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#4A90E2",
    width: "48%", // biar jadi 2 kolom
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4, // Android shadow
    alignItems: "center",
  },
  iconWrapper: {
    backgroundColor: "#EAF4F4",
    padding: 12,
    borderRadius: 50,
    marginBottom: 12,
  },
  cardText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
