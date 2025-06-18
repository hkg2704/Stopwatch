const main = document.querySelector("#main");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");

let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function start()
{
    if (!timer) {
        timer = setInterval(()=>
            {
                
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
    let displayseconds = seconds < 10 ? "0" + seconds : seconds;
    let displayminutes = minutes < 10 ? "0" + minutes : minutes;    
    let displayhours = hours < 10 ? "0" + hours : hours;
    main.innerHTML = `<h1>${displayhours}:${displayminutes}:${displayseconds}</h1>`;
            }, 1000);
        startButton.disabled = true;
        stopButton.disabled = false;
    }
}
function stop()
{
    clearInterval(timer);
    timer = null;
    startButton.disabled = false;
    stopButton.textContent = "Reset";
    stopButton.onclick = reset;
}
function reset()
{
    clearInterval(timer);
    timer = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    main.innerHTML = "<h1>00:00:00</h1>";
    stopButton.textContent = "Stop";
    stopButton.onclick = stop;
}
