import { useEffect, useState, useCallback } from 'react';
import {
	fetchCurrentWeather,
	getWeatherInKorean,
	getWeatherIcon,
} from '../api/weatherAPI';
import { fetchUserLocation } from '../api/location';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../redux/store/store';
import { setCurrentWeather } from '../redux/slices/weatherSlice';
import { setCurrentLocation } from '../redux/slices/locationSlice';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from '../styles/components/InfoStyle';

const Info: React.FC = () => {
	const dispatch = useDispatch();

	const currentWeather = useSelector(
		(state: RootState) => state.weather.currentWeather
	);

	const currentLocation = useSelector(
		(state: RootState) => state.currentLocation.currentLocation
	);

	const [location, setLocation] = useState<{ lat: number; lon: number } | null>(
		null
	);

	const [error, setError] = useState<string | null>(null);
	const [hasFailed, setHasFailed] = useState<boolean>(false);

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				setLocation({
					lat: position.coords.latitude,
					lon: position.coords.longitude,
				});
			},
			(error) => {
				console.error('Error getting user location:', error);
				setError('위치 서비스에 대한 액세스를 허용해야 합니다.');
			}
		);
	}, []);

	const fetchData = useCallback(async () => {
		if (!location) return;

		try {
			const { lat, lon } = location;

			const current = await fetchCurrentWeather(lat, lon);
			const userLocation = await fetchUserLocation(lat, lon);

			current.weather = getWeatherInKorean(current.weather);
			current.icon = getWeatherIcon(current.icon);

			dispatch(setCurrentWeather(current));
			dispatch(setCurrentLocation(userLocation));
			setHasFailed(false);
			setIsLoading(false);
		} catch (error) {
			console.error('Error fetching weather data:', error);
			setHasFailed(true);
			setTimeout(fetchData, 5 * 60 * 1000);
		}
	}, [location, dispatch]);

	useEffect(() => {
		fetchData();

		const intervalId = setInterval(fetchData, 60 * 60 * 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, [fetchData]);

	console.log(error, hasFailed);
	return (
		<>
			<S.InfoBox>
				{isLoading && (
					<div className=' spinner'>
						<div
							className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]'
							role='status'>
							<span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
								Loading...
							</span>
						</div>
					</div>
				)}
				{currentWeather && (
					<>
						<S.LeftBox>
							<p>{`현재 위치는 ${currentLocation.address_name}입니다.`}</p>
							<div>
								<FontAwesomeIcon icon={currentWeather.icon as IconProp} />
							</div>
						</S.LeftBox>
						<S.RightBox>
							<li>현재 기온: {currentWeather.temp} °C</li>
							<li>체감 온도: {currentWeather.feels_like} °C</li>
							<li>{currentWeather.weather}</li>
							<li>습도: {currentWeather.humidity} %</li>
							<li>
								시간 당 강수량:{' '}
								{`${currentWeather.rain ? currentWeather.rain + 'mm' : '-'}`}
							</li>
							<li>
								시간 당 적설량:{' '}
								{`${currentWeather.snow ? currentWeather.snow + 'mm' : '-'}`}
							</li>
						</S.RightBox>
					</>
				)}
			</S.InfoBox>
		</>
	);
};

export default Info;
