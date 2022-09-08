import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_ENDPOINT } from "../../constants";
import DOMPurify from "dompurify";

export const myStore = createSlice({
  name: "common",
  initialState: {
    questions: [],
    answers: [],
    isAuthenticated: false,
    error: undefined,
  },
  reducers: {
    setQuestions: (state: any, action: any) => {
      state.questions = action.payload.map((element: { question: string | Node; }) => {
        element.question = DOMPurify.sanitize(element.question);
        return element;
      });
      state.error = undefined;
    },
    setAnswer: (state: any, action: any) => {
      state.answers.push(action.payload);
    },
    reset: (state) => {
      state.questions = [];
      state.answers = [];
      state.isAuthenticated = true;
      state.error = undefined;
    },
  },
});

export const { setQuestions, setAnswer, reset } = myStore.actions;

export const fetchQuestions = () => (dispatch: (arg0: { payload: any; type: string; } | { payload: undefined; type: string; }) => void) => {
  axios
    .get(API_ENDPOINT, { headers: { Accept: "application/json" } })
    .then((response) => {
      const { data } = response;
      const { results } = data;
      dispatch(setQuestions(results));
    })
    .catch((e) => {
      console.error(e);
    });
};

export const selectQuestion = (state: { common: any; }) => {
  const { common } = state;
  const { error, questions, answers } = common;

  if (error) {
    return { error };
  }

  if (questions.length > 0) {
    const currentQuestion = questions[answers.length];
    return {
      ...currentQuestion,
      number: answers.length + 1,
      total: questions.length,
    };
  }

  return {};
};

export const _isAuthenticated = (state: { common: any; }) => {
  const { common } = state;
  const { isAuthenticated } = common;

  return isAuthenticated;
}

export const selectResults = (state: { common: any; }) => {
  const { common } = state;
  const { questions, answers } = common;

  return questions.map((question: { question: any; correct_answer: any; }, index: string | number) => ({
    question: question.question,
    rightAnswer: answers[index] === question.correct_answer,
  }));
};

export default myStore.reducer;
