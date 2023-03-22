import './assets/css/App.css';

import * as S from './App.styles';

import bg from './assets/images/background.mp4';
import Router from './Router';
import { generateStarfall, IStar } from './utils/starfall';
import { useEffect, useState } from 'react';
import TwinklingStar from './components/layout/TwinklingStar';

const App: React.FC = () => {
	const [stars, setStars] = useState<IStar[]>([]);

	useEffect(() => {
		const newStars = generateStarfall(100);
		setStars(newStars);
	}, []);

	return (
		<>
			<S.Background>
				{stars.map((star, index) => (
					<TwinklingStar key={`star-${index}`} {...star} />
				))}
				<S.Video src={bg} autoPlay loop muted></S.Video>
				<Router />
			</S.Background>
		</>
	);
};

export default App;
