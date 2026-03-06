const apiKey = "YOUR_API_KEY_HERE";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


// Function to fetch the weather API
async function fetchWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (!response.ok) return alert("NOT FOUND");
  let data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  // Changing icons based on city weather
  if (data.weather[0].main == "Clouds") {
    document.querySelector(".weather-icon").src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    document.querySelector(".weather-icon").src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    document.querySelector(".weather-icon").src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    document.querySelector(".weather-icon").src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    document.querySelector(".weather-icon").src = "images/mist.png";
  }
}

const searchBox = document.querySelector(".search-weather input");
const searchBtn = document.querySelector(".search-weather button");

searchBtn.addEventListener("click", () => {
  if (searchBox.value === "") {
    alert("Please enter a city name");
    document.querySelector(".weather").style.display = "none";
    return;
  }

  document.querySelector(".weather").style.display = "block";
  fetchWeather(searchBox.value);
});
