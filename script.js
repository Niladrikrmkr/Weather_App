let weather = {
    apiKey: "2968ca3aaba72a19d7cbcae7b157b9bd",
    fetchWeather : function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data)); 

    },
    displayWeather : function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity} = data.main;
        const { speed } = data.wind;

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind sped : " + speed + "km/h";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name +"')";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".searchBar").value);
    },
}

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
})


weather.fetchWeather('siliguri');