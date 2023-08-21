import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5'
})

const geoInstance = axios.create({
    baseURL: 'https://api.openweathermap.org/geo/1.0/'
})

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	getCurrent: (url: string, cityName: string) => instance.get(url, {params: {
        q: cityName,
        units: "metric",
        appid: "01d782d13831125ea2394b77823bcf9f"
    }}).then(responseBody),
    getForecast: (url: string, lon: number, lat: number) => instance.get(url, {params: {
        lat: lat,
        lon: lon,
        units: "metric",
        appid: "01d782d13831125ea2394b77823bcf9f"
    }})
};

const geoRequests = {
	get: (url: string, lat: number, lon: number) => geoInstance.get(url, {params: {
        lat: lat,
        lon: lon,
        limit: 1000,
        appid: "01d782d13831125ea2394b77823bcf9f"
    }}).then(responseBody)
};

export const weatherforecastService = {
	getCurrentWeather   : (cityName: string): Promise<any> => requests.getCurrent('/weather', cityName),
	getForecast: (lon: number, lat: number): Promise<any> => requests.getForecast('/forecast', lon, lat),
    
}

export const geoCodingService = {
    getGeoCoding: (lat: number, lon: number): Promise<any> => geoRequests.get('/reverse', lat, lon),
}