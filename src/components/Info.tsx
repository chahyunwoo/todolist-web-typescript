import { useEffect, useState } from 'react';
import * as S from '../styles/components/InfoStyle';
import axios from 'axios';

const Info: React.FC = () => {
	const [weatherData, setWeatherData] = useState<any>(null);

	return <S.InfoBox>Info</S.InfoBox>;
};

export default Info;
