import React, { MouseEventHandler } from "react";

export interface AnswerProps {
  question: string;
  rightAnswer: boolean;
}

export interface QuizPropTypes {
  category: string;
  number: number;
  total: number;
  question: string;
  onAnswer: any;
}

export interface ResultsProps {
  results: any;
  onPlayAgain: MouseEventHandler<HTMLButtonElement>;
}
