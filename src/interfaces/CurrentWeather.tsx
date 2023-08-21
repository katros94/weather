export interface ICurrentWeather {
    coord: ICoord,
    weather: IWeather[],
    main: IMain,
    wind: IWind,
    clouds: IClouds,
    timezone: number,
    id: number,
    name: string,
    cod: number,
    dt_txt?: string,
}

export interface ICoord {
    lon: number,
    lat: number
};

export interface IWeather {
    id: number,
    main: string,
    description: string,
    icon: string,
};

export interface IMain {
    temp?: number,
    feels_like?: number,
    temp_min?: number,
    temp_max?: number,
    pressure?: number,
    humidity?: number,
    sea_level?: number,
    grnd_level?: number
};

export interface IWind {
    speed: number,
    deg: number,
    gust: number,
};

export interface IClouds {
    all: number,
};