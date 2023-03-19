import React from 'react';
import styled, { keyframes } from 'styled-components';

interface IProps {
	size: number;
	left: number;
	top: number;
	duration: number;
}

const twinkling = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Star = styled.div<IProps>`
	display: none;
	position: fixed;
	top: ${(props) => props.top}%;
	left: ${(props) => props.left}%;
	background: white;
	width: ${(props) => props.size}px;
	height: ${(props) => props.size}px;
	opacity: 0;
	border-radius: 50%;
	animation: ${twinkling} ${(props) => props.duration}s linear infinite;

	@media screen and (max-width: 1280px) {
		display: block;
	}
`;

const TwinklingStar: React.FC<IProps> = (props) => {
	return <Star {...props} />;
};

export default TwinklingStar;
