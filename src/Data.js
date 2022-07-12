import React from "react";

import "./Data.css";
import Meanings from "./Meanings";
import Phonetic from "./Phonetic";

export default function Data({ data }) {
  console.log(data);
  if (data) {
    return (
      <div className="Data">
        {data.map((meaning, index) => {
          return (
            <div key={index}>
              <section className="header">
                <h3>{meaning.word}</h3>
                <p>{meaning.phonetic}</p>
              </section>
              <div className="phonetics-block">
                {meaning.phonetics.map((phonetic, i) => {
                  return <Phonetic key={i} phonetic={phonetic} />;
                })}
              </div>
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
