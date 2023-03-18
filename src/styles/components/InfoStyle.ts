import styled from 'styled-components';
import tw from 'twin.macro';

export const InfoBox = styled.article`
	${tw`
      text-white
      ml-10
      p-5
  `}
	border: 1px solid rgba(255, 255, 255, 0.5);
	width: calc(100% - 25% - 2.5rem);
	border-radius: 5px;
	min-height: 60vh;
`;
