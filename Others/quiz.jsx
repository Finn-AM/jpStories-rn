import React from "react";
import { useRoute } from "@react-navigation/native";
import QuizComponent from "../ReusedComponent/QuizComponent";

import { quizDataMap } from "./quizData"; 


export default function Quiz() {
  const route = useRoute();
  const { type } = route.params || {}; // ambil param dari navigation

  const selectedQuestions = quizDataMap[type] || [];

  return (
    <QuizComponent
      allQuestions={selectedQuestions}
      quizLimit={10}
    />
  );
}
