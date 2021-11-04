import React, { FC } from "react";
import "./styles/App.css";
import Content from "./components/Content/Content";
import useFetch from "./hooks/useFetch";

const App: FC = () => {
  const {
    response: data,
    loading,
    error,
  } = useFetch("https://superhero-search.p.rapidapi.com/api/heroes", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "superhero-search.p.rapidapi.com",
      "x-rapidapi-key": "40327cfeaemsh6f17a39819d2af5p1b450fjsnba94d98add12",
    },
  });

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error.</div>}
      {!loading && !error && <Content data={data} />}
    </>
  );
};

export default App;
