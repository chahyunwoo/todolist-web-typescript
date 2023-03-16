import * as S from '../../styles/MainStyle';

import Login from '../../components/Login';

import bg from '../../assets/images/background.mp4';
import { useState } from 'react';

function Main() {
	const [isLogin, setIsLogin] = useState(false);

	return (
		<>
			<S.Background>
				<S.Video src={bg} autoPlay loop muted></S.Video>
				<Login isLogin={isLogin} setIsLogin={setIsLogin} />
			</S.Background>
		</>
	);
}

export default Main;
