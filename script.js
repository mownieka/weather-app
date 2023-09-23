const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");
const location_not_found = document.querySelector(".location-not-found");
const weather_body = document.querySelector(".weather-body");

async function checkWeather(city) {
  const api_key = "0f5053b1c0f8cb1349226a5cc55bfade";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  );
  if (weather_data.cod === `404`) {
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
    console.log("error");
    return;
  }
  location_not_found.style.display = "none";
  weather_body.style.display = "flex";
  console.log(273 - weather_data.main.temp);
  temperature.innerHTML = `${273 - Math.round(273 - weather_data.main.temp)}°C`;
  description.innerHTML = `${weather_data.weather[0].description}`;
  humidity.innerHTML = `${weather_data.main.humidity}%`;
  wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

  switch (weather_data.weather[0].main) {
    case "Clouds":
      weather_img.src = "/asserts/clouds.png";
      break;
    case "Rain":
      weather_img.src = "/asserts/raining.png";
      break;
    case "Snow":
      weather_img.src = "/asserts/snow.png";
      break;
    case "Wind":
      weather_img.src = "/asserts/wind.png";
      break;
    case "Clear":
      weather_img.src = "/asserts/clear1.png";
      break;
    case "Light Rain":
      weather_img.src = "/asserts/lr.png";
      break;
    case "Haze":
      weather_img.src = "/asserts/haze.png";
      break;
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
