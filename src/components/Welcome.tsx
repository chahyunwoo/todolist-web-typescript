import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { removeName } from '../redux/slices/nameSlice';
import { useState, useEffect, useCallback } from 'react';

import * as S from '../styles/components/WelcomeStyle';

const Welcome: React.FC = () => {
	const myName = useSelector((state: RootState) => state.setName.name);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [time, setTime] = useState(new Date());

	const currentTime = useCallback(() => {
		setTime(new Date());
	}, []);

	useEffect(() => {
		const interval = setInterval(currentTime, 1000);
		return () => clearInterval(interval);
	}, [currentTime]);

	const year = time.getFullYear();
	const month = String(time.getMonth() + 1).padStart(2, '0');
	const date = String(time.getDate()).padStart(2, '0');
	const day = [
		'일요일',
		'월요일',
		'화요일',
		'수요일',
		'목요일',
		'금요일',
		'토요일',
	][time.getDay()];
	const hour = String(time.getHours()).padStart(2, '0');
	const minute = String(time.getMinutes()).padStart(2, '0');
	const second = String(time.getSeconds()).padStart(2, '0');

	const onClick = () => {
		dispatch(removeName(''));
		dispatch(logout());
		localStorage.setItem('todoList', '[]');
		navigate('/');
	};

	return (
		<>
			<S.TitleBox>
				<S.LeftBox>
					<S.P>{myName} 님! 오늘도 좋은 하루 보내세요.</S.P>
					<S.Button onClick={onClick}>{myName}님이 아닌가요?</S.Button>
				</S.LeftBox>
				<S.RightBox>
					<S.Time>{`현재 시간은 ${year}년 ${month}월 ${date}일 ${day} ${hour}시 ${minute}분 ${second}초 입니다.`}</S.Time>
				</S.RightBox>
			</S.TitleBox>
		</>
	);
};

export default Welcome;
