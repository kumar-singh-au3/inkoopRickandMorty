import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Header";
import TableData from "./TableData";
import Footer from "./Footer";
import Loader from "./Loader";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [currentpage, setCurrentpage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/?page=1`)
      .then(function(response) {
        setLoading(false);

        setData(response.data);
      })
      .catch(function(error) {
        setData([]);
        console.log("this is error", error);
      });
  }, []);

  const setcurrentpage = number =>
    axios
      .get(`https://rickandmortyapi.com/api/episode/?page=${number}`)
      .then(function(response) {
        setData(response.data);
        setCurrentpage(number);
      })
      .catch(function(error) {
        console.log("this is error", error);
      });

  const handleChange = event => {
    setSearch(event.target.value);
  };
  const onSearch = () => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/?name=${search}`)
      .then(function(response) {
        setData(response.data);
      })
      .catch(function(error) {
        setData([])
        console.log("this is error", error);
      });
  };
  return loading ? (
    <Loader />
  ) : (
    <div>
      <Header handleChange={handleChange} search={search} onSearch={onSearch} />
      <TableData data={data.results&&data.results.length ? data.results : []} />
      <Footer
        totalPage={data.info ? data.info["pages"] : 1}
        currentpage={currentpage}
        setcurrentpage={setcurrentpage}
      />
    </div>
  );
};

export default HomePage;
