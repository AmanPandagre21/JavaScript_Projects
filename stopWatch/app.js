 let tens = 00;
    let sec = 00;
    let min = 00;
    let hour = 00;
    let appendTens = document.getElementById("tens");
    let appendSec = document.getElementById("sec");
    let appendMin = document.getElementById("min");
    let appendHour = document.getElementById("hour");
    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    let reset = document.getElementById("reset");
    let interval = '';

    const timer = () => {
        tens++;

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens == 99) {
            sec++;
            appendSec.innerHTML = "0" + sec;
            tens = 00;
            appendTens.innerHTML = tens;
        }

        if (sec > 9) {
            appendSec.innerHTML = sec;
        }

        if (sec == 60) {
            min++;
            appendMin.innerHTML = "0" + min;
            sec = 00;
            appendSec.innerHTML = sec;
        }

        if (min > 9) {
            appendMin.innerHTML = min;
        }

        if (min > 59) {
            hour++;
            appendHour.innerHTML = "0" + hour;
            min = 00;
            appendMin.innerHTML = min;
        }
        if (hour > 9) {
            appendHour.innerHTML = hour;
        }
    }

    start.addEventListener("click", function () {
        clearInterval(interval);
        interval = setInterval(timer);
    })

    stop.addEventListener("click", function () {
        clearInterval(interval);
    })

    reset.addEventListener("click", function () {
        clearInterval(interval);
        tens = "00";
        sec = "00";
        min = "00";
        hour = "00";
        appendHour.innerHTML = hour;
        appendMin.innerHTML = min;
        appendSec.innerHTML = sec;
        appendTens.innerHTML = tens;
    })
