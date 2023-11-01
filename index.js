const content = document.querySelector(".content");
const songArtist = document.querySelector("#songArtist");
const songTitle = document.querySelector("#songTitle");
const imageSong = document.querySelector(".imageSong");

let playButton = document.getElementById("play");
let nextButton = document.getElementById("nextTrack");
let previousButton = document.getElementById("lastTrack");

let songs = document.querySelectorAll(".song");
let songsData = [
    ['Soldier','Mr Vee','Soldier.jpeg'],
    ['Dream It Possible','Jane Zhang','dreamItPossible.jpeg'],
    ['Jirani Ananimada','Faithstan','jirani.jpeg'],
    ['MoyoWangu','Patrick Kubuya','moyoWangu.jpeg'],
    ['AmIWrong','NicoVinz','amIwrong.jpeg'],
    ['People','Libianca','people.jpeg'],
    ['Bwana Tegememeo','Mt Cecilia Arusha Tanzania','tegemeo.jpeg'],
    ['You Got','Beka','yougot.jpeg'],
    ['Survivor','Wendy Shay','survivor.jpeg'],
    ['Mopstick','Kodak Black & French Montana','mopStick.jpeg'],
    ['Mood','Ian Dior','mood.jpeg']
  
]
let songIndex = 0;

function playSong() {
    songs[songIndex].play();
    songTitle.innerHTML = songsData[songIndex][0];
    songArtist.innerHTML = songsData[songIndex][1];
    imageSong.src = songsData[songIndex][2];
}

function pauseSong() {
    songs[songIndex].pause();
    //playButton.innerHTML='';
   
}

function upDateNextMusic() {
    pauseSong();
    songIndex = (songIndex + 1) % songs.length;
    playSong();
}

function upDatePreviousMusic() {
    pauseSong();
    songIndex = (songIndex - 1) % songs.length;
    playSong();
}

playButton.addEventListener("click", () => {
    playSong();
});

playButton.addEventListener("dblclick", () => {
    pauseSong();
});
