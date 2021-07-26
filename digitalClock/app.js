 let time = document.getElementById("time");

        const getTime = () => {
            let date = new Date();
            let hour = date.getHours();
            let min = date.getMinutes();
            let sec = date.getSeconds();
            let period = "AM";
            if (hour > 12) {
                period = "PM";
                hour = hour - 12;
            }
            if (hour == 0) {
                hour = 12;
            }
            if (sec <= 9) {
                sec = "0" + sec;
            }
            if (min <= 9) {
                min = "0" + min;
            }

            time.innerHTML = `${hour} : ${min} :  ${sec} ${period}`;
            setTimeout(getTime, 1000);
        }

        getTime();