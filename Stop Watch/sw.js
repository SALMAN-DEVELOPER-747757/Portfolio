const timerElement=document.querySelector('.timer')
const start_btn=document.getElementById("start")
const stop_btn=document.getElementById("stop")
const reset_btn=document.getElementById("reset")

let seconds=0;
let interval=null;

function timer(){
    seconds++;

    let hrs=Math.floor(seconds / 360)
    let min=Math.floor((seconds-hrs *360)/60)
    let sec=seconds % 60

    if (hrs<10) {
        hrs="0"+hrs
    }
    if (min<10) {
        min="0"+min
    }
    if (sec<10) {
        sec="0"+sec
    }

    timerElement.textContent=`${hrs}:${min}:${sec}`;
}

function start(){
    if (interval) {
        return
    }
    interval=setInterval(timer,1000);
}

function stop(){
    clearInterval(interval)
    interval=null;

}

function reset(){
    stop();
    seconds=0;
    timerElement.textContent="00:00:00"

}

start_btn.addEventListener('click',start)
stop_btn.addEventListener('click',stop)
reset_btn.addEventListener('click',reset)