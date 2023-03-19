import axios, { AxiosError } from 'axios';

const API_KEY = 'e0f2c8451bc6e06b5d2f9054582b1629';

export async function fetchUserLocation(
	lat: number,
	lon: number
): Promise<string> {
	try {
		const response = await axios.get(
			`https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${lon}&y=${lat}`,
			{ headers: { Authorization: `KakaoAK ${API_KEY}` } }
		);

		const address = response.data.documents[0] || '';

		return address;
	} catch (error) {
		const axiosError = error as AxiosError;
		console.error('Error fetching your location data:', axiosError.message);
		throw new Error('Error fetching your location data');
	}
}