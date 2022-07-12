import React from "react";
import SynonymsAntonyms from "./SynonymsAntonyms";
import "./Meanings.css";

export default function Meanings({ meanings }) {
  return (
    <div className="Meanings">
      {meanings.map((meaning, index) => {
        return (
          <div key={index}>
            <section>
              <h4>{meaning.partOfSpeech}</h4>
              <div className="info">
                <h5>Definitions:</h5>
                {meaning.definitions.map((definition, i) => {
                  return (
                    <div key={i}>
                      <p>{definition.definition}</p>
                      <p>
                        <em>{definition.example}</em>
                      </p>
                    </div>
                  );
                })}
                <SynonymsAntonyms array={meaning.synonyms} name="Synonyms" />
                <SynonymsAntonyms array={meaning.antonyms} name="Antonyms" />
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
}
