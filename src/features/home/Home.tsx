import { useNavigate } from "react-router-dom";
import { APP_TITLE } from "../../constants";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={"center"}>
      <div className={"title"}>{APP_TITLE}</div>
      <div className={"desc"}>
        You will be presented with 10 True of False questions.
      </div>
      <div className={"desc"}>Can you score 100%?</div>
      <div>
        <button
          onClick={() => {
            navigate("/quiz");
          }}
        >
          Begin
        </button>
      </div>
    </div>
  );
};

export default Home;
