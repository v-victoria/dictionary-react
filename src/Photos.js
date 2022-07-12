import React from "react";

import "./Photos.css";

export default function Photos({ photos }) {
  if (photos) {
    return (
      <div className="Photos d-none d-md-block">
        <section>
          <div className="row">
            {photos.map((photo, index) => {
              return (
                <div key={index} className="col-4">
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img src={photo.src.landscape} alt={photo.alt} />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
