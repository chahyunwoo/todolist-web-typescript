import styled from 'styled-components';
import tw from 'twin.macro';

export const InfoBox = styled.article`
	${tw`
      text-white
      p-5
      flex
      flex-wrap
      relative
  `}
	border: 1px solid rgba(255, 255, 255, 0.5);
	width: 100%;
	border-radius: 5px;
	min-height: 25%;

	.spinner {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	@media screen and (max-width: 1280px) {
		height: auto;
		min-height: unset;
	}
`;

export const LeftBox = styled.div`
	width: 50%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	p {
		width: 100%;
		text-align: center;
	}

	div {
		width: 25%;
		height: auto;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media screen and (max-width: 1280px) {
		width: 100%;

		p {
			font-size: 13px;
		}

		div {
			width: 30%;
		}
	}
`;

export const RightBox = styled.ul`
	width: 50%;
	display: flex;
	flex-wrap: wrap;
	padding-left: 100px;

	li {
		width: 100%;
		font-size: 14px;
		letter-spacing: 1px;
	}

	@media screen and (max-width: 1280px) {
		width: 100%;
		padding-left: 0;

		li {
			margin-bottom: 10px;
			text-align: center;

			&:last-of-type {
				margin-bottom: 0;
			}
		}
	}
`;
