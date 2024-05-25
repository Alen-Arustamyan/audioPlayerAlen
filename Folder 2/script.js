let data = {
    title: ["Charles Aznavour","Спой", "When I Win","Luyser"],
    song: [
        "music/Charles Aznavour – La bohème.mp3",
        "music/A.V.G feat. MACAN - spoy.mp3",
        "music/MiyaGi & Endspiel - When I Win.mp3",
        "music/Karen Gevorgyan - Luyser, Luyser.mp3"
    ],
    poster: [
        "https://www.hollywoodreporter.com/wp-content/uploads/2014/09/charles_aznavour.jpg",
        "https://cdn.promodj.com/afs/19b6cf3bd4a7bf9471f98ce268fb370912%3Aresize%3A640x480%3Afill%3Affffff%3A5cab1c",
        "https://lastfm.freetls.fastly.net/i/u/500x500/23bf00d9af5797c22d9975d1506008d6.jpg",
        "https://source.boomplaymusic.com/group1/M1D/82/1E/rBEeMV7c6IeAKCFgAADA9DG6ay0044.jpg"
    ]
}

let song = new Audio();
let currentSong = 0;
let playButton = document.getElementById("play");

window.onload = function () {
    playSong();
}

function playSong() {
    song.src = data.song[currentSong];
    let songTitle = document.getElementById("songTitle");
    if (songTitle) songTitle.textContent = data.title[currentSong];
    let img = document.getElementsByClassName("row1");
    if (img.length > 0) img[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementsByClassName("main");
    if (main.length > 0) main[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")";
}

function playOrPause() {
    if (song.paused) {
        song.play();
        playButton.src = "images/pause.png";
    } else {
        song.pause();
        playButton.src = "images/play-button-arrowhead.png";
    }
}

function convertTime(seconds) {
    let currentTime = document.getElementsByClassName("currentTime");
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    if (currentTime.length > 0) currentTime[0].textContent = min + ":" + sec;
    totalTime(song.duration);
}

function totalTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    let currentTime = document.getElementsByClassName("currentTime");
    if (currentTime.length > 0) currentTime[0].textContent += " / " + min + ":" + sec;
}

function next() {
    currentSong++;
    if (currentSong >= data.song.length) {
        currentSong = 0;
    }
    playSong();
    song.play();
    playButton.src = "images/pause.png";
}

function prev() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = data.song.length - 1;
    }
    playSong();
    song.play();
    playButton.src = "images/pause.png";
}

function mute() {
    let muteButton = document.getElementById("mute");
    if (song.muted) {
        muteButton.src = "images/volume.png";
        song.muted = false;
    } else {
        muteButton.src = "images/volume-mute.png";
        song.muted = true;
    }
}

function decrease() {
    song.volume = Math.max(0, song.volume - 0.2);
}

function increase() {
    song.volume = Math.min(1, song.volume + 0.2);
}

document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.querySelector('.progress');
    const seekBarCircle = document.querySelector('.seek-bar-circle');
    const seekBar = document.querySelector('.seek-bar');

    song.addEventListener('timeupdate', updateProgress);

    function updateProgress() {
        const { currentTime, duration } = song;
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent + 5}%`;
        seekBarCircle.style.left = `${progressPercent}%`;

        convertTime(currentTime);

        if (song.ended) {
            next();
        }
    }

    seekBar.addEventListener('click', (e) => {
        const seekTime = (e.offsetX / seekBar.offsetWidth) * song.duration;
        song.currentTime = seekTime;


    });
});
function changeSpeed(speed){
    song.playbackRate = parseFloat(speed);
}