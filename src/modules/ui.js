const headerContainer = document.querySelector("header");
const metricBtn = document.querySelector('.metric');
const usBtn = document.querySelector('.us');
const weatherCard = document.querySelector('.weather-current-card');
const locationName = document.querySelector('.location-name');
const currentTemperature = document.querySelector(
  '.weather-current-temperature',
);
const currentFeelslikeValue = document.querySelector('.feelslike-value');
const currentCondition = document.querySelector('.current-condition');
const humidity = document.querySelector('.humidity.value-group');
const precipitation = document.querySelector('.precipitation.value-group');
const uvindex = document.querySelector('.uvindex.value-group');
const cloudCover = document.querySelector('.cloud-cover.value-group');
const visibility = document.querySelector('.visibility.value-group');
const wind = document.querySelector('.wind.value-group');

const units = {
  metric: {
    temp: '°C',
    wind: 'km/h',
    visibility: 'km',
    precip: 'mm',
  },
  us: {
    temp: '°F',
    wind: 'mph',
    visibility: 'mi',
    precip: 'in',
  },
};

function displayWeatherData(data, unit) {
  const u = units[unit];

  locationName.textContent = data.location;
  currentTemperature.textContent = `${data.temperature}${u.temp}`;
  currentFeelslikeValue.textContent = `${data.feelslike}${u.temp}`;
  currentCondition.textContent = data.currentCondition;

  updateDetails(humidity, data.humidity, '%');
  updateDetails(cloudCover, data.cloudcover, '%');
  updateDetails(visibility, data.visibility, u.visibility);
  updateDetails(uvindex, data.uvindex, '');
  updateDetails(precipitation, data.precip ?? 0, u.precip);
  updateDetails(wind, data.windspeed, u.wind);

  updateBackground(data.icon);
}

function updateDetails(element, value, unit) {
  const valueEl = element.querySelector('.value');
  const unitEl = element.querySelector('.unit');

  valueEl.textContent = value;
  unitEl.textContent = unit;
}

async function updateBackground(icon) {
  try {
    const imageModule = await import(`../assets/images/${icon}.jpg`);
    const imagePath = imageModule.default;
    weatherCard.style.backgroundImage = `url(${imagePath})`;
  } catch {
    const fallBack = await import(`../assets/images/default.jpg`);
    weatherCard.style.backgroundImage = `url(${fallBack.default})`;
  }
}

function changeUnitUI(unit) {
  metricBtn.classList.toggle('active', unit === 'metric');
  usBtn.classList.toggle('active', unit === 'us');
}

function displayError(message) {
    const errorBox = document.createElement("div");
    errorBox.classList.add("error-message");
    errorBox.textContent =  message;
    headerContainer.appendChild(errorBox);
}

function clearError() {
    const errorMessage = document.querySelector(".error-message");
    if(!errorMessage) return;
    errorMessage.remove();
}

export { displayWeatherData, changeUnitUI, displayError, clearError };
