let time = document.getElementById("time");
let min = 0;
let sec = 0;
let milSec = 0;
let interval = null;
let isTimerStart = false;

function start(){
    if(isTimerStart == true){
        return;
    }
    function run(){
        isTimerStart = true;
        milSec++;
        if(milSec > 99){
            sec++;
            milSec = 0;
        }
        if(sec >= 60){
            min++;
            sec = 0;
        }
        let minZero = (min > 9) ? "" : '0';
        let secZero = (sec > 9) ? "" : '0';
        let milSecZero = (milSec > 9) ? "" : '0';
        time.innerText = `${minZero}${min} : ${secZero}${sec} : ${milSecZero}${milSec}`
    }
    interval = setInterval(run, 10);
}

function stop(){
    clearInterval(interval);
    isTimerStart = false;
}

function reset(){
    clearInterval(interval);
    isTimerStart = false;
    min = 0;
    sec = 0;
    milSec = 0;
    time.innerText = '00 : 00 : 00';
}