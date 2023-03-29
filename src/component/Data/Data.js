import { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import Header from "../Header/Header";

const URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1";
const Data = () => {
  const [data, setData] = useState([]);
  const getData = (data) => setData(data);
  useEffect(() => {
    try {
      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          setData(data.results);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <Header Data={getData} />
      <Pagination data={data} />
    </>
  );
};

export default Data;
