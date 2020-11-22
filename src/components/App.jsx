import React from "react";
import Entry from "./Entry";
import Emojipedia from "../emojipedia"

function createEmojipedia(emojiTerm) {
  return (<Entry
     key={emojiTerm.id}
     emoji={emojiTerm.emoji}
     name={emojiTerm.name}
     meaning={emojiTerm.meaning}/>)
}

function App() {
  return (<div>
    <h1>
      <span>emojipedia</span>
    </h1>
    <dl className="dictionary">

      {Emojipedia.map(createEmojipedia)}

    </dl>
  </div>);
}

export default App;
