import { useState, useEffect } from 'react'

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

function App() {
  const [weather, setWeather] = useState<WeatherForecast[]>([]);

  useEffect(() => {
    fetch("http://localhost:5138/weatherforecast")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: WeatherForecast[]) => setWeather(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>Weather Forecast</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp (C)</th>
            <th>Temp (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {weather.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.temperatureC}</td>
              <td>{item.temperatureF}</td>
              <td>{item.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
