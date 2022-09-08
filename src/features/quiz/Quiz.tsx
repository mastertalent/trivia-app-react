import React from "react";
import { QuizPropTypes } from "../common/interface";

const Quiz: React.FC<QuizPropTypes> = ({
  category,
  number,
  total,
  question,
  onAnswer,
}) => {
  return (
    <div className={"center"}>
      <div className={"title"}>{category}</div>
      <div
        className={"qus"}
        dangerouslySetInnerHTML={{ __html: question }}
      ></div>
      <div className={"status"}>{`Question ${number} of ${total}`}</div>
      <div>
        <button
          onClick={() => {
            onAnswer("True");
          }}
        >
          True
        </button>
        <button
          onClick={() => {
            onAnswer("False");
          }}
        >
          False
        </button>
      </div>
    </div>
  );
};

export default Quiz;
