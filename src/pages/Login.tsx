import { useState } from 'react';
import * as S from '../styles/components/LoginStyle';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setName } from '../redux/slices/nameSlice';
import { login } from '../redux/slices/authSlice';

function Login() {
	const dispatch = useDispatch();

	const [userName, setUserName] = useState('');

	const navigate = useNavigate();

	const onClick = () => {
		if (userName !== '') {
			dispatch(setName(userName));
			dispatch(login());
			navigate('/');
		} else {
			alert('이름을 입력해주세요.');
			return;
		}
	};

	const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			onClick();
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserName(e.target.value);
	};

	return (
		<>
			<S.LoginContainer>
				<S.Circle />
				<S.Circle />
				<S.Circle />
				<S.LoginBox>
					<S.Input
						type='text'
						placeholder='이름을 입력해주세요.'
						value={userName}
						onChange={handleChange}
						onKeyPress={onKeyPress}
					/>
					<S.Button onClick={onClick}>확인</S.Button>
				</S.LoginBox>
			</S.LoginContainer>
		</>
	);
}
export default Login;
