// const locationDatetime = document.querySelector(".location-datetime");

import clearDay from "../assets/images/clear-day.jpg";
import clearNight from "../assets/images/clear-night.jpg";
import cloudy from "../assets/images/cloudy.jpg";
import rain from "../assets/images/rain.jpg";
import snow from "../assets/images/snow.jpg";
import partlyCloudyDay from "../assets/images/partly-cloudy-day.jpg";
import partlyCloudyNight from "../assets/images/partly-cloudy-night.jpg";
import defaultBg from "../assets/images/default.jpg"


const metricBtn = document.querySelector(".metric");
const usBtn = document.querySelector(".us");
const weatherCard = document.querySelector(".weather-current-card");
const locationName = document.querySelector(".location-name");
const currentTemperature = document.querySelector(".weather-current-temperature");
const currentFeelslikeValue = document.querySelector(".feelslike-value");
const currentCondition = document.querySelector(".current-condition");
const humidity = document.querySelector(".humidity.value-group");
const precipitation = document.querySelector(".precipitation.value-group");
const uvindex = document.querySelector(".uvindex.value-group");
const cloudCover = document.querySelector(".cloud-cover.value-group");
const visibility = document.querySelector(".visibility.value-group");
const wind = document.querySelector(".wind.value-group");

const units = {
    metric: {
        temp: "°C",
        wind: "km/h",
        visibility: "km",
        precip: "mm"
    },
    us: {
        temp: "°F",
        wind: "mph",
        visibility: "mi",
        precip: "in"
    }
};

const backgroundMap = {
    "clear-day": clearDay,
    "clear-night": clearNight,
    "rain": rain,
    "snow": snow,
    "cloudy": cloudy,
    "partly-cloudy-day": partlyCloudyDay,
    "partly-cloudy-night": partlyCloudyNight,
};


function displayWeatherData(data, unit) {
    const u = units[unit];    

    locationName.textContent = data.location;
    currentTemperature.textContent = `${data.temperature}${u.temp}`;
    currentFeelslikeValue.textContent = `${data.feelslike}${u.temp}`;
    currentCondition.textContent = data.currentCondition;

    updateDetails(humidity, data.humidity, "%");
    updateDetails(cloudCover, data.cloudcover, "%");
    updateDetails(visibility, data.visibility, u.visibility);
    updateDetails(uvindex, data.uvindex, "");
    updateDetails(precipitation, data.precip ?? 0, u.precip);
    updateDetails(wind, data.windspeed, u.wind);

    updateBackground(data.icon);
}

function updateDetails(element, value, unit) {
    const valueEl = element.querySelector(".value");
    const unitEl = element.querySelector(".unit");

    valueEl.textContent = value;
    unitEl.textContent = unit;
}

function updateBackground(icon) {
    const background = backgroundMap[icon] || defaultBg;
    weatherCard.style.backgroundImage = `url(${background})`;
}

function changeUnitUI(unit) {
    metricBtn.classList.toggle("active", unit === "metric");
    usBtn.classList.toggle("active", unit === "us");
}



export { displayWeatherData, changeUnitUI } 