import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeScreen } from "../features/home";
import { QuizScreen } from "../features/quiz";
import { ResultScreen } from "../features/results";

const RootRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/quiz" element={<QuizScreen />} />
      <Route path="/results" element={<ResultScreen />} />
    </Routes>
  </Router>
);

export default RootRouter;
