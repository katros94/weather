import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
    baseURL: 'https://tile.openweathermap.org/'
})

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody)
};

export const weatherMapService = {
	getWeatherMap: (): Promise<any> => requests.get('/map/clouds_new/1/0/1.png?appid=01d782d13831125ea2394b77823bcf9f'),
}

