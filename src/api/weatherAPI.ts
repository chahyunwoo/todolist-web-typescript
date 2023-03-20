import axios, { AxiosError } from "axios";

const API_KEY = "f3a83f0aa33894efbd5159dbe0260a73";

export interface IWeatherData {
  temp: number;
  feels_like: number;
  humidity: number;
  weather: string;
  description: string;
  icon: string;
  rain?: number;
  snow?: number;
}

const weatherKoreanMap: { [key: string]: string } = {
  Clear: "맑음",
  Clouds: "구름 있음",
  Drizzle: "이슬비",
  Rain: "비",
  Snow: "눈",
  Thunderstorm: "천둥번개",
  Mist: "안개",
  Smoke: "연기",
  Haze: "안개",
  Dust: "미세먼지",
  Fog: "안개",
  Sand: "황사",
  Ash: "재",
  Squall: "돌풍",
  Tornado: "토네이도",
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
    const rain = response.data.rain ? response.data.rain["1h"] : undefined;
    const snow = response.data.snow ? response.data.snow["1h"] : undefined;

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
    console.error("Error fetching today weather data:", axiosError.message);
    throw new Error("Error fetching today weather data");
  }
}

export function getWeatherInKorean(weather: string): string {
  return weatherKoreanMap[weather] || weather;
}
