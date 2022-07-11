import React from "react";

export default function SynonymsAntonyms({ array, name }) {
  if (array.length > 0) {
    return (
      <div className="SynonymsAntonyms">
        <h5>{name}:</h5>
        <p>
          {array.map((item, i) => {
            if (i < array.length - 1) {
              return <span key={i}>{item}, </span>;
            } else {
              return <span key={i}>{item}.</span>;
            }
          })}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
