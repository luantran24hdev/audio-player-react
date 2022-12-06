import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import RemoveIcon from "@mui/icons-material/Remove";
import Forward30Icon from "@mui/icons-material/Forward30";
import Replay10Icon from "@mui/icons-material/Replay10";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddIcon from "@mui/icons-material/Add";
// import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircle";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import Slider from "@mui/material/Slider";

// import {
//   faPlay,
//   faPause,
//   faForward,
//   faBackward,
// } from "@fortawesome/free-solid-svg-icons";

function Controls(props) {
  const [isPlay, setIsPlay] = useState(false);
  const [valueSpeed, setValueSpeed] = useState(1);

  // const dispatch = useDispatch();
  const audioRef = useRef();

  const [volumeText, setVolumeText] = useState();

  const handleVolume = () => {
    // console.log("eeeeee", e);
    window.player = audioRef.current.audio.current.volume;
    console.log("handleVolume", window.player);
    setVolumeText(window.player);
    // setVolumeText(audioRef.current.audio.current.addEventListener('volumechange',()=>{
    //   this.setState({ volumeText: `${((e.target as HTMLAudioElement).volume * 100).toFixed(0)}%` })
    // }));
    // audioRef.current.audio.current("volumechange", (e) => {
    //   console.log("e", e);
    //   setVolumeText({ volumeText: `${(e.target.volume * 100).toFixed(0)}%` });
    // });
  };
  useEffect(() => {
    console.log("volumeText", volumeText);
    setVolumeText(volumeText);
  }, [volumeText]);

  const customIconRewind = () => {
    return <Replay10Icon fontSize="large" />;
  };
  const customIconForward = () => {
    return <Forward30Icon fontSize="large" />;
  };
  const handlePause = () => {
    setIsPlay(false);
    console.log("audioRef", audioRef);
    window.player = audioRef.current.audio.current;
    window.player.pause();
  };
  const handlePlay = () => {
    setIsPlay(true);
    window.player = audioRef.current.audio.current;
    window.player.play();
  };
  const handleSkipBack = () => {
    console.log("handleSkipBack", valueSpeed);

    window.player = audioRef.current.audio.current;
    window.player.playbackRate = 0.5;
    setValueSpeed((window.player.playbackRate = 0.5));
  };
  const handleSkipForward = () => {
    console.log("handleSkipForward", valueSpeed);

    window.player = audioRef.current.audio.current;
    window.player.playbackRate = 1;
    setValueSpeed((window.player.playbackRate = 1));
  };
  const handleSkip10s = () => {
    console.log("handleSkip10s");
    console.log(
      "handleSkipForward30s",
      audioRef.current.audio.current.currentTime
    );
    audioRef.current.audio.current.currentTime -= 10.0;
  };
  const handleSkipForward30s = () => {
    console.log(
      "handleSkipForward30s",
      audioRef.current.audio.current.currentTime
    );
    audioRef.current.audio.current.currentTime += 30.0;
  };

  useEffect(() => {
    console.log("valueSpeed", valueSpeed);
    setValueSpeed(valueSpeed);
  }, [valueSpeed]);
  //customIconForward
  const getCurrDuration = (e) => {
    console.log("e", e);
    return e;
  };

  return (
    <div className="c-player--controls">
      <div>
        <FontAwesomeIcon icon={AddBoxIcon} />
      </div>

      <AudioPlayer
        ref={audioRef}
        onTimeUpdate={getCurrDuration}
        showSkipControls={true}
        showJumpControls={true}
        // onSeeking={action('onSeeking')}
        progressJumpSteps={{
          forward: 30000,
          backward: 10000,
        }}
        src="https://content.blubrry.com/takeituneasy/lex_ai_balaji_srinivasan.mp3"
        customIcons={{
          rewind: customIconRewind(),
          forward: customIconForward(),
        }}
        customProgressBarSection={[
          isPlay ? (
            <IconButton
              onClick={handlePause}
              className="btn-pad cl-w ic-btn"
              size="medium"
            >
              <PauseCircleIcon fontSize="large" />
            </IconButton>
          ) : (
            <IconButton
              onClick={handlePlay}
              className="btn-pad cl-w ic-btn"
              size="medium"
            >
              <PlayCircleFilledWhiteIcon fontSize="large" />
            </IconButton>
          ),
          RHAP_UI.PROGRESS_BAR
        ]}
        customAdditionalControls={[
          <div className="inner-control">
            <div className="control-l">
              <span className="text-value">{valueSpeed}x</span>
              <IconButton
                onClick={handleSkipBack}
                className="btn-pad bdr"
                size="small"
              >
                <RemoveIcon fontSize="large" />
              </IconButton>
              
              <IconButton
                onClick={handleSkipForward}
                className="btn-pad bdr"
                size="small"
              >
                <AddIcon fontSize="large" />
              </IconButton>
              
              <div className="btn-pad-last">
                <IconButton
                  onClick={handleSkip10s}
                  className="btn-pad cl-w "
                  size="small"
                >
                  <Replay10Icon fontSize="large" />
                </IconButton>
                <IconButton
                  onClick={handleSkipForward30s}
                  className=" cl-w "
                  size="small"
                >
                  <Forward30Icon fontSize="large" />
                </IconButton>
              </div>
              
            </div>
            
            <div className="control-vlume">
              <IconButton className="cl-w">
                <VolumeDownIcon />
              </IconButton>
              <Slider
                defaultValue={volumeText}
                aria-label="Default"
                valueLabelDisplay="auto"
                className="cl-w "
                onChange={handleVolume}
              />
              {/* <div className="pd"></div>, */}
            </div>
            
          </div>
        ]}
        // other props here
      />
    </div>
  );
}

export default Controls;
