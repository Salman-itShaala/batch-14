import { useState } from "react";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  async function sendReq() {
    try {
      const cityInput = document.getElementById("my-input").value;

      const api = `http://api.weatherstack.com/current?access_key=79851ffaf00d1ddb562a5ce58338f114&query=${cityInput}`;

      const res = await fetch(api);

      const data = await res.json();

      setWeatherData(data);
    } catch (error) {
      console.log("something went wrong!!!");
    }
  }

  return (
    <div className="container">
      <h1>Weather application</h1>

      <div className="weather-input">
        <input type="text" placeholder="Enter a city" id="my-input" />
        <button onClick={() => sendReq()}>Search</button>
      </div>

      <div className="weather-data">
        <h2>Weather data for : {weatherData.location.name}</h2>
        {weatherData && (
          <div>
            <h3>Temprature is {weatherData.current.temperature}</h3>
            <h3>Pressure is {weatherData.current.pressure}</h3>
            <img src={weatherData.current.weather_icons[0]} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
