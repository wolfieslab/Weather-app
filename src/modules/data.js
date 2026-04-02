async function getWeatherData(location, unit) {
  try {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&key=CEPUUMSJR4FN6UC5FVYRGRQV6&contentType=json`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data: ', error);
    return null;
  }
}

function processWeatherData(data) {
  if (!data) return null;

  const { resolvedAddress, description, currentConditions } = data;
  const {
    conditions,
    humidity,
    feelslike,
    icon,
    sunrise,
    sunset,
    temp,
    uvindex,
  } = currentConditions;
  return {
    location: resolvedAddress,
    currCondition: conditions,
    description,
    humidity,
    feelslike,
    icon,
    sunrise,
    sunset,
    temperature: temp,
    uvindex,
  };
}

export { getWeatherData, processWeatherData }