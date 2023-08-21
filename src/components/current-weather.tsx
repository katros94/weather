import { FunctionComponent } from "react";
import { IClouds, IMain, IWind } from "../interfaces/CurrentWeather";

interface CurrentWeatherProps {
    location?: string,
    description?: string[];
    icon?: string;
    main?: IMain;
    wind?: IWind;
    clouds?: IClouds;
}

export const CurrentWeather: FunctionComponent<CurrentWeatherProps> = 
({location, description, icon, main, wind, clouds}) => {
    return (
        <div>
            <h1>Current weather in {location}</h1>
            <p>{description}</p>
            <img src={"https://openweathermap.org/img/wn/" + icon + ".png"} alt="weather icon" />
            <p>{}</p>
            <p>{main?.temp} celcius</p>
            <p>humidity: {main?.humidity} %</p>
            <p>wind: {wind?.speed} meter/sec</p>
            <p>clouds: {clouds?.all} %</p>
        </div>
    );
}

export default CurrentWeather;