const play = document.querySelector(".fa-play");
const pause = document.querySelector(".fa-pause");
const timeline = document.querySelector(".timeline-bar");
const music = document.querySelector(".music")

function playPause() {
    if (play.style.display === "none" || play.style.display === "") {
        play.style.display = "block";
        pause.style.display = "none";
        music.pause();
    } else {
        play.style.display = "none";
        pause.style.display = "block";
        music.play();
    }
}

music.onloadmetadata = function(){
    timeline.max = music.duration;
    timeline.value = music.currentTime;
}

function progres(){
    timeline.max = music.duration;
    timeline.value = music.currentTime;
}

let autoUpdateTimeline = setInterval(progres,200)

// Seeking logic
let isSeeking = false;

timeline.addEventListener("mousedown", () => {
    isSeeking = true;
    clearInterval(interval);
});

timeline.addEventListener("input", () => {
    music.currentTime = timeline.value;
});
