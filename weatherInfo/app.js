 let city = document.getElementById("city");
    let country = document.getElementById("country");
    let dateTime = document.getElementById("dateTime");
    let deg = document.getElementById("deg");
    let minTemp = document.getElementById("minTemp");
    let maxTemp = document.getElementById("maxTemp");
    let wheathercon = document.getElementById("wheathercon");

    const getCurrentDate = () => {
        let dayarray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        let montharray = [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC",
        ];

        let date = new Date();
        let month = date.getMonth();
        let dates = date.getDate();
        let day = date.getDay();
        let currentDate = dates + " | " + dayarray[day] + " | " + montharray[month + 1];
        return currentDate;
    }

    const getCurrentTime = () => {
        let date = new Date();
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        let period = "AM";

        if (hour > 12) {
            hour = hour - 12;
            period = "PM";
        }

        if (min <= 9) {
            min = "0" + min;
        }

        let currentTime = hour + ":" + min + ":" + sec;
        return currentTime;
    }


    dateTime.innerHTML = getCurrentDate() + " -  " + getCurrentTime();

    let getWeatherData = async () => {
        let res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=indore,in&APPID=ee697f40914031fb913084d78fbb954f");
        let data = await res.json();
        city.innerHTML = data.name;
        country.innerHTML = data.sys.country;
        deg.innerHTML = data.main.temp;
        minTemp.innerHTML = data.main.temp_min;
        maxTemp.innerHTML = data.main.temp_max;
         let temstatus = data.main;
      if (temstatus == "Sunny") {
        wheathercon.innerHTML =
          "<i class='fas fa-sun' style='font-size: 150px; color: yellow'></i>";
      } else if (temstatus == "Clouds") {
        wheathercon.innerHTML =
          "<i class='fas fa-cloud' style='font-size: 150px; color: lightyellow'></i>";
      } else if (temstatus == "Rainy") {
        wheathercon.innerHTML =
          "<i class='fas fa-cloud-rain' style='font-size: 150px; color: lightblue'></i>";
      } else {
        wheathercon.innerHTML =
          "<i class='fas fa-cloud' style='font-size: 150px; color: lightyellow'></i>";
      }

    }

    getWeatherData();

