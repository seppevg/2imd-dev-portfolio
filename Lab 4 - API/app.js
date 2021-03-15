class App {
    constructor() {
        this.getLocation();
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            this.getWeather(lat, lon);
            console.log(lat);
            console.log(lon);
        });
    }

    getWeather(lat, lon) {
        //http://api.openweathermap.org/data/2.5/weather?lat=${51.0188859}&lon=${4.5225674}&appid={141e149ec031484786f89b6bf21f8ba1}
        let url_openWeatherMap = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={141e149ec031484786f89b6bf21f8ba1}`;
        fetch(url_openWeatherMap)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                console.log("😀");
                console.log(json);

                let temperature = json.currently.temperature;
                let summary = json.currently.summary;

                this.showAd(temperature, summary);
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