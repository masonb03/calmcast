import { useState } from "react";
import SelectedWeather from "./components/SelectedWeather";
import WeatherList from "./components/WeatherList";
import Nav from "./features/Nav";
import './App.css';

function App() {

  const [selectedWeather, setSelectedWeather] = useState(null);
  const [location, setLocation] = useState('');
  const [forecast, setForecast] = useState(false);


  return (
    <div className="app-container">
      <input 
      type="text"
      placeholder="Search for your city..."
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={()=>{
        setSelectedWeather(location);
        setForecast(false);
      }}>Check Current Weather</button>

      <button onClick={() =>{
        setSelectedWeather(location);
        setForecast(true);
      }}>Check Something Else!</button>

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
  )
}

export default App
