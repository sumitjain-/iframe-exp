import React from 'react';
import './ContentContainer.css';

export default function ContentContainer({ frameHeight }) {
  return (
    <div className="content-container-root">
      <h1>
        {String(frameHeight || 0)}
      </h1>
    </div>
  )
}
