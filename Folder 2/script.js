let data = {
    title: ["Luyser",
        "Спой",
        "When I Win"],

    song: [
        "music/Karen Gevorgyan - Luyser, Luyser.mp3",
        "music/A.V.G feat. MACAN - spoy.mp3",
        "music/MiyaGi & Endspiel - When I Win.mp3"],

    poster: ["https://source.boomplaymusic.com/group1/M1D/82/1E/rBEeMV7c6IeAKCFgAADA9DG6ay0044.jpg",
        "https://cdn.promodj.com/afs/19b6cf3bd4a7bf9471f98ce268fb370912%3Aresize%3A640x480%3Afill%3Affffff%3A5cab1c",
        "https://lastfm.freetls.fastly.net/i/u/500x500/23bf00d9af5797c22d9975d1506008d6.jpg"]
}

let song = new Audio()

window.onload = function () {
    playSong()
}
let currentSong = 0
function playSong() {
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songTitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")"
    let main = document.getElementsByClassName("main")
    main[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")"

}
function playOrPause() {
    let play = document.getElementById("play")

    if (song.paused) {
        song.play()
        play.src = "images/pause.png"
    } else {
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }
}

song.addEventListener("timeupdate",function(){
    // console.log(song.currentTime);
    // console.log(song.duration);
    let fill = document.getElementsByClassName("fill")
    let position = song.currentTime / song.duration

    fill[0].style.marginLeft = position * 100 + "%"

    convertTime(song.currentTime)

    if(song.ended){
        next()
        
    }
})

function convertTime(seconds){
     currentTime = document.getElementsByClassName("currentTime")

    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    currentTime[0].textContent = min + ":" + sec

 totalTime(song.duration)   
}
function totalTime(seconds){
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    currentTime[0].textContent += " / " + min + ":" + sec
}

function next(){
    currentSong++
    if(currentSong>= data.song.length){
        currentSong=0
    }
    playSong()
    song.play()
    play.src = "images/pause.png"
}

function prev(){
    currentSong--
    if(currentSong< 0){
        currentSong = data.song.length - 1
    }
    playSong()
    song.play()
    play.src = "images/pause.png"
}

console.log(song)
function mute(){
    let mute = document.getElementById("mute")
    if(song.muted){
        mute.src = "images/volume.png"
        song.muted = false
    }else{
        mute.src = "images/volume-mute.png"
        song.muted = true
    }
}
function decrease(){
    song.volume-=0.2
}
function increase(){
    song.volume+=0.2
}
