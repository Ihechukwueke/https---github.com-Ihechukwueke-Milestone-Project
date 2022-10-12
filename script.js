var minutes = 00;
var seconds = 00;
var milSec = 00;
var btnStart = document.getElementById("start");
var btnStop = document.getElementById("stop");
var btnReset = document.getElementById("reset");
var appendMinutes = document.getElementById("minutes");
var appendSeconds = document.getElementById("seconds");
var appendMiliSeconds = document.getElementById("milSec");
var Interval;


function startTimer(){
    milSec++;

    if(milSec<9){
        appendMiliSeconds.innerHTML = "0" + milSec;
    }
    if(milSec>9){
        appendMiliSeconds.innerHTML = milSec;
    }
    if(milSec>99){
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        milSec = 0;
        appendMiliSeconds.innerHTML = "0" + milSec;
    }

    if(seconds>9){
        appendSeconds.innerHTML = seconds;
    }
    if(seconds>59){
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + seconds;
    }
    if(minutes>9){
        appendMinutes.innerHTML = minutes;
    }
}

btnStart.onclick = function(){
    Interval = setInterval(startTimer, 10);
};
btnStop.onclick = function(){
    clearInterval(Interval);
};
btnReset.onclick = function(){
    clearInterval(Interval);
    minutes = "00";
    seconds = "00";
    milSec = "00";
    appendMinutes.innerHTML = minutes;
    appendSeconds.innerHTML = seconds;
    appendMiliSeconds.innerHTML = milSec;
}