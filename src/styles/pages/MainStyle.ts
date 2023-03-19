import styled from 'styled-components';
import tw from 'twin.macro';

export const SectionWrap = styled.div`
	${tw`
      w-full
      flex
      flex-wrap
      mt-10
  `}
	min-height: 40vh;
	max-height: 60vh;

	@media screen and (max-width: 1280px) {
		height: auto;
		margin-top: 30px;
		display: block;
		min-height: unset;
		max-height: unset;
	}
`;

export const LeftSection = styled.section`
	${tw`
      w-1/4
  `}

	@media screen and (max-width: 1280px) {
		width: 100%;
	}
`;

export const RightSection = styled.section`
	${tw`
      ml-10
  `}
	width: calc(75% - 2.5rem);
	border-radius: 5px;

	@media screen and (max-width: 1280px) {
		width: 100%;
		margin: 30px 0 0;
	}
`;
