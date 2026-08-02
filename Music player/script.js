const audio = document.getElementById("audio");

const fileInput = document.getElementById("musicFiles");

const playBtn = document.getElementById("play");

const prevBtn = document.getElementById("prev");

const nextBtn = document.getElementById("next");

const progress = document.getElementById("progress");

const current = document.getElementById("current");

const duration = document.getElementById("duration");

const volume = document.getElementById("volume");

const songName = document.getElementById("songName");

let songs=[];

let index=0;

fileInput.addEventListener("change",()=>{

songs=[...fileInput.files];

if(songs.length>0){

index=0;

loadSong(index);

}

});

function loadSong(i){

audio.src=URL.createObjectURL(songs[i]);

songName.innerText=songs[i].name;

audio.load();

audio.play();

playBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

}

playBtn.onclick=()=>{

if(!audio.src)return;

if(audio.paused){

audio.play();

playBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

}else{

audio.pause();

playBtn.innerHTML='<i class="fa-solid fa-play"></i>';

}

};

nextBtn.onclick=()=>{

if(index<songs.length-1){

index++;

loadSong(index);

}

};

prevBtn.onclick=()=>{

if(index>0){

index--;

loadSong(index);

}

};

audio.addEventListener("timeupdate",()=>{

progress.value=(audio.currentTime/audio.duration)*100||0;

current.innerText=format(audio.currentTime);

duration.innerText=format(audio.duration);

});

progress.oninput=()=>{

audio.currentTime=(progress.value/100)*audio.duration;

};

volume.oninput=()=>{

audio.volume=volume.value;

};

audio.onended=()=>{

if(index<songs.length-1){

index++;

loadSong(index);

}else{

playBtn.innerHTML='<i class="fa-solid fa-play"></i>';

}

};

function format(time){

if(isNaN(time)) return "0:00";

let min=Math.floor(time/60);

let sec=Math.floor(time%60);

if(sec<10) sec="0"+sec;

return min+":"+sec;

}