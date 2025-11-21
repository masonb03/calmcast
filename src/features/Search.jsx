import React, { useState } from 'react';
import SelectedWeather from "../components/SelectedWeather";
import WeatherList from "../components/WeatherList";

export default function Search({}) {

    const [selectedWeather, setSelectedWeather] = useState(null);
    const [location, setLocation] = useState('');
    const [forecast, setForecast] = useState(false);
  return (
    <div className="search-container">
        <input 
            type="text"
            placeholder="Search for your city..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            />
          <button onClick={()=>{
              setSelectedWeather(location);
              setForecast(false);
            }}>Check General Weather
          </button>
          <button onClick={() =>{
              setSelectedWeather(location);
              setForecast(true);
            }}>Check Current Weather
          </button>
          {selectedWeather && !forecast && (
            <SelectedWeather
            location={selectedWeather}
            setSelectedWeather={setSelectedWeather}
            />
          )}
            {selectedWeather && forecast && (
              <WeatherList
              location={selectedWeather}
              setSelectedWeather={setSelectedWeather}
              />
          )}
    </div>
  );
}