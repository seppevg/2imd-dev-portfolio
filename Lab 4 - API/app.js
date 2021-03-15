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
            //console.log(this.lat, this.lon);
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
                this.showAdd();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    showAdd() {
        let temperature = localStorage.getItem("temperature");
        temperature = JSON.parse(temperature);
        if (temperature.temp > 15) {
            this.showRandomCocktail();
        }
        else if (temperature.temp <= 15) {
            this.showCoffee();
        }
        else if (temperatures.description === "Rain") {
            this.itunesTrack3();
        }
    }
}

let app = new App();