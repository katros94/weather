import { IClouds, IWind } from "./CurrentWeather"

export interface IForecast {
    cod: string,
    message: number,
    cnt: number,
    list: IList[]
}

export interface IList {
    dt: number,
    main: IMain,
    weather: IWeather[],
    clouds: IClouds,
    wind: IWind,
    visibility: number,
    pop: number,
    sys: sys,
    dt_txt: string
}

export interface sys {
    pod: string
}

export interface IMain {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    sea_level: number,
    grnd_level: number,
    humidity: number,
    temp_kf: number
}

export interface IWeather {
    id: number,
    main: string,
    description: string,
    icon: string
}