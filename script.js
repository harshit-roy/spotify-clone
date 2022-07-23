console.log("Welcome To Spotify");
let serial = 0;
let audioElement = new Audio("song/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: " Superhero - Song by Chris Linton",
    filepath: "song/1.mp3",
    coverPath: "covers/1.jpg",
    songListplay: "00:29 ",
  },
  {
    songName: " Movements - Song by Pham",
    filepath: "song/2.mp3",
    coverPath: "covers/2.jpg",
    songListplay: "00:30 ",
  },
  {
    songName: " Dancin - Song by Aaron Smith",
    filepath: "song/3.mp3",
    coverPath: "covers/3.jpg",
    songListplay: "00:28 ",
  },
  {
    songName: " Fight Back - Song by NEFFEX",
    filepath: "song/4.mp3",
    coverPath: "covers/4.jpg",
    songListplay: "00:30 ",
  },
  {
    songName: " HOLD STRONG By Rob Bailey ",
    filepath: "song/5.mp3",
    coverPath: "covers/5.jpg",
    songListplay: "00:21 ",
  },
  {
    songName: " Lost Sky - Fearless pt. II",
    filepath: "song/6.mp3",
    coverPath: "covers/6.jpg",
    songListplay: "00:29 ",
  },
  {
    songName: " Minimum Stress - Ramzan Abitov",
    filepath: "song/7.mp3",
    coverPath: "covers/7.jpg",
    songListplay: "00:30 ",
  },
  {
    songName: " NEFFEX - Grateful",
    filepath: "song/8.mp3",
    coverPath: "covers/8.jpg",
    songListplay: "00:30 ",
  },
  {
    songName: " Imagine Dragons x JID - Enemy",
    filepath: "song/9.mp3",
    coverPath: "covers/9.jpg",
    songListplay: "00:30 ",
  },
  {
    songName: " Warriyo - Mortals",
    filepath: "song/10.mp3",
    coverPath: "covers/10.jpg",
    songListplay: "00:29 ",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
  element.getElementsByClassName("songTime")[0].innerText =
    songs[i].songListplay;
});

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeallPlays = () => {
  Array.from(document.getElementsByClassName("songItemplay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemplay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeallPlays();
      serial = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `song/${serial + 1}.mp3`;
      masterSongName.innerText = songs[serial].songName;
      gif.style.opacity = 1;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (serial >= 9) {
    serial = 0;
  } else {
    serial += 1;
  }
  audioElement.src = `song/${serial + 1}.mp3`;
  masterSongName.innerText = songs[serial].songName;
  gif.style.opacity = 1;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (serial <= 0) {
    serial = 9;
  } else {
    serial -= 1;
  }
  audioElement.src = `song/${serial + 1}.mp3`;
  masterSongName.innerText = songs[serial].songName;
  gif.style.opacity = 1;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
