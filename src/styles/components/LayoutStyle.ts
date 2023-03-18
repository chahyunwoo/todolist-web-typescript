import styled from 'styled-components';
import tw from 'twin.macro';

export const Section = styled.section`
	${tw`
      absolute
      p-10
			flex
			flex-wrap
  `}
	width: 90%;
	height: auto;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
`;
