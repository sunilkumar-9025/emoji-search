import React from "react";
import "./EmojiResultRow.css";

function EmojiResultRow({ symbol, title }) {
  const codePointHex = symbol.codePointAt(0).toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
  return (
    <div className="component-emoji-result-row copy-it" data-clipboard-text={symbol}>
      <img src={src} alt={title} />
      <span className="title">{title}</span>
      <span className="info">Click to copy</span>
    </div>
  );
}

export default EmojiResultRow;
