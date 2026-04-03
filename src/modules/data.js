async function getWeatherData(location, unit) {
  try {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&key=CEPUUMSJR4FN6UC5FVYRGRQV6&contentType=json`;
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 400) {
        return {
          error: true,
          message: 'Location not found',
        };
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data: ', error);
    return {
      error: true,
      message: 'Failed to fetch weather data',
    };
  }
}

function processWeatherData(data) {
  if (!data || data.error) {
    return data;
  }

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
    cloudcover,
    visibility,
    precip,
    windspeed,
  } = currentConditions;
  return {
    location: resolvedAddress,
    currentCondition: conditions,
    description,
    humidity,
    feelslike,
    icon,
    sunrise,
    sunset,
    temperature: temp,
    uvindex,
    cloudcover,
    visibility,
    precip,
    windspeed,
  };
}

export { getWeatherData, processWeatherData };
