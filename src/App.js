import { useState, useEffect } from "react";
import Player from "./components/Player/Player";

import "react-h5-audio-player/lib/styles.css";
import "../src/index.css";

function App() {
  const [songs] = useState([
    {
      title: "takeituneasy",
      artist: "",
      img_src: "./images/song-1.jpg",
      src: "https://content.blubrry.com/takeituneasy/lex_ai_balaji_srinivasan.mp3 ",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
