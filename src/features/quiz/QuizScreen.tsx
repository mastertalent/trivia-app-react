import { useEffect, useCallback } from "react";
import Quiz from "./Quiz";
import { LoadingSpin } from "../loading";
import { useSelector } from "react-redux";
import { selectQuestion, fetchQuestions, setAnswer } from "../common";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "./../hooks";

const QuizScreen = () => {
  const dispath = useAppDispatch();
  const result = useSelector(selectQuestion);
  const navigate = useNavigate();

  useEffect(() => {
    dispath(fetchQuestions());
  }, [dispath]);

  const onAnswer = useCallback(
    (answer: string) => {
      dispath(setAnswer(answer));
      if (result.number === result.total) {
        navigate("/results");
      }
    },
    [dispath, result.number, result.total, navigate]
  );

  if (result.question) {
    return <Quiz {...result} onAnswer={onAnswer} />;
  }

  return <LoadingSpin />;
};

export default QuizScreen;
