import { useEffect } from "react";
import Home from "./Home";
import { useDispatch } from "react-redux";
import { reset } from "../common";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return <Home />;
};

export default HomeScreen;
