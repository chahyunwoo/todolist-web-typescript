import styled from 'styled-components';
import tw from 'twin.macro';

export const Section = styled.section`
	${tw`
      w-3/4
      h-3/4
      absolute
      p-10
  `}
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
`;
