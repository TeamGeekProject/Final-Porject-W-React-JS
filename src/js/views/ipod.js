import React from "react";
import { useState, useEffect } from "react";
import { useRef } from "react";
import ReactAudioPlayer from "react-audio-player";
// import useSound from 'use-sound';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward, faBackward } from "@fortawesome/free-solid-svg-icons";
import {
  faPauseCircle,
  faPlayCircle,
} from "@fortawesome/free-regular-svg-icons";

export const Ipod = () => {
  const [currentMusicDetails, setCurrentMusicDetails] = useState(
    // {
    // songName: "Chasing",
    // songArtist: "NEFFEX",
    // songSrc: "./Assets/songs/Chasing - NEFFEX.mp3"
    // },
    {
      songSrc: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
      songName: "Chords of Life",
      songArtist: "House",
      // tags: ["house"],
    },
  );

  //UseStates Variables
  const [audioProgress, setAudioProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);
  const [musicTotalLength, setMusicTotalLength] = useState("04 : 38");
  const [musicCurrentTime, setMusicCurrentTime] = useState("00 : 00");
  // const [videoIndex, setVideoIndex] = useState(0);

  const currentAudio = useRef();

  const handleMusicProgressBar = (e) => {
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime =
      (e.target.value * currentAudio.current.duration) / 100;
  };

  //Play Audio Function
  const handleAudioPlay = () => {
    if (currentAudio.current.paused) {
     currentAudio.current.play();
      setIsAudioPlaying(true);
    } else {
      currentAudio.current.pause();
      setIsAudioPlaying(false);
    }
  };

  const musicAPI = [
    {
      songSrc: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
      songName: "Chords of Life",
      songArtist: "House",
      // tags: ["house"],
    },
    {
      songSrc: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
      songName: "Late Night Drive",
      songArtist: "Dnb",
      // tags: ["dnb"],
    },
    {
      songSrc: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
      songName: "Persistence",
      songArtist: "Dubstep",
      // tags: ["budstep"],
    },
    
  ];

  const handleNextSong = () => {
    if (musicIndex >= musicAPI.length - 1) {
      let setNumber = 0;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    } else {
      let setNumber = musicIndex + 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }
  };

  const handlePrevSong = () => {
    if (musicIndex === 0) {
      let setNumber = musicAPI.length - 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    } else {
      let setNumber = musicIndex - 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }
  };

  const updateCurrentMusicDetails = (number) => {
    let musicObject = musicAPI[number];
    currentAudio.current.src = musicObject.songSrc;
    currentAudio.current.play();
    setCurrentMusicDetails({
      songName: musicObject.songName,
      songArtist: musicObject.songArtist,
      songSrc: musicObject.songSrc,
    });
    setIsAudioPlaying(true);
  };

  const handleAudioUpdate = () => {
    //Input total length of the audio
    let minutes = Math.floor(currentAudio.current.duration / 60);
    let seconds = Math.floor(currentAudio.current.duration % 60);
    let musicTotalLength0 = `${minutes < 10 ? `0${minutes}` : minutes} : ${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
    setMusicTotalLength(musicTotalLength0);

    //Input Music Current Time
    let currentMin = Math.floor(currentAudio.current.currentTime / 60);
    let currentSec = Math.floor(currentAudio.current.currentTime % 60);
    let musicCurrentT = `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${
      currentSec < 10 ? `0${currentSec}` : currentSec
    }`;
    setMusicCurrentTime(musicCurrentT);

    const progress = parseInt(
      (currentAudio.current.currentTime / currentAudio.current.duration) * 100
    );
    setAudioProgress(isNaN(progress) ? 0 : progress);
  };

  // const vidArray = [""];

  // const handleChangeBackground = () => {
  //   if (videoIndex >= vidArray.length - 1) {
  //     setVideoIndex(0);
  //   } else {
  //     setVideoIndex(videoIndex + 1);
  //   }
  // };

  return (
    <>
      <div className="ipod container rounded border" style={{width:"400px"}}>
        <audio
          src="https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3"
          ref={currentAudio}
          onEnded={handleNextSong}
          onTimeUpdate={handleAudioUpdate}
        ></audio>
        <div className="blackScreen"></div>
        <div className="music-Container">
          <p className="music Player">
            <strong>Playing Now<i className="fa fa-music fa-beat-fade text-danger" /></strong>
          </p>
          <img className="musicCover rounded" src="https://picsum.photos/300/300" 
          />
          <h3 className="music-Head-Name"><strong>{currentMusicDetails.songName}</strong></h3>
          <p className="music-Artist-Name">{currentMusicDetails.songArtist}</p>
          <div className="musicTimerDiv">
            <p className="musicCurrentTime">{musicCurrentTime}</p>
            <p className="musicTotalLenght">{musicTotalLength}</p>
          </div>
          <input
            type="range"
            name="musicProgressBar"
            className="musicProgressBar"
            value={audioProgress}
            onChange={handleMusicProgressBar}
          />
          {/* <ReactAudioPlayer autoPlay controls src={currentAudio} crossOrigin="anonymous" /> */}
          <div className="music Controlers">
            <i
              className="fa-solid fa-backward musicControler"
              onClick={handlePrevSong}
            ></i>
            <i
              className={`fa-solid ${
                isAudioPlaying ? "fa-pause-circle text-danger" : "fa-circle-play text-success"
              } playBtn`}
              onClick={handleAudioPlay}
            ></i>
            <i
              className="fa-solid fa-forward musicControler"
              onClick={handleNextSong}
            ></i>
          </div>
          <div>
          {/* <ReactAudioPlayer
             autoPlay
             controls 
             ref={}
             src={}
             crossOrigin="anonymous"
             /> */}
             </div>
        </div>
      </div>
    </>
  );
};
