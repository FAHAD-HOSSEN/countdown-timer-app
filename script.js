



const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
// "1 jan 2022";
// window.prompt("type your terget date : ");
const newYears = window.prompt("type your terget date : ")
 

function countdown(){
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSecond = Math.floor((newYearDate - currentDate)/ 1000);

    const days = Math.floor(totalSecond / 3600 / 24);
    const hours = Math.floor(totalSecond / 3600) % 24;
    const mins = Math.floor(totalSecond / 60) % 60;
    const seconds = Math.floor(totalSecond) % 60;

    daysEl.innerHTML=days;
    hoursEl.innerHTML=formateTime (hours);
    minutesEl.innerHTML=formateTime (mins);
    secondsEl.innerHTML = formateTime(seconds);

    if(seconds < 10 ){
        secondsEl.style.color = 'red'
    }else{
        secondsEl.style.color = "#0ee70e";
    }
    
    
}

// if(seconds < 10){
//     seconds.style.color = "red"
// }

function formateTime(time){
    return time < 10 ? (`0${ time}`) : time
}

// function changeColor(color){
//     return color < 10 ? style.color = 'red' : style.color = 'white'
// }

countdown();
setInterval(countdown, 1000)
