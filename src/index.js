import {
  getActiveUnit,
  loadWeather,
  setCurrentLocation,
  toggleUnit,
} from './modules/state';
import { changeUnitUI } from './modules/ui';
import './styles.css';

const form = document.querySelector('form');
const locationInput = document.querySelector('.location-input');
const unitToggle = document.querySelector('.toggle-unit');

loadWeather();

/* EVENT LISTENERS */

unitToggle.addEventListener('click', async (e) => {
  if (!e.target.classList.contains('unit')) return;

  toggleUnit();

  const unit = getActiveUnit();

  changeUnitUI(unit);
  loadWeather();
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  setCurrentLocation(locationInput.value);
  loadWeather();
});
