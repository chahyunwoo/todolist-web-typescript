import styled from 'styled-components';
import tw from 'twin.macro';

export const Background = styled.section`
	${tw`
		w-full
		h-screen
		relative
		overflow-hidden
`}

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`;

export const Video = styled.video`
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: -1;
`;
