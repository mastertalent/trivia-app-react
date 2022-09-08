import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="center">
      <div className="title">Access Forbidden!</div>
      <div className="desc">
        You can't access this page directly from WebBrowser.
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default Error;
