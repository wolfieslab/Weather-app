import './styles.css';
import { getWeatherData, processWeatherData } from './modules/data';

const form = document.querySelector('form');
const locationInput = document.querySelector('.location-input');

/* EVENT LISTENERS */

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const query = locationInput.value || 'gurugram';
  const rawData = await getWeatherData(query, 'metric');
  console.log(rawData);
  const proccessedData = processWeatherData(rawData);
  console.log(proccessedData);
});
