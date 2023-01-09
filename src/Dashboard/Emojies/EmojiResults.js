import React from "react";
import EmojiResultRow from "./EmojiResultRow";
import Clipboard from "clipboard";

function EmojiResults({ emojiData }) {
  const clipboard  = new Clipboard('.copy-it')
  return (
    <div className="componen-emoji-results">
      {emojiData.map((emoji) => (
        <EmojiResultRow
          key={emoji.title}
          symbol={emoji.symbol}
          title={emoji.title}
        />
      ))}
    </div>
  );
}

export default EmojiResults;
