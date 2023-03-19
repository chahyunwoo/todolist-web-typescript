import styled from 'styled-components';
import tw from 'twin.macro';

export const TitleBox = styled.article`
	${tw`
      w-full
      text-white
      p-5
      flex
      items-center
  `}
	border: 1px solid rgba(255, 255, 255, 0.5);
	border-radius: 5px;
	justify-content: space-between;

	@media screen and (max-width: 1280px) {
		justify-content: flex-start;
		flex-wrap: wrap;
		padding: 10px;
	}
`;

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
