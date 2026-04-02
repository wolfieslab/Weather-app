// const locationDatetime = document.querySelector(".location-datetime");
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
}

function updateDetails(element, value, unit) {
    const valueEl = element.querySelector(".value");
    const unitEl = element.querySelector(".unit");

    valueEl.textContent = value;
    unitEl.textContent = unit;
}



export { displayWeatherData } 