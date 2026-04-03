# Weather App 🌦️

[**🔗 Live Demo**](https://wolfieslab.github.io/Weather-app/) | 
[**💻 Source Code**](https://github.com/wolfieslab/weather-app)

A simple weather application that allows users to search for a location
and view current weather conditions.\
This project was built as part of **The Odin Project** curriculum to
practice working with APIs, asynchronous JavaScript, and modular
application structure.


## Features

-   Search for weather by location
-   Toggle temperature units (**°C / °F**)
-   Dynamic background images based on weather conditions
-   Displays:
    -   Current temperature
    -   Feels like temperature
    -   Weather conditions
    -   Humidity
    -   Cloud cover
    -   Visibility
    -   UV Index
    -   Wind speed
    -   Precipitation
-   Error handling for **invalid locations**
-   Responsive UI


## Built With

-   **JavaScript (ES6 Modules)**
-   **Webpack**
-   **HTML5**
-   **CSS3**
-   **Visual Crossing Weather API**


## Project Structure

    src/
     ├── modules/
     │   ├── data.js       # API fetching and data processing
     │   ├── ui.js         # DOM updates and UI rendering
     │   └── state.js      # Application state management
     │
     ├── assets/
     │   └── images/       # Background images for weather conditions
     │
     ├── index.js          # App entry point
     └── styles.css        # Styling


## How It Works

1.  User searches for a location.
2.  The app sends a request to the **Visual Crossing Weather API**.
3.  The response is processed to extract relevant weather data.
4.  The UI updates with the current weather conditions.
5.  The background image changes depending on the weather icon returned
    by the API.



## Error Handling

Currently implemented:

-   **Location not found**
-   Prevents UI crashes if API returns invalid data

Example:

    Location not found


## Installation

Clone the repository:
```bash
git clone https://github.com/wolfieslab/weather-app.git
```

Navigate into the project:
```bash
cd weather-app
```

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm start
```

Build for production:
```bash
npm run build
```

## Future Improvements

Possible improvements for the project:

-   7-day weather forecast
-   Loading state while fetching data
-   Geolocation weather detection
-   Weather icons
-   Search suggestions / autocomplete


## Author

**Wolfie's Lab**