import styled from 'styled-components';
import tw from 'twin.macro';

export const Section = styled.section`
	${tw`
      p-10
			flex
			flex-wrap
			relative
  `}
	z-index: 9;
	width: 90%;
	margin: 0 auto;
	opacity: 0;
	transform: translateY(50px);
	transition: 1s;

	&.on {
		opacity: 1;
		transform: translateY(0);
	}

	@media screen and (max-width: 1280px) {
		width: 100%;
		padding: 30px 20px;
		display: block;
		top: 0;
		left: 0;
		transform: unset;
	}
`;
