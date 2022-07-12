import React, { useState, useEffect } from "react";
import "./Phonetic.css";

export default function Phonetic({ phonetic }) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audioRef = new Audio(phonetic.audio);

    if (isPlaying) {
      audioRef.play();
      setIsPlaying(false);
    }
  }, [isPlaying, phonetic.audio]);

  if (phonetic.text && phonetic.audio !== "") {
    return (
      <div className="Phonetic">
        <section>
          <span className="audio-controls">
            <button
              type="button"
              className="pause"
              onClick={() => setIsPlaying(true)}
              aria-label="Pause"
            >
              <i className="fa-solid fa-volume-high"></i>
            </button>
          </span>
          <span>{phonetic.text}</span>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
