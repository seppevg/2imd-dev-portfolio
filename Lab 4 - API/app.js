class App {
    constructor() {
        this.getLocation();
        this.lat;
        this.lon;
        this.apiKey = "141e149ec031484786f89b6bf21f8ba1";
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.lat = position.coords.latitude;
            this.lon = position.coords.longitude;
            //console.log(this.lat);
            //console.log(this.lon);
            this.checkLocalStorage();
        });
    }

    checkLocalStorage() {
        if (localStorage.getItem("temperature") === null) {
            this.getWeather();
        }
        else {
            let temperature = localStorage.getItem("temperature");
            temperature = JSON.parse(temperature);
            let newTime = Math.round(new Date().getTime() / 1000);
            this.showAdd();
            if (newTime - temperature.time > 7200) {
                localStorage.clear();
                this.getWeather();
            }
        }
    }

    getWeather() {
        //http://api.openweathermap.org/data/2.5/weather?lat=51.0188859&lon=4.5225674&appid=141e149ec031484786f89b6bf21f8ba1&units=metric

        let url_openWeatherMap = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this.apiKey}&units=metric`;
        fetch(url_openWeatherMap)
            .then((response) => {
                //console.log(response);
                return response.json();
            })
            .then((json) => {
                //console.log(json);
                let temperature = {
                    temp: json.main.temp,
                    time: Math.round(new Date().getTime() / 1000)
                };
                //console.log(temperature);
                localStorage.setItem("temperature", JSON.stringify(temperature));
                this.showAdd(temperature);
            })
            .catch((error) => {
                console.log(error);
            });
    }



    /*
        showAd(temp, text) {
            document.querySelector(
                ".ad__title"
            ).innerHTML = `Hmm, looks like ${text} today`;
    
            temp = 30;
            if (temp < 15) {
                document.querySelector(".ad").style.backgroundImage =
                    "url(https://images.pexels.com/photos/905485/pexels-photo-905485.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)";
            } else {
                document.querySelector(".ad").style.backgroundImage =
                    "url(https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)";
            }
        }*/
}

let app = new App();