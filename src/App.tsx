import './assets/css/App.css';

import * as S from './styles/AppStyle';

import bg from './assets/images/background.mp4';
import Router from './Router';

function App() {
	return (
		<S.Background>
			<S.Video src={bg} autoPlay loop muted></S.Video>
			<Router />
		</S.Background>
	);
}

export default App;
