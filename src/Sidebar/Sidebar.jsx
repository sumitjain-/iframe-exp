import React from 'react';
import './Sidebar.css';

export default function Sidebar({
  frameHeightTemp,
  setFrameHeightTemp,
  flushFrameHeight,
}) {
  return (
    <div className="sidebar-root">
      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          flushFrameHeight();
        }}
      >
        <input
          type="number"
          name="frameHeight"
          placeholder="Set frame height here"
          className="frame-height-input"
          value={frameHeightTemp}
          onChange={(e) => { setFrameHeightTemp(parseInt(e.target.value)) }}
        />
        <button type="submit">Set</button>
      </form>
    </div>
  )
}
