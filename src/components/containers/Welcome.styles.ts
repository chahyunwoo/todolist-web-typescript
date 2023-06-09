import styled from 'styled-components';
import tw from 'twin.macro';

export const LeftBox = styled.div`
	@media screen and (max-width: 1280px) {
		width: 100%;
	}
`;

export const RightBox = styled.div`
	@media screen and (max-width: 1280px) {
		width: 100%;
		margin-top: 20px;
	}
`;

export const P = styled.p`
	${tw`
      mb-2
      text-lg
  `}

	@media screen and (max-width: 1280px) {
		${tw`
        text-base
    `}
	}
`;

export const Button = styled.button`
	${tw`
      text-xs
      text-sky-500
      tracking-wider
  `}
`;

export const Time = styled.p`
	${tw`
      text-sm
  `}

	@media screen and (max-width: 1280px) {
		font-size: 12px;
	}
`;
