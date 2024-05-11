let data = {
    title: ["Luyser",
        "Там ревели горы",
        "When I Win"],

    song: ["music/Karen Gevorgyan - Luyser, Luyser.mp3",
        "MiyaGi & Andy Panda .mp3",
        "MiyaGi & Endspiel - When I Win.mp3"],

    poster: ["https://source.boomplaymusic.com/group1/M1D/82/1E/rBEeMV7c6IeAKCFgAADA9DG6ay0044.jpg",
        "https://i.ytimg.com/vi/S0WLFGYSGdg/sddefault.jpg",
        "https://lastfm.freetls.fastly.net/i/u/500x500/23bf00d9af5797c22d9975d1506008d6.jpg"]
}

let song = new Audio()

window.onload = function () {
    playSong()
}
let currentSong =0
function playSong() {
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songTitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url("+ data.poster[currentSong] +")"
    let main = document.getElementsByClassName("main")
    main[0].style.backgroundImage = "url("+ data.poster[currentSong] +")"
    
}
function playOrPause(){
    let play = document.getElementById("play")

    if(song.paused){
        song.play()
        play.src= "images/pause.png"
    }else{
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }
}