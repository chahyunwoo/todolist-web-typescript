import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
	faBolt,
	faCloud,
	faCloudMoon,
	faCloudMoonRain,
	faCloudShowersHeavy,
	faCloudSun,
	faCloudSunRain,
	faMoon,
	faQuestionCircle,
	faSmog,
	faSnowflake,
	faSun,
} from '@fortawesome/free-solid-svg-icons';
import axios, { AxiosError } from 'axios';

const API_KEY = '15f68789b86b507ddb7e000315937870';

export interface IWeatherData {
	temp: number;
	feels_like: number;
	humidity: number;
	weather: string;
	description: string;
	icon: any;
	rain?: number;
	snow?: number;
}

const weatherKoreanMap: { [key: string]: string } = {
	Clear: '맑음',
	Clouds: '구름 있음',
	Drizzle: '이슬비',
	Rain: '비',
	Snow: '눈',
	Thunderstorm: '천둥번개',
	Mist: '안개',
	Smoke: '연기',
	Haze: '안개',
	Dust: '미세먼지',
	Fog: '안개',
	Sand: '황사',
	Ash: '재',
	Squall: '돌풍',
	Tornado: '토네이도',
};

const weatherIconMap: { [key: string]: IconDefinition } = {
	'01d': faSun,
	'01n': faMoon,
	'02d': faCloudSun,
	'02n': faCloudMoon,
	'03d': faCloud,
	'03n': faCloud,
	'04d': faCloud,
	'04n': faCloud,
	'09d': faCloudShowersHeavy,
	'09n': faCloudShowersHeavy,
	'10d': faCloudSunRain,
	'10n': faCloudMoonRain,
	'11d': faBolt,
	'11n': faBolt,
	'13d': faSnowflake,
	'13n': faSnowflake,
	'50d': faSmog,
	'50n': faSmog,
};

export async function fetchCurrentWeather(
	lat: number,
	lon: number
): Promise<IWeatherData> {
	try {
		const response = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`
		);

		const { temp, feels_like, humidity } = response.data.main;
		const { main: weather, description, icon } = response.data.weather[0];
		const rain = response.data.rain ? response.data.rain['1h'] : undefined;
		const snow = response.data.snow ? response.data.snow['1h'] : undefined;

		return {
			temp,
			weather,
			description,
			icon,
			feels_like,
			humidity,
			rain,
			snow,
		};
	} catch (error) {
		const axiosError = error as AxiosError;
		console.error('Error fetching today weather data:', axiosError.message);
		throw new Error('Error fetching today weather data');
	}
}

export function getWeatherInKorean(weather: string): string {
	return weatherKoreanMap[weather] || weather;
}

export function getWeatherIcon(icon: string): IconDefinition {
	return weatherIconMap[icon] || faQuestionCircle;
}
