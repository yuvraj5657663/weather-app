// script.js
async function fetchWeather() {
  const city = document.getElementById("search").value;
  console.log("city", city);
  const apiKey = "e3eb75f5b29e8e3bb61f2eea233b6a5f"; // Replace with your API key from OpenWeatherMap
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  if (city.trim() === "") {
    alert("Please enter a city name.");
    return;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`City not found: ${city}`);
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(`Error fetching weather data: ${error.message}`);
  }
}

function displayWeather(data) {
  const weatherInfo = document.getElementById("weather-info");
  weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Feels like: ${data.main.feels_like} °C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind speed: ${data.wind.speed} m/s</p>
    `;
}
