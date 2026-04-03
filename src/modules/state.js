import { getWeatherData, processWeatherData } from "./data";
import { displayWeatherData } from "./ui";

let activeUnit = "metric";
let currentLocation = "gurugram";

async function loadWeather() {
  const rawData = await getWeatherData(currentLocation, activeUnit);
  const proccessedData = processWeatherData(rawData);

  displayWeatherData(proccessedData, activeUnit);
}

function setCurrentLocation(location) {
    currentLocation = location;
}

function setActiveUnit(unit) {
    activeUnit = unit;
}

function getActiveUnit() {
    return activeUnit;
}

function getCurrentLocation() {
    return currentLocation;
}

function toggleUnit() {
    activeUnit = activeUnit === "metric" ? "us" : "metric" ;
}

export { loadWeather, setCurrentLocation, setActiveUnit, getActiveUnit, toggleUnit, getCurrentLocation }