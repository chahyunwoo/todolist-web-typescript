import styled from 'styled-components';
import tw from 'twin.macro';

export const InfoBox = styled.article`
	${tw`
      text-white
      p-5
  `}
	border: 1px solid rgba(255, 255, 255, 0.5);
	width: 100%;
	border-radius: 5px;
	height: 20%;

	@media screen and (max-width: 1280px) {
		height: auto;
	}
`;
