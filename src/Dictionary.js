import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";
import Data from "./Data";

export default function Dictionary() {
  const [word, setWord] = useState(null);
  const [data, setData] = useState(null);

  function saveWord(event) {
    setWord(event.target.value);
  }

  function getData(response) {
    setData(response.data);
  }

  function search(event) {
    event.preventDefault();
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiURL).then(getData);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <h2>What word do you want to look up?</h2>
      <form onSubmit={search}>
        <input type="search" placeholder="Search" onChange={saveWord} />
      </form>
      <Data data={data} />
    </div>
  );
}
