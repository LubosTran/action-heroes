import React, { FC } from "react";
import "./styles/App.css";
import Content, { Hero } from "./components/Content/Content";

const App: FC = () => {
  const data = [] as Hero[];
  return <Content data={data} />;
};

export default App;
