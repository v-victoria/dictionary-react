import React, { useState, useEffect, useRef } from "react";
import AudioControl from "./AudioControl";
import "./Phonetic.css";

export default function Phonetic({ phonetic }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio(phonetic.audio));

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      setIsPlaying(false);
    }
  }, [isPlaying]);

  if (phonetic.text && phonetic.audio !== "") {
    return (
      <div className="Phonetic">
        <AudioControl audio={phonetic.audio} setIsPlaying={setIsPlaying} />
        <span>{phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
