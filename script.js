let hour = document.getElementById("hour")
let minute = document.getElementById('min')
let second = document.getElementById('sec')

function displayTime(){
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30* hh + mm/2 + ss/120;
    let mRotation = 6* mm + ss/10;
    let sRotation = 6 * ss;

    hour.style.transform = `rotate(${hRotation}deg)`
    minute.style.transform = `rotate(${mRotation}deg)`
    second.style.transform = `rotate(${sRotation}deg)`

}

setInterval(displayTime,1000);