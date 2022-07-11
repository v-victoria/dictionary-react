import React from "react";

import "./Data.css";
import Meanings from "./Meanings";
import Phonetic from "./Phonetic";

export default function Data({ data }) {
  if (data) {
    return (
      <div className="Data">
        {data.map((meaning, index) => {
          return (
            <div key={index}>
              <h3>{meaning.word}</h3>
              <p>{meaning.phonetic}</p>
              {meaning.phonetics.map((phonetic, i) => {
                return <Phonetic key={i} phonetic={phonetic} />;
              })}
              <Meanings meanings={meaning.meanings} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
