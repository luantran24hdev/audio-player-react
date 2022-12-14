import React, { useState, useRef, useEffect } from "react";
import Controls from "./Controls";
import Details from "./Details";
import { Slider, Box } from "@mui/material";
// import AudioPlayer from "react-h5-audio-player";

function Player(props) {
  // const audioEl = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(false);

  //value slider
  // const progress = (currentTime / (timeLeft + currentTime)) * 100 || 0;
  //value slider

  // useEffect(() => {
  //   if (isPlaying) {
  //     audioEl.current.play();
  //   } else {
  //     audioEl.current.pause();
  //   }
  // });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <div className="c-player">
      {/* <audio
        src={props.songs[props.currentSongIndex].src}
        ref={audioEl}
      ></audio> */}
      {/* x */}
      {/* <Details song={props.songs[props.currentSongIndex]} /> */}
      <Controls
        // isPlaying={isPlaying}
        // setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />
      <div></div>
      <p>
        Next up:{" "}
        <span>
          {props.songs[props.nextSongIndex].title} by{" "}
          {props.songs[props.nextSongIndex].artist}
        </span>
      </p>
    </div>
  );
}

export default Player;
