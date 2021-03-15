class App {
    constructor() {
        this.getLocation();
        this.lat;
        this.lon;
        this.apiKey = "141e149ec031484786f89b6bf21f8ba1";
        this.weather = document.getElementById("weather_description");
        this.drink = document.getElementById("drink");
        this.ad = document.getElementById("ad");
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
            this.chooseAdd();
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
                this.chooseAdd();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    chooseAdd() {
        let temperature = localStorage.getItem("temperature");
        temperature = JSON.parse(temperature);
        this.showRandomCocktail();
        /*
        if (temperature.temp > 15) {
            this.showRandomCocktail();
        }
        else {
            this.showRandomCoffee();
        }*/
    }

    showRandomCocktail() {
        let url_theCocktailDb = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
        fetch(url_theCocktailDb)
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((json) => {
                console.log(json);
                this.weather.innerHTML = "Het is perfect terrasjesweer! Zin in iets fris? Kies dan voor de";
                this.drink.innerHTML = json.drinks[0].strDrink;
                //console.log(json.drinks[0].strDrink);
                let img_cocktail = json.drinks[0].strDrinkThumb;
                //console.log(json.drinks[0].strDrinkThumb);
                this.ad.style.background = `url(${img_cocktail})`;
                this.ad.style.backgroundRepeat = "no-repeat";
                this.ad.style.backgroundSize = "300px 600px";
            })
    }
}

let app = new App();