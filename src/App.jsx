import { useState } from "react";
import SelectedWeather from "./components/SelectedWeather";
import WeatherList from "./components/WeatherList";
import Nav from "./features/Nav";
import Login from "./components/Login";
import Signup from "./components/Signup";
import './App.css';
import { Route, Routes } from "react-router-dom";

function App() {

  const [selectedWeather, setSelectedWeather] = useState(null);
  const [location, setLocation] = useState('');
  const [forecast, setForecast] = useState(false);


  return (
    <div className="app-container">
      <div className="nav-bar">
        <Nav />
      </div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <div className=''>
          <input 
            type="text"
            placeholder="Search for your city..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            />
          <button onClick={()=>{
              setSelectedWeather(location);
              setForecast(false);
            }}>Check Current Weather
          </button>
          <button onClick={() =>{
              setSelectedWeather(location);
              setForecast(true);
            }}>Check Something Else!
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
    </div>
  )
}

export default App
