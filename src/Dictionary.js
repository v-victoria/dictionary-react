import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";
import Data from "./Data";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function saveWord(event) {
    setWord(event.target.value);
  }

  function getData(response) {
    setData(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiURL).then(getData);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h1>Dictionary</h1>
        <section>
          <h2>What word do you want to look up?</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search"
              value={word}
              onChange={saveWord}
            />
          </form>
          <div>i.e. paris, wine, yoga, coding</div>
        </section>
        <Data data={data} />
      </div>
    );
  } else {
    search();
    setLoaded(true);
    return "Loading...";
  }
}
