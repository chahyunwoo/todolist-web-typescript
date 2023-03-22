import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';

export const LoginContainer = styled.div`
	${tw`
			my-0
			mx-auto
			text-center
			absolute
	`}
	width: 600px;
	height: 600px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
	transition: 0.5s;

	@media screen and (max-width: 1280px) {
		width: 100%;
		height: 100%;
	}
`;

const circleAnimation = keyframes`
0% {
	transform: rotate(0)
} 50% {
	transform: rotate(360deg)
} 100% {
	transform: rotate(0)
}
`;

export const Circle = styled.span`
	${tw`
			absolute
			top-0
			left-0
			w-full
			h-full
			border
			border-solid
			border-white
	`}
	border-radius: 40% 60% 65% 35% / 40% 45% 55% 60%;
	transition: 0.5s;

	&:nth-of-type(1) {
		animation: ${circleAnimation} 10s linear infinite;
	}

	&:nth-of-type(2) {
		animation: ${circleAnimation} 20s linear infinite;
		animation-direction: reverse;
	}

	&:nth-of-type(3) {
		animation: ${circleAnimation} 40s linear infinite;
	}

	@media screen and (max-width: 1280px) {
		display: none;
	}
`;

export const LoginBox = styled.div`
	${tw`
			absolute
			w-full
			flex
			flex-wrap
			justify-center
			items-center
			p-20
	`}
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const Input = styled.input`
	appearance: none;
	background-color: transparent;
	outline: none;
	color: #fff;
	cursor: pointer;
	width: 100%;
	padding: 0.5rem;
	line-height: 1.25;
	border-bottom: 1px solid #fff;
	text-align: center;
	letter-spacing: 0.025em;

	&:focus {
		&::placeholder {
			opacity: 0;
			visibility: hidden;
		}
	}

	&::placeholder {
		opacity: 1;
		visibility: visible;
		transition: 0.5s;
		color: #fff;
	}
`;

export const Button = styled.button`
	${tw`
			w-full
			text-center
			py-3
			border
			border-white
			mt-5
			text-white
			hover:bg-orange-600
			hover:border-orange-600
	`}
	transition: 0.5s
`;
