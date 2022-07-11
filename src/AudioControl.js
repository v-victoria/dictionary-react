import React from "react";

export default function AudioControl({ setIsPlaying }) {
  return (
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
  );
}
