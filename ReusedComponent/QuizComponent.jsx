import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import AppBannerAd from "./AppBannerAd";

export default function QuizComponent({ allQuestions, quizLimit = 10 }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  // Shuffle array (Fisher-Yates)
  const shuffleArray = (arr) => {
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  const startQuiz = () => {
    const shuffled = shuffleArray(allQuestions)
      .slice(0, quizLimit)
      .map((q) => ({
        ...q,
        options: shuffleArray(q.options),
      }));

    setQuestions(shuffled);
    setCurrentQuestion(0);
    setScore(0);
    setSelected(null);
    setIsFinished(false);
    setWrongAnswers([]);
  };

  useEffect(() => {
    startQuiz();
  }, []);

  const handleAnswer = (option) => {
    setSelected(option);

    if (option === questions[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
    } else {
      setWrongAnswers((prev) => [
        ...prev,
        {
          question: questions[currentQuestion].question,
          correctAnswer: questions[currentQuestion].correctAnswer,
        },
      ]);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion((prev) => prev + 1);
        setSelected(null);
      } else {
        setIsFinished(true);
      }
    }, 700);
  };

  if (questions.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Loading Question...</Text>
      </View>
    );
  }

  if (isFinished) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>🎉 Quiz Finished!</Text>
        <Text style={styles.score}>
          Your Score: <Text style={{ color: "#4A90E2" }}>{score}</Text> / {questions.length}
        </Text>

        {wrongAnswers.length > 0 ? (
          <View style={styles.resultBox}>
            <Text style={styles.resultTitle}>
              Correct Answer:
            </Text>
            {wrongAnswers.map((item, idx) => (
              <View key={idx} style={styles.wrongBox}>
                <Text style={styles.wrongQuestion}>❌ {item.question}</Text>
                <Text style={styles.correctText}>✔ {item.correctAnswer}</Text>
              </View>
            ))}
          </View>
        ) : (
          <Text style={styles.allCorrect}>Perfect, You're a Genius ! ✨</Text>
        )}

        <TouchableOpacity style={styles.retryButton} onPress={startQuiz}>
          <Text style={styles.retryText}>🔄 Repeat Quiz</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Question {currentQuestion + 1} / {questions.length}
      </Text>
      <View style={styles.questionCard}>
        <Text style={styles.question}>{questions[currentQuestion].question}</Text>
      </View>

      {questions[currentQuestion].options.map((option, index) => {
        const isCorrect = option === questions[currentQuestion].correctAnswer;
        const isSelected = selected === option;

        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              isSelected && {
                backgroundColor: isCorrect ? "#4CAF50" : "#F44336",
              },
            ]}
            onPress={() => handleAnswer(option)}
            disabled={selected !== null}
          >
            <Text style={styles.optionText}>
              {String.fromCharCode(65 + index)}. {option}
            </Text>
          </TouchableOpacity>
        );
      })}
      <AppBannerAd/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F8F9FB",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
    color: "#4A90E2", // gunakan warna primer di judul
  },
  questionCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 16,
    marginBottom: 24,
    shadowColor: "#4A90E2", // shadow biru tipis
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: "#4A90E2", // aksen garis biru
  },
  question: {
    fontSize: 18,
    color: "#2C3E50",
    textAlign: "center",
    fontWeight: "600",
  },
  option: {
    width: "100%",
    padding: 14,
    marginVertical: 6,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  optionText: {
    fontSize: 16,
    color: "#34495E",
    fontWeight: "500",
  },
  score: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 12,
    textAlign: "center",
    color: "#4A90E2", // skor ditonjolkan dengan warna primer
  },
  resultBox: {
    marginTop: 24,
    width: "100%",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 14,
    shadowColor: "#4A90E2",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    borderLeftWidth: 3,
    borderLeftColor: "#4A90E2", // aksen biru
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
    color: "#2C3E50",
  },
  wrongBox: {
    marginBottom: 10,
  },
  wrongQuestion: {
    fontSize: 14,
    color: "#E74C3C",
    marginBottom: 2,
    fontWeight: "500",
  },
  correctText: {
    fontSize: 14,
    color: "#27AE60",
    fontWeight: "500",
  },
  allCorrect: {
    marginTop: 20,
    fontSize: 16,
    color: "#27AE60",
    fontWeight: "600",
    textAlign: "center",
  },
  retryButton: {
    marginTop: 28,
    paddingVertical: 14,
    paddingHorizontal: 26,
    backgroundColor: "#4A90E2",
    borderRadius: 16,
    shadowColor: "#4A90E2",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  retryText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
});

