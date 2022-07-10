import React, { useState } from "react";

export default function Dictionary() {
  const [word, setWord] = useState(null);

  function saveWord(event) {
    setWord(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    console.log(word);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <h2>What word do you want to look up?</h2>
      <form onSubmit={search}>
        <input type="search" placeholder="Search" onChange={saveWord} />
      </form>
    </div>
  );
}
