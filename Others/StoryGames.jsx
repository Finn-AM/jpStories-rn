// StoryGame.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { stories } from "./Storiess";
import AppBannerAd from "../ReusedComponent/AppBannerAd";

export default function StoryGame({ route, navigation }) {
  const { storyId } = route.params;
  const story = stories.find((s) => s.id === storyId);
  const [currentScene, setCurrentScene] = useState(1);

  const getScene = (id) => story.scenes.find((scene) => scene.id === id);

  const scene = getScene(currentScene) || story.scenes.find((s) => s.id === currentScene);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>{scene.text}</Text>
        <View style={styles.choicesContainer}>
          {scene.choices.length > 0 ? (
            scene.choices.map((choice, index) => (
              <TouchableOpacity
                key={index}
                style={styles.choiceButton}
                onPress={() => setCurrentScene(choice.nextScene)}
              >
                <Text style={styles.choiceText}>{choice.option}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <TouchableOpacity
              style={[styles.choiceButton, { backgroundColor: "#4CAF50" }]}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.choiceText}>📖 他のストーリーを選ぶ</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
      <AppBannerAd/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF3E0", padding: 20 },
  text: { fontSize: 18, marginBottom: 20, lineHeight: 26, color: "#333" },
  choicesContainer: { marginTop: 10 },
  choiceButton: { backgroundColor: "#FFB703", padding: 15, borderRadius: 12, marginVertical: 8 },
  choiceText: { fontSize: 16, color: "#fff", textAlign: "center" }
});
