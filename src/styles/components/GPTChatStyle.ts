import styled from 'styled-components';
import tw from 'twin.macro';

export const GPTChatBox = styled.article`
	${tw`
      text-white
      p-5
      mt-10
  `}
	border: 1px solid rgba(255, 255, 255, 0.5);
	width: 100%;
	border-radius: 5px;
	height: calc(80% - 2.5rem);

	@media screen and (max-width: 1280px) {
		height: auto;
	}
`;
