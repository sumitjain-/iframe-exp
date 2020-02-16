import React from 'react';
import './ContentContainer.css';

export default function ContentContainer({ frameHeight, frameHeightFinal }) {
  return (
    <div className="content-container-root">
      <h1>
        {String(frameHeight || 0)}
      </h1>
      {
        (frameHeight > 0) && (
          <iframe
            src={`http://localhost:8080/page/${frameHeight}`}
            title="content-frame"
            style={{
              height: frameHeightFinal || 0,
            }}
          />
        )
      }
    </div>
  )
}
