import Header from "./Dashboard/Header/Header";
import SearchBar from "./Dashboard/Searchbar/Searchbar";
import EmojiResults from "./Dashboard/Emojies/EmojiResults";
import { useState } from "react";
import Filter from "./Dashboard/Emojies/Filter";

function App() {
  const [filteredEmoji, setFilteredEmoji] = useState(Filter("", 20));
 
  return (
    <div className="App">
      <Header />
      <SearchBar setFilteredEmoji={setFilteredEmoji} />
      <EmojiResults emojiData={filteredEmoji} />
    </div>
  );
}

export default App;
