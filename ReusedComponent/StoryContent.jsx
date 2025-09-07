import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import AppBannerAd from "./AppBannerAd"; // reused banner
import interstitialAdManager from "./InterstitialAd"; // reusable interstitial

function StoryContent() {
  const navigation = useNavigation();

  const quizzes = [
    { type: "katakana", label: "Katakana Practice", icon: "language-outline" },
    { type: "hiragana", label: "Hiragana Practice", icon: "text-outline" },
    { type: "N5", label: "N5 Practice", icon: "book-outline" },
    { type: "N4", label: "N4 Practice", icon: "book-outline" },
    { type: "N3", label: "N3 Practice", icon: "book-outline" },
    { type: "N2", label: "N2 Practice", icon: "book-outline" },
    { type: "N1", label: "N1 Practice", icon: "book-outline" },
    { type: "D1", label: "Daily Life", icon: "cafe-outline" },
    { type: "Rom", label: "Romance", icon: "heart-outline" },
  ];

  const handlePress = (type) => {
    interstitialAdManager.showAd(type, navigation);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>✨ Quiz Time ✨</Text>

      <ScrollView
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
      >
        {quizzes.map((q) => (
          <TouchableOpacity
            key={q.type}
            style={styles.card}
            activeOpacity={0.85}
            onPress={() => handlePress(q.type)}
          >
            <View style={styles.iconWrapper}>
              <Ionicons name={q.icon} size={30} color="#fff" />
            </View>
            <Text style={styles.cardText}>{q.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Banner hovering bawah */}
      <AppBannerAd />
    </View>
  );
}

export default StoryContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8F9FB",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
    color: "#4A90E2",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: 80, // biar konten gak ketutup banner
  },
  card: {
    width: "48%",
    aspectRatio: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
    shadowColor: "#4A90E2",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 5,
    padding: 10,
  },
  iconWrapper: {
    backgroundColor: "#4A90E2",
    padding: 14,
    borderRadius: 50,
    marginBottom: 12,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2C3E50",
    textAlign: "center",
  },
});
