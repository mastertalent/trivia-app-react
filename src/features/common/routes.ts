import { HomeScreen } from "../home";
import { QuizScreen } from "../quiz";
import { ResultScreen } from "../results";

export const routes = [
  {
    path: "/",
    element: HomeScreen,
    protected: false,
  },
  {
    path: "/quiz",
    element: QuizScreen,
    protected: true,
  },
  {
    path: "/results",
    element: ResultScreen,
    protected: true,
  },
];