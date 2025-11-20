import {useState, useEffect} from 'react';

function WeatherList({ setSelectedWeather }){

    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        async function fetchWeather() {
            try {
                const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=48.025&longitude=-98.1171&current=temperature_2m,wind_speed_10m,precipitation&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FChicago");
                const data = await res.json();
                setWeather(data);
            } catch(error){
                console.error('Failed to fetch data', error);
            }
            setLoading(false);
        }
        fetchWeather();
    }, []);

    if (loading) return <p>Fetching Weather...</p>;
    if (!weather) return <p>No weather data avaliable.</p>;

    return(
        <div>
            <h2>Here Is Your Current Weather!</h2>
            <ul>
                <li>
                    Time: {weather.current.temperature_2m}°F
                </li>
                <li>
                    Rain: {weather.current.rain} inches
                </li>
                <li>
                    Wind Speed: {weather.current.wind_speed_10m} MPH
                </li>
            </ul>
            <button onClick={() => setSelectedWeather(null)}>Try Another Place!</button>
        </div>
    )
}

export default WeatherList;