import './styles.css';
import { getWeatherData, processWeatherData } from './modules/data';
import { displayWeatherData } from './modules/ui';

const form = document.querySelector('form');
const locationInput = document.querySelector('.location-input');

let activeUnit = "metric";
let currentLocation = "gurugram";

async function loadWeather() {
  const rawData = await getWeatherData(currentLocation, activeUnit);
  const proccessedData = processWeatherData(rawData);

  displayWeatherData(proccessedData, activeUnit);
}

loadWeather();

/* EVENT LISTENERS */

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  currentLocation = locationInput.value;
  loadWeather();
});
