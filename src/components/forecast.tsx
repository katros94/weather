import { FunctionComponent } from "react";
import { Paper, styled } from "@mui/material";

interface ForecastProps {
    icon: string;
    date: string;
    celcius: number;
}


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const Forecast: FunctionComponent<ForecastProps> = 
({icon, date, celcius}) => {


    return(
        <div>
            <h1>Forecast</h1>
            <p>Date: {date}</p>
            <p>Celcius: {celcius}</p>
            <img src={"https://openweathermap.org/img/wn/" + icon + ".png"} alt="weather icon" />
        </div>
    );
}

export default Forecast;