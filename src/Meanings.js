import React from "react";
import SynonymsAntonyms from "./SynonymsAntonyms";
import "./Meanings.css";

export default function Meanings({ meanings }) {
  return (
    <div className="Meanings">
      {meanings.map((meaning, index) => {
        return (
          <div key={index}>
            <h4>{meaning.partOfSpeech}</h4>
            <div className="info">
              <h5>Definitions:</h5>
              {meaning.definitions.map((definition, i) => {
                return <div key={i}>{definition.definition}</div>;
              })}
              <SynonymsAntonyms array={meaning.synonyms} name="Synonyms" />
              <SynonymsAntonyms array={meaning.antonyms} name="Antonyms" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
