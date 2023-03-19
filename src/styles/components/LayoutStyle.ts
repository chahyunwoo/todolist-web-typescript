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

	@media screen and (max-width: 1280px) {
		width: 100%;
		padding: 30px 20px;
		display: block;
		top: 0;
		left: 0;
		transform: unset;
	}
`;
