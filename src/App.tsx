import { useEffect, useState } from 'react';
import './App.css';
import { geoCodingService, weatherforecastService } from './services/weatherforecast-api';
import { Button, Grid, Stack, TextField } from '@mui/material';
import { ICurrentWeather } from './interfaces/CurrentWeather';
import { IGeo } from './interfaces/Geo';
import { IForecast, IList } from './interfaces/Forecast';
import CurrentWeather from './components/current-weather';
import Forecast from './components/forecast';


function App() {
  const [currentWeather, setCurrentWeather] = useState<ICurrentWeather>();
  const [weatherForecast, setForecast] = useState<IForecast>();
  const [geo, setGeo] = useState<IGeo[]>([]);

  const [lat, setLat] = useState<number>(55.70);
  const [long, setLong] = useState<number>(13.19);

  const style = {
    padding: "0px",
  }

  useEffect(() => {
    searchCityWeather(lat, long)

  },[]);
  
  function searchCityWeather(lat: number, lon: number) {
    geoCodingService.getGeoCoding(lat, lon)
    .then((data: IGeo[]) => {
      setGeo(data)
      
      weatherforecastService.getCurrentWeather(data[0].name.split(' kommun').join('')).then((data: ICurrentWeather) => {
        setCurrentWeather(data)   
      })
      
      weatherforecastService.getForecast(lat, lon).then((data: IForecast) => {
        setForecast(data)
      })
    })
  }
  
  return (
    <div className="App">
      <Stack direction="column" justifyContent="space-evenly" alignItems="center" spacing={2} style={style}>

        <TextField id='lat' placeholder='Enter Lat' label='Lat' variant='outlined'
        onChange={(event => {
          setLat(Number(event.target.value))
        })}/>

        <TextField id='lon' placeholder='Enter lon' label='Lon' variant='outlined'
        onChange={(event => {
          setLong(Number(event.target.value))
        })}/>

        <Button variant="contained" 
        onClick={() => searchCityWeather(lat, long)}>Sök</Button>
      {
        <CurrentWeather location={currentWeather?.name} 
                      description={currentWeather?.weather.map(x => x.description)}
                      icon={currentWeather?.weather[0].icon}
                      main={currentWeather?.main}
                      clouds={currentWeather?.clouds}
                      wind={currentWeather?.wind}/> 
      }

      {
        (weatherForecast?.list || []).map((forecast, index) => (
          <Forecast key={index} icon={forecast.weather[0].icon} celcius={forecast.main.temp} date={forecast.dt_txt} />
        ))
      }
      
      </Stack>
    </div>
  );
}

export default App;
