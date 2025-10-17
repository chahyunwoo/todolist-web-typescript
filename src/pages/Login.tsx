import { useState } from 'react';
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

	const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			onClick();
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserName(e.target.value);
	};

	return (
		<div className="my-0 mx-auto text-center absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] transition-all duration-500 mobile:w-full mobile:h-full">
			<span className="absolute top-0 left-0 w-full h-full border border-solid border-white rounded-organic transition-all duration-500 animate-circle-10 mobile:hidden" />
			<span className="absolute top-0 left-0 w-full h-full border border-solid border-white rounded-organic transition-all duration-500 animate-circle-20 mobile:hidden" />
			<span className="absolute top-0 left-0 w-full h-full border border-solid border-white rounded-organic transition-all duration-500 animate-circle-40 mobile:hidden" />
			<div className="absolute w-full flex flex-wrap justify-center items-center p-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<input
					type="text"
					placeholder="이름을 입력해주세요."
					value={userName}
					onChange={handleChange}
					onKeyDown={onKeyDown}
					className="appearance-none bg-transparent outline-none text-white cursor-pointer w-full p-2 leading-5 border-b border-white text-center tracking-wider placeholder:opacity-100 placeholder:visible placeholder:transition-all placeholder:duration-500 placeholder:text-white focus:placeholder:opacity-0 focus:placeholder:invisible"
				/>
				<button
					onClick={onClick}
					className="w-full text-center py-3 border border-white mt-5 text-white transition-all duration-500 hover:bg-orange-600 hover:border-orange-600"
				>
					확인
				</button>
			</div>
		</div>
	);
}
export default Login;
