import React, { useState, useEffect } from "react";
import axios from "axios";
import notFoundImg from "./svg/not-found.svg";

import "./Dictionary.css";
import Data from "./Data";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [inputWord, setInputWord] = useState(null);
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(null);

  const searchSection = (
    <section>
      <h2>What word do you want to look up?</h2>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Search" onChange={saveWord} />
      </form>
      <div className="example">
        i.e. <span onClick={saveExample}>coding</span>,{" "}
        <span onClick={saveExample}>wine</span>,{" "}
        <span onClick={saveExample}>life</span>,{" "}
        <span onClick={saveExample}>paris</span>
      </div>
    </section>
  );

  function saveExample(event) {
    setWord(event.target.innerHTML);
  }

  function saveWord(event) {
    setInputWord(event.target.value);
  }

  function getData(response) {
    setData(response.data);
    setLoaded("success");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setWord(inputWord);
  }

  useEffect(() => {
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios
      .get(apiURL)
      .then(getData)
      .catch(() => {
        setLoaded("error");
      });
  }, [word]);

  if (loaded === "success") {
    return (
      <div className="Dictionary">
        <h1>Dictionary</h1>
        {searchSection}
        <Data data={data} />
      </div>
    );
  } else {
    if (loaded === "error") {
      return (
        <div className="Dictionary">
          <h1>Word not found</h1>
          <img src={notFoundImg} alt="Word not found" />
          <a
            href="https://friendly-sorbet-75c8cf.netlify.app/"
            className="home-link"
          >
            Go to home page
          </a>
        </div>
      );
    } else {
      return (
        <div className="Dictionary">
          <h1>Dictionary</h1>
          {searchSection}
        </div>
      );
    }
  }
}
