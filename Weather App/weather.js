const apiKey = "7d96415e4d98f330022455210837a314";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    if (!city.trim()) return;

    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);

    if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".tem").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        // Map weather conditions to corresponding local images
        switch (data.weather[0].main) {
            case "Clear":
                weatherIcon.src = "clear.png";
                break;
            case "Clouds":
                weatherIcon.src = "clouds.png";
                break;
            case "Drizzle":
                weatherIcon.src = "drizzle.png";
                break;
            case "Mist":
                weatherIcon.src = "mist.png";
                break;
            case "Rain":
                weatherIcon.src = "rain.png";
                break;
            case "Snow":
                weatherIcon.src = "snow.png";
                break;
            default:
                weatherIcon.src = "clear.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

// Event Listeners
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});
