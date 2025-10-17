import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { removeName } from '../../redux/slices/nameSlice';
import { useState, useEffect, useCallback } from 'react';

import ComponentLayout from '../layout/ComponentLayout';

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
		<ComponentLayout component='welcome'>
			<div className="mobile:w-full">
				<p className="mb-2 text-lg mobile:text-base">{myName} 님! 오늘도 좋은 하루 보내세요.</p>
				<button onClick={onClick} className="text-xs text-sky-500 tracking-wider">{myName}님이 아닌가요?</button>
			</div>
			<div className="mobile:w-full mobile:mt-5">
				<p className="text-sm mobile:text-xs">{`현재 시간은 ${year}년 ${month}월 ${date}일 ${day} ${hour}시 ${minute}분 ${second}초 입니다.`}</p>
			</div>
		</ComponentLayout>
	);
};

export default Welcome;
