import { useState, useEffect } from "react";


function SelectedWeather({ location, setSelectedWeather }){

    const[weather, setWeather] = useState(null);
    const[loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

useEffect(() => {
    async function fetchWeather(){

        setLoading(true);
        setError(null);

        try{
            const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`);
            const geoData = await geoRes.json();
            if(geoData.length === 0) {
                setError('Location not found, please enter a valid location.');
                setLoading(false);
                return;
            }

            const { lat, lon } = geoData[0];

            const weatherRes = await fetch("https://api.open-meteo.com/v1/forecast?latitude=48.025&longitude=-98.1171&current=temperature_2m,wind_speed_10m,precipitation&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FChicago");
            const weatherData = await weatherRes.json();
            setWeather(weatherData.current);
        }catch(error){
            console.error('Failed to fetch data', error);
            setError('Failed to load weather data.')
        }
        setLoading(false);
    }
    if(location){
        fetchWeather();
    }
}, [location]);

if(loading) return <p>Loading data...</p>;
if(error) return <p style={{color: 'red'}}>{error}</p>;
if(!weather) return null;

    return(
        <div>
            <h2>Weather Info!</h2>
            <p>Temperature: {weather.temperature_2m}F</p>
            <p>{weather.is_day ? "Day" : "Night"}</p>
            <p>Rain: {weather.rain} inches</p>
            <p>Wind: {weather.wind_speed_10m} mph</p>

            <button onClick={() => setSelectedWeather(null)}>Back to Main</button>
        </div>
    )
}

export default SelectedWeather;